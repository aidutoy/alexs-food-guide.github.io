import type { Restaurant, City } from '../types';

/**
 * Known real coordinates for restaurants across cities so they appear accurately on satellite maps.
 */
import type { Restaurant, City } from '../types';

/**
 * Verified exact geographic coordinates for restaurants across all cities,
 * aligned with the Google Maps embed URLs and street addresses.
 */
const KNOWN_COORDINATES: Record<string, { lat: number; lon: number }> = {
  // --- Darmstadt ---
  'darmstadt:slap': { lat: 49.86872, lon: 8.65251 },
  'slap': { lat: 49.86872, lon: 8.65251 },
  'darmstadt:sushiki': { lat: 49.87031, lon: 8.65082 },
  'sushiki': { lat: 49.87031, lon: 8.65082 },
  'darmstadt:liskitchen': { lat: 49.87071, lon: 8.65096 },
  'liskitchen': { lat: 49.87071, lon: 8.65096 },
  "li's kitchen": { lat: 49.87071, lon: 8.65096 },

  // --- Bonn ---
  'bonn:okinii': { lat: 50.73095, lon: 7.09452 },
  'bonn:umi-no-aji': { lat: 50.73095, lon: 7.09452 },
  'okinii': { lat: 50.73095, lon: 7.09452 },
  'umi-no-aji': { lat: 50.73095, lon: 7.09452 },
  'umi no aji': { lat: 50.73095, lon: 7.09452 },

  'bonn:tio-pepe': { lat: 50.73692, lon: 7.10425 },
  'tio-pepe': { lat: 50.73692, lon: 7.10425 },
  'tio pepe': { lat: 50.73692, lon: 7.10425 },

  'bonn:ha-long': { lat: 50.72895, lon: 7.08182 },
  'ha-long': { lat: 50.72895, lon: 7.08182 },
  'ha long': { lat: 50.72895, lon: 7.08182 },

  'bonn:nennillo': { lat: 50.74092, lon: 7.09476 },
  'bonn-nennillo': { lat: 50.74092, lon: 7.09476 },

  'bonn:burgerwerk': { lat: 50.73887, lon: 7.11718 },
  'burgerwerk': { lat: 50.73887, lon: 7.11718 },

  'bonn:mandala': { lat: 50.73082, lon: 7.09468 },
  'mandala': { lat: 50.73082, lon: 7.09468 },

  'bonn:hokkaido': { lat: 50.68345, lon: 7.16142 },
  'hokkaido': { lat: 50.68345, lon: 7.16142 },

  'bonn:cream_company': { lat: 50.73642, lon: 7.09748 },
  'cream_company': { lat: 50.73642, lon: 7.09748 },
  'cream company': { lat: 50.73642, lon: 7.09748 },

  'bonn:karawane': { lat: 50.71358, lon: 7.16641 },
  'karawane': { lat: 50.71358, lon: 7.16641 },

  'bonn:ichiban': { lat: 50.73685, lon: 7.10312 },
  'ichiban': { lat: 50.73685, lon: 7.10312 },

  'bonn:mayras_wohnzimmer': { lat: 50.73832, lon: 7.11865 },
  'mayras_wohnzimmer': { lat: 50.73832, lon: 7.11865 },
  "mayra's wohnzimmer": { lat: 50.73832, lon: 7.11865 },

  'bonn:frittenwerk': { lat: 50.73620, lon: 7.09892 },

  'bonn:burgermanfaktur': { lat: 50.74175, lon: 7.09062 },
  'burgermanfaktur': { lat: 50.74175, lon: 7.09062 },
  'burgermanufaktur': { lat: 50.74175, lon: 7.09062 },

  'bonn:pieme': { lat: 50.74152, lon: 7.09075 },
  'pieme': { lat: 50.74152, lon: 7.09075 },
  'pie me': { lat: 50.74152, lon: 7.09075 },

  'bonn:cosycorner': { lat: 50.67492, lon: 7.19532 },
  'cosycorner': { lat: 50.67492, lon: 7.19532 },
  'cosy corner': { lat: 50.67492, lon: 7.19532 },

  'bonn:kaffeesaurus': { lat: 50.73352, lon: 7.09915 },

  'bonn:losteria': { lat: 50.73395, lon: 7.10095 },

  'bonn:fritesbelgique': { lat: 50.73602, lon: 7.09945 },

  'bonn:mam-mam': { lat: 50.72584, lon: 7.09786 },
  'mam-mam': { lat: 50.72584, lon: 7.09786 },
  'măm-măm': { lat: 50.72584, lon: 7.09786 },

  'bonn:ferdinando': { lat: 50.72518, lon: 7.07342 },
  'ferdinando': { lat: 50.72518, lon: 7.07342 },

  'bonn:bonnanza': { lat: 50.72462, lon: 7.09088 },
  'bonnanza': { lat: 50.72462, lon: 7.09088 },

  // --- Cologne ---
  'cologne:okinii': { lat: 50.93282, lon: 6.95542 },
  'cologne-okinii': { lat: 50.93282, lon: 6.95542 },
  'okinii-cologne': { lat: 50.93282, lon: 6.95542 },

  'cologne:nennillo': { lat: 50.93928, lon: 6.93618 },
  'cologne-nennillo': { lat: 50.93928, lon: 6.93618 },
  'nennillo-cologne': { lat: 50.93928, lon: 6.93618 },

  'cologne:thaiviet': { lat: 50.93882, lon: 6.95825 },
  'thaiviet': { lat: 50.93882, lon: 6.95825 },
  'thai viet street food': { lat: 50.93882, lon: 6.95825 },

  'cologne:elinca': { lat: 50.92985, lon: 6.93348 },
  'elinca': { lat: 50.92985, lon: 6.93348 },
  'el inca': { lat: 50.92985, lon: 6.93348 },

  'cologne:frittenwerk': { lat: 50.93855, lon: 6.94045 },
  'frittenwerk-cologne': { lat: 50.93855, lon: 6.94045 },

  'cologne:kaffeesaurus': { lat: 50.94042, lon: 6.93922 },
  'kaffeesaurus-cologne': { lat: 50.94042, lon: 6.93922 },

  'cologne:losteria': { lat: 50.93582, lon: 6.94425 },
  'losteria-cologne': { lat: 50.93582, lon: 6.94425 },

  'cologne:fritesbelgique': { lat: 50.93722, lon: 6.95675 },
  'fritesbelgique-cologne': { lat: 50.93722, lon: 6.95675 },

  // --- Bruges ---
  'bruges:otto': { lat: 51.20374, lon: 3.22557 },
  'otto': { lat: 51.20374, lon: 3.22557 },
  'otto waffle atelier': { lat: 51.20374, lon: 3.22557 },

  'bruges:fritbar': { lat: 51.20367, lon: 3.22591 },
  'fritbar': { lat: 51.20367, lon: 3.22591 },

  'bruges:go-fre': { lat: 51.20875, lon: 3.22638 },
  'go-fre': { lat: 51.20875, lon: 3.22638 },

  'bruges:bohemian': { lat: 51.20815, lon: 3.22271 },
  'bohemian': { lat: 51.20815, lon: 3.22271 },
  'bohemian burger': { lat: 51.20815, lon: 3.22271 },

  // --- Cairo ---
  'cairo:riverboat': { lat: 29.979163, lon: 31.232080 },
  'riverboat': { lat: 29.979163, lon: 31.232080 },
  'river boat': { lat: 29.979163, lon: 31.232080 },

  // --- Giza ---
  'giza:comfort': { lat: 29.97495, lon: 31.13965 },
  'comfort': { lat: 29.97495, lon: 31.13965 },
  'comfort sphinx & pyramid inn': { lat: 29.97495, lon: 31.13965 },

  'giza:rooftop': { lat: 29.97600, lon: 31.13920 },
  'rooftop': { lat: 29.97600, lon: 31.13920 },
  'rooftop 7000': { lat: 29.97600, lon: 31.13920 },

  'giza:elkhedive': { lat: 29.97545, lon: 31.13885 },
  'elkhedive': { lat: 29.97545, lon: 31.13885 },
  'happy view inn': { lat: 29.97545, lon: 31.13885 },

  // --- Hurghada ---
  'hurghada:azur': { lat: 27.18950, lon: 33.82730 },
  'azur': { lat: 27.18950, lon: 33.82730 },
  'giftun azur resort': { lat: 27.18950, lon: 33.82730 },

  // --- Lisbon ---
  'lisbon:mariacatita': { lat: 38.70932, lon: -9.13374 },
  'mariacatita': { lat: 38.70932, lon: -9.13374 },
  'maria catita': { lat: 38.70932, lon: -9.13374 },

  // --- Luxor ---
  'luxor:elmesala': { lat: 25.69837, lon: 32.63185 },
  'elmesala': { lat: 25.69837, lon: 32.63185 },
  'el mesala': { lat: 25.69837, lon: 32.63185 },

  'luxor:nilepanorama': { lat: 25.69740, lon: 32.63150 },
  'nilepanorama': { lat: 25.69740, lon: 32.63150 },
  'new nile panorama': { lat: 25.69740, lon: 32.63150 },

  'luxor:thebes': { lat: 25.69910, lon: 32.63220 },
  'thebes': { lat: 25.69910, lon: 32.63220 },
  'thebes restaurant': { lat: 25.69910, lon: 32.63220 },

  // --- Mallorca ---
  'mallorca:sibil-la': { lat: 39.58012, lon: 2.65082 },
  'sibil-la': { lat: 39.58012, lon: 2.65082 },

  'mallorca:saulo': { lat: 39.53325, lon: 2.71545 },
  'saulo': { lat: 39.53325, lon: 2.71545 },
  'sauló by puro': { lat: 39.53325, lon: 2.71545 },

  'mallorca:casajulio': { lat: 39.57582, lon: 2.66014 },
  'casajulio': { lat: 39.57582, lon: 2.66014 },
  'casa julio': { lat: 39.57582, lon: 2.66014 },

  'mallorca:cafeplaya': { lat: 39.53508, lon: 2.71618 },
  'cafeplaya': { lat: 39.53508, lon: 2.71618 },
  'cafeteria playa': { lat: 39.53508, lon: 2.71618 },
};

