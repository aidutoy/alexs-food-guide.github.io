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
  isCustom?: boolean;
}

// Backward compatibility alias
export type RealisticReceipt = ExampleReceipt;

/**
 * Deterministic hash generator based on restaurant ID so receipts remain stable across renders.
 */
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Generates an example receipt breakdown tailored to the restaurant's
 * cuisine, price tier, and destination city, or uses custom prices defined in code.
 */
export function generateExampleReceipt(restaurant: Restaurant, cityId?: string): ExampleReceipt {
  const seed = hashString(restaurant.id + (restaurant.name || ''));
  const priceTier = (restaurant.ratings?.price || 2) as 1 | 2 | 3;
  const cuisineLower = (restaurant.cuisine || '').toLowerCase();
  const nameLower = (restaurant.name || '').toLowerCase();

  const isEgypt = 
    cityId === 'cairo' || 
    cityId === 'giza' || 
    cityId === 'luxor' || 
    cityId === 'hurghada' || 
    cuisineLower.includes('egypt') || 
    cuisineLower.includes('middle east');

  // Check if restaurant has custom prices defined directly in code
  if (restaurant.exampleReceipt && restaurant.exampleReceipt.items && restaurant.exampleReceipt.items.length > 0) {
    const custom = restaurant.exampleReceipt;
    const currencySymbol = custom.currencySymbol || (isEgypt ? 'EGP ' : '€');
    const currency = custom.currency || (isEgypt ? 'Egyptian Pound' : 'EUR');
    
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
      taxOrServiceNote: custom.taxOrServiceNote || (isEgypt ? 'Includes standard 12% service charge & 14% VAT' : 'Inclusive of VAT. Normal rounding/tip: ~5-10%'),
      total: subtotal,
      formattedTotal,
      secondaryCurrencyTotal,
      typicalOrderDescription: custom.typicalOrderDescription || 'Sample Order (Alex’s Selection)',
      priceTier,
      timestampHint: restaurant.lastVisited ? `Sampled: ${restaurant.lastVisited}` : undefined,
      isCustom: true,
    };
  }

  const currencySymbol = isEgypt ? 'EGP ' : '€';
  const currency = isEgypt ? 'Egyptian Pound' : 'EUR';

  let items: ReceiptLineItem[] = [];
  let typicalOrderDescription = '1 Main + 1 Side/Starter + 1 Drink';

  if (isEgypt) {
    // EGP Pricing (Approx exchange: ~50 EGP per 1 EUR)
    if (priceTier === 1) {
      // Casual / Street Food / Local Eatery
      if (cuisineLower.includes('koshary') || nameLower.includes('koshary') || nameLower.includes('abou tarek')) {
        items = [
          { name: '1x Koshary Special Bowl (Chickpeas, Crispy Onions)', price: 75, formattedPrice: 'EGP 75', category: 'main' },
          { name: '1x Extra Spicy Da’ah & Tomato Salsa', price: 20, formattedPrice: 'EGP 20', category: 'side' },
          { name: '1x Fresh Lemon-Mint Juice', price: 35, formattedPrice: 'EGP 35', category: 'drink' },
          { name: '1x Roz Bel Laban (Egyptian Rice Pudding)', price: 30, formattedPrice: 'EGP 30', category: 'dessert' },
        ];
        typicalOrderDescription = 'Koshary Special + Drink + Rice Pudding';
      } else {
        items = [
          { name: '1x Taameya (Egyptian Falafel) Platter & Baladi Bread', price: 65, formattedPrice: 'EGP 65', category: 'main' },
          { name: '1x Tahini Dip & Pickled Eggplant', price: 25, formattedPrice: 'EGP 25', category: 'side' },
          { name: '1x Fresh Mango or Sugarcane Juice', price: 40, formattedPrice: 'EGP 40', category: 'drink' },
        ];
        typicalOrderDescription = 'Egyptian Platter + Tahini + Fresh Juice';
      }
    } else if (priceTier === 2) {
      // Sit-down traditional grill or seafood
      items = [
        { name: '1x Mixed Charcoal Grill (Kofta & Shish Tawook)', price: 320, formattedPrice: 'EGP 320', category: 'main' },
        { name: '1x Fresh Baba Ghanoush & Mezze Platter', price: 85, formattedPrice: 'EGP 85', category: 'starter' },
        { name: '1x Karkadeh (Iced Hibiscus Tea)', price: 45, formattedPrice: 'EGP 45', category: 'drink' },
        { name: '1x Om Ali with Nuts & Cream', price: 75, formattedPrice: 'EGP 75', category: 'dessert' },
      ];
      typicalOrderDescription = 'Mixed Charcoal Grill + Mezze + Hibiscus + Om Ali';
    } else {
      // Tier 3: Upscale hotel or Nile-view dining
      items = [
        { name: '1x Red Sea King Prawns or Veal Tagine', price: 750, formattedPrice: 'EGP 750', category: 'main' },
        { name: '1x Warm Egyptian Mezze Trio & Fresh Bread', price: 210, formattedPrice: 'EGP 210', category: 'starter' },
        { name: '1x Imported Mineral Water / Artisan Cocktail', price: 140, formattedPrice: 'EGP 140', category: 'drink' },
        { name: '1x Pistachio Konafa with Ashta Cream', price: 160, formattedPrice: 'EGP 160', category: 'dessert' },
      ];
      typicalOrderDescription = 'Nile Seafood/Tagine + Hot Mezze + Artisan Dessert';
    }

    const subtotal = items.reduce((acc, it) => acc + it.price, 0);
    const eurEquivalent = (subtotal / 50).toFixed(2);

    return {
      restaurantId: restaurant.id,
      restaurantName: restaurant.name,
      cityId,
      currency,
      currencySymbol,
      items,
      subtotal,
      taxOrServiceNote: 'Includes standard 12% service charge & 14% VAT',
      total: subtotal,
      formattedTotal: `EGP ${subtotal}`,
      secondaryCurrencyTotal: `~€${eurEquivalent}`,
      typicalOrderDescription,
      priceTier,
      timestampHint: restaurant.lastVisited ? `Tasted in ${restaurant.lastVisited}` : undefined,
    };
  }

  // European Cities (€ EUR)
  if (priceTier === 1) {
    // € Tier: Casual, Bakery, Street food, Fast casual
    if (cuisineLower.includes('burger') || nameLower.includes('burger') || nameLower.includes('slap')) {
      const burgerPrice = 9.50 + (seed % 4) * 0.5;
      const friesPrice = 4.20;
      const drinkPrice = 3.60;
      items = [
        { name: '1x Signature Smashed Burger', price: burgerPrice, formattedPrice: `€${burgerPrice.toFixed(2)}`, category: 'main' },
        { name: '1x Rosemary / House Cut Fries', price: friesPrice, formattedPrice: `€${friesPrice.toFixed(2)}`, category: 'side' },
        { name: '1x Craft Soda or Local Cold Drink', price: drinkPrice, formattedPrice: `€${drinkPrice.toFixed(2)}`, category: 'drink' },
      ];
      typicalOrderDescription = '1 Craft Smash Burger + Fries + Drink';
    } else if (cuisineLower.includes('portuguese') || cityId === 'lisbon' || cuisineLower.includes('bakery') || cuisineLower.includes('café') || cuisineLower.includes('cafe')) {
      items = [
        { name: '1x Daily Prato do Dia / Bifana / Toast', price: 7.50, formattedPrice: '€7.50', category: 'main' },
        { name: '1x Traditional Pastel de Nata', price: 1.60, formattedPrice: '€1.60', category: 'dessert' },
        { name: '1x Bica (Portuguese Espresso) or Imperial', price: 1.80, formattedPrice: '€1.80', category: 'drink' },
      ];
      typicalOrderDescription = '1 Prato do Dia + Pastel de Nata + Coffee';
    } else {
      // General budget casual
      items = [
        { name: '1x House Specialty Bowl / Sandwich / Dish', price: 8.90, formattedPrice: '€8.90', category: 'main' },
        { name: '1x Side Salad or Crispy Bites', price: 3.50, formattedPrice: '€3.50', category: 'side' },
        { name: '1x San Pellegrino / Soft Drink', price: 3.20, formattedPrice: '€3.20', category: 'drink' },
      ];
      typicalOrderDescription = '1 Specialty Main + Side + Cold Beverage';
    }
  } else if (priceTier === 2) {
    // €€ Tier: Authentic bistros, ramen, sushi, Neapolitan pizza, tapas
    if (cuisineLower.includes('pizza') || cuisineLower.includes('italian')) {
      const pizzaPrice = 12.50 + (seed % 5);
      const drinkPrice = 4.50;
      const dessertPrice = 6.00;
      items = [
        { name: '1x Authentic Neapolitan Wood-Fired Pizza', price: pizzaPrice, formattedPrice: `€${pizzaPrice.toFixed(2)}`, category: 'main' },
        { name: '1x Italian Craft Beer or Moretti (0.33l)', price: drinkPrice, formattedPrice: `€${drinkPrice.toFixed(2)}`, category: 'drink' },
        { name: '1x House Tiramisù or Espresso', price: dessertPrice, formattedPrice: `€${dessertPrice.toFixed(2)}`, category: 'dessert' },
      ];
      typicalOrderDescription = '1 Wood-Fired Pizza + Italian Beer + Tiramisù';
    } else if (cuisineLower.includes('japanese') || cuisineLower.includes('sushi') || nameLower.includes('okinii') || nameLower.includes('umi') || nameLower.includes('sushiki')) {
      const isBuffet = nameLower.includes('okinii') || nameLower.includes('umi');
      if (isBuffet) {
        items = [
          { name: '1x Premium All-You-Can-Eat Tablet Menu', price: 31.90, formattedPrice: '€31.90', category: 'main' },
          { name: '1x Asahi Draft Beer or Japanese Green Tea', price: 4.80, formattedPrice: '€4.80', category: 'drink' },
          { name: '1x Matcha Mochi or Sesame Ice Cream', price: 3.90, formattedPrice: '€3.90', category: 'dessert' },
        ];
        typicalOrderDescription = 'Full All-You-Can-Eat Menu + Drink + Mochi';
      } else {
        items = [
          { name: '1x Chef’s Special Nigiri & Maki Combo (16 pcs)', price: 23.50, formattedPrice: '€23.50', category: 'main' },
          { name: '1x Warm Edamame with Sea Salt', price: 4.90, formattedPrice: '€4.90', category: 'starter' },
          { name: '1x Japanese Kirin Beer or Yuzu Soda', price: 4.50, formattedPrice: '€4.50', category: 'drink' },
        ];
        typicalOrderDescription = '16-pc Nigiri & Roll Set + Edamame + Drink';
      }
    } else if (cuisineLower.includes('spanish') || cuisineLower.includes('tapas') || cityId === 'mallorca') {
      items = [
        { name: '3x Tapas Selection (Patatas Bravas, Pimientos, Gambas)', price: 18.50, formattedPrice: '€18.50', category: 'main' },
        { name: '1x Pan con Tomate & Jamón Ibérico', price: 6.80, formattedPrice: '€6.80', category: 'starter' },
        { name: '1x Glass of Local Rioja or Cava', price: 5.20, formattedPrice: '€5.20', category: 'drink' },
      ];
      typicalOrderDescription = '3 Curated Tapas + Pan con Tomate + Wine';
    } else if (cityId === 'bruges' || cuisineLower.includes('belgian')) {
      items = [
        { name: '1x Flemish Beef Stew (Carbonnade) or Mussels', price: 21.50, formattedPrice: '€21.50', category: 'main' },
        { name: '1x Authentic Belgian Fries & Homemade Mayo', price: 5.00, formattedPrice: '€5.00', category: 'side' },
        { name: '1x Trappist Belgian Abbey Ale (Brugse Zot / Chimay)', price: 5.80, formattedPrice: '€5.80', category: 'drink' },
      ];
      typicalOrderDescription = 'Traditional Flemish Stew + Fries + Trappist Ale';
    } else {
      // General €€ bistro
      items = [
        { name: '1x House Signature Main Course', price: 18.50, formattedPrice: '€18.50', category: 'main' },
        { name: '1x Seasonal Appetizer or Fresh Starter Salad', price: 6.50, formattedPrice: '€6.50', category: 'starter' },
        { name: '1x Wine by the Glass or Local Draught', price: 4.80, formattedPrice: '€4.80', category: 'drink' },
      ];
      typicalOrderDescription = '1 Signature Main + Starter + Wine/Drink';
    }
  } else {
    // €€€ Tier: Fine dining, Prime steakhouse, High-end sushi
    items = [
      { name: '1x Dry-Aged Prime Steak or Tasting Main', price: 42.00, formattedPrice: '€42.00', category: 'main' },
      { name: '1x Gourmet Starter (Tartare, Carpaccio, or Scallops)', price: 15.50, formattedPrice: '€15.50', category: 'starter' },
      { name: '1x Sommelier Selected Red Wine or Craft Cocktail', price: 9.50, formattedPrice: '€9.50', category: 'drink' },
      { name: '1x Artisanal Patisserie or Cheese Plate', price: 9.00, formattedPrice: '€9.00', category: 'dessert' },
    ];
    typicalOrderDescription = 'Gourmet 3-Course Dinner with Wine';
  }

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);

  return {
    restaurantId: restaurant.id,
    restaurantName: restaurant.name,
    cityId,
    currency,
    currencySymbol,
    items,
    subtotal: Math.round(subtotal * 100) / 100,
    taxOrServiceNote: 'Inclusive of VAT. Normal rounding/tip: ~5-10%',
    total: Math.round(subtotal * 100) / 100,
    formattedTotal: `€${subtotal.toFixed(2)}`,
    typicalOrderDescription,
    priceTier,
    timestampHint: restaurant.lastVisited ? `Tasted: ${restaurant.lastVisited}` : undefined,
  };
}

// Backward compatibility alias
export const generateRealisticReceipt = generateExampleReceipt;

