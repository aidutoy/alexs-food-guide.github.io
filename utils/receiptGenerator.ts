import type { Restaurant } from '../types';

export interface ReceiptLineItem {
  name: string;
  quantity?: number;
  price: number;
  formattedPrice: string;
  category?: 'starter' | 'main' | 'side' | 'drink' | 'dessert' | 'special';
}

export interface ExampleReceipt {
  restaurantId: string;
  restaurantName: string;
  cityId?: string;
  currency: string;
  currencySymbol: string;
  items: ReceiptLineItem[];
  subtotal: number;
  taxOrServiceNote?: string;
  total: number;
  formattedTotal: string;
  secondaryCurrencyTotal?: string; // e.g. "~€4.50" for Egyptian Pound locations
  typicalOrderDescription: string;
  priceTier: 1 | 2 | 3;
  timestampHint?: string;
  isCustom: boolean;
}

// Backward compatibility alias
export type RealisticReceipt = ExampleReceipt;

/**
 * Checks whether a restaurant has a manual example receipt entered in code.
 * Automatic/fallback receipts are disabled — only restaurants with explicit
 * `exampleReceipt.items` will have a receipt.
 */
export function hasExampleReceipt(restaurant?: Restaurant | null): boolean {
  return Boolean(
    restaurant?.exampleReceipt &&
    restaurant.exampleReceipt.items &&
    restaurant.exampleReceipt.items.length > 0
  );
}

/**
 * Returns the manual example receipt configured for a restaurant.
 * If no manual receipt is configured, returns null (automatic receipts removed).
 */
export function generateExampleReceipt(restaurant: Restaurant, cityId?: string): ExampleReceipt | null {
  if (!hasExampleReceipt(restaurant)) {
    return null;
  }

  const custom = restaurant.exampleReceipt!;
  const cuisineLower = (restaurant.cuisine || '').toLowerCase();
  const isEgypt = 
    cityId === 'cairo' || 
    cityId === 'giza' || 
    cityId === 'luxor' || 
    cityId === 'hurghada' || 
    cuisineLower.includes('egypt') || 
    cuisineLower.includes('middle east');

  const currencySymbol = custom.currencySymbol || (isEgypt ? 'EGP ' : '€');
  const currency = custom.currency || (isEgypt ? 'Egyptian Pound' : 'EUR');
  const priceTier = (restaurant.ratings?.price || 2) as 1 | 2 | 3;

  const items: ReceiptLineItem[] = custom.items.map(item => ({
    name: item.name,
    quantity: item.quantity,
    price: item.price,
    formattedPrice: item.formattedPrice || (currencySymbol === '€' 
      ? `€${item.price.toFixed(2)}` 
      : `${currencySymbol}${item.price % 1 === 0 ? item.price : item.price.toFixed(2)}`),
    category: item.category || 'main'
  }));

  const calculatedSubtotal = items.reduce((acc, it) => acc + (it.price || 0), 0);
  const subtotal = custom.total !== undefined ? custom.total : Math.round(calculatedSubtotal * 100) / 100;
  const formattedTotal = custom.formattedTotal || (currencySymbol === '€' ? `€${subtotal.toFixed(2)}` : `${currencySymbol}${subtotal}`);
  
  let secondaryCurrencyTotal = custom.secondaryCurrencyTotal;
  if (!secondaryCurrencyTotal && isEgypt) {
    secondaryCurrencyTotal = `~€${(subtotal / 50).toFixed(2)}`;
  }

  return {
    restaurantId: restaurant.id,
    restaurantName: restaurant.name,
    cityId,
    currency,
    currencySymbol,
    items,
    subtotal,
    taxOrServiceNote: custom.taxOrServiceNote,
    total: subtotal,
    formattedTotal,
    secondaryCurrencyTotal,
    typicalOrderDescription: custom.typicalOrderDescription || 'Sample Order (Alex’s Selection)',
    priceTier,
    timestampHint: restaurant.lastVisited ? `Sampled: ${restaurant.lastVisited}` : undefined,
    isCustom: true,
  };
}

// Backward compatibility alias
export const generateRealisticReceipt = generateExampleReceipt;
