import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import type { City } from '../types';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

const FeaturedCitiesCarousel: React.FC<{ cities: City[] }> = ({ cities }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(prev => (prev === 0 ? cities.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex(prev => (prev === cities.length - 1 ? 0 : prev + 1));
    };
    
    const handleGoToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <section id="featured-cities" className="py-20 md:py-32 bg-white overflow-hidden">
            <div 
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <h2 className="text-4xl font-playfair font-bold text-brand-dark mb-16 text-center">Explore The Cities</h2>
                <div className="relative max-w-5xl mx-auto h-[60vh]">
                    {/* Slides container */}
                    <div className="relative w-full h-full flex items-center justify-center" style={{ perspective: '1000px' }}>
                        {cities.map((city, index) => {
                            const offset = index - currentIndex;
                            const absOffset = Math.abs(offset);
                            
                            const style: React.CSSProperties = {
                                position: 'absolute',
                                width: 'clamp(250px, 60vw, 600px)',
                                transition: 'transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.5s ease-in-out',
                                transform: `translateX(${offset * 40}%) scale(${1 - absOffset * 0.3}) rotateY(${offset * -10}deg)`,
                                opacity: absOffset > 2 ? 0 : (absOffset === 2 ? 0.2 : (absOffset === 1 ? 0.5 : 1)),
                                zIndex: cities.length - absOffset,
                                pointerEvents: absOffset === 0 ? 'auto' : 'none',
                            };

                            return (
                                <div key={city.id} style={style}>
                                    <Link to={`/city/${city.id}`} className="block w-full h-full group rounded-lg overflow-hidden shadow-2xl">
                                         <div className="relative w-full h-full">
                                            <img 
                                                src={city.image} 
                                                alt={city.name} 
                                                className="w-full h-full object-cover transition-transform duration-500" 
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                                <h3 className="text-white text-3xl md:text-5xl font-playfair font-bold tracking-wider">{city.name}</h3>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>

                    {/* Navigation Arrows */}
                    <button onClick={handlePrev} className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 sm:-translate-x-8 bg-white/60 hover:bg-white p-3 rounded-full shadow-md transition z-20">
                        <ChevronLeftIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                    <button onClick={handleNext} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 sm:translate-x-8 bg-white/60 hover:bg-white p-3 rounded-full shadow-md transition z-20">
                        <ChevronRightIcon className="w-6 h-6 text-brand-dark" />
                    </button>
                </div>
                {/* Navigation Dots */}
                <div className="flex justify-center space-x-3 mt-12">
                    {cities.map((_, slideIndex) => (
                        <button
                            key={slideIndex}
                            onClick={() => handleGoToSlide(slideIndex)}
                            className={`w-3 h-3 rounded-full transition-colors ${currentIndex === slideIndex ? 'bg-brand-dark' : 'bg-gray-300 hover:bg-gray-400'}`}
                            aria-label={`Go to slide ${slideIndex + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCitiesCarousel;