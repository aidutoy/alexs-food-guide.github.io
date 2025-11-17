
import React, { useState, useEffect } from 'react';
import type { Restaurant, Rating, DietaryInfo, ImageWithCaption } from '../types';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import GlobeIcon from './icons/GlobeIcon';
import InstagramIcon from './icons/InstagramIcon';
import PencilIcon from './icons/PencilIcon';

interface RestaurantModalProps {
  restaurant: Restaurant | null;
  onClose: () => void;
}

const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const StarIcon: React.FC<{ filled: boolean; isEditing?: boolean; onClick?: () => void }> = ({ filled, isEditing, onClick }) => (
    <svg 
        className={`w-5 h-5 ${filled ? 'text-yellow-400' : 'text-gray-300'} ${isEditing ? 'cursor-pointer transition-transform hover:scale-125' : ''}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
        onClick={onClick}
    >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
    </svg>
);

const RatingDisplay: React.FC<{ label: string; score: number; max: number; isEditing?: boolean; onChange?: (score: number) => void }> = ({ label, score, max, isEditing, onChange }) => (
    <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">{label}</span>
        <div className="flex">
            {Array.from({ length: max }, (_, i) => 
                <StarIcon 
                    key={i} 
                    filled={i < score} 
                    isEditing={isEditing} 
                    onClick={isEditing ? () => onChange?.(i + 1) : undefined} 
                />
            )}
        </div>
    </div>
);

const PriceRatingDisplay: React.FC<{ score: number; max: number; isEditing?: boolean; onChange?: (score: number) => void }> = ({ score, max, isEditing, onChange }) => (
    <div className="flex items-center justify-between text-sm">
        <span className="text-gray-600">Price</span>
        <div className="flex text-lg font-semibold">
            {Array.from({ length: max }, (_, i) => (
                <span 
                    key={i} 
                    className={`${i < score ? 'text-gray-700' : 'text-gray-300'} ${isEditing ? 'cursor-pointer transition-transform hover:scale-125' : ''}`}
                    onClick={isEditing ? () => onChange?.(i + 1) : undefined}
                >€</span>
            ))}
        </div>
    </div>
);


const RestaurantModal: React.FC<RestaurantModalProps> = ({ restaurant, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [displayRestaurant, setDisplayRestaurant] = useState<Restaurant | null>(restaurant);
  const [editedRestaurant, setEditedRestaurant] = useState<Restaurant | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setDisplayRestaurant(restaurant);
    setEditedRestaurant(null);
    setIsEditing(false);
    if (restaurant) {
      setCurrentImageIndex(0);
    }
  }, [restaurant]);

  const activeRestaurant = isEditing ? editedRestaurant : displayRestaurant;

  if (!activeRestaurant) return null;

  const allImages = [activeRestaurant.mainImage, ...activeRestaurant.images];

  const handleEdit = () => {
    setEditedRestaurant(JSON.parse(JSON.stringify(displayRestaurant))); // Deep copy
    setIsEditing(true);
  };

  const handleSave = () => {
    setDisplayRestaurant(editedRestaurant);
    console.log("Saving restaurant data:", editedRestaurant);
    setIsEditing(false);
    setEditedRestaurant(null);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedRestaurant(null);
  };

  const handleFieldChange = (field: keyof Restaurant, value: string) => {
    setEditedRestaurant(prev => (prev ? { ...prev, [field]: value } : null));
  };

  const handleRatingChange = (category: keyof Rating, value: number) => {
    setEditedRestaurant(prev => {
      if (!prev) return null;
      return { ...prev, ratings: { ...prev.ratings, [category]: value } };
    });
  };

  const handleDietaryChange = (field: keyof DietaryInfo, value: string) => {
    setEditedRestaurant(prev => {
      if (!prev || !prev.dietary) return null;
      return { ...prev, dietary: { ...prev.dietary, [field]: value } };
    });
  };
  
  const handleImageCaptionChange = (index: number, newCaption: string) => {
    setEditedRestaurant(prev => {
        if (!prev) return null;
        if (index === 0) {
            return { ...prev, mainImage: { ...prev.mainImage, caption: newCaption }};
        } else {
            const newImages = [...prev.images];
            newImages[index - 1] = { ...newImages[index - 1], caption: newCaption };
            return { ...prev, images: newImages };
        }
    });
  };

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
  
  const inputClass = "block w-full px-2 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent text-base";
  const textareaClass = `${inputClass} min-h-[80px] leading-relaxed`;


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
                {isEditing ? (
                  <input
                    type="text"
                    value={allImages[currentImageIndex].caption}
                    onChange={(e) => handleImageCaptionChange(currentImageIndex, e.target.value)}
                    className="w-full bg-black/50 text-white text-center border-none focus:ring-brand-accent rounded p-1 text-sm"
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <p className="text-white text-sm drop-shadow-md text-center mb-4 min-h-[1.25rem]">{allImages[currentImageIndex].caption}</p>
                )}

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
                {!isEditing ? (
                    <button onClick={handleEdit} className="text-gray-400 hover:text-gray-600" aria-label="Edit">
                        <PencilIcon className="w-5 h-5" />
                    </button>
                ) : (
                    <>
                        <button onClick={handleSave} className="text-white bg-brand-accent hover:opacity-90 px-3 py-1 text-sm rounded-md font-semibold transition-opacity">Save</button>
                        <button onClick={handleCancel} className="text-gray-600 bg-gray-200 hover:bg-gray-300 px-3 py-1 text-sm rounded-md transition-colors">Cancel</button>
                    </>
                )}
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600" aria-label="Close">
                    <CloseIcon className="w-6 h-6" />
                </button>
            </div>
            <div className="pr-8 space-y-4">
                <div>
                    {isEditing ? (
                      <input type="text" value={activeRestaurant.name} onChange={(e) => handleFieldChange('name', e.target.value)} className={`${inputClass} text-3xl font-playfair font-bold text-brand-dark mb-2`} />
                    ) : (
                      <h2 className="text-3xl font-playfair font-bold text-brand-dark mb-2">{activeRestaurant.name}</h2>
                    )}
                    {isEditing ? (
                      <input type="text" value={activeRestaurant.cuisine} onChange={(e) => handleFieldChange('cuisine', e.target.value)} className={`${inputClass} text-sm text-brand-primary font-semibold mb-4`} />
                    ) : (
                      <p className="text-sm text-brand-primary font-semibold mb-4">{activeRestaurant.cuisine}</p>
                    )}
                     {isEditing ? (
                      <textarea value={activeRestaurant.description} onChange={(e) => handleFieldChange('description', e.target.value)} className={textareaClass}></textarea>
                    ) : (
                      <p className="text-gray-700 leading-relaxed">{activeRestaurant.description}</p>
                    )}
                </div>
                
                <div className="space-y-3 pt-4 border-t">
                    <h4 className="font-semibold text-brand-dark">Ratings</h4>
                    <RatingDisplay label="Food" score={activeRestaurant.ratings.food} max={5} isEditing={isEditing} onChange={(s) => handleRatingChange('food', s)} />
                    <RatingDisplay label="Drinks" score={activeRestaurant.ratings.drinks} max={5} isEditing={isEditing} onChange={(s) => handleRatingChange('drinks', s)} />
                    <RatingDisplay label="Service" score={activeRestaurant.ratings.service} max={5} isEditing={isEditing} onChange={(s) => handleRatingChange('service', s)} />
                    <PriceRatingDisplay score={activeRestaurant.ratings.price} max={3} isEditing={isEditing} onChange={(s) => handleRatingChange('price', s)} />
                </div>
                
                {activeRestaurant.alexsTip && (
                    <div className="space-y-2 pt-4 border-t">
                        <h4 className="font-semibold text-brand-dark">Alex's Tip</h4>
                        {isEditing ? (
                           <textarea value={activeRestaurant.alexsTip} onChange={(e) => handleFieldChange('alexsTip', e.target.value)} className={`${textareaClass} italic`}></textarea>
                        ) : (
                          <p className="text-gray-700 italic">"{activeRestaurant.alexsTip}"</p>
                        )}
                    </div>
                )}

                {activeRestaurant.dietary && (
                    <div className="space-y-3 pt-4 border-t">
                        <h4 className="font-semibold text-brand-dark">Dietary Information</h4>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-start">
                                <span className="font-semibold text-gray-600 w-28 shrink-0">Gluten-Free</span>
                                {isEditing ? <textarea value={activeRestaurant.dietary.celiac} onChange={(e) => handleDietaryChange('celiac', e.target.value)} className={`${textareaClass} text-sm w-full`} /> : <p className="text-gray-700 pl-2">{activeRestaurant.dietary.celiac}</p>}
                            </div>
                            <div className="flex items-start">
                                <span className="font-semibold text-gray-600 w-28 shrink-0">Lactose-Free</span>
                                {isEditing ? <textarea value={activeRestaurant.dietary.lactose} onChange={(e) => handleDietaryChange('lactose', e.target.value)} className={`${textareaClass} text-sm w-full`} /> : <p className="text-gray-700 pl-2">{activeRestaurant.dietary.lactose}</p>}
                            </div>
                            <div className="flex items-start">
                                <span className="font-semibold text-gray-600 w-28 shrink-0">Vegan</span>
                                {isEditing ? <textarea value={activeRestaurant.dietary.vegan} onChange={(e) => handleDietaryChange('vegan', e.target.value)} className={`${textareaClass} text-sm w-full`} /> : <p className="text-gray-700 pl-2">{activeRestaurant.dietary.vegan}</p>}
                            </div>
                        </div>
                    </div>
                )}

                {(activeRestaurant.websiteUrl || activeRestaurant.instagramUrl || isEditing) && (
                     <div className="space-y-3 pt-4 border-t">
                        <h4 className="font-semibold text-brand-dark">Links</h4>
                        {isEditing ? (
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2"><GlobeIcon className="w-5 h-5 text-gray-400" /><input type="text" value={activeRestaurant.websiteUrl} onChange={(e) => handleFieldChange('websiteUrl', e.target.value)} className={inputClass} placeholder="Website URL" /></div>
                            <div className="flex items-center space-x-2"><InstagramIcon className="w-5 h-5 text-gray-400" /><input type="text" value={activeRestaurant.instagramUrl} onChange={(e) => handleFieldChange('instagramUrl', e.target.value)} className={inputClass} placeholder="Instagram URL" /></div>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-4">
                            {activeRestaurant.websiteUrl && (<a href={activeRestaurant.websiteUrl} target="_blank" rel="noopener noreferrer" aria-label="Website" className="text-gray-500 hover:text-brand-primary transition-colors"><GlobeIcon className="w-6 h-6" /></a>)}
                            {activeRestaurant.instagramUrl && (<a href={activeRestaurant.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-500 hover:text-brand-primary transition-colors"><InstagramIcon className="w-6 h-6" /></a>)}
                          </div>
                        )}
                    </div>
                )}
            </div>
            
            <div className="mt-auto pt-6">
                <h4 className="font-semibold text-brand-dark mb-2">Location</h4>
                {isEditing ? (
                   <input type="text" value={activeRestaurant.mapEmbedUrl} onChange={(e) => handleFieldChange('mapEmbedUrl', e.target.value)} className={inputClass} placeholder="Google Maps Embed URL" />
                ) : (
                  <div className="h-48 rounded-lg overflow-hidden border">
                      <iframe
                          src={activeRestaurant.mapEmbedUrl}
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen={true}
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title={`Map of ${activeRestaurant.name}`}
                      ></iframe>
                  </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantModal;
