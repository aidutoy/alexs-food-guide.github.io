import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { City } from '../types';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

const CityCarousel: React.FC<{ cities: City[] }> = ({ cities }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? cities.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === cities.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
    
    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <section id="cities" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-playfair font-bold text-brand-dark mb-12 text-center">Explore The Cities</h2>
                <div className="relative max-w-4xl mx-auto">
                    <div className="h-[60vh] overflow-hidden w-full relative rounded-lg shadow-2xl">
                        {cities.map((city, index) => (
                             <div
                                key={city.id}
                                className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                             >
                                <Link to={`/city/${city.id}`}>
                                    <img src={city.image} alt={city.name} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                        <h3 className="text-white text-5xl font-playfair font-bold tracking-wider">{city.name}</h3>
                                    </div>
                                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10"></div>
                                </Link>
                             </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button onClick={prevSlide} className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 bg-white/50 hover:bg-white p-3 rounded-full shadow-md transition">
                        <ChevronLeftIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                    <button onClick={nextSlide} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 bg-white/50 hover:bg-white p-3 rounded-full shadow-md transition">
                        <ChevronRightIcon className="w-6 h-6 text-brand-dark" />
                    </button>

                    {/* Navigation Dots */}
                    <div className="absolute -bottom-12 left-0 right-0 flex justify-center space-x-3">
                        {cities.map((_, slideIndex) => (
                            <button
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className={`w-3 h-3 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-brand-dark' : 'bg-gray-300 hover:bg-gray-400'}`}
                                aria-label={`Go to slide ${slideIndex + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CityCarousel;