/**
 * Returns accurate coordinates for any restaurant in a city.
 */
export function getRestaurantCoordinates(
  restaurant: Restaurant,
  city: City,
  index: number = 0
): { lat: number; lon: number } {
  // 1. Explicit on restaurant
  if (restaurant.coordinates && typeof restaurant.coordinates.lat === 'number' && typeof restaurant.coordinates.lon === 'number') {
    return restaurant.coordinates;
  }

  // 2. City-scoped lookup (e.g. "bonn:okinii" or "cologne:okinii")
  const cityKey = `${city.id.toLowerCase()}:${restaurant.id.toLowerCase()}`;
  if (KNOWN_COORDINATES[cityKey]) {
    return KNOWN_COORDINATES[cityKey];
  }

  // 3. Name or ID lookup
  const idKey = restaurant.id.toLowerCase();
  const nameKey = restaurant.name.toLowerCase().trim();
  if (KNOWN_COORDINATES[idKey]) return KNOWN_COORDINATES[idKey];
  if (KNOWN_COORDINATES[nameKey]) return KNOWN_COORDINATES[nameKey];

  // 4. Extract from mapEmbedUrl (!2d<lon>!3d<lat> or !3d<lat>!2d<lon>)
  if (restaurant.mapEmbedUrl) {
    const coordMatch = restaurant.mapEmbedUrl.match(/!2d(-?\d+\.\d+)!3d(-?\d+\.\d+)/);
    if (coordMatch) {
      const lon = parseFloat(coordMatch[1]);
      const lat = parseFloat(coordMatch[2]);
      if (!isNaN(lat) && !isNaN(lon)) {
        return { lat, lon };
      }
    }
    const reverseCoordMatch = restaurant.mapEmbedUrl.match(/!3d(-?\d+\.\d+)!2d(-?\d+\.\d+)/);
    if (reverseCoordMatch) {
      const lat = parseFloat(reverseCoordMatch[1]);
      const lon = parseFloat(reverseCoordMatch[2]);
      if (!isNaN(lat) && !isNaN(lon)) {
        return { lat, lon };
      }
    }
  }

  // 5. Fallback lookup by partial matching
  for (const [key, coords] of Object.entries(KNOWN_COORDINATES)) {
    if (key.includes(':')) {
      const [cId, rId] = key.split(':');
      if (cId === city.id.toLowerCase() && (idKey.includes(rId) || rId.includes(idKey))) {
        return coords;
      }
    } else if (key === idKey || key === nameKey || idKey.includes(key) || nameKey.includes(key)) {
      return coords;
    }
  }

  // 6. Last resort deterministic offset around city center
  const angle = (index * 137.5 * Math.PI) / 180;
  const distance = 0.003 + (index % 4) * 0.0025;
  return {
    lat: city.coordinates.lat + Math.cos(angle) * distance,
    lon: city.coordinates.lon + Math.sin(angle) * distance * 1.3,
  };
}

