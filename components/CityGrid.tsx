
import React from 'react';
import { Link } from 'react-router-dom';
import type { City } from '../types';
import ChevronRightIcon from './icons/ChevronRightIcon';

const CityGrid: React.FC<{ cities: City[] }> = ({ cities }) => {
    return (
        <section id="cities" className="relative min-h-screen bg-brand-dark py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
             {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 drop-shadow-2xl">
                        Global Destinations
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto text-lg font-light">
                        Explore the full list of cities I've visited and pinned on my map.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cities.map((city, index) => (
                        <Link 
                            to={`/city/${city.id}`} 
                            key={city.id} 
                            className="group relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl aspect-[3/4]"
                        >
                             {/* Image Layer */}
                             <img 
                                src={city.image} 
                                alt={city.name} 
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500"></div>
                            
                            {/* Content Layer */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-2 drop-shadow-lg">
                                        {city.name}
                                    </h3>
                                    <div className="flex items-center text-white/80 text-sm font-medium uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <span className="mr-2">Explore Guide</span>
                                        <ChevronRightIcon className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                             {/* Glass Border Highlight on Hover */}
                             <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-[2rem] transition-colors duration-300 pointer-events-none"></div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CityGrid;
