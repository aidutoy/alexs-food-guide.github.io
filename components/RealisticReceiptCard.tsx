import React, { useState, useMemo } from 'react';
import type { Restaurant } from '../types';
import { generateRealisticReceipt } from '../utils/receiptGenerator';

interface RealisticReceiptCardProps {
  restaurant: Restaurant;
  cityId?: string;
  compact?: boolean;
}

interface ParsedItem {
  index: number;
  originalName: string;
  cleanName: string;
  defaultQuantity: number;
  unitPrice: number;
  category?: string;
  isIncludedFree?: boolean;
}

export const RealisticReceiptCard: React.FC<RealisticReceiptCardProps> = ({
  restaurant,
  cityId,
  compact = false,
}) => {
  const receipt = generateRealisticReceipt(restaurant, cityId);

  // Parse items into clean names, initial quantities and unit prices
  const parsedItems: ParsedItem[] = useMemo(() => {
    if (!receipt) return [];
    return receipt.items.map((item, idx) => {
      let qty = item.quantity || 1;
      let cleanName = item.name;

      const match = item.name.match(/^(\d+)x\s+(.*)$/i);
      if (match) {
        qty = parseInt(match[1], 10);
        cleanName = match[2];
      }

      const isIncludedFree = item.price === 0;
      const unitPrice = qty > 0 ? item.price / qty : item.price;

      return {
        index: idx,
        originalName: item.name,
        cleanName,
        defaultQuantity: qty,
        unitPrice,
        category: item.category,
        isIncludedFree,
      };
    });
  }, [receipt]);

  // Initial party size detection (e.g. from "dinner for two")
  const defaultPartySize = useMemo(() => {
    const desc = (receipt?.typicalOrderDescription || '').toLowerCase();
    const note = (receipt?.taxOrServiceNote || '').toLowerCase();
    if (desc.includes('two') || note.includes('two') || desc.includes('sharing') || desc.includes('for 2')) {
      return 2;
    }
    return 1;
  }, [receipt]);

  // Calculator State
  const [activeTab, setActiveTab] = useState<'original' | 'calculator'>('original');
  const [quantities, setQuantities] = useState<Record<number, number>>(() => {
    const map: Record<number, number> = {};
    parsedItems.forEach(it => {
      map[it.index] = it.defaultQuantity;
    });
    return map;
  });
  const [enabledItems, setEnabledItems] = useState<Record<number, boolean>>(() => {
    const map: Record<number, boolean> = {};
    parsedItems.forEach(it => {
      map[it.index] = true;
    });
    return map;
  });
  const [partySize, setPartySize] = useState<number>(defaultPartySize);

  if (!receipt) {
    return null;
  }

  const currencySymbol = receipt.currencySymbol || '€';

  // Format currency helper
  const formatMoney = (val: number) => {
    if (currencySymbol === '€') {
      return `€${val.toFixed(2)}`;
    }
    return `${currencySymbol}${val % 1 === 0 ? val : val.toFixed(2)}`;
  };

  // Live calculator totals
  const calculatedTotal = useMemo(() => {
    let sum = 0;
    parsedItems.forEach(item => {
      if (enabledItems[item.index]) {
        const qty = quantities[item.index] ?? item.defaultQuantity;
        sum += qty * item.unitPrice;
      }
    });
    return Math.round(sum * 100) / 100;
  }, [parsedItems, enabledItems, quantities]);

  const perPersonCost = partySize > 0 ? calculatedTotal / partySize : calculatedTotal;
  const priceDifference = calculatedTotal - receipt.total;

  const handleToggleItem = (index: number) => {
    setEnabledItems(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleUpdateQuantity = (index: number, delta: number) => {
    setQuantities(prev => {
      const current = prev[index] ?? 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [index]: next };
    });
    // Ensure item is enabled when user increments
    if (!enabledItems[index] && delta > 0) {
      setEnabledItems(prev => ({ ...prev, [index]: true }));
    }
  };

  const handleResetToAlexOrder = () => {
    const resetQuantities: Record<number, number> = {};
    const resetEnabled: Record<number, boolean> = {};
    parsedItems.forEach(it => {
      resetQuantities[it.index] = it.defaultQuantity;
      resetEnabled[it.index] = true;
    });
    setQuantities(resetQuantities);
    setEnabledItems(resetEnabled);
    setPartySize(defaultPartySize);
  };

  return (
    <div className={`relative bg-zinc-950 text-zinc-200 rounded-2xl border border-white/15 shadow-2xl overflow-hidden font-mono text-xs ${compact ? 'p-4' : 'p-5 sm:p-6'}`}>
      {/* Subtle thermal receipt texture backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none"></div>

      {/* View Switcher Tabs (Original vs Calculator) */}
      {!compact && (
        <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-dashed border-white/20 relative z-10">
          <div className="flex items-center gap-1.5 p-1 bg-white/5 rounded-xl border border-white/10">
            <button
              onClick={() => setActiveTab('original')}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-mono transition-all font-medium ${
                activeTab === 'original'
                  ? 'bg-brand-primary text-white shadow-md font-bold'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              ★ Alex's Order
            </button>
            <button
              onClick={() => setActiveTab('calculator')}
              className={`px-3 py-1.5 rounded-lg text-[11px] font-mono transition-all font-medium flex items-center gap-1.5 ${
                activeTab === 'calculator'
                  ? 'bg-brand-primary text-white shadow-md font-bold'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              <span>🧮 Bill Calculator</span>
              {activeTab !== 'calculator' && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              )}
            </button>
          </div>

          <div className="text-right hidden sm:block">
            <span className="text-[10px] text-white/40 block">RECEIPT MODE</span>
            <span className="text-[11px] font-bold text-white/80">
              {activeTab === 'original' ? 'Exact Snapshot' : 'Custom Estimate'}
            </span>
          </div>
        </div>
      )}

      {/* Header Info */}
      <div className="flex justify-between items-start pb-3 border-b border-dashed border-white/20 mb-3 relative z-10">
        <div>
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[10px] tracking-widest uppercase text-brand-primary font-bold block">
              {activeTab === 'calculator' ? '★ Custom Bill' : '★ Example Receipt'}
            </span>
            <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-brand-primary/20 text-brand-primary font-mono font-medium">
              {activeTab === 'calculator' ? 'Customized' : "Alex's Order"}
            </span>
          </div>
          <h4 className="text-sm sm:text-base font-bold text-white font-mono tracking-tight">
            {receipt.restaurantName}
          </h4>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-white/50 block">
            {activeTab === 'calculator' ? 'YOUR ESTIMATE' : 'SAMPLE TOTAL'}
          </span>
          <span className="text-xs sm:text-sm font-bold text-emerald-400 font-mono">
            {activeTab === 'calculator' ? formatMoney(calculatedTotal) : receipt.formattedTotal}
          </span>
        </div>
      </div>

      {/* Meta Bar */}
      <div className="flex items-center justify-between text-[11px] text-white/40 pb-2.5 mb-2.5 border-b border-white/10 relative z-10">
        <span className="truncate mr-2">
          {activeTab === 'calculator' 
            ? `Order for ${partySize} ${partySize === 1 ? 'person' : 'people'}` 
            : `Sample: ${receipt.typicalOrderDescription}`}
        </span>
        {receipt.timestampHint && <span className="shrink-0">{receipt.timestampHint}</span>}
      </div>

      {/* MODE 1: ORIGINAL ALEX'S ORDER */}
      {activeTab === 'original' && (
        <>
          <div className="space-y-2 py-1">
            {receipt.items.map((item, idx) => (
              <div key={idx} className="flex items-start justify-between gap-3 text-[11px] sm:text-xs">
                <span className="text-zinc-300 font-mono leading-tight">
                  {item.name}
                </span>
                <span className="text-white font-semibold font-mono shrink-0">
                  {item.formattedPrice}
                </span>
              </div>
            ))}
          </div>

          {/* Quick CTA to Calculator */}
          {!compact && (
            <div className="mt-3 pt-2.5 border-t border-white/10 flex justify-between items-center text-[11px]">
              <span className="text-white/40">Want to test your own group order?</span>
              <button
                onClick={() => setActiveTab('calculator')}
                className="text-brand-primary hover:text-brand-primary/80 font-bold underline transition-colors"
              >
                Open Calculator ➔
              </button>
            </div>
          )}
        </>
      )}

      {/* MODE 2: CUSTOM CALCULATOR */}
      {activeTab === 'calculator' && (
        <div className="space-y-3 py-1 relative z-10">
          {/* Party size splitter */}
          <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-2">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-white/60 block font-bold">
                Party Size
              </span>
              <span className="text-[11px] text-white/40">Split the bill evenly</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5, 6].map(num => (
                <button
                  key={num}
                  onClick={() => setPartySize(num)}
                  className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all ${
                    partySize === num
                      ? 'bg-brand-primary text-white shadow-md'
                      : 'bg-white/5 text-white/60 hover:text-white hover:bg-white/10'
                  }`}
                  title={`${num} ${num === 1 ? 'person' : 'people'}`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Line Items */}
          <div className="space-y-2">
            {parsedItems.map(item => {
              const isEnabled = enabledItems[item.index] ?? true;
              const qty = quantities[item.index] ?? item.defaultQuantity;
              const lineTotal = qty * item.unitPrice;

              return (
                <div
                  key={item.index}
                  className={`p-2 rounded-xl border transition-all ${
                    isEnabled
                      ? 'bg-white/[0.03] border-white/10'
                      : 'bg-black/30 border-white/5 opacity-40'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    {/* Toggle Checkbox & Item Name */}
                    <button
                      onClick={() => handleToggleItem(item.index)}
                      className="flex items-center gap-2 text-left flex-1 min-w-0"
                    >
                      <span
                        className={`w-4 h-4 rounded flex items-center justify-center text-[10px] shrink-0 border transition-colors ${
                          isEnabled
                            ? 'bg-brand-primary border-brand-primary text-white font-bold'
                            : 'border-white/30 text-transparent'
                        }`}
                      >
                        ✓
                      </span>
                      <span
                        className={`truncate font-mono text-[11px] sm:text-xs ${
                          isEnabled ? 'text-zinc-200' : 'line-through text-zinc-500'
                        }`}
                      >
                        {item.cleanName}
                      </span>
                    </button>

                    {/* Stepper & Line Price */}
                    <div className="flex items-center gap-2 shrink-0">
                      {isEnabled && !item.isIncludedFree && (
                        <div className="flex items-center bg-zinc-900 border border-white/15 rounded-lg overflow-hidden">
                          <button
                            onClick={() => handleUpdateQuantity(item.index, -1)}
                            disabled={qty <= 1}
                            className="px-2 py-0.5 text-white/70 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent"
                            title="Decrease quantity"
                          >
                            -
                          </button>
                          <span className="px-1.5 text-[11px] font-bold text-white min-w-[18px] text-center">
                            {qty}
                          </span>
                          <button
                            onClick={() => handleUpdateQuantity(item.index, 1)}
                            className="px-2 py-0.5 text-white/70 hover:text-white hover:bg-white/10"
                            title="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      )}

                      <span className="font-semibold text-white min-w-[50px] text-right font-mono text-[11px] sm:text-xs">
                        {item.isIncludedFree
                          ? 'Included'
                          : isEnabled
                            ? formatMoney(lineTotal)
                            : formatMoney(0)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reset link */}
          <div className="flex justify-end pt-1">
            <button
              onClick={handleResetToAlexOrder}
              className="text-[10px] text-white/50 hover:text-brand-primary underline transition-colors font-mono"
            >
              ↺ Reset to Alex’s original order
            </button>
          </div>
        </div>
      )}

      {/* Dashed separator */}
      <div className="my-3 border-t border-dashed border-white/20"></div>

      {/* Total Section */}
      <div className="space-y-1.5 pt-1 relative z-10">
        <div className="flex items-center justify-between text-xs text-white/60 font-mono">
          <span>Subtotal</span>
          <span>{activeTab === 'calculator' ? formatMoney(calculatedTotal) : receipt.formattedTotal}</span>
        </div>

        {/* Per person breakdown if in calculator mode */}
        {activeTab === 'calculator' && partySize > 1 && (
          <div className="flex items-center justify-between text-xs text-emerald-400 font-mono bg-emerald-500/10 p-2 rounded-lg border border-emerald-500/20">
            <span>Split for {partySize} guests:</span>
            <span className="font-bold text-sm">
              {formatMoney(perPersonCost)} <span className="text-[10px] font-normal text-emerald-300">/ person</span>
            </span>
          </div>
        )}

        {/* Difference badge in calculator mode */}
        {activeTab === 'calculator' && Math.abs(priceDifference) > 0.05 && (
          <div className="flex items-center justify-between text-[11px] text-white/40 font-mono pt-0.5">
            <span>Diff vs Alex's order:</span>
            <span className={priceDifference > 0 ? 'text-amber-400' : 'text-emerald-400'}>
              {priceDifference > 0 ? `+${formatMoney(priceDifference)}` : `-${formatMoney(Math.abs(priceDifference))}`}
            </span>
          </div>
        )}

        <div className="flex items-baseline justify-between text-sm sm:text-base font-bold text-white font-mono pt-1">
          <span className="tracking-wider">
            {activeTab === 'calculator' ? 'ESTIMATED BILL' : 'EXAMPLE BILL'}
          </span>
          <div className="text-right">
            <span className="text-brand-primary text-base sm:text-lg">
              {activeTab === 'calculator' ? formatMoney(calculatedTotal) : receipt.formattedTotal}
            </span>
            {receipt.secondaryCurrencyTotal && activeTab === 'original' && (
              <span className="text-[11px] text-emerald-400 block font-normal">
                ({receipt.secondaryCurrencyTotal})
              </span>
            )}
          </div>
        </div>

        {receipt.taxOrServiceNote && (
          <p className="text-[10px] text-white/40 pt-1 font-mono leading-relaxed italic">
            * {receipt.taxOrServiceNote}
          </p>
        )}
      </div>

      {/* Serrated receipt bottom border decoration */}
      <div className="absolute -bottom-1 left-0 right-0 h-2 flex overflow-hidden opacity-30 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 bg-zinc-900 transform rotate-45 shrink-0 -translate-y-1.5"
          ></div>
        ))}
      </div>
    </div>
  );
};

export const ExampleReceiptCard = RealisticReceiptCard;
export default RealisticReceiptCard;
