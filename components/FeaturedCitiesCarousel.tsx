
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { City } from '../types';
import ChevronRightIcon from './icons/ChevronRightIcon';

const FeaturedCitiesCarousel: React.FC<{ cities: City[] }> = ({ cities }) => {
    const [activeId, setActiveId] = useState<string>(cities[0].id);

    return (
        <section id="featured-cities" className="py-24 bg-brand-dark relative overflow-hidden select-none min-h-[800px] flex flex-col justify-center">
            
            {/* AMBIENT BACKGROUND - Dynamic based on active city */}
            <div className="absolute inset-0 z-0">
                {cities.map((city) => (
                    <div 
                        key={`bg-${city.id}`}
                        className={`
                            absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out
                            ${city.id === activeId ? 'opacity-30' : 'opacity-0'}
                        `}
                        style={{ backgroundImage: `url(${city.image})` }}
                    >
                        <div className="absolute inset-0 bg-brand-dark/90 backdrop-blur-3xl"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-transparent to-brand-dark"></div>
                    </div>
                ))}
            </div>

            {/* Header */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 mb-12 text-center">
                 <h2 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Journey</span>
                </h2>
                <p className="text-white/50 text-lg font-light max-w-2xl mx-auto">
                    Select a city to explore the full guide.
                </p>
            </div>

            {/* Desktop Accordion */}
            <div className="hidden md:flex w-full h-[600px] justify-center px-4 relative z-10">
                <div className="flex w-full max-w-[1600px] gap-4">
                    {cities.map((city) => {
                        const isActive = activeId === city.id;
                        return (
                            <Link
                                key={city.id}
                                to={`/city/${city.id}`}
                                onMouseEnter={() => setActiveId(city.id)}
                                className={`
                                    relative h-full transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer overflow-hidden rounded-3xl border border-white/10
                                    ${isActive ? 'flex-[12]' : 'flex-[1] hover:flex-[1.5]'}
                                `}
                            >
                                {/* Image Container */}
                                <div className="absolute inset-0 w-full h-full bg-zinc-900">
                                    <img 
                                        src={city.image} 
                                        alt={city.name} 
                                        className={`
                                            w-full h-full object-cover transition-transform duration-[1.5s] ease-out
                                            ${isActive ? 'scale-100 grayscale-0' : 'scale-[2] grayscale opacity-50'}
                                        `}
                                    />
                                    <div className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${isActive ? 'opacity-20' : 'opacity-60'}`}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                </div>

                                {/* Content Overlay */}
                                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12">
                                    {isActive ? (
                                        <div className="animate-[slide-up_0.6s_ease-out_forwards] overflow-hidden">
                                            <div className="flex items-center gap-4 mb-4">
                                                <span className="h-0.5 w-12 bg-brand-primary"></span>
                                                <span className="text-brand-primary uppercase tracking-[0.2em] text-sm font-bold shadow-black drop-shadow-md">
                                                    Travel Guide
                                                </span>
                                            </div>
                                            
                                            <h3 className="text-7xl lg:text-9xl font-playfair font-bold text-white mb-8 leading-none drop-shadow-2xl">
                                                {city.name}
                                            </h3>
                                            
                                            <div className="flex flex-wrap items-end justify-between gap-6 border-t border-white/20 pt-8 backdrop-blur-md bg-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors">
                                                <div className="flex gap-12 text-white">
                                                     <div className="flex flex-col">
                                                        <span className="text-white/50 text-xs uppercase tracking-wider mb-1">Coordinates</span>
                                                        <span className="text-xl font-light font-mono">{city.coordinates.lat.toFixed(2)}°N, {city.coordinates.lon.toFixed(2)}°E</span>
                                                    </div>
                                                     <div className="flex flex-col">
                                                        <span className="text-white/50 text-xs uppercase tracking-wider mb-1">Curated Spots</span>
                                                        <span className="text-xl font-light">{city.restaurants.length} Locations</span>
                                                    </div>
                                                </div>
                                               
                                                <div className="group flex items-center gap-3 bg-white text-brand-dark px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-xl hover:shadow-brand-primary/25">
                                                    Explore City
                                                    <ChevronRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="h-full flex items-center justify-center">
                                            {/* Vertical Text for Inactive State */}
                                            <h3 className="text-3xl font-playfair font-bold text-white/50 [writing-mode:vertical-rl] rotate-180 tracking-[0.3em] uppercase whitespace-nowrap transition-colors hover:text-white">
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
                className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 pb-12 [&::-webkit-scrollbar]:hidden relative z-10"
                style={{ scrollbarWidth: 'none' }}
            >
                {cities.map((city) => (
                    <Link 
                        key={city.id} 
                        to={`/city/${city.id}`} 
                        className="relative flex-shrink-0 w-[85vw] h-[500px] snap-center rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10"
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
                            <h3 className="text-5xl font-playfair font-bold text-white mb-4 leading-none">{city.name}</h3>
                            <div className="flex items-center justify-between border-t border-white/20 pt-6">
                                <span className="text-white/80 font-light">{city.restaurants.length} Spots</span>
                                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-dark">
                                    <ChevronRightIcon className="w-6 h-6" />
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
