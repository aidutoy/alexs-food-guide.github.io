
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { City } from '../types';
import ChevronRightIcon from './icons/ChevronRightIcon';

const CityGrid: React.FC<{ cities: City[] }> = ({ cities }) => {
    const [activeCityId, setActiveCityId] = useState<string>(cities[0].id);
    const cityRefs = useRef<(HTMLAnchorElement | null)[]>([]);

    // Helper to find the active city object
    const activeCity = cities.find(c => c.id === activeCityId) || cities[0];

    // Intersection Observer to handle scroll updates on mobile/tablet
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cityId = entry.target.getAttribute('data-city-id');
                        if (cityId) {
                            setActiveCityId(cityId);
                        }
                    }
                });
            },
            {
                rootMargin: '-40% 0px -40% 0px', // Trigger when item is in the middle of the viewport
                threshold: 0
            }
        );

        cityRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            observer.disconnect();
        };
    }, [cities]);

    return (
        <section className="min-h-screen bg-brand-dark text-white relative selection:bg-brand-primary selection:text-white">
            <div className="flex flex-col md:flex-row">
                {/* Left Panel - Sticky Image Preview */}
                {/* Mobile: 40vh height, sticky under navbar. Tablet/Desktop: 100vh, sticky top */}
                <div className="w-full md:w-1/2 h-[40vh] md:h-screen sticky top-16 md:top-0 z-0 overflow-hidden bg-black">
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
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 md:from-brand-dark/80 via-transparent to-transparent opacity-80 md:opacity-60"></div>
                            
                            {/* Overlay Info */}
                            <div className="absolute bottom-8 left-6 md:bottom-16 md:left-12 z-10">
                                <div className="overflow-hidden mb-2 md:mb-4">
                                    <p className={`text-brand-primary font-mono text-xl md:text-3xl font-bold tracking-widest uppercase transition-transform duration-500 ${activeCity.id === city.id ? 'translate-y-0' : 'translate-y-10'}`}>
                                        {city.coordinates.lat.toFixed(2)}° N, {city.coordinates.lon.toFixed(2)}° E
                                    </p>
                                </div>
                                <div className="overflow-hidden">
                                    <h2 className={`text-6xl md:text-9xl font-playfair font-bold text-white leading-none drop-shadow-2xl transition-transform duration-700 delay-100 ${activeCity.id === city.id ? 'translate-y-0' : 'translate-y-full'}`}>
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
                <div className="w-full md:w-1/2 min-h-[60vh] md:min-h-screen bg-brand-dark border-l border-white/10 relative z-10">
                    <div className="p-6 md:p-16 pt-8 md:pt-32 pb-32">
                        <div className="mb-12 md:mb-20 pl-6 md:pl-8 border-l-2 border-brand-primary">
                            <span className="text-brand-primary font-medium tracking-widest uppercase text-xs block mb-2">The Collection</span>
                            <h3 className="text-3xl md:text-5xl font-playfair font-bold text-white mb-4 md:mb-6">Select Destination</h3>
                            <p className="text-white/50 font-light leading-relaxed max-w-md text-base md:text-lg">
                                A curated index of gastronomic landmarks. Hover to preview, click to explore.
                            </p>
                        </div>

                        <div className="flex flex-col">
                            {cities.map((city, index) => (
                                <Link
                                    key={city.id}
                                    to={`/city/${city.id}`}
                                    ref={(el) => { cityRefs.current[index] = el; }}
                                    data-city-id={city.id}
                                    onMouseEnter={() => setActiveCityId(city.id)}
                                    className="group relative py-8 md:py-12 px-4 md:px-8 -mx-4 md:-mx-8 transition-all duration-500 hover:bg-white/[0.03]"
                                >
                                    {/* Hover Background Strip */}
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top"></div>

                                    <div className="flex items-center justify-between relative z-10">
                                        <div className="flex items-baseline gap-6 md:gap-12">
                                            <span className="font-mono text-white/20 text-xs md:text-sm group-hover:text-brand-primary transition-colors duration-300">
                                                {(index + 1).toString().padStart(2, '0')}
                                            </span>
                                            <div>
                                                <h4 className="text-3xl md:text-4xl font-playfair font-bold text-white group-hover:translate-x-2 transition-transform duration-500">
                                                    {city.name}
                                                </h4>
                                                <div className="flex items-center gap-3 mt-2 md:mt-3 md:opacity-0 md:group-hover:opacity-100 transform md:-translate-y-2 md:group-hover:translate-y-0 transition-all duration-500 delay-75">
                                                    <span className="h-px w-4 md:w-6 bg-white/20"></span>
                                                    <p className="text-white/50 text-xs md:text-sm font-light">
                                                        {city.restaurants.length} Recommended Spots
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 transform translate-x-0 md:translate-x-4 md:group-hover:translate-x-0">
                                            <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/10 flex items-center justify-center bg-white text-brand-dark">
                                                <ChevronRightIcon className="w-4 h-4 md:w-5 md:h-5" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Separator Line */}
                                    <div className="absolute bottom-0 left-4 md:left-8 right-0 h-px bg-white/5 group-hover:bg-white/10 transition-colors duration-500"></div>
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
