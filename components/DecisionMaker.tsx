import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cities } from '../data/mockData';
import type { Restaurant } from '../types';
import ArrowUpRightIcon from './icons/ArrowUpRightIcon';
import KnifeIcon from './icons/KnifeIcon';
import BookmarkIcon from './icons/BookmarkIcon';
import { useSaved } from '../context/SavedContext';

const DecisionMaker: React.FC = () => {
    const [selectedCityId, setSelectedCityId] = useState<string>(cities[0].id);
    const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
    const [selectedDietary, setSelectedDietary] = useState<string>('All');
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [isSpinning, setIsSpinning] = useState(false);
    const [result, setResult] = useState<Restaurant | null>(null);
    const [displayCandidate, setDisplayCandidate] = useState<string>("");
    
    const { isSaved, toggleSave } = useSaved();

    // Refs for animation
    const intervalRef = useRef<number | null>(null);
    const timeoutRef = useRef<number | null>(null);

    const selectedCity = cities.find(c => c.id === selectedCityId) || cities[0];

    // Dietary & Category options
    const dietaryOptions = ['All', 'Vegetarian', 'Vegan', 'Gluten-Free', 'Lactose-Free'];
    const categoryOptions = ['All', 'Pizza / Italian', 'Asian / Sushi', 'Casual / Burgers', 'Café / Brunch'];

    // Pre-spin filtered pool calculation
    const filteredPool = selectedCity.restaurants.filter(r => {
        // Price filter
        if (selectedPrice !== null && r.ratings.price !== selectedPrice) {
            return false;
        }

        // Dietary filter
        if (selectedDietary !== 'All') {
            const tagKey = selectedDietary.toLowerCase();
            const hasDiet = r.tags?.some(t => t.toLowerCase().includes(tagKey));
            if (!hasDiet) return false;
        }

        // Category filter
        if (selectedCategory !== 'All') {
            const lowerCuisine = r.cuisine.toLowerCase();
            const tags = r.tags?.map(t => t.toLowerCase()) || [];
            if (selectedCategory === 'Pizza / Italian') {
                if (!lowerCuisine.includes('italian') && !lowerCuisine.includes('pizza') && !tags.includes('pizza') && !tags.includes('italian')) return false;
            } else if (selectedCategory === 'Asian / Sushi') {
                if (!lowerCuisine.includes('sushi') && !lowerCuisine.includes('asian') && !lowerCuisine.includes('vietnamese') && !lowerCuisine.includes('chinese') && !lowerCuisine.includes('japanese')) return false;
            } else if (selectedCategory === 'Casual / Burgers') {
                if (!lowerCuisine.includes('burger') && !tags.includes('burger') && !tags.includes('fast casual') && !tags.includes('takeaway')) return false;
            } else if (selectedCategory === 'Café / Brunch') {
                if (!lowerCuisine.includes('café') && !lowerCuisine.includes('cafe') && !tags.includes('breakfast') && !tags.includes('brunch') && !tags.includes('coffee')) return false;
            }
        }

        return true;
    });

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

    const resetFilters = () => {
        setSelectedPrice(null);
        setSelectedDietary('All');
        setSelectedCategory('All');
        setResult(null);
        setDisplayCandidate("");
    };

    const handleSpin = () => {
        if (isSpinning) return;
        if (filteredPool.length === 0) return;

        setIsSpinning(true);
        setResult(null);

        // Animation logic: cycle names rapidly
        let counter = 0;
        const totalDuration = 2000; // 2 seconds spin
        const speed = 50; // ms per name change

        intervalRef.current = window.setInterval(() => {
            const randomIdx = Math.floor(Math.random() * filteredPool.length);
            setDisplayCandidate(filteredPool[randomIdx].name);
            counter += speed;
        }, speed);

        // Stop and pick winner
        timeoutRef.current = window.setTimeout(() => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            
            // Pick random winner from the filtered pool
            const finalIndex = Math.floor(Math.random() * filteredPool.length);
            const winner = filteredPool[finalIndex];
            
            setDisplayCandidate(winner.name);
            setResult(winner);
            setIsSpinning(false);
        }, totalDuration);
    };

    return (
        <section className="py-16 md:py-24 bg-brand-dark relative border-t border-white/5 overflow-hidden text-white">
            {/* Background Ambient Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-brand-primary/5 rounded-full blur-[140px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                <div className="mb-10">
                    <div className="flex items-center justify-center gap-2 mb-4 animate-[slide-up_0.6s_ease-out_forwards]">
                        <span className="text-brand-primary text-xs font-bold uppercase tracking-[0.25em]">Indecisive?</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4 animate-[slide-up_0.6s_ease-out_0.1s_forwards]">
                        I Don't Know <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">What To Eat</span>
                    </h1>
                    <p className="text-white/50 font-light text-base md:text-lg mb-8 animate-[slide-up_0.6s_ease-out_0.2s_forwards]">
                        Filter by destination, budget, or dietary needs—then spin the wheel to pick your meal!
                    </p>
                </div>

                {/* City Selector */}
                <div className="mb-8">
                    <span className="text-[11px] uppercase tracking-widest font-mono text-white/40 block mb-3">1. Select City</span>
                    <div className="flex flex-wrap justify-center gap-2">
                        {cities.map((city) => (
                            <button
                                key={city.id}
                                onClick={() => handleCitySelect(city.id)}
                                className={`
                                    px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 border
                                    ${selectedCityId === city.id 
                                        ? 'bg-white text-brand-dark border-white shadow-lg scale-105 font-bold' 
                                        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border-white/10'
                                    }
                                `}
                            >
                                {city.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pre-Spin Filters Box */}
                <div className="bg-zinc-950/80 border border-white/10 rounded-3xl p-6 mb-10 max-w-2xl mx-auto shadow-xl">
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                        <span className="text-xs font-mono uppercase tracking-widest text-brand-primary font-bold">
                            2. Pre-Spin Filters (Optional)
                        </span>
                        {(selectedPrice !== null || selectedDietary !== 'All' || selectedCategory !== 'All') && (
                            <button
                                onClick={resetFilters}
                                className="text-xs text-white/40 hover:text-brand-primary transition-colors underline"
                            >
                                Reset filters
                            </button>
                        )}
                    </div>

                    <div className="space-y-4 text-left">
                        {/* Price Chips */}
                        <div>
                            <span className="text-[11px] uppercase tracking-wider text-white/40 block mb-2 font-medium">Budget</span>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    onClick={() => setSelectedPrice(null)}
                                    className={`px-3 py-1 rounded-full text-xs transition-all ${selectedPrice === null ? 'bg-brand-primary text-white font-bold' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                                >
                                    Any Price
                                </button>
                                {[1, 2, 3].map(price => (
                                    <button
                                        key={price}
                                        onClick={() => setSelectedPrice(price === selectedPrice ? null : price)}
                                        className={`px-3 py-1 rounded-full text-xs font-playfair transition-all ${selectedPrice === price ? 'bg-brand-primary text-white font-bold' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                                    >
                                        {Array(price).fill('€').join('')}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Dietary Chips */}
                        <div>
                            <span className="text-[11px] uppercase tracking-wider text-white/40 block mb-2 font-medium">Dietary</span>
                            <div className="flex flex-wrap gap-2">
                                {dietaryOptions.map(option => (
                                    <button
                                        key={option}
                                        onClick={() => setSelectedDietary(option)}
                                        className={`px-3 py-1 rounded-full text-xs transition-all ${selectedDietary === option ? 'bg-brand-primary text-white font-bold' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Category Chips */}
                        <div>
                            <span className="text-[11px] uppercase tracking-wider text-white/40 block mb-2 font-medium">Cuisine / Vibe</span>
                            <div className="flex flex-wrap gap-2">
                                {categoryOptions.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-3 py-1 rounded-full text-xs transition-all ${selectedCategory === cat ? 'bg-brand-primary text-white font-bold' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Filtered Pool Status Indicator */}
                    <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                        <span className="text-white/50">Matching Spots in {selectedCity.name}:</span>
                        <span className={`font-mono font-bold ${filteredPool.length > 0 ? 'text-brand-primary' : 'text-red-400'}`}>
                            {filteredPool.length} {filteredPool.length === 1 ? 'restaurant' : 'restaurants'}
                        </span>
                    </div>
                </div>

                {/* Spin Action Area */}
                <div className="min-h-[280px] flex flex-col items-center justify-start">
                    {filteredPool.length === 0 ? (
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center max-w-md">
                            <p className="text-white/60 text-sm mb-4">
                                No restaurants match this exact combination in {selectedCity.name}.
                            </p>
                            <button
                                onClick={resetFilters}
                                className="px-5 py-2 rounded-xl bg-brand-primary text-white text-xs font-bold uppercase tracking-wider"
                            >
                                Clear Filters & Spin
                            </button>
                        </div>
                    ) : !result ? (
                        <div className="flex flex-col items-center">
                            <button
                                onClick={handleSpin}
                                disabled={isSpinning}
                                className={`
                                    group relative w-24 h-24 rounded-full flex items-center justify-center
                                    bg-gradient-to-br from-brand-primary to-orange-500
                                    shadow-[0_0_50px_-10px_rgba(173,52,62,0.6)]
                                    transition-all duration-300
                                    ${isSpinning ? 'scale-90 opacity-80 cursor-wait' : 'hover:scale-110 hover:shadow-[0_0_70px_-10px_rgba(173,52,62,0.8)] active:scale-95'}
                                `}
                                aria-label="Spin to decide meal"
                            >
                                <KnifeIcon className={`w-10 h-10 text-white transition-transform duration-700 ${isSpinning ? 'animate-spin' : ''}`} />
                            </button>
                            
                            <div className="mt-6 h-12 flex items-center justify-center">
                                {isSpinning ? (
                                    <span className="text-3xl font-playfair font-bold text-white/90 animate-pulse">
                                        {displayCandidate}
                                    </span>
                                ) : (
                                    <span className="text-white/40 text-xs tracking-widest uppercase font-mono">
                                        Tap knife to decide from {filteredPool.length} spots
                                    </span>
                                )}
                            </div>
                        </div>
                    ) : null}

                    {/* Result Card */}
                    {result && !isSpinning && (
                        <div className="w-full max-w-md animate-[slide-up_0.5s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                            <p className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3">You are going to</p>
                            
                            <div className="relative bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:border-brand-primary/50 transition-all duration-500 shadow-2xl group">
                                <Link 
                                    to={`/city/${selectedCityId}?restaurant=${result.id}`}
                                    className="block aspect-[16/9] overflow-hidden relative"
                                >
                                    <img 
                                        src={result.mainImage.url} 
                                        alt={result.name} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-85"></div>
                                    
                                    <div className="absolute top-4 left-4">
                                        <span className="inline-block px-2.5 py-1 rounded bg-brand-primary text-white text-[10px] font-bold uppercase tracking-wider">
                                            {result.cuisine}
                                        </span>
                                    </div>

                                    <div className="absolute bottom-4 left-4 right-4 text-left">
                                        <div className="flex justify-between items-end">
                                            <div>
                                                {result.neighborhood && (
                                                    <span className="text-[10px] text-white/60 font-light block mb-0.5">
                                                        📍 {result.neighborhood}
                                                    </span>
                                                )}
                                                <h3 className="text-3xl font-playfair font-bold text-white leading-none">
                                                    {result.name}
                                                </h3>
                                            </div>
                                            <div className="w-10 h-10 rounded-full bg-white text-brand-dark flex items-center justify-center transform translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shrink-0">
                                                <ArrowUpRightIcon className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                {/* Bottom Quick Actions */}
                                <div className="p-4 bg-zinc-950/80 border-t border-white/10 flex items-center justify-between text-xs">
                                    <button
                                        onClick={() => toggleSave(result.id)}
                                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all ${isSaved(result.id) ? 'bg-brand-primary text-white border-brand-primary' : 'bg-white/5 text-white/70 border-white/10 hover:text-white'}`}
                                    >
                                        <BookmarkIcon className="w-3.5 h-3.5" filled={isSaved(result.id)} />
                                        <span>{isSaved(result.id) ? 'Saved' : 'Save to shortlist'}</span>
                                    </button>

                                    <Link
                                        to={`/city/${selectedCityId}?restaurant=${result.id}`}
                                        className="text-brand-primary hover:text-white font-medium flex items-center gap-1"
                                    >
                                        <span>View Review & Photos</span>
                                        <ArrowUpRightIcon className="w-3 h-3" />
                                    </Link>
                                </div>
                            </div>

                            <button 
                                onClick={handleSpin}
                                className="mt-6 text-white/50 hover:text-white text-xs uppercase tracking-widest font-mono transition-colors"
                            >
                                ↺ Spin Again
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default DecisionMaker;
