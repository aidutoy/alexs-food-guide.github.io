
import React from 'react';
import { Link } from 'react-router-dom';
import type { City } from '../types';

const CityGrid: React.FC<{ cities: City[] }> = ({ cities }) => {
    return (
        <section id="cities" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-playfair font-bold text-brand-dark mb-12 text-center">Explore The Cities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cities.map(city => (
                        <Link to={`/city/${city.id}`} key={city.id} className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 block">
                            <div className="relative h-80">
                                <img 
                                    src={city.image} 
                                    alt={city.name} 
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                    <h3 className="text-white text-5xl font-playfair font-bold tracking-wider">{city.name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CityGrid;
