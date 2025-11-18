import React from 'react';
import { Link } from 'react-router-dom';
import type { City } from '../types';

interface MapProps {
    cities: City[];
}

const Map: React.FC<MapProps> = ({ cities }) => {
    // Simple equirectangular projection to convert lat/lon to percentage-based coordinates
    const convertCoordsToPercent = (lat: number, lon: number) => {
        const x = (lon + 180) / 360 * 100;
        const y = (90 - lat) / 180 * 100;
        return {
            left: `${x}%`,
            top: `${y}%`,
        };
    };

    return (
        <section id="map" className="py-20 md:py-32 bg-brand-light">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-playfair font-bold text-brand-dark mb-16 text-center">Find Me Around The World</h2>

                <div className="relative aspect-video w-full max-w-6xl mx-auto rounded-lg shadow-2xl overflow-hidden bg-gray-700">
                    <img
                        src="https://images.unsplash.com/photo-1564553223989-13751a142576?q=80&w=2070&auto=format&fit=crop"
                        alt="World map"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-dark/30"></div>

                    {cities.map(city => {
                        const { left, top } = convertCoordsToPercent(city.coordinates.lat, city.coordinates.lon);

                        return (
                            <Link
                                key={city.id}
                                to={`/city/${city.id}`}
                                className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
                                style={{ left, top }}
                                aria-label={`Go to ${city.name} page`}
                            >
                                <span className="absolute block w-4 h-4 rounded-full bg-brand-primary opacity-75 animate-pulse-dot" style={{ animationDelay: `${Math.random() * 2}s` }}></span>
                                <span className="relative block w-4 h-4 rounded-full bg-brand-primary border-2 border-white ring-1 ring-brand-primary group-hover:scale-125 transition-transform duration-300"></span>
                                <span className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 whitespace-nowrap bg-brand-dark text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                                    {city.name}
                                    <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-brand-dark"></span>
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Map;
