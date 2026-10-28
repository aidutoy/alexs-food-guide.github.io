import React, { useState } from 'react';
import { useSaved } from '../context/SavedContext';
import CloseIcon from './icons/CloseIcon';
import TrashIcon from './icons/TrashIcon';
import BookmarkIcon from './icons/BookmarkIcon';
import ArrowUpRightIcon from './icons/ArrowUpRightIcon';
import ShareIcon from './icons/ShareIcon';
import CheckIcon from './icons/CheckIcon';
import StarRating from './StarRating';
import { RestaurantModal } from './RestaurantModal';
import type { Restaurant } from '../types';

export const SavedDrawer: React.FC = () => {
  const { isDrawerOpen, setIsDrawerOpen, savedRestaurants, removeSaved, clearAllSaved } = useSaved();
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isDrawerOpen) return null;

  // Group saved restaurants by city
  const groupedByCity = savedRestaurants.reduce((acc, item) => {
    if (!acc[item.cityName]) {
      acc[item.cityName] = [];
    }
    acc[item.cityName].push(item);
    return acc;
  }, {} as Record<string, typeof savedRestaurants>);

  const handleShareShortlist = async () => {
    if (savedRestaurants.length === 0) return;
    const origin = window.location.origin;
    const pathname = window.location.pathname;

    const lines = [
      "📌 Alex's Food Guide – My Saved Shortlist:",
      ...savedRestaurants.map(item => 
        `• ${item.restaurant.name} (${item.cityName}) – ${item.restaurant.cuisine} [${Array(item.restaurant.ratings.price).fill('€').join('')}] ${origin}${pathname}#/city/${item.cityId}?restaurant=${item.restaurant.id}`
      )
    ];

    const shareText = lines.join('\n');
    let success = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareText);
        success = true;
      }
    } catch {}

    if (!success) {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = shareText;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        success = document.execCommand('copy');
        document.body.removeChild(textArea);
      } catch {}
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity animate-fade-in"
        onClick={() => setIsDrawerOpen(false)}
      >
        {/* Drawer panel */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-zinc-900 border-l border-white/10 shadow-2xl flex flex-col z-50 text-white animate-[slide-up_0.3s_ease-out]"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between bg-zinc-950/60">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center">
                <BookmarkIcon className="w-5 h-5" filled={true} />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-bold text-white">My Shortlist</h3>
                <p className="text-xs text-white/50">{savedRestaurants.length} {savedRestaurants.length === 1 ? 'place' : 'places'} saved to this browser</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {savedRestaurants.length > 0 && (
                <button
                  onClick={clearAllSaved}
                  className="text-xs text-white/40 hover:text-red-400 p-2 rounded-lg transition-colors"
                  title="Clear all saved"
                >
                  Clear
                </button>
              )}
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                aria-label="Close drawer"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
            {savedRestaurants.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center px-4 py-16">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-4 text-white/30">
                  <BookmarkIcon className="w-8 h-8" />
                </div>
                <h4 className="font-playfair text-xl font-bold text-white mb-2">No saved spots yet</h4>
                <p className="text-sm text-white/50 max-w-xs leading-relaxed">
                  Tap the bookmark icon on any restaurant to save it to your personal shortlist. No account needed—it stays saved right here in your browser!
                </p>
              </div>
            ) : (
              Object.entries(groupedByCity).map(([cityName, items]) => (
                <div key={cityName} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-primary">
                      {cityName}
                    </span>
                    <span className="h-px flex-1 bg-white/10"></span>
                    <span className="text-xs text-white/40">{items.length}</span>
                  </div>

                  <div className="space-y-3">
                    {items.map(({ restaurant, cityId }) => (
                      <div 
                        key={restaurant.id}
                        className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-3.5 flex gap-3.5 transition-all group relative cursor-pointer"
                        onClick={() => setSelectedRestaurant(restaurant)}
                      >
                        <img 
                          src={restaurant.mainImage.url} 
                          alt={restaurant.name}
                          className="w-20 h-20 rounded-xl object-cover shrink-0" 
                        />
                        <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-primary truncate">
                                {restaurant.cuisine}
                              </span>
                              {restaurant.neighborhood && (
                                <span className="text-[10px] text-white/40 truncate">
                                  &bull; {restaurant.neighborhood}
                                </span>
                              )}
                            </div>
                            <h5 className="font-playfair font-bold text-base text-white truncate group-hover:text-brand-primary transition-colors">
                              {restaurant.name}
                            </h5>
                          </div>

                          <div className="flex items-center justify-between text-xs text-white/50 pt-1">
                            <StarRating score={restaurant.ratings.food} size="w-3 h-3" gap="gap-0.5" />
                            <span className="text-white/70 font-playfair">{Array(restaurant.ratings.price).fill('€').join('')}</span>
                          </div>
                        </div>

                        {/* Remove button */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            removeSaved(restaurant.id);
                          }}
                          className="self-start p-1.5 rounded-full text-white/30 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                          title="Remove from saved"
                          aria-label={`Remove ${restaurant.name} from saved`}
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer actions */}
          {savedRestaurants.length > 0 && (
            <div className="p-4 border-t border-white/10 bg-zinc-950/80">
              <button
                onClick={handleShareShortlist}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-brand-primary hover:bg-brand-primary/90 text-white font-medium text-sm transition-all shadow-lg active:scale-98"
              >
                {copied ? (
                  <>
                    <CheckIcon className="w-4 h-4 text-emerald-400" />
                    <span>Shortlist Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <ShareIcon className="w-4 h-4" />
                    <span>Share My Shortlist ({savedRestaurants.length})</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Selected Restaurant Modal */}
      {selectedRestaurant && (
        <RestaurantModal 
          restaurant={selectedRestaurant} 
          onClose={() => setSelectedRestaurant(null)} 
        />
      )}
    </>
  );
};
