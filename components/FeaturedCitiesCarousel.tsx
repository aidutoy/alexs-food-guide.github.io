
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { City } from '../types';
import ChevronRightIcon from './icons/ChevronRightIcon';

const FeaturedCitiesCarousel: React.FC<{ cities: City[] }> = ({ cities }) => {
    const [activeId, setActiveId] = useState<string>(cities[0].id);

    return (
        <section id="featured-cities" className="py-24 bg-brand-dark relative overflow-hidden select-none">
            {/* Header */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 mb-16 text-center">
                 <h2 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
                    Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Destinations</span>
                </h2>
                <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
                    Select a city to explore the full guide.
                </p>
            </div>

            {/* Desktop Accordion */}
            <div className="hidden md:flex w-full h-[650px] justify-center px-4">
                <div className="flex w-full max-w-[1600px] gap-2">
                    {cities.map((city) => {
                        const isActive = activeId === city.id;
                        return (
                            <Link
                                key={city.id}
                                to={`/city/${city.id}`}
                                onMouseEnter={() => setActiveId(city.id)}
                                className={`
                                    relative h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden rounded-3xl
                                    ${isActive ? 'flex-[8]' : 'flex-[1]'}
                                `}
                            >
                                {/* Image Container */}
                                <div className="absolute inset-0 w-full h-full bg-zinc-900">
                                    <div className={`
                                        absolute inset-0 z-10 bg-black/60 transition-opacity duration-700
                                        ${isActive ? 'opacity-0' : 'opacity-100'}
                                    `}></div>
                                    
                                    <img 
                                        src={city.image} 
                                        alt={city.name} 
                                        className={`
                                            w-full h-full object-cover transition-transform duration-1000 ease-out
                                            ${isActive ? 'scale-100 grayscale-0' : 'scale-[1.75] grayscale'}
                                        `}
                                    />
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 z-20 flex flex-col justify-end p-10 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                                    {isActive ? (
                                        <div className="animate-[slide-up_0.6s_ease-out_forwards] overflow-hidden">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="h-0.5 w-12 bg-brand-primary"></span>
                                                <span className="text-brand-primary uppercase tracking-[0.2em] text-sm font-bold shadow-black drop-shadow-md">
                                                    {city.coordinates.lat.toFixed(1)}°N / {city.coordinates.lon.toFixed(1)}°E
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-7xl lg:text-9xl font-playfair font-bold text-white mb-6 leading-none drop-shadow-2xl">
                                                {city.name}
                                            </h3>
                                            
                                            <div className="flex items-center justify-between border-t border-white/20 pt-8 mt-4 backdrop-blur-sm bg-black/20 rounded-xl p-4">
                                                <div className="flex gap-12">
                                                     <div className="flex flex-col">
                                                        <span className="text-white/60 text-xs uppercase tracking-wider mb-1">Curated Spots</span>
                                                        <span className="text-2xl text-white font-light">{city.restaurants.length}</span>
                                                    </div>
                                                    <div className="hidden lg:flex flex-col">
                                                        <span className="text-white/60 text-xs uppercase tracking-wider mb-1">Cuisine Variety</span>
                                                        <span className="text-2xl text-white font-light">
                                                            {Array.from(new Set(city.restaurants.map(r => r.cuisine))).length} Types
                                                        </span>
                                                    </div>
                                                </div>
                                               
                                                <div className="group flex items-center gap-3 bg-white text-brand-dark px-6 py-3 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-primary hover:text-white transition-all duration-300">
                                                    Explore
                                                    <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="h-full flex items-end justify-center pb-12 transition-all duration-500 delay-100">
                                            <h3 className="text-4xl font-playfair font-bold text-white/40 [writing-mode:vertical-rl] rotate-180 tracking-[0.2em] uppercase whitespace-nowrap">
                                                {city.name}
                                            </h3>
                                        </div>
                                    )}
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Snap List */}
            <div 
                className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-12 [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: 'none' }}
            >
                {cities.map((city) => (
                    <Link 
                        key={city.id} 
                        to={`/city/${city.id}`} 
                        className="relative flex-shrink-0 w-[85vw] h-[550px] snap-center rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5"
                    >
                        <img src={city.image} alt={city.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="flex items-center gap-2 mb-4 opacity-80">
                                 <span className="h-px w-8 bg-brand-primary"></span>
                                 <span className="text-brand-primary uppercase tracking-widest text-xs font-bold">
                                    Travel Guide
                                </span>
                            </div>
                            <h3 className="text-6xl font-playfair font-bold text-white mb-4 leading-none">{city.name}</h3>
                            <div className="flex items-center justify-between border-t border-white/20 pt-6">
                                <span className="text-white/80 font-light">{city.restaurants.length} Spots</span>
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-dark">
                                    <ChevronRightIcon className="w-5 h-5" />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default FeaturedCitiesCarousel;
