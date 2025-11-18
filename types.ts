export interface Rating {
  food: number;
  drinks: number;
  service: number;
  price: number; 
}

export interface DietaryInfo {
  celiac: string;
  lactose: string;
  vegan: string;
}

export interface ImageWithCaption {
  url: string;
  caption: string;
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
  alexsTip?: string;
  dietary?: DietaryInfo;
  websiteUrl?: string;
  instagramUrl?: string;
}

export interface City {
  id: string;
  name: string;
  image: string;
  restaurants: Restaurant[];
  // FIX: Added coordinates to the City interface for use in the Map component.
  coordinates: {
    lat: number;
    lon: number;
  };
}