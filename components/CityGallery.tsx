import React, { useState } from 'react';
import { cities } from '../data/mockData';
import type { Restaurant, ImageWithCaption } from '../types';
import { GlutenFreeIcon, LactoseFreeIcon, VegetarianIcon, VeganIcon } from './icons/DietaryIcons';
import ChevronRightIcon from './icons/ChevronRightIcon';
import ArrowUpRightIcon from './icons/ArrowUpRightIcon';
import Lightbox from './Lightbox';
import { RestaurantModal } from './RestaurantModal';
import StarRating from './StarRating';

interface CityGalleryProps {
    title?: React.ReactNode;
    subtitle?: string;
    badge?: string;
    showHeader?: boolean;
    sectionId?: string;
}

const CityGallery: React.FC<CityGalleryProps> = ({
    title = (
        <>
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-500">Gallery</span>
        </>
    ),
    subtitle = "My personal photo collection of my favourite places to eat. All pictures are my own with no edits and no AI. Just as I saw it.",
    badge = "Curated Collections",
    showHeader = true,
    sectionId = "gallery",
}) => {
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
        <section id={sectionId} className="relative py-24 pb-32 bg-brand-dark text-white border-t border-white/5">
            <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {showHeader && (
                    <div className="text-center mb-16">
                        {badge && (
                            <span className="text-brand-primary uppercase tracking-[0.3em] text-xs font-bold mb-4 block animate-fade-in">
                                {badge}
                            </span>
                        )}
                        <h2 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-none">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="text-white/50 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}

                <div className="space-y-3">
                    {cities.map((city) => {
                        const isOpen = openCityId === city.id;

                        return (
                            <div 
                                key={city.id} 
                                className={`
                                    relative overflow-hidden transition-all duration-700 ease-in-out border border-white/10
                                    ${isOpen 
                                        ? 'rounded-[2rem] my-8 shadow-2xl border-white/20 bg-zinc-950/80' 
                                        : 'rounded-2xl hover:bg-white/5 hover:border-white/20'
                                    }
                                `}
                            >
                                {/* City Header Strip Button */}
                                <button 
                                    onClick={() => toggleCity(city.id)}
                                    className={`
                                        relative w-full h-[180px] md:h-[220px] flex items-center justify-center group overflow-hidden cursor-pointer
                                    `}
                                    aria-expanded={isOpen}
                                    aria-label={`Toggle ${city.name} gallery`}
                                >
                                    {/* Background Cover Image */}
                                    <div className="absolute inset-0 transition-all duration-1000 ease-out">
                                        <img 
                                            src={city.image} 
                                            alt={city.name} 
                                            className={`
                                                w-full h-full object-cover transition-all duration-1000 
                                                ${isOpen 
                                                    ? 'scale-105 grayscale-0 brightness-75' 
                                                    : 'scale-100 grayscale brightness-50 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-75'
                                                }
                                            `}
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80"></div>
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="relative z-10 flex flex-col items-center transition-transform duration-500">
                                        <h3 className={`
                                            text-5xl md:text-7xl font-playfair font-bold text-white drop-shadow-2xl tracking-tight
                                            transition-all duration-500
                                            ${isOpen ? 'translate-y-0 text-brand-primary' : 'translate-y-2 group-hover:translate-y-0'}
                                        `}>
                                            {city.name}
                                        </h3>
                                        <div className={`
                                            mt-3 flex items-center gap-3 transition-all duration-500
                                            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-80 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}
                                        `}>
                                            <span className="text-brand-primary font-mono text-xs uppercase tracking-widest bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10">
                                                {city.restaurants.length} {city.restaurants.length === 1 ? 'Restaurant' : 'Restaurants'} &bull; Tap to {isOpen ? 'close' : 'open'}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Toggle Indicator Arrow */}
                                    <div className={`
                                        absolute right-6 md:right-10 top-1/2 -translate-y-1/2
                                        w-11 h-11 rounded-full flex items-center justify-center
                                        border border-white/30 backdrop-blur-md
                                        transition-all duration-500 z-20
                                        ${isOpen ? 'rotate-90 bg-white text-black border-white' : 'bg-black/30 text-white group-hover:bg-white group-hover:text-black'}
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
                                        <div className="bg-zinc-950/70 pt-10 pb-12 px-4 md:px-8 border-t border-white/10">
                                            {city.restaurants.length === 0 ? (
                                                <p className="text-center text-white/40 italic py-8">
                                                    Photographic collection coming soon for {city.name}.
                                                </p>
                                            ) : (
                                                city.restaurants.map((restaurant) => {
                                                    const allImages = [restaurant.mainImage, ...restaurant.images];
                                                    
                                                    return (
                                                        <div key={restaurant.id} className="mb-24 last:mb-0 max-w-[1800px] mx-auto">
                                                            {/* Restaurant Header */}
                                                            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 gap-6 border-b border-white/10 pb-6">
                                                                <div>
                                                                    <div className="flex items-center gap-3 mb-2">
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
                                                                        <h4 className="text-3xl md:text-5xl font-playfair font-bold text-white group-hover/title:text-brand-primary transition-colors duration-300 flex items-center gap-3">
                                                                            {restaurant.name}
                                                                            <ArrowUpRightIcon className="w-5 h-5 md:w-7 md:h-7 opacity-0 -translate-x-3 group-hover/title:opacity-100 group-hover/title:translate-x-0 transition-all duration-300 text-brand-primary" />
                                                                        </h4>
                                                                    </button>
                                                                </div>
                                                                
                                                                <div className="flex flex-col items-end text-right">
                                                                     <div className="flex items-center gap-2 mb-2">
                                                                        <StarRating score={restaurant.ratings.food} size="w-4 h-4" gap="gap-1.5" fillColor="text-white" emptyColor="text-white/10" />
                                                                     </div>
                                                                     <div className="text-white/40 font-playfair text-base">
                                                                        {Array(restaurant.ratings.price).fill('€').join('')}
                                                                        <span className="text-white/10">{Array(3 - restaurant.ratings.price).fill('€').join('')}</span>
                                                                     </div>
                                                                </div>
                                                            </div>

                                                            {/* Quick Verdict Quote */}
                                                            {restaurant.quickVerdict && (
                                                                <div className="mb-8 max-w-3xl">
                                                                    <p className="text-xl md:text-2xl text-white/80 font-playfair italic leading-relaxed">
                                                                        <span className="text-brand-primary opacity-50 mr-2">"</span>
                                                                        {restaurant.quickVerdict}
                                                                    </p>
                                                                </div>
                                                            )}

                                                            {/* Masonry-style Layout for images */}
                                                            <div className="columns-2 md:columns-4 lg:columns-5 gap-3 space-y-3">
                                                                {allImages.map((img, idx) => (
                                                                    <div 
                                                                        key={idx} 
                                                                        className="break-inside-avoid relative group/img rounded-xl overflow-hidden cursor-zoom-in bg-white/5 border border-white/5 hover:border-brand-primary/40 transition-all"
                                                                        onClick={() => openLightbox(allImages, idx)}
                                                                    >
                                                                        <img 
                                                                            src={img.url} 
                                                                            alt={img.caption} 
                                                                            loading="lazy"
                                                                            className="w-full h-auto object-cover transition-transform duration-700 group-hover/img:scale-105"
                                                                        />
                                                                        
                                                                        {/* Hover Overlay */}
                                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300">
                                                                            <div className="absolute bottom-0 left-0 p-3 w-full transform translate-y-3 group-hover/img:translate-y-0 transition-transform duration-300">
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
                                                })
                                            )}
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
        </section>
    );
};

export default CityGallery;
