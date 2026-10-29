import React from 'react';
import type { Restaurant } from '../types';
import { generateRealisticReceipt } from '../utils/receiptGenerator';

interface RealisticReceiptCardProps {
  restaurant: Restaurant;
  cityId?: string;
  compact?: boolean;
}

export const RealisticReceiptCard: React.FC<RealisticReceiptCardProps> = ({
  restaurant,
  cityId,
  compact = false,
}) => {
  const receipt = generateRealisticReceipt(restaurant, cityId);

  return (
    <div className={`relative bg-zinc-950 text-zinc-200 rounded-2xl border border-white/15 shadow-2xl overflow-hidden font-mono text-xs ${compact ? 'p-4' : 'p-5 sm:p-6'}`}>
      {/* Subtle thermal receipt texture backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none"></div>

      {/* Top perforated edge simulation */}
      <div className="flex justify-between items-center pb-3 border-b border-dashed border-white/20 mb-3">
        <div>
          <div className="flex items-center gap-1.5 mb-0.5">
            <span className="text-[10px] tracking-widest uppercase text-brand-primary font-bold block">
              ★ Example Receipt
            </span>
            {receipt.isCustom && (
              <span className="text-[9px] uppercase px-1.5 py-0.2 rounded bg-brand-primary/20 text-brand-primary font-mono font-medium">
                Alex's Order
              </span>
            )}
          </div>
          <h4 className="text-sm sm:text-base font-bold text-white font-mono tracking-tight">
            {receipt.restaurantName}
          </h4>
        </div>
        <div className="text-right">
          <span className="text-[10px] text-white/50 block">SAMPLE TOTAL</span>
          <span className="text-xs font-bold text-emerald-400">
            {receipt.formattedTotal}
          </span>
        </div>
      </div>

      {/* Meta Bar */}
      <div className="flex items-center justify-between text-[11px] text-white/40 pb-2.5 mb-2.5 border-b border-white/10">
        <span>Sample: {receipt.typicalOrderDescription}</span>
        {receipt.timestampHint && <span>{receipt.timestampHint}</span>}
      </div>

      {/* Line Items */}
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

      {/* Dashed separator */}
      <div className="my-3 border-t border-dashed border-white/20"></div>

      {/* Total Section */}
      <div className="space-y-1.5 pt-1">
        <div className="flex items-center justify-between text-xs text-white/60 font-mono">
          <span>Subtotal</span>
          <span>{receipt.formattedTotal}</span>
        </div>

        <div className="flex items-baseline justify-between text-sm sm:text-base font-bold text-white font-mono pt-1">
          <span className="tracking-wider">EXAMPLE BILL</span>
          <div className="text-right">
            <span className="text-brand-primary text-base sm:text-lg">
              {receipt.formattedTotal}
            </span>
            {receipt.secondaryCurrencyTotal && (
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
      <div className="absolute -bottom-1 left-0 right-0 h-2 flex overflow-hidden opacity-30">
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
