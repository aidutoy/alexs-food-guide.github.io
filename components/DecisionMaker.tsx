
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cities } from '../data/mockData';
import type { Restaurant } from '../types';
import ArrowUpRightIcon from './icons/ArrowUpRightIcon';
import KnifeIcon from './icons/KnifeIcon';

const DecisionMaker: React.FC = () => {
    const [selectedCityId, setSelectedCityId] = useState<string>(cities[0].id);
    const [isSpinning, setIsSpinning] = useState(false);
    const [result, setResult] = useState<Restaurant | null>(null);
    const [displayCandidate, setDisplayCandidate] = useState<string>("");
    
    // Refs for animation
    const intervalRef = useRef<number | null>(null);
    const timeoutRef = useRef<number | null>(null);

    const selectedCity = cities.find(c => c.id === selectedCityId) || cities[0];

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    const handleCitySelect = (cityId: string) => {
        setSelectedCityId(cityId);
        setResult(null);
        setDisplayCandidate("");
    };

    const handleSpin = () => {
        if (isSpinning) return;
        
        const pool = selectedCity.restaurants;
        if (pool.length === 0) return;

        setIsSpinning(true);
        setResult(null);

        // Animation logic: cycle names rapidly
        let counter = 0;
        const totalDuration = 2000; // 2 seconds spin
        const speed = 50; // ms per name change

        intervalRef.current = window.setInterval(() => {
            const randomIdx = Math.floor(Math.random() * pool.length);
            setDisplayCandidate(pool[randomIdx].name);
            counter += speed;
        }, speed);

        // Stop and pick winner
        timeoutRef.current = window.setTimeout(() => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            
            // Pick random winner
            const finalIndex = Math.floor(Math.random() * pool.length);
            const winner = pool[finalIndex];
            
            setDisplayCandidate(winner.name);
            setResult(winner);
            setIsSpinning(false);
        }, totalDuration);
    };

    return (
        <section className="py-24 bg-brand-dark relative border-t border-white/5 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <div className="mb-10">
                    <div className="flex items-center justify-center gap-2 mb-4 opacity-0 animate-[slide-up_0.6s_ease-out_forwards]">
                        <span className="text-brand-primary text-xs font-bold uppercase tracking-[0.2em]">Indecisive?</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 opacity-0 animate-[slide-up_0.6s_ease-out_0.1s_forwards]">
                        I Don't Know <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">What To Eat</span>
                    </h2>
                    <p className="text-white/50 font-light text-lg mb-8 opacity-0 animate-[slide-up_0.6s_ease-out_0.2s_forwards]">
                        Select a city and let the guide decide your next meal.
                    </p>
                </div>

                {/* City Selector */}
                <div className="flex flex-wrap justify-center gap-3 mb-12 opacity-0 animate-[slide-up_0.6s_ease-out_0.3s_forwards]">
                    {cities.map((city) => (
                        <button
                            key={city.id}
                            onClick={() => handleCitySelect(city.id)}
                            className={`
                                px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                                ${selectedCityId === city.id 
                                    ? 'bg-white text-brand-dark shadow-lg scale-105' 
                                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                                }
                            `}
                        >
                            {city.name}
                        </button>
                    ))}
                </div>

                {/* Action Area */}
                <div className="min-h-[300px] flex flex-col items-center justify-start opacity-0 animate-[slide-up_0.6s_ease-out_0.4s_forwards]">
                    
                    {!result && (
                        <div className="flex flex-col items-center">
                            <button
                                onClick={handleSpin}
                                disabled={isSpinning}
                                className={`
                                    group relative w-20 h-20 rounded-full flex items-center justify-center
                                    bg-gradient-to-br from-brand-primary to-orange-500
                                    shadow-[0_0_40px_-10px_rgba(173,52,62,0.5)]
                                    transition-all duration-300
                                    ${isSpinning ? 'scale-90 opacity-80 cursor-wait' : 'hover:scale-110 hover:shadow-[0_0_60px_-10px_rgba(173,52,62,0.7)]'}
                                `}
                            >
                                <KnifeIcon className={`w-8 h-8 text-white transition-transform duration-700 ${isSpinning ? 'animate-spin' : ''}`} />
                            </button>
                            
                            <div className="mt-8 h-12 flex items-center justify-center">
                                {isSpinning ? (
                                    <span className="text-3xl font-playfair font-bold text-white/80 animate-pulse">
                                        {displayCandidate}
                                    </span>
                                ) : (
                                    <span className="text-white/30 text-sm tracking-widest uppercase">Tap to Decide</span>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Result Card */}
                    {result && !isSpinning && (
                        <div className="w-full max-w-md animate-[slide-up_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                            <p className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-4">You are going to</p>
                            
                            <Link 
                                to={`/city/${selectedCityId}?restaurant=${result.id}`}
                                className="block group relative bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:border-brand-primary/50 transition-all duration-500"
                            >
                                <div className="aspect-[16/9] overflow-hidden">
                                    <img 
                                        src={result.mainImage.url} 
                                        alt={result.name} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                </div>
                                
                                <div className="absolute bottom-0 left-0 w-full p-6 text-left">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <span className="inline-block px-2 py-1 mb-2 rounded bg-brand-primary/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">
                                                {result.cuisine}
                                            </span>
                                            <h3 className="text-3xl font-playfair font-bold text-white leading-none mb-1">
                                                {result.name}
                                            </h3>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white text-brand-dark flex items-center justify-center transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                            <ArrowUpRightIcon className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <button 
                                onClick={handleSpin}
                                className="mt-6 text-white/40 hover:text-white text-xs uppercase tracking-widest transition-colors"
                            >
                                Spin Again
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default DecisionMaker;
