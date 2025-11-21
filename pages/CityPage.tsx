
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { cities } from '../data/mockData';
import type { Restaurant } from '../types';
import { RestaurantModal } from '../components/RestaurantModal';
import ChevronLeftIcon from '../components/icons/ChevronLeftIcon';
import ArrowUpRightIcon from '../components/icons/ArrowUpRightIcon';
import { GlutenFreeIcon, LactoseFreeIcon, VegetarianIcon, VeganIcon } from '../components/icons/DietaryIcons';

const CityPage: React.FC = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const city = cities.find((c) => c.id === cityId);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Check for deep link to restaurant
  useEffect(() => {
    if (city) {
        const searchParams = new URLSearchParams(location.search);
        const restaurantId = searchParams.get('restaurant');
        if (restaurantId) {
            const restaurant = city.restaurants.find(r => r.id === restaurantId);
            if (restaurant) {
                setSelectedRestaurant(restaurant);
            }
        }
    }
  }, [location.search, city]);

  if (!city) {
    return (
      <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center text-center px-4 pt-16 relative overflow-hidden">
         {/* Ambient Background */}
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

  const openModal = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    // Optional: Update URL without reloading to make the state shareable
    // navigate(`?restaurant=${restaurant.id}`, { replace: true });
  };

  const closeModal = () => {
    setSelectedRestaurant(null);
    // Optional: Clear URL param
    // navigate(location.pathname, { replace: true });
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
         {/* Subtle Grain */}
         <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full z-10 flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
            <img 
                src={city.image} 
                alt={city.name} 
                className="w-full h-full object-cover animate-slow-zoom"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-dark"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 mt-16">
            <div className="flex justify-center mb-6 opacity-0 animate-[slide-up_0.8s_ease-out_forwards]">
                 <span className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg">
                    Travel Guide
                </span>
            </div>
           
            <h1 className="inline-block text-8xl md:text-[10rem] font-playfair font-bold text-white leading-none tracking-tight opacity-0 animate-[slide-up_0.8s_ease-out_0.1s_forwards] drop-shadow-2xl">
                {city.name}
            </h1>
            <div className="mt-8 flex items-center justify-center gap-6 text-white/60 font-light opacity-0 animate-[slide-up_0.8s_ease-out_0.2s_forwards]">
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
      
      {/* Restaurants Editorial List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-32 md:pt-56 relative z-10">
        <div className="flex flex-col gap-24 md:gap-40">
            {city.restaurants.map((restaurant, index) => (
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

                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] bg-zinc-900">
                            <img 
                                src={restaurant.mainImage.url} 
                                alt={restaurant.name}
                                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            />
                            
                            {/* Hover Overlay Action */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] bg-black/20">
                                <span className="bg-white text-brand-dark px-8 py-4 rounded-full font-bold tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 flex items-center gap-2">
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
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-3 py-1 rounded-full border border-brand-primary/30 text-brand-primary text-xs font-bold uppercase tracking-widest">
                                    {restaurant.cuisine}
                                </span>
                                
                                <div className="h-px w-12 bg-white/10"></div>
                                <div className="flex gap-0.5">
                                    {Array.from({length: 5}, (_, i) => (
                                        <svg key={i} className={`w-3 h-3 ${i < restaurant.ratings.food ? 'text-white' : 'text-white/20'}`} fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>

                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-8 leading-none group-hover:text-brand-primary/90 transition-colors duration-300">
                                {restaurant.name}
                            </h2>

                            {restaurant.quickVerdict && (
                                <div className="mb-8 pl-6 border-l-2 border-brand-primary/50">
                                    <p className="text-xl md:text-2xl text-white/90 font-playfair italic leading-relaxed">
                                        "{restaurant.quickVerdict}"
                                    </p>
                                </div>
                            )}

                            <p className="text-white/50 leading-relaxed mb-8 line-clamp-3 font-light text-lg">
                                {restaurant.description}
                            </p>

                            <div className="flex flex-row flex-wrap items-start gap-8 pt-8 border-t border-white/5">
                                <div className="flex flex-col">
                                    <span className="block text-xs text-white/30 uppercase tracking-widest mb-2">Price</span>
                                    <span className="text-lg font-playfair text-white leading-none">{Array(restaurant.ratings.price).fill('€').join('')}</span>
                                </div>

                                {(hasTag(restaurant, 'gluten-free') || hasTag(restaurant, 'lactose-free') || hasTag(restaurant, 'vegetarian') || hasTag(restaurant, 'vegan')) && (
                                     <div className="flex flex-col">
                                        <span className="block text-xs text-white/30 uppercase tracking-widest mb-2">Dietary</span>
                                        <div className="flex items-center gap-2">
                                            {hasTag(restaurant, 'gluten-free') && <GlutenFreeIcon className="w-5 h-5" />}
                                            {hasTag(restaurant, 'lactose-free') && <LactoseFreeIcon className="w-5 h-5" />}
                                            {hasTag(restaurant, 'vegetarian') && <VegetarianIcon className="w-5 h-5" />}
                                            {hasTag(restaurant, 'vegan') && <VeganIcon className="w-5 h-5" />}
                                        </div>
                                    </div>
                                )}

                                <div className="ml-auto md:hidden self-center">
                                     <span className="text-brand-primary text-sm font-bold uppercase tracking-widest">Tap to view</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      <RestaurantModal restaurant={selectedRestaurant} onClose={closeModal} />
    </div>
  );
};

export default CityPage;
