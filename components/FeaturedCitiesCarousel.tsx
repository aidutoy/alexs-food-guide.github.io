import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import type { City } from '../types';
import ChevronRightIcon from './icons/ChevronRightIcon';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ArrowUpRightIcon from './icons/ArrowUpRightIcon';

interface FeaturedCitiesCarouselProps {
    cities: City[];
}

const FeaturedCitiesCarousel: React.FC<FeaturedCitiesCarouselProps> = ({ cities }) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [direction, setDirection] = useState<number>(0); // -1 for left, 1 for right
    const autoplayRef = useRef<NodeJS.Timeout | null>(null);
    const activeCity = cities[activeIndex];

    // Reset autoplay timer whenever activeIndex change
    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, [activeIndex]);

    const startAutoplay = () => {
        stopAutoplay();
        autoplayRef.current = setInterval(() => {
            handleNext();
        }, 8000); // 8 seconds autoplay for immersive viewing
    };

    const stopAutoplay = () => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
        }
    };

    const handleNext = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev + 1) % cities.length);
    };

    const handlePrev = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev - 1 + cities.length) % cities.length);
    };

    const handleSelect = (index: number) => {
        setDirection(index > activeIndex ? 1 : -1);
        setActiveIndex(index);
    };

    // Animation variants for the cinematic slider content
    const textVariants = {
        enter: { y: 30, opacity: 0 },
        center: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
        exit: { y: -20, opacity: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } }
    };

    const cardVariants = {
        enter: (dir: number) => ({
            x: dir > 0 ? 120 : -120,
            scale: 0.95,
            opacity: 0
        }),
        center: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        },
        exit: (dir: number) => ({
            x: dir > 0 ? -120 : 120,
            scale: 0.95,
            opacity: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        })
    };

    return (
        <section 
            id="featured-cities" 
            className="py-24 relative overflow-hidden select-none bg-brand-dark flex flex-col justify-center min-h-[950px] md:min-h-[900px] border-t border-white/5"
            onMouseEnter={stopAutoplay}
            onMouseLeave={startAutoplay}
        >
            {/* ATMOSPHERIC DEEP OVERLAY BACKGROUND */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                        key={`bg-${activeCity.id}`}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 0.35, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${activeCity.image})` }}
                    />
                </AnimatePresence>
                {/* Custom Glassmorphic Dark Gradients */}
                <div className="absolute inset-0 bg-brand-dark/90 backdrop-blur-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/70 to-brand-dark"></div>
            </div>

            {/* HEADER DESIGN */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16 text-center">
                <span className="text-brand-primary text-xs font-bold uppercase tracking-[0.3em] inline-block mb-3">
                    Curated Travel Logs
                </span>
                <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white tracking-tight drop-shadow-2xl">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Journey</span>
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-brand-primary to-orange-400 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* CINEMATIC INTERACTIVE STAGE */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                
                {/* LEFT CONTEXT: EDITORIAL SPOTLIGHT INFO CARD */}
                <div className="w-full lg:w-[45%] flex flex-col order-2 lg:order-1 self-stretch justify-between">
                    <div className="h-full flex flex-col justify-center min-h-[380px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCity.id}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="space-y-6"
                            >
                                {/* City Index and Coordinates */}
                                <motion.div variants={textVariants} className="flex items-center gap-4 text-xs tracking-wider">
                                    <span className="text-brand-primary font-mono font-medium">
                                        {(activeIndex + 1).toString().padStart(2, '0')} / {cities.length.toString().padStart(2, '0')}
                                    </span>
                                    <span className="h-3 w-px bg-white/20"></span>
                                    <span className="text-white/40 font-mono">
                                        {activeCity.coordinates.lat.toFixed(4)}° N, {activeCity.coordinates.lon.toFixed(4)}° E
                                    </span>
                                </motion.div>

                                {/* Active City Name */}
                                <motion.h3 
                                    variants={textVariants} 
                                    className="text-5xl md:text-7xl font-playfair font-bold text-white tracking-tight leading-none"
                                >
                                    {activeCity.name}
                                </motion.h3>

                                {/* Mini City Spotlight / Curated Restaurant Teapes widget */}
                                <motion.div variants={textVariants} className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <span className="text-white/40 text-xs font-bold uppercase tracking-wider">Featured Spots Spotlight</span>
                                        <span className="h-px flex-1 bg-white/10"></span>
                                    </div>

                                    {/* Carousel Teasers List */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {activeCity.restaurants.slice(0, 2).map((rest) => (
                                            <div 
                                                key={rest.id} 
                                                className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:bg-white/10 hover:border-white/20 transition-all duration-300 group/spot"
                                            >
                                                <div>
                                                    <span className="text-brand-primary text-[10px] uppercase tracking-widest font-bold block mb-1">
                                                        {rest.cuisine}
                                                    </span>
                                                    <h4 className="text-white font-playfair font-semibold text-lg leading-tight group-hover/spot:text-brand-primary transition-colors">
                                                        {rest.name}
                                                    </h4>
                                                </div>
                                                <div className="mt-3 flex items-center justify-between text-xs text-white/50">
                                                    <span>★ {rest.ratings.food.toFixed(1)} Food</span>
                                                    <span>{Array(rest.ratings.price).fill('€').join('')}</span>
                                                </div>
                                            </div>
                                        ))}
                                        {activeCity.restaurants.length === 0 && (
                                            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-white/40 text-sm font-light italic">
                                                More logs coming soon.
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-white/60 font-light text-base leading-relaxed line-clamp-2 italic">
                                        {activeCity.restaurants[0]?.quickVerdict || "A journey full of fine dining places and delicious local discoveries."}
                                    </p>
                                </motion.div>

                                {/* Action button */}
                                <motion.div variants={textVariants} className="pt-4">
                                    <Link
                                        to={`/city/${activeCity.id}`}
                                        className="inline-flex items-center gap-3 bg-white text-brand-dark px-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-2xl hover:shadow-brand-primary/25 hover:scale-[1.02] active:scale-[0.98]"
                                    >
                                        <span>Explore {activeCity.name} Guide</span>
                                        <span className="p-1 rounded-full bg-brand-dark/5 group-hover:bg-white/20 transition-colors">
                                            <ArrowUpRightIcon className="w-4 h-4" />
                                        </span>
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

                {/* RIGHT CONTEXT: DYNAMIC OVERLAPPING 3D PORTRAIT CARD GALLERY */}
                <div className="w-full lg:w-[55%] flex flex-col order-1 lg:order-2 items-center justify-center relative min-h-[380px] sm:min-h-[480px]">
                    <div className="relative w-full max-w-[500px] aspect-[4/5] sm:aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                        
                        {/* Frame Border Accent */}
                        <div className="absolute inset-0 border border-white/10 rounded-[2.5rem] pointer-events-none z-35"></div>

                        {/* Interactive Large Sliding Image */}
                        <AnimatePresence custom={direction} mode="popLayout">
                            <motion.div
                                key={activeCity.id}
                                custom={direction}
                                variants={cardVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="absolute inset-0 w-full h-full bg-zinc-900 overflow-hidden rounded-[2.5rem]"
                            >
                                <img 
                                    src={activeCity.image} 
                                    alt={activeCity.name} 
                                    className="w-full h-full object-cover scale-[1.01]" 
                                />
                                {/* Bottom dark linear vignette gradient for readability */}
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 pointer-events-none"></div>
                                <div className="absolute inset-0 bg-brand-dark/10 mix-blend-overlay pointer-events-none"></div>

                                {/* Quick City Summary Overlay inside the Active Slide Card */}
                                <div className="absolute bottom-6 left-6 right-6 z-20 bg-brand-dark/30 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex items-center justify-between text-white">
                                    <div>
                                        <span className="text-[10px] uppercase text-white/40 tracking-widest block mb-1">Total spots cataloged</span>
                                        <span className="text-2xl font-playfair font-bold text-brand-primary">
                                            {activeCity.restaurants.length} {activeCity.restaurants.length === 1 ? 'Destination' : 'Destinations'}
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[10px] uppercase text-white/40 tracking-widest block mb-1">Region</span>
                                        <span className="text-sm font-medium tracking-wide">Germany / Europe</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* ARROW CONTROL DECK */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 z-40 flex justify-between pointer-events-none">
                            <button
                                onClick={handlePrev}
                                className="pointer-events-auto h-14 w-14 rounded-full bg-brand-dark/50 hover:bg-white text-white hover:text-brand-dark backdrop-blur-md border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-300 drop-shadow-lg active:scale-90"
                                aria-label="Previous city"
                            >
                                <div className="rotate-180 flex items-center justify-center">
                                    <ChevronRightIcon className="w-6 h-6" />
                                </div>
                            </button>
                            <button
                                onClick={handleNext}
                                className="pointer-events-auto h-14 w-14 rounded-full bg-brand-dark/50 hover:bg-white text-white hover:text-brand-dark backdrop-blur-md border border-white/10 hover:border-transparent flex items-center justify-center transition-all duration-300 drop-shadow-lg active:scale-90"
                                aria-label="Next city"
                            >
                                <ChevronRightIcon className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* DYNAMIC TIMELINE PROGRESS BAR AND CHRONOLOGICAL STATIONS PAGER */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-16 flex flex-col gap-6">
                
                {/* Visual Segmented Progress Bar */}
                <div className="w-full flex gap-1.5 h-1">
                    {cities.map((city, idx) => {
                        const isPast = idx < activeIndex;
                        const isCurrent = idx === activeIndex;
                        return (
                            <div 
                                key={`prog-${city.id}`}
                                onClick={() => handleSelect(idx)}
                                className="flex-1 h-full cursor-pointer relative overflow-hidden rounded-full bg-white/10"
                            >
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: isPast ? "100%" : isCurrent ? "100%" : "0%" }}
                                    transition={{ duration: isCurrent ? 8 : 0.4, ease: "linear" }}
                                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-primary to-orange-400"
                                />
                            </div>
                        );
                    })}
                </div>

                {/* Horizontal Sliding Carousel Stations with high-contrast active bounds */}
                <div 
                    className="flex overflow-x-auto gap-4 py-2 px-1 scrollbar-none snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {cities.map((city, idx) => {
                        const isCurrent = idx === activeIndex;
                        return (
                            <button
                                key={`station-${city.id}`}
                                onClick={() => handleSelect(idx)}
                                className={`
                                    relative flex-shrink-0 w-36 sm:w-44 text-left transition-all duration-500 rounded-2xl p-3 border text-white snap-start flex gap-3 items-center overflow-hidden
                                    ${isCurrent 
                                        ? 'bg-white/10 border-brand-primary/40 shadow-xl' 
                                        : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                                    }
                                `}
                            >
                                {/* City Miniature Thumbnail with slow pan */}
                                <div className="h-10 w-10 rounded-lg overflow-hidden shrink-0 relative bg-zinc-900 border border-white/5">
                                    <img 
                                        src={city.image} 
                                        alt="" 
                                        className={`w-full h-full object-cover transition-all duration-500 ${isCurrent ? 'scale-110 filter brightness-110' : 'filter brightness-70'}`} 
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <span className="text-[9px] font-mono text-white/40 block leading-tight">0{(idx + 1)}</span>
                                    <span className={`text-sm tracking-wide truncate block font-playfair font-semibold ${isCurrent ? 'text-brand-primary' : 'text-white/75'}`}>
                                        {city.name}
                                    </span>
                                </div>

                                {/* Active dot indicator */}
                                {isCurrent && (
                                    <motion.span 
                                        layoutId="activeDot" 
                                        className="h-1.5 w-1.5 rounded-full bg-brand-primary absolute right-3 top-3 animate-pulse" 
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCitiesCarousel;
