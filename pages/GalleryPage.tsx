
import React, { useState } from 'react';
import { cities } from '../data/mockData';
import type { Restaurant, ImageWithCaption } from '../types';
import { GlutenFreeIcon, LactoseFreeIcon, VegetarianIcon, VeganIcon } from '../components/icons/DietaryIcons';
import ChevronRightIcon from '../components/icons/ChevronRightIcon';
import ArrowUpRightIcon from '../components/icons/ArrowUpRightIcon';
import Lightbox from '../components/Lightbox';
import { RestaurantModal } from '../components/RestaurantModal';

const GalleryPage: React.FC = () => {
    const [openCityId, setOpenCityId] = useState<string | null>(null);
    const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
    const [lightboxState, setLightboxState] = useState<{
        isOpen: boolean;
        images: ImageWithCaption[];
        initialIndex: number;
    }>({
        isOpen: false,
        images: [],
        initialIndex: 0,
    });

    const toggleCity = (id: string) => {
        setOpenCityId(openCityId === id ? null : id);
    };

    const hasTag = (restaurant: Restaurant, tag: string) => {
        return restaurant.tags?.some(t => t.toLowerCase() === tag.toLowerCase());
    };

    const openLightbox = (images: ImageWithCaption[], index: number) => {
        setLightboxState({
            isOpen: true,
            images,
            initialIndex: index,
        });
    };

    const closeLightbox = () => {
        setLightboxState(prev => ({ ...prev, isOpen: false }));
    };

    return (
        <div className="min-h-screen bg-black text-white pt-20 pb-20">
            {/* Cinematic Background Noise/Grain */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20 mt-8">
                    <span className="text-brand-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block animate-fade-in">Visual Index</span>
                     <h1 className="text-6xl md:text-8xl font-playfair font-bold mb-6 leading-none">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-500">Gallery</span>
                    </h1>
                    <p className="text-white/40 text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        A photographic chronicle of culinary discoveries.
                    </p>
                </div>

                <div className="space-y-2">
                    {cities.map((city) => {
                        const isOpen = openCityId === city.id;

                        return (
                            <div 
                                key={city.id} 
                                className={`
                                    relative overflow-hidden transition-all duration-700 ease-in-out border-b border-white/10
                                    ${isOpen ? 'rounded-[2rem] my-12 border-none' : 'rounded-none hover:bg-white/5'}
                                `}
                            >
                                {/* City Header Strip */}
                                <button 
                                    onClick={() => toggleCity(city.id)}
                                    className={`
                                        relative w-full h-[180px] md:h-[240px] flex items-center justify-center group overflow-hidden
                                        ${isOpen ? 'cursor-default' : 'cursor-pointer'}
                                    `}
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0 transition-all duration-1000 ease-out">
                                        <img 
                                            src={city.image} 
                                            alt={city.name} 
                                            className={`
                                                w-full h-full object-cover transition-all duration-1000 
                                                ${isOpen ? 'scale-105 grayscale-0 brightness-75' : 'scale-100 grayscale brightness-50 group-hover:scale-110 group-hover:grayscale-0 group-hover:brightness-75'}
                                            `}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80"></div>
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="relative z-10 flex flex-col items-center transition-transform duration-500">
                                        <h2 className={`
                                            text-5xl md:text-8xl font-playfair font-bold text-white drop-shadow-2xl tracking-tight
                                            transition-all duration-500
                                            ${isOpen ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}
                                        `}>
                                            {city.name}
                                        </h2>
                                        <div className={`
                                            mt-4 flex items-center gap-3 transition-all duration-500
                                            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'}
                                        `}>
                                            <span className="text-brand-primary font-mono text-sm uppercase tracking-widest bg-black/50 backdrop-blur-md px-4 py-1 rounded-full border border-white/10">
                                                {city.restaurants.length} Collections
                                            </span>
                                        </div>
                                    </div>

                                    {/* Toggle Indicator */}
                                    <div className={`
                                        absolute right-8 md:right-12 top-1/2 -translate-y-1/2
                                        w-12 h-12 rounded-full flex items-center justify-center
                                        border border-white/30 backdrop-blur-md
                                        transition-all duration-500 z-20
                                        ${isOpen ? 'rotate-90 bg-white text-black border-white' : 'bg-black/20 text-white group-hover:bg-white group-hover:text-black'}
                                    `}>
                                        <ChevronRightIcon className="w-5 h-5" />
                                    </div>
                                </button>

                                {/* Expanded Content Area */}
                                <div className={`
                                    grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
                                    ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}
                                `}>
                                    <div className="overflow-hidden">
                                        <div className="bg-zinc-950/50 pt-12 pb-12 px-4 md:px-8">
                                            {city.restaurants.map((restaurant, rIdx) => {
                                                const allImages = [restaurant.mainImage, ...restaurant.images];
                                                
                                                return (
                                                    <div key={restaurant.id} className="mb-32 last:mb-0 max-w-[1800px] mx-auto">
                                                        {/* Restaurant Header */}
                                                        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
                                                            <div>
                                                                <div className="flex items-center gap-3 mb-3">
                                                                    <span className="px-3 py-1 rounded-full border border-brand-primary/50 text-brand-primary text-[10px] font-bold uppercase tracking-widest bg-brand-primary/10">
                                                                        {restaurant.cuisine}
                                                                    </span>
                                                                    {/* Dietary Icons Row */}
                                                                    <div className="flex items-center gap-2 ml-2 border-l border-white/10 pl-3">
                                                                        {hasTag(restaurant, 'gluten-free') && <GlutenFreeIcon className="w-4 h-4 opacity-70" />}
                                                                        {hasTag(restaurant, 'lactose-free') && <LactoseFreeIcon className="w-4 h-4 opacity-70" />}
                                                                        {hasTag(restaurant, 'vegetarian') && <VegetarianIcon className="w-4 h-4 opacity-70" />}
                                                                        {hasTag(restaurant, 'vegan') && <VeganIcon className="w-4 h-4 opacity-70" />}
                                                                    </div>
                                                                </div>
                                                                <button
                                                                    onClick={() => setSelectedRestaurant(restaurant)}
                                                                    className="group/title text-left focus:outline-none"
                                                                >
                                                                    <h3 className="text-4xl md:text-6xl font-playfair font-bold text-white group-hover/title:text-brand-primary transition-colors duration-300 flex items-center gap-4">
                                                                        {restaurant.name}
                                                                        <ArrowUpRightIcon className="w-6 h-6 md:w-8 md:h-8 opacity-0 -translate-x-4 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all duration-300 text-brand-primary" />
                                                                    </h3>
                                                                </button>
                                                            </div>
                                                            
                                                            <div className="flex flex-col items-end text-right">
                                                                 <div className="flex items-center gap-2 mb-2">
                                                                    {Array.from({length: 5}, (_, i) => (
                                                                        <svg key={i} className={`w-4 h-4 ${i < restaurant.ratings.food ? 'text-white' : 'text-white/10'}`} fill="currentColor" viewBox="0 0 20 20">
                                                                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                                        </svg>
                                                                    ))}
                                                                 </div>
                                                                 <div className="text-white/40 font-playfair text-lg">
                                                                    {Array(restaurant.ratings.price).fill('€').join('')}
                                                                    <span className="text-white/10">{Array(3 - restaurant.ratings.price).fill('€').join('')}</span>
                                                                 </div>
                                                            </div>
                                                        </div>

                                                        {/* Quick Verdict Quote */}
                                                        {restaurant.quickVerdict && (
                                                            <div className="mb-12 max-w-3xl">
                                                                <p className="text-2xl md:text-3xl text-white/80 font-playfair italic leading-relaxed">
                                                                    <span className="text-brand-primary opacity-50 mr-2">"</span>
                                                                    {restaurant.quickVerdict}
                                                                </p>
                                                            </div>
                                                        )}

                                                        {/* Masonry-style Layout using CSS Columns - Updated for smaller images */}
                                                        <div className="columns-2 md:columns-4 lg:columns-5 gap-3 space-y-3">
                                                            {allImages.map((img, idx) => (
                                                                <div 
                                                                    key={idx} 
                                                                    className="break-inside-avoid relative group/img rounded-lg overflow-hidden cursor-zoom-in bg-white/5"
                                                                    onClick={() => openLightbox(allImages, idx)}
                                                                >
                                                                    <img 
                                                                        src={img.url} 
                                                                        alt={img.caption} 
                                                                        loading="lazy"
                                                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105"
                                                                    />
                                                                    
                                                                    {/* Hover Overlay */}
                                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                                                                        <div className="absolute bottom-0 left-0 p-3 w-full transform translate-y-4 group-hover/img:translate-y-0 transition-transform duration-300">
                                                                            <p className="text-white text-xs font-medium leading-snug border-l-2 border-brand-primary pl-2 line-clamp-2">
                                                                                {img.caption}
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {lightboxState.isOpen && (
                <Lightbox 
                    images={lightboxState.images}
                    initialIndex={lightboxState.initialIndex}
                    onClose={closeLightbox}
                />
            )}

            {selectedRestaurant && (
                <RestaurantModal 
                    restaurant={selectedRestaurant} 
                    onClose={() => setSelectedRestaurant(null)} 
                />
            )}
        </div>
    );
};

export default GalleryPage;
