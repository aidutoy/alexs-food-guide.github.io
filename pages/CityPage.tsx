import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { cities } from '../data/mockData';
import type { Restaurant } from '../types';
import { RestaurantModal } from '../components/RestaurantModal';
import ChevronLeftIcon from '../components/icons/ChevronLeftIcon';
import ArrowUpRightIcon from '../components/icons/ArrowUpRightIcon';
import ShareIcon from '../components/icons/ShareIcon';
import CheckIcon from '../components/icons/CheckIcon';
import BookmarkIcon from '../components/icons/BookmarkIcon';
import MapPinIcon from '../components/icons/MapPinIcon';
import { GlutenFreeIcon, LactoseFreeIcon, VegetarianIcon, VeganIcon } from '../components/icons/DietaryIcons';
import StarRating from '../components/StarRating';
import { useSaved } from '../context/SavedContext';

const CityPage: React.FC = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const city = cities.find((c) => c.id === cityId);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [selectedCuisine, setSelectedCuisine] = useState<string>('All');
  const [selectedDietary, setSelectedDietary] = useState<string>('All');
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const { isSaved, toggleSave } = useSaved();

  const handleShareCard = async (e: React.MouseEvent, restaurant: Restaurant) => {
    e.stopPropagation();
    const origin = window.location.origin;
    const pathname = window.location.pathname;
    const shareUrl = `${origin}${pathname}#/city/${cityId}?restaurant=${encodeURIComponent(restaurant.id)}`;

    let success = false;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(shareUrl);
        success = true;
      }
    } catch (err) {
      console.warn('Clipboard API failed', err);
    }
    if (!success) {
      try {
        const textArea = document.createElement('textarea');
        textArea.value = shareUrl;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        success = document.execCommand('copy');
        document.body.removeChild(textArea);
      } catch (err) {
        console.error('Copy fallback failed', err);
      }
    }
    setCopiedId(restaurant.id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  // Check for deep link to restaurant
  useEffect(() => {
    if (city) {
        const searchParams = new URLSearchParams(location.search);
        const restaurantId = searchParams.get('restaurant');
        if (restaurantId) {
            const restaurant = city.restaurants.find(r => r.id === restaurantId || r.id.toLowerCase() === restaurantId.toLowerCase());
            if (restaurant) {
                setSelectedRestaurant(restaurant);
            }
        } else {
            setSelectedRestaurant(null);
        }
    }
  }, [location.search, city]);

  if (!city) {
    return (
      <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center text-center px-4 pt-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10">
            <h1 className="text-5xl font-playfair font-bold text-white mb-4">City Not Found</h1>
            <p className="text-white/60 mb-8 text-lg">We couldn't find the city you're looking for.</p>
            <Link to="/" className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3 px-8 rounded-full transition-all backdrop-blur-sm">
                Back to Home
            </Link>
        </div>
      </div>
    );
  }

  // Derive available cuisines in this city
  const cityCuisines = ['All', ...Array.from(new Set(city.restaurants.map(r => r.cuisine.split(',')[0].trim())))];
  const dietaryOptions = ['All', 'Vegetarian', 'Vegan', 'Gluten-Free', 'Lactose-Free'];

  // Apply quick filters
  const filteredRestaurants = city.restaurants.filter(r => {
    if (selectedPrice !== null && r.ratings.price !== selectedPrice) return false;
    if (selectedDietary !== 'All') {
      const has = r.tags?.some(t => t.toLowerCase().includes(selectedDietary.toLowerCase()));
      if (!has) return false;
    }
    if (selectedCuisine !== 'All') {
      if (!r.cuisine.toLowerCase().includes(selectedCuisine.toLowerCase())) return false;
    }
    return true;
  });

  const resetFilters = () => {
    setSelectedCuisine('All');
    setSelectedDietary('All');
    setSelectedPrice(null);
  };

  const openModal = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('restaurant', restaurant.id);
    navigate({ pathname: location.pathname, search: searchParams.toString() }, { replace: true });
  };

  const closeModal = () => {
    setSelectedRestaurant(null);
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete('restaurant');
    const remaining = searchParams.toString();
    navigate({ pathname: location.pathname, search: remaining ? `?${remaining}` : '' }, { replace: true });
  };

  const hasTag = (restaurant: Restaurant, tag: string) => {
      return restaurant.tags?.some(t => t.toLowerCase() === tag.toLowerCase());
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white relative selection:bg-brand-primary selection:text-white">
      {/* Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
         <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[55vh] md:h-[60vh] w-full z-10 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
            <img 
                src={city.image} 
                alt={city.name} 
                className="w-full h-full object-cover animate-slow-zoom"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-brand-dark"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 mt-12">
            <div className="flex justify-center mb-4 animate-[slide-up_0.8s_ease-out_forwards]">
                 <span className="bg-white/10 backdrop-blur-md border border-white/10 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg">
                    City Food Guide
                </span>
            </div>
           
            <h1 className="inline-block text-7xl md:text-9xl font-playfair font-bold text-white leading-none tracking-tight animate-[slide-up_0.8s_ease-out_0.1s_forwards] drop-shadow-2xl">
                {city.name}
            </h1>
            <div className="mt-6 flex items-center justify-center gap-6 text-white/60 font-light text-sm animate-[slide-up_0.8s_ease-out_0.2s_forwards]">
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
                    {city.coordinates.lat.toFixed(2)}° N, {city.coordinates.lon.toFixed(2)}° E
                </span>
                <span className="h-4 w-px bg-white/20"></span>
                <span>{city.restaurants.length} Curated Spots</span>
            </div>
        </div>

        {/* Back Button */}
        <div className="absolute top-24 left-4 md:left-8 z-20">
             <button
                onClick={() => navigate(-1)}
                className="
                    group flex items-center gap-2 
                    bg-transparent hover:bg-white/10 backdrop-blur-none 
                    border border-transparent hover:border-white/10
                    text-white/70 hover:text-white px-4 py-2 rounded-full 
                    transition-all duration-300
                "
            >
                <ChevronLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <span className="font-medium text-sm uppercase tracking-wider">Back</span>
            </button>
        </div>
      </div>

      {/* Sticky Interactive Controls Bar (Quick Filters) */}
      <div className="sticky top-16 z-30 bg-zinc-950/90 backdrop-blur-xl border-y border-white/10 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Counter info & location */}
          <div className="flex items-center gap-2 text-xs text-white/70">
            <MapPinIcon className="w-3.5 h-3.5 text-brand-primary" />
            <span className="font-medium text-white">{city.name} Food Guide</span>
            <span className="text-white/40">•</span>
            <span className="text-white/50 font-mono">Showing {filteredRestaurants.length} of {city.restaurants.length} spots</span>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto py-1 custom-scrollbar">
            {/* Cuisine Filter */}
            {cityCuisines.length > 2 && (
              <select
                value={selectedCuisine}
                onChange={(e) => setSelectedCuisine(e.target.value)}
                className="bg-white/5 border border-white/10 text-white/80 rounded-full px-3 py-1.5 text-xs font-medium focus:outline-none focus:border-brand-primary"
              >
                {cityCuisines.map(c => (
                  <option key={c} value={c} className="bg-zinc-900 text-white">{c === 'All' ? 'All Cuisines' : c}</option>
                ))}
              </select>
            )}

            {/* Dietary Filter */}
            <select
              value={selectedDietary}
              onChange={(e) => setSelectedDietary(e.target.value)}
              className="bg-white/5 border border-white/10 text-white/80 rounded-full px-3 py-1.5 text-xs font-medium focus:outline-none focus:border-brand-primary"
            >
              {dietaryOptions.map(d => (
                <option key={d} value={d} className="bg-zinc-900 text-white">{d === 'All' ? 'All Dietary' : d}</option>
              ))}
            </select>

            {/* Price Filter Chips */}
            <div className="flex items-center gap-1 border-l border-white/10 pl-2">
              {[1, 2, 3].map(price => (
                <button
                  key={price}
                  onClick={() => setSelectedPrice(selectedPrice === price ? null : price)}
                  className={`px-2.5 py-1 rounded-full text-xs font-playfair transition-all ${selectedPrice === price ? 'bg-brand-primary text-white font-bold' : 'bg-white/5 text-white/50 hover:bg-white/10'}`}
                  title={`Filter price: ${Array(price).fill('€').join('')}`}
                >
                  {Array(price).fill('€').join('')}
                </button>
              ))}
            </div>

            {/* Reset Filter Button */}
            {(selectedCuisine !== 'All' || selectedDietary !== 'All' || selectedPrice !== null) && (
              <button
                onClick={resetFilters}
                className="text-xs text-white/40 hover:text-brand-primary underline px-2 shrink-0"
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Editorial Cards List View */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-16 relative z-10">
        <div className="flex flex-col gap-24 md:gap-36">
            {filteredRestaurants.length === 0 ? (
              <div className="py-20 text-center bg-white/5 rounded-3xl border border-white/10 max-w-lg mx-auto p-8">
                <p className="text-lg text-white/70 mb-4 font-playfair">No restaurants match your selected filters.</p>
                <button
                  onClick={resetFilters}
                  className="px-6 py-2 rounded-full bg-brand-primary text-white text-xs font-bold uppercase tracking-widest shadow-lg"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              filteredRestaurants.map((restaurant, index) => (
                <div 
                    key={restaurant.id} 
                    className={`
                        flex flex-col md:flex-row items-center gap-12 md:gap-24 group cursor-pointer
                        ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}
                    `}
                    onClick={() => openModal(restaurant)}
                >
                    {/* Image Side */}
                    <div className="w-full md:w-1/2 relative perspective-1000">
                         {/* Decorative Offset Border */}
                        <div className={`
                            hidden md:block absolute inset-0 border border-white/10 rounded-[2rem] transform transition-transform duration-700 ease-out
                            ${index % 2 === 0 ? '-translate-x-6 translate-y-6' : 'translate-x-6 translate-y-6'}
                            group-hover:translate-x-0 group-hover:translate-y-0
                        `}></div>

                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4] bg-zinc-900">
                            <img 
                                src={restaurant.mainImage.url} 
                                alt={restaurant.name}
                                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            />
                            
                            {/* Hover Overlay Action */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] bg-black/20">
                                <span className="bg-white text-brand-dark px-8 py-4 rounded-full font-bold tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2 shadow-2xl">
                                    View Details
                                    <ArrowUpRightIcon className="w-4 h-4" />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full md:w-1/2 relative">
                        {/* Giant Index Number */}
                        <div className={`
                            absolute -top-20 -z-10 text-[12rem] font-playfair font-bold text-white/[0.02] select-none pointer-events-none
                            ${index % 2 === 0 ? '-left-10' : '-right-10'}
                        `}>
                            {(index + 1).toString().padStart(2, '0')}
                        </div>

                        <div className="relative z-10">
                            {/* Badges row: Cuisine, Neighborhood, Last Visited */}
                            <div className="flex flex-wrap items-center gap-3 mb-6">
                                <span className="px-3 py-1 rounded-full border border-brand-primary/30 text-brand-primary text-xs font-bold uppercase tracking-widest bg-brand-primary/10">
                                    {restaurant.cuisine}
                                </span>

                                {restaurant.neighborhood && (
                                    <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-white/70 text-xs font-light">
                                        📍 {restaurant.neighborhood}
                                    </span>
                                )}

                                {restaurant.lastVisited && (
                                    <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-mono" title="Date visited & reviewed">
                                        Visited: {restaurant.lastVisited}
                                    </span>
                                )}
                                
                                <div className="h-px w-8 bg-white/10 hidden sm:block"></div>
                                <StarRating score={restaurant.ratings.food} size="w-3 h-3" fillColor="text-white" gap="gap-0.5" />
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-none group-hover:text-brand-primary/90 transition-colors duration-300">
                                {restaurant.name}
                            </h2>

                            {restaurant.quickVerdict && (
                                <div className="mb-6 pl-6 border-l-2 border-brand-primary/50">
                                    <p className="text-xl md:text-2xl text-white/90 font-playfair italic leading-relaxed">
                                        "{restaurant.quickVerdict}"
                                    </p>
                                </div>
                            )}

                            <p className="text-white/50 leading-relaxed mb-8 line-clamp-3 font-light text-lg">
                                {restaurant.description}
                            </p>

                            <div className="flex flex-row flex-wrap items-center gap-6 pt-6 border-t border-white/10">
                                <div className="flex flex-col">
                                    <span className="block text-xs text-white/30 uppercase tracking-widest mb-1 font-mono">Price</span>
                                    <span className="text-lg font-playfair text-white leading-none">{Array(restaurant.ratings.price).fill('€').join('')}</span>
                                </div>

                                {(hasTag(restaurant, 'gluten-free') || hasTag(restaurant, 'lactose-free') || hasTag(restaurant, 'vegetarian') || hasTag(restaurant, 'vegan')) && (
                                     <div className="flex flex-col border-l border-white/10 pl-6">
                                        <span className="block text-xs text-white/30 uppercase tracking-widest mb-1 font-mono">Dietary</span>
                                        <div className="flex items-center gap-2">
                                            {hasTag(restaurant, 'gluten-free') && <GlutenFreeIcon className="w-5 h-5" />}
                                            {hasTag(restaurant, 'lactose-free') && <LactoseFreeIcon className="w-5 h-5" />}
                                            {hasTag(restaurant, 'vegetarian') && <VegetarianIcon className="w-5 h-5" />}
                                            {hasTag(restaurant, 'vegan') && <VeganIcon className="w-5 h-5" />}
                                        </div>
                                    </div>
                                )}

                                {/* Action Buttons: Compare, Bookmark & Share */}
                                <div className="ml-auto flex items-center gap-2">
                                    {/* Compare button */}
                                    <Link
                                      to={`/compare?a=${restaurant.id}`}
                                      onClick={(e) => e.stopPropagation()}
                                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/15 text-white/60 hover:text-white text-xs font-medium transition-all active:scale-95"
                                      title={`Compare ${restaurant.name} with another spot`}
                                      aria-label={`Compare ${restaurant.name}`}
                                    >
                                      <span>⚔️</span>
                                      <span className="hidden sm:inline">Compare</span>
                                    </Link>

                                    {/* Bookmark button */}
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleSave(restaurant.id);
                                      }}
                                      className={`
                                        p-2 rounded-full border transition-all active:scale-95
                                        ${isSaved(restaurant.id)
                                          ? 'bg-brand-primary text-white border-brand-primary shadow-md'
                                          : 'bg-white/5 hover:bg-white/15 text-white/60 hover:text-white border-white/10'
                                        }
                                      `}
                                      title={isSaved(restaurant.id) ? "Remove from shortlist" : "Save spot"}
                                      aria-label={`Save ${restaurant.name}`}
                                    >
                                      <BookmarkIcon className="w-4 h-4" filled={isSaved(restaurant.id)} />
                                    </button>

                                    {/* Share button */}
                                    <button
                                        onClick={(e) => handleShareCard(e, restaurant)}
                                        className={`
                                            flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-200 active:scale-95
                                            ${copiedId === restaurant.id 
                                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm shadow-emerald-500/20' 
                                                : 'bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border-white/10 hover:border-white/20'
                                            }
                                        `}
                                        title={`Copy link to ${restaurant.name}`}
                                        aria-label={`Share ${restaurant.name}`}
                                    >
                                        {copiedId === restaurant.id ? (
                                            <>
                                                <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                                                <span>Copied!</span>
                                            </>
                                        ) : (
                                            <>
                                                <ShareIcon className="w-3.5 h-3.5 text-white/60" />
                                                <span className="hidden sm:inline">Share</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              ))
            )}
          </div>
      </div>

      <RestaurantModal restaurant={selectedRestaurant} onClose={closeModal} />
    </div>
  );
};

export default CityPage;
