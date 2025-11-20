
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Restaurant } from '../types';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import GlobeIcon from './icons/GlobeIcon';
import InstagramIcon from './icons/InstagramIcon';
import CloseIcon from './icons/CloseIcon';
import InfoIcon from './icons/InfoIcon';
import { GlutenFreeIcon, LactoseFreeIcon, VegetarianIcon, VeganIcon } from './icons/DietaryIcons';

interface RestaurantModalProps {
  restaurant: Restaurant | null;
  onClose: () => void;
}

const StarIcon: React.FC<{ filled: boolean; }> = ({ filled }) => (
    <svg 
        className={`w-4 h-4 ${filled ? 'text-brand-primary' : 'text-white/20'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
    >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
);

const RatingDisplay: React.FC<{ label: string; score: number; max: number; }> = ({ label, score, max }) => (
    <div className="flex items-center justify-between text-sm">
        <span className="text-white/60 font-light tracking-wide">{label}</span>
        <div className="flex gap-1">
            {Array.from({ length: max }, (_, i) => 
                <StarIcon 
                    key={i} 
                    filled={i < score}
                />
            )}
        </div>
    </div>
);

const PriceRatingDisplay: React.FC<{ score: number; max: number; }> = ({ score, max }) => (
    <div className="flex items-center justify-between text-sm">
        <span className="text-white/60 font-light tracking-wide">Price</span>
        <div className="flex text-lg font-playfair">
            {Array.from({ length: max }, (_, i) => (
                <span 
                    key={i} 
                    className={`${i < score ? 'text-white' : 'text-white/20'}`}
                >€</span>
            ))}
        </div>
    </div>
);

const RestaurantModal: React.FC<RestaurantModalProps> = ({ restaurant, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMobileCaption, setShowMobileCaption] = useState(false);

  useEffect(() => {
    if (restaurant) {
      setCurrentImageIndex(0);
      setShowMobileCaption(false);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [restaurant]);


  if (!restaurant) return null;

  const allImages = [restaurant.mainImage, ...restaurant.images];

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);
  };
  
  const goToImage = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentImageIndex(index);
  };

  const toggleMobileCaption = (e: React.MouseEvent) => {
      e.stopPropagation();
      setShowMobileCaption(!showMobileCaption);
  };

  const hasTag = (tag: string) => {
      return restaurant.tags?.some(t => t.toLowerCase() === tag.toLowerCase());
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="
            bg-zinc-900/85 backdrop-blur-xl rounded-[2rem] w-full md:max-w-[90vw] lg:max-w-[1400px]
            h-[85vh] md:h-full md:max-h-[90vh] 
            overflow-hidden 
            flex flex-col md:flex-row border border-white/10 shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Carousel Section */}
        <div className="w-full h-[45vh] md:h-auto md:w-3/5 relative group bg-black flex flex-col shrink-0">
            <div className="relative flex-1 overflow-hidden bg-transparent">
                <div className="w-full h-full flex items-center justify-center" onClick={() => setShowMobileCaption(false)}>
                    <img 
                        src={allImages[currentImageIndex].url} 
                        alt={allImages[currentImageIndex].caption} 
                        className="w-full h-full object-cover transition-opacity duration-500"
                    />
                </div>
                
                {/* Mobile Info Toggle */}
                <button 
                    onClick={toggleMobileCaption}
                    className="md:hidden absolute top-4 right-4 z-30 p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all active:scale-95"
                    aria-label="Show info"
                >
                    <InfoIcon className="w-6 h-6" />
                </button>

                {/* Mobile Caption Overlay */}
                <div 
                    className={`
                        md:hidden absolute bottom-0 left-0 right-0 
                        bg-black/80 backdrop-blur-md p-6 pt-4 z-20
                        transition-transform duration-300 ease-in-out border-t border-white/10
                        ${showMobileCaption ? 'translate-y-0' : 'translate-y-full'}
                    `}
                >
                    <p className="text-white/80 text-sm font-light italic text-center">
                        {allImages[currentImageIndex].caption}
                    </p>
                </div>
                
                {/* Navigation Arrows */}
                {allImages.length > 1 && (
                    <>
                        <button onClick={prevImage} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/20 hover:bg-black/50 backdrop-blur-md text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 z-10" aria-label="Previous image">
                            <ChevronLeftIcon className="w-5 h-5" />
                        </button>
                        <button onClick={nextImage} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/20 hover:bg-black/50 backdrop-blur-md text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/10 z-10" aria-label="Next image">
                            <ChevronRightIcon className="w-5 h-5" />
                        </button>
                    </>
                )}

                {/* Mobile Pagination Dots (Overlay) */}
                {allImages.length > 1 && (
                     <div className={`md:hidden absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-30 transition-opacity duration-300 ${showMobileCaption ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        {allImages.map((_, index) => (
                            <button 
                                key={index}
                                onClick={(e) => goToImage(e, index)}
                                className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${index === currentImageIndex ? 'bg-white w-6' : 'bg-white/40 w-1.5'}`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
            
            {/* Desktop Caption Bar */}
            <div className="hidden md:flex bg-black/40 py-4 px-6 flex-col items-center justify-center min-h-[80px] border-t border-white/5 relative z-20">
                <p className="text-white/50 text-sm font-light tracking-wider text-center font-roboto italic">
                    {allImages[currentImageIndex].caption}
                </p>

                {allImages.length > 1 && (
                    <div className="flex justify-center space-x-2 mt-3">
                        {allImages.map((_, index) => (
                            <button 
                                key={index}
                                onClick={(e) => goToImage(e, index)}
                                className={`h-1 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white w-6' : 'bg-white/20 w-1 hover:bg-white/40'}`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
        
        {/* Details Section */}
        <div className="w-full md:w-2/5 flex flex-col flex-1 relative bg-transparent overflow-hidden">
             {/* Close Button */}
             <div className="absolute top-6 right-6 z-10">
                <button 
                    onClick={onClose} 
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors" 
                    aria-label="Close"
                >
                    <CloseIcon className="w-5 h-5" />
                </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto flex-1 p-6 md:p-10 custom-scrollbar overscroll-contain">
                <div className="mb-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest border border-brand-primary/20">
                            {restaurant.cuisine}
                        </span>
                        
                        {/* Dietary Icons */}
                        <div className="flex items-center gap-3">
                            {hasTag('gluten-free') && <GlutenFreeIcon className="w-6 h-6" />}
                            {hasTag('lactose-free') && <LactoseFreeIcon className="w-6 h-6" />}
                            {hasTag('vegetarian') && <VegetarianIcon className="w-6 h-6" />}
                            {hasTag('vegan') && <VeganIcon className="w-6 h-6" />}
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-6 leading-tight pr-8">{restaurant.name}</h2>

                    {/* Quick Verdict */}
                    {restaurant.quickVerdict && (
                        <div className="mb-6 p-5 rounded-xl bg-white/5 border-l-2 border-brand-primary relative overflow-hidden">
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-brand-primary text-xs font-bold uppercase tracking-widest">Quick Verdict</span>
                                </div>
                                <p className="text-gray-200 font-medium text-lg leading-snug italic font-playfair">"{restaurant.quickVerdict}"</p>
                            </div>
                            {/* Decorative BG */}
                            <div className="absolute right-0 top-0 w-24 h-24 bg-brand-primary/5 blur-2xl -mr-10 -mt-10"></div>
                        </div>
                    )}

                    <p className="text-white/70 leading-relaxed font-light">{restaurant.description}</p>
                </div>
                
                <div className="space-y-4 py-8 border-t border-white/10">
                    <h4 className="font-playfair font-bold text-white text-lg">Ratings</h4>
                    <div className="grid gap-3">
                        <RatingDisplay label="Food" score={restaurant.ratings.food} max={5} />
                        <RatingDisplay label="Drinks" score={restaurant.ratings.drinks} max={5} />
                        <RatingDisplay label="Service" score={restaurant.ratings.service} max={5} />
                        <PriceRatingDisplay score={restaurant.ratings.price} max={3} />
                    </div>
                </div>
                
                {restaurant.alexsTip && (
                    <div className="py-8 border-t border-white/10">
                        <h4 className="font-playfair font-bold text-white text-lg mb-3">Alex's Tip</h4>
                        <div className="bg-white/5 rounded-xl p-5 border border-white/5 relative">
                            <span className="text-4xl text-brand-primary/20 font-serif absolute top-2 left-2">"</span>
                            <p className="text-gray-300 italic relative z-10 pl-4">{restaurant.alexsTip}</p>
                        </div>
                    </div>
                )}

                {restaurant.dietary && (
                    <div className="py-8 border-t border-white/10">
                        <h4 className="font-playfair font-bold text-white text-lg mb-4">Dietary Information</h4>
                        <div className="space-y-3 text-sm">
                            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                                <span className="font-medium text-white/50 w-24 shrink-0 uppercase text-xs tracking-wider pt-1 flex items-center gap-2">
                                    Gluten-Free
                                </span>
                                <p className="text-gray-300">{restaurant.dietary.celiac}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                                <span className="font-medium text-white/50 w-24 shrink-0 uppercase text-xs tracking-wider pt-1 flex items-center gap-2">
                                    Lactose-Free
                                </span>
                                <p className="text-gray-300">{restaurant.dietary.lactose}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                                <span className="font-medium text-white/50 w-24 shrink-0 uppercase text-xs tracking-wider pt-1 flex items-center gap-2">
                                    Vegetarian
                                </span>
                                <p className="text-gray-300">{restaurant.dietary.vegetarian}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                                <span className="font-medium text-white/50 w-24 shrink-0 uppercase text-xs tracking-wider pt-1 flex items-center gap-2">
                                    Vegan
                                </span>
                                <p className="text-gray-300">{restaurant.dietary.vegan}</p>
                            </div>
                        </div>
                    </div>
                )}

                {restaurant.tags && restaurant.tags.length > 0 && (
                    <div className="py-8 border-t border-white/10">
                        <h4 className="font-playfair font-bold text-white text-lg mb-4">Tags</h4>
                        <div className="flex flex-wrap gap-2">
                            {restaurant.tags.map((tag, index) => (
                                <Link 
                                    key={index}
                                    to={`/search?tag=${tag.toLowerCase()}`}
                                    onClick={onClose}
                                    className="
                                        px-3 py-1 rounded-full text-xs font-medium tracking-wide
                                        text-white/70 border border-white/20 
                                        hover:bg-white/10 hover:text-white hover:border-white/40 
                                        transition-all cursor-pointer
                                    "
                                >
                                    {tag}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}

                {(restaurant.websiteUrl || restaurant.instagramUrl) && (
                     <div className="py-8 border-t border-white/10">
                        <h4 className="font-playfair font-bold text-white text-lg mb-4">Connect</h4>
                          <div className="flex items-center gap-6">
                            {restaurant.websiteUrl && (
                                <a 
                                    href={restaurant.websiteUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Website" 
                                    className="text-white/60 hover:text-brand-primary transition-colors hover:scale-110 transform duration-200"
                                >
                                    <GlobeIcon className="w-8 h-8" />
                                </a>
                            )}
                            {restaurant.instagramUrl && (
                                <a 
                                    href={restaurant.instagramUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    aria-label="Instagram" 
                                    className="text-white/60 hover:text-brand-primary transition-colors hover:scale-110 transform duration-200"
                                >
                                    <InstagramIcon className="w-8 h-8" />
                                </a>
                            )}
                          </div>
                    </div>
                )}
                
                 {/* Map Section */}
                <div className="mt-4">
                    <div className="h-48 rounded-xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">
                        <iframe
                            src={restaurant.mapEmbedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Map of ${restaurant.name}`}
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantModal;
