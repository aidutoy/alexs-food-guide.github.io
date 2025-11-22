
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { City } from '../types';
import ChevronRightIcon from './icons/ChevronRightIcon';

const CityGrid: React.FC<{ cities: City[] }> = ({ cities }) => {
    const [activeCityId, setActiveCityId] = useState<string>(cities[0].id);

    // Helper to find the active city object for Desktop view
    const activeCity = cities.find(c => c.id === activeCityId) || cities[0];

    return (
        <section className="min-h-screen bg-brand-dark text-white relative selection:bg-brand-primary selection:text-white">
            
            {/* ========================================== */}
            {/* MOBILE & TABLET VIEW (Simple Card Grid)    */}
            {/* ========================================== */}
            <div className="lg:hidden pt-24 pb-16 px-4 sm:px-6 max-w-7xl mx-auto">
                <div className="mb-12 text-center">
                    <h1 className="text-5xl font-playfair font-bold text-white mb-4">
                        Choose a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">City</span>
                    </h1>
                    <p className="text-white/60 font-light text-lg">A handful of cities I have personally experienced. Hover over to preview. Click to explore.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cities.map((city) => (
                        <Link 
                            key={city.id} 
                            to={`/city/${city.id}`}
                            className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
                        >
                            <img 
                                src={city.image} 
                                alt={city.name} 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 transition-opacity"></div>
                            
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                             <span className="w-2 h-2 rounded-full bg-brand-primary"></span>
                                             <span className="text-white/60 text-xs font-mono uppercase tracking-widest">
                                                {city.coordinates.lat.toFixed(1)}°N, {city.coordinates.lon.toFixed(1)}°E
                                             </span>
                                        </div>
                                        <h3 className="text-4xl font-playfair font-bold text-white leading-none">{city.name}</h3>
                                    </div>
                                    
                                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-white group-hover:text-brand-dark transition-all">
                                         <ChevronRightIcon className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                                    <span className="text-sm font-medium text-white/80">{city.restaurants.length} Curated Spots</span>
                                    <span className="text-xs text-brand-primary font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform">Explore</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>


            {/* ========================================== */}
            {/* DESKTOP VIEW (Split Layout)                */}
            {/* ========================================== */}
            <div className="hidden lg:flex flex-row">
                {/* Left Panel - Sticky Image Preview */}
                <div className="w-1/2 h-screen sticky top-0 z-0 overflow-hidden bg-black">
                     {/* Render all images absolute to transition opacity */}
                     {cities.map((city) => (
                        <div
                            key={city.id}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${activeCity.id === city.id ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <img
                                src={city.image}
                                alt={city.name}
                                className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-out ${activeCity.id === city.id ? 'scale-110' : 'scale-100'}`}
                            />
                            <div className="absolute inset-0 bg-black/20"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-60"></div>
                            
                            {/* Overlay Info */}
                            <div className="absolute bottom-16 left-12 z-10">
                                <div className="overflow-hidden mb-4">
                                    <p className={`text-brand-primary font-mono text-3xl font-bold tracking-widest uppercase transition-transform duration-500 ${activeCity.id === city.id ? 'translate-y-0' : 'translate-y-10'}`}>
                                        {city.coordinates.lat.toFixed(2)}° N, {city.coordinates.lon.toFixed(2)}° E
                                    </p>
                                </div>
                                <div className="overflow-hidden">
                                    <h2 className={`text-9xl font-playfair font-bold text-white leading-none drop-shadow-2xl transition-transform duration-700 delay-100 ${activeCity.id === city.id ? 'translate-y-0' : 'translate-y-full'}`}>
                                        {city.name}
                                    </h2>
                                </div>
                            </div>
                        </div>
                     ))}
                     
                     {/* Grain Overlay */}
                     <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
                </div>

                {/* Right Panel - Scrollable List */}
                <div className="w-1/2 min-h-screen bg-brand-dark border-l border-white/10 relative z-10">
                    <div className="p-16 pt-32 pb-32">
                        <div className="mb-20 pl-8 border-l-2 border-brand-primary">
                            <span className="text-brand-primary font-medium tracking-widest uppercase text-xs block mb-2">The Collection</span>
                            <h3 className="text-5xl font-playfair font-bold text-white mb-6">
                                Choose a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">City</span>
                            </h3>
                            <p className="text-white/50 font-light leading-relaxed max-w-md text-lg">
                                A handful of cities I have personally experienced. Hover over to preview. Click to explore.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            {cities.map((city, index) => (
                                <Link
                                    key={city.id}
                                    to={`/city/${city.id}`}
                                    onMouseEnter={() => setActiveCityId(city.id)}
                                    className="group relative py-12 px-8 -mx-8 transition-all duration-500 hover:bg-white/[0.03]"
                                >
                                    {/* Hover Background Strip */}
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

                                    <div className="flex items-center justify-between relative z-10">
                                        <div className="flex items-baseline gap-12">
                                            <span className="font-mono text-white/20 text-sm group-hover:text-brand-primary transition-colors duration-300">
                                                {(index + 1).toString().padStart(2, '0')}
                                            </span>
                                            <div>
                                                <h4 className="text-4xl font-playfair font-bold text-white group-hover:translate-x-2 transition-transform duration-500">
                                                    {city.name}
                                                </h4>
                                                <div className="flex items-center gap-3 mt-3 opacity-0 group-hover:opacity-100 transform -translate-y-2 group-hover:translate-y-0 transition-all duration-500 delay-75">
                                                    <span className="h-px w-6 bg-white/20"></span>
                                                    <p className="text-white/50 text-sm font-light">
                                                        {city.restaurants.length} Recommended Spots
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                                            <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center bg-white text-brand-dark">
                                                <ChevronRightIcon className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Separator Line */}
                                    <div className="absolute bottom-0 left-8 right-0 h-px bg-white/5 group-hover:bg-white/10 transition-colors duration-500"></div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CityGrid;
