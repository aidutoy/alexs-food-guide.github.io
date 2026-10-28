import React, { useState } from 'react';
import type { City, Restaurant } from '../types';
import StarRating from './StarRating';
import ArrowUpRightIcon from './icons/ArrowUpRightIcon';
import MapPinIcon from './icons/MapPinIcon';
import BookmarkIcon from './icons/BookmarkIcon';
import { useSaved } from '../context/SavedContext';

interface CityMapViewProps {
  city: City;
  onSelectRestaurant: (restaurant: Restaurant) => void;
}

export const CityMapView: React.FC<CityMapViewProps> = ({ city, onSelectRestaurant }) => {
  const [activeRestaurant, setActiveRestaurant] = useState<Restaurant>(city.restaurants[0] || null);
  const { isSaved, toggleSave } = useSaved();

  if (city.restaurants.length === 0) {
    return (
      <div className="py-20 text-center text-white/50">
        No map locations recorded for this city yet.
      </div>
    );
  }

  // Extract clean embed url helper
  const getMapSrc = (srcOrIframe: string) => {
    if (!srcOrIframe) return '';
    const match = srcOrIframe.match(/src=["']([^"']+)["']/i);
    return match ? match[1] : srcOrIframe;
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Interactive Map & Active Restaurant Stage */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Embed Map Viewer */}
        <div className="lg:col-span-8 bg-zinc-950 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl relative">
          <div className="p-4 bg-zinc-900/90 border-b border-white/10 flex items-center justify-between text-xs text-white/60">
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-brand-primary" />
              <span>Location: {activeRestaurant ? activeRestaurant.name : city.name}</span>
              {activeRestaurant?.neighborhood && (
                <span className="text-white/40">({activeRestaurant.neighborhood})</span>
              )}
            </div>
            <span className="text-[11px] font-mono text-brand-primary">
              {city.restaurants.length} spots pinned in {city.name}
            </span>
          </div>

          <div className="h-[460px] md:h-[560px] w-full relative">
            <iframe
              src={activeRestaurant ? getMapSrc(activeRestaurant.mapEmbedUrl) : `https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=${encodeURIComponent(city.name)}&maptype=roadmap`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${activeRestaurant ? activeRestaurant.name : city.name}`}
              className="w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Restaurant Pin List & Active Spotlight Card */}
        <div className="lg:col-span-4 space-y-6">
          {/* Active Spot Detailed Card */}
          {activeRestaurant && (
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 backdrop-blur-xl relative shadow-2xl group">
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-black">
                <img
                  src={activeRestaurant.mainImage.url}
                  alt={activeRestaurant.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                <div className="absolute top-3 left-3 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                  {activeRestaurant.cuisine}
                </div>

                {/* Bookmark button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSave(activeRestaurant.id);
                  }}
                  className={`
                    absolute top-3 right-3 p-2 rounded-full backdrop-blur-md border transition-all active:scale-95
                    ${isSaved(activeRestaurant.id)
                      ? 'bg-brand-primary text-white border-brand-primary shadow-lg'
                      : 'bg-black/40 text-white/70 hover:text-white border-white/20 hover:bg-black/60'
                    }
                  `}
                  title={isSaved(activeRestaurant.id) ? "Remove from shortlist" : "Save spot"}
                >
                  <BookmarkIcon className="w-4 h-4" filled={isSaved(activeRestaurant.id)} />
                </button>

                <div className="absolute bottom-3 left-3 right-3">
                  {activeRestaurant.neighborhood && (
                    <span className="text-[11px] text-white/60 font-light block mb-0.5">
                      📍 {activeRestaurant.neighborhood}
                    </span>
                  )}
                  <h3 className="font-playfair text-2xl font-bold text-white leading-tight">
                    {activeRestaurant.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs py-2 border-y border-white/10">
                  <StarRating score={activeRestaurant.ratings.food} size="w-3.5 h-3.5" gap="gap-1" />
                  <span className="text-white/60 font-playfair text-sm">
                    {Array(activeRestaurant.ratings.price).fill('€').join('')}
                  </span>
                </div>

                {activeRestaurant.quickVerdict && (
                  <p className="text-white/70 text-xs italic font-playfair line-clamp-2">
                    "{activeRestaurant.quickVerdict}"
                  </p>
                )}

                {activeRestaurant.lastVisited && (
                  <div className="text-[11px] text-white/40">
                    Reviewed: <span className="text-white/70 font-medium">{activeRestaurant.lastVisited}</span>
                  </div>
                )}

                <button
                  onClick={() => onSelectRestaurant(activeRestaurant)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white font-medium text-xs uppercase tracking-wider transition-all shadow-lg active:scale-98"
                >
                  <span>Open Full Review & Photos</span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Quick List Selector */}
          <div className="bg-zinc-950/60 border border-white/10 rounded-[2rem] p-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-white/40 block px-2 mb-3">
              All Spots in {city.name}
            </span>
            <div className="max-h-64 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
              {city.restaurants.map((rest) => {
                const isActive = activeRestaurant?.id === rest.id;
                return (
                  <button
                    key={rest.id}
                    onClick={() => setActiveRestaurant(rest)}
                    className={`
                      w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between text-xs
                      ${isActive
                        ? 'bg-brand-primary text-white font-semibold shadow-md'
                        : 'bg-white/5 hover:bg-white/10 text-white/70 hover:text-white'
                      }
                    `}
                  >
                    <div className="truncate mr-2">
                      <span className="block truncate font-medium">{rest.name}</span>
                      <span className={`text-[10px] truncate block ${isActive ? 'text-white/80' : 'text-white/40'}`}>
                        {rest.cuisine} {rest.neighborhood ? `• ${rest.neighborhood}` : ''}
                      </span>
                    </div>
                    <span className="font-playfair shrink-0">{Array(rest.ratings.price).fill('€').join('')}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CityMapView;
