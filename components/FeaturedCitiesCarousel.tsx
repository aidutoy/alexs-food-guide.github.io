
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { City } from '../types';
import ChevronRightIcon from './icons/ChevronRightIcon';

const FeaturedCitiesCarousel: React.FC<{ cities: City[] }> = ({ cities }) => {
    const [activeId, setActiveId] = useState<string>(cities[0].id);

    return (
        <section id="featured-cities" className="relative py-16 md:pt-48 md:pb-24 overflow-hidden min-h-[100vh] md:min-h-[800px] flex items-center select-none -mt-32 z-0">
             {/* Seamless Transition Gradient - Extended to cover the bottom of Why section */}
             <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-brand-dark via-brand-dark/90 to-transparent z-10 pointer-events-none"></div>

             {/* Ambient Background System */}
             <div className="absolute inset-0">
                {cities.map((city) => (
                    <div
                        key={`bg-${city.id}`}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeId === city.id ? 'opacity-60' : 'opacity-0'}`}
                    >
                        <img 
                            src={city.image} 
                            alt="" 
                            className="w-full h-full object-cover blur-3xl scale-110" 
                        />
                    </div>
                ))}
                {/* Gradient Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/90 via-brand-dark/60 to-brand-dark/90"></div>
             </div>

             <div className="relative z-20 max-w-7xl mx-auto px-4 w-full">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-white mb-6 drop-shadow-2xl">
                        Culinary Destinations
                    </h2>
                    <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-xl font-light drop-shadow-lg">
                        Discover the unique flavors and hidden gems of the world's most vibrant cities.
                    </p>
                </div>

                {/* Desktop Cinematic Accordion */}
                <div className="hidden md:flex h-[600px] w-full gap-4">
                    {cities.map((city) => {
                        const isActive = activeId === city.id;
                        return (
                            <div
                                key={city.id}
                                onClick={() => setActiveId(city.id)}
                                className={`
                                    relative rounded-[2.5rem] overflow-hidden cursor-pointer 
                                    transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                                    shadow-2xl border border-white/10
                                    ${isActive ? 'flex-[3.5]' : 'flex-[0.5] hover:flex-[0.75] hover:brightness-110'}
                                `}
                            >
                                {/* Card Image */}
                                <img 
                                    src={city.image} 
                                    alt={city.name} 
                                    className={`
                                        absolute inset-0 w-full h-full object-cover
                                        transition-transform duration-1000
                                        ${isActive ? 'animate-slow-zoom' : 'grayscale-[0.5] scale-100'}
                                    `}
                                />
                                
                                {/* Cinematic Dark Gradient Overlay */}
                                <div className={`
                                    absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent
                                    transition-opacity duration-500
                                    ${isActive ? 'opacity-100' : 'opacity-60'}
                                `}></div>

                                {/* Content Container */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end overflow-hidden">
                                    {isActive ? (
                                        <div className="max-w-xl">
                                            <h3 className="text-6xl lg:text-8xl font-playfair font-bold text-white leading-none drop-shadow-lg animate-[slide-up_0.6s_ease-out_forwards]">
                                                {city.name}
                                            </h3>
                                            <div className="opacity-0 animate-[slide-up_0.6s_ease-out_0.1s_forwards]">
                                                <p className="text-white/90 text-xl mt-6 line-clamp-2 font-roboto font-light text-shadow-sm">
                                                    A curated guide to the best restaurants, bars, and cafes in {city.name}.
                                                </p>
                                            </div>
                                            <div className="opacity-0 animate-[slide-up_0.6s_ease-out_0.2s_forwards] mt-8">
                                                 <Link 
                                                    to={`/city/${city.id}`}
                                                    className="
                                                        group inline-flex items-center gap-3 
                                                        bg-white/10 hover:bg-white/20 backdrop-blur-md 
                                                        text-white border border-white/30 
                                                        px-8 py-4 rounded-full transition-all duration-300
                                                        hover:scale-105 hover:shadow-lg hover:border-white/60
                                                    "
                                                >
                                                    <span className="font-medium tracking-wider uppercase text-sm">Explore Guide</span>
                                                    <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="h-full flex items-end justify-center pb-6 transition-opacity duration-300 delay-100">
                                            <h3 className="text-4xl font-playfair font-bold text-white/80 [writing-mode:vertical-rl] rotate-180 tracking-widest uppercase whitespace-nowrap drop-shadow-md">
                                                {city.name}
                                            </h3>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile View (Snap Cards) */}
                <div 
                    className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 [&::-webkit-scrollbar]:hidden"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {cities.map((city) => (
                        <div key={city.id} className="relative flex-shrink-0 w-[85vw] h-[60vh] min-h-[450px] max-h-[600px] snap-center rounded-[2.5rem] overflow-hidden shadow-xl border border-white/10">
                             <Link to={`/city/${city.id}`} className="block w-full h-full group">
                                <img 
                                    src={city.image} 
                                    alt={city.name} 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 p-6 w-full">
                                    <h3 className="text-4xl font-playfair font-bold text-white mb-3 drop-shadow-md">{city.name}</h3>
                                    <p className="text-white/80 text-base font-light mb-6 line-clamp-2">Discover the best food in {city.name}.</p>
                                    <div className="flex items-center gap-2 text-white font-medium uppercase tracking-widest text-xs border-t border-white/20 pt-4">
                                        <span>View City Guide</span>
                                        <ChevronRightIcon className="w-4 h-4" />
                                    </div>
                                </div>
                             </Link>
                        </div>
                    ))}
                </div>
             </div>
        </section>
    );
};

export default FeaturedCitiesCarousel;
