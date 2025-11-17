
import React, { useState, useEffect } from 'react';
import type { Restaurant } from '../types';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import GlobeIcon from './icons/GlobeIcon';
import InstagramIcon from './icons/InstagramIcon';

interface RestaurantModalProps {
  restaurant: Restaurant | null;
  onClose: () => void;
}

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const StarIcon: React.FC<{ filled: boolean; }> = ({ filled }) => (
    <svg 
        className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
    >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
);

const RatingDisplay: React.FC<{ label: string; score: number; max: number; }> = ({ label, score, max }) => (
    <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">{label}</span>
        <div className="flex">
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
        <span className="text-gray-600">Price</span>
        <div className="flex text-lg font-semibold">
            {Array.from({ length: max }, (_, i) => (
                <span 
                    key={i} 
                    className={`${i < score ? 'text-gray-700' : 'text-gray-300'}`}
                >€</span>
            ))}
        </div>
    </div>
);


const RestaurantModal: React.FC<RestaurantModalProps> = ({ restaurant, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (restaurant) {
      setCurrentImageIndex(0);
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

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-2xl w-full max-w-[85vw] h-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Carousel Section */}
        <div className="w-full md:w-3/5 relative group bg-black">
            <div className="w-full h-full flex items-center justify-center">
                <img 
                    src={allImages[currentImageIndex].url} 
                    alt={allImages[currentImageIndex].caption} 
                    className="w-full h-[300px] md:h-full object-cover transition-opacity duration-300"
                />
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm drop-shadow-md text-center mb-4 min-h-[1.25rem]">{allImages[currentImageIndex].caption}</p>

                {allImages.length > 1 && (
                    <div className="flex justify-center space-x-2 mt-2">
                        {allImages.map((_, index) => (
                            <button 
                                key={index}
                                onClick={(e) => goToImage(e, index)}
                                className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white'} transition-colors`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>
            
            {allImages.length > 1 && (
                <>
                    <button onClick={prevImage} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10" aria-label="Previous image">
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button onClick={nextImage} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10" aria-label="Next image">
                        <ChevronRightIcon className="w-6 h-6" />
                    </button>
                </>
            )}
        </div>
        
        {/* Details Section */}
        <div className="w-full md:w-2/5 p-8 flex flex-col relative overflow-y-auto">
             <div className="absolute top-4 right-4 flex items-center space-x-3 z-10">
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600" aria-label="Close">
                    <CloseIcon className="w-6 h-6" />
                </button>
            </div>
            <div className="pr-8 space-y-4">
                <div>
                  <h2 className="text-3xl font-playfair font-bold text-brand-dark mb-2">{restaurant.name}</h2>
                  <p className="text-sm text-brand-primary font-semibold mb-4">{restaurant.cuisine}</p>
                  <p className="text-gray-700 leading-relaxed">{restaurant.description}</p>
                </div>
                
                <div className="space-y-3 pt-4 border-t">
                    <h4 className="font-semibold text-brand-dark">Ratings</h4>
                    <RatingDisplay label="Food" score={restaurant.ratings.food} max={5} />
                    <RatingDisplay label="Drinks" score={restaurant.ratings.drinks} max={5} />
                    <RatingDisplay label="Service" score={restaurant.ratings.service} max={5} />
                    <PriceRatingDisplay score={restaurant.ratings.price} max={3} />
                </div>
                
                {restaurant.alexsTip && (
                    <div className="space-y-2 pt-4 border-t">
                        <h4 className="font-semibold text-brand-dark">Alex's Tip</h4>
                          <p className="text-gray-700 italic">"{restaurant.alexsTip}"</p>
                    </div>
                )}

                {restaurant.dietary && (
                    <div className="space-y-3 pt-4 border-t">
                        <h4 className="font-semibold text-brand-dark">Dietary Information</h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-start">
                                <span className="font-semibold text-gray-600 w-28 shrink-0">Gluten-Free</span>
                                <p className="text-gray-700 pl-2">{restaurant.dietary.celiac}</p>
                            </div>
                            <div className="flex items-start">
                                <span className="font-semibold text-gray-600 w-28 shrink-0">Lactose-Free</span>
                                <p className="text-gray-700 pl-2">{restaurant.dietary.lactose}</p>
                            </div>
                            <div className="flex items-start">
                                <span className="font-semibold text-gray-600 w-28 shrink-0">Vegan</span>
                                <p className="text-gray-700 pl-2">{restaurant.dietary.vegan}</p>
                            </div>
                        </div>
                    </div>
                )}

                {(restaurant.websiteUrl || restaurant.instagramUrl) && (
                     <div className="space-y-3 pt-4 border-t">
                        <h4 className="font-semibold text-brand-dark">Links</h4>
                          <div className="flex items-center space-x-4">
                            {restaurant.websiteUrl && (<a href={restaurant.websiteUrl} target="_blank" rel="noopener noreferrer" aria-label="Website" className="text-gray-500 hover:text-brand-primary transition-colors"><GlobeIcon className="w-6 h-6" /></a>)}
                            {restaurant.instagramUrl && (<a href={restaurant.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-brand-primary transition-colors"><InstagramIcon className="w-6 h-6" /></a>)}
                          </div>
                    </div>
                )}
            </div>
            
            <div className="mt-auto pt-6">
                <h4 className="font-semibold text-brand-dark mb-2">Location</h4>
                  <div className="h-48 rounded-lg overflow-hidden border">
                      <iframe
                          src={restaurant.mapEmbedUrl}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Map of ${restaurant.name}`}
                      ></iframe>
                  </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantModal;