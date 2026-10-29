export interface Rating {
  food: number;
  drinks: number;
  service: number;
  price: number; 
}

export interface DietaryInfo {
  celiac: string;
  lactose: string;
  vegetarian: string;
  vegan: string;
}

export interface ImageWithCaption {
  url: string;
  caption: string;
}

export interface CustomReceiptItem {
  name: string;
  price: number;
  quantity?: number;
  formattedPrice?: string;
  category?: 'starter' | 'main' | 'side' | 'drink' | 'dessert' | 'special';
}

export interface CustomReceipt {
  items?: CustomReceiptItem[];
  currencySymbol?: string;
  currency?: string;
  total?: number;
  formattedTotal?: string;
  typicalOrderDescription?: string;
  taxOrServiceNote?: string;
  secondaryCurrencyTotal?: string;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  mainImage: ImageWithCaption;
  images: ImageWithCaption[];
  ratings: Rating;
  mapEmbedUrl: string;
  cuisine: string;
  neighborhood?: string;
  lastVisited?: string;
  coordinates?: {
    lat: number;
    lon: number;
  };
  alexsTip?: string;
  quickVerdict?: string;
  dietary?: DietaryInfo;
  websiteUrl?: string;
  instagramUrl?: string;
  tags?: string[];
  openingHours?: string[];
  exampleReceipt?: CustomReceipt;
}

export interface City {
  id: string;
  name: string;
  image: string;
  restaurants: Restaurant[];
  coordinates: {
    lat: number;
    lon: number;
  };
}
