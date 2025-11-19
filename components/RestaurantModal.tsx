
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { Restaurant } from '../types';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import GlobeIcon from './icons/GlobeIcon';
import InstagramIcon from './icons/InstagramIcon';
import CloseIcon from './icons/CloseIcon';
import InfoIcon from './icons/InfoIcon';
import { GoogleGenAI } from "@google/genai";

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

// Sparkles icon for the AI section
const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
  </svg>
);


const RestaurantModal: React.FC<RestaurantModalProps> = ({ restaurant, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMobileCaption, setShowMobileCaption] = useState(false);
  
  // AI State
  const [aiQuestion, setAiQuestion] = useState('');
  const [aiAnswer, setAiAnswer] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiSources, setAiSources] = useState<any[]>([]);
  const [aiError, setAiError] = useState('');

  useEffect(() => {
    if (restaurant) {
      setCurrentImageIndex(0);
      setShowMobileCaption(false);
      setAiQuestion('');
      setAiAnswer('');
      setAiSources([]);
      setAiError('');
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [restaurant]);

  const handleAskAi = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuestion.trim() || !restaurant) return;

    setAiLoading(true);
    setAiAnswer('');
    setAiSources([]);
    setAiError('');

    try {
        // Safely access API Key to prevent crash if process is not defined in browser environment
        const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : '';
        
        if (!apiKey) {
            console.error("API Key is missing. Please ensure process.env.API_KEY is available.");
            throw new Error("Configuration Error: API Key missing.");
        }

        const ai = new GoogleGenAI({ apiKey });
        
        const systemInstruction = `You are a helpful culinary assistant for "Alex's Food Guide". 
        You are answering a user's question about the restaurant "${restaurant.name}".
        
        Restaurant Details:
        - Name: ${restaurant.name}
        - Cuisine: ${restaurant.cuisine}
        - Description: ${restaurant.description}
        - Alex's Tip: ${restaurant.alexsTip || 'None provided'}
        - Dietary Info: ${restaurant.dietary ? JSON.stringify(restaurant.dietary) : 'Not specified'}
        - Website: ${restaurant.websiteUrl || 'Not specified'}
        
        The user is asking: "${aiQuestion}"

        Instructions:
        1. Answer the question based on the provided data first.
        2. If the answer is not in the data (e.g. current opening hours, specific menu prices not listed, reservation policy), YOU MUST use the Google Search tool to find the information.
        3. If you use Google Search, specifically look for the restaurant's official website or reputable reviews.
        4. Be concise, friendly, and helpful. Keep the answer relatively short (under 100 words unless details are needed).
        5. Do not invent information.`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [{ role: 'user', parts: [{ text: aiQuestion }] }],
            config: {
                systemInstruction: systemInstruction,
                tools: [{ googleSearch: {} }],
            },
        });

        setAiAnswer(response.text || "I couldn't generate an answer.");
        setAiSources(response.candidates?.[0]?.groundingMetadata?.groundingChunks || []);

    } catch (error) {
        console.error("GenAI Error:", error);
        setAiError("Sorry, I encountered an error while trying to find that for you. Please try again.");
    } finally {
        setAiLoading(false);
    }
  };


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
                    <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4 border border-brand-primary/20">
                        {restaurant.cuisine}
                    </span>
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
                                <span className="font-medium text-white/50 w-24 shrink-0 uppercase text-xs tracking-wider pt-1">Gluten-Free</span>
                                <p className="text-gray-300">{restaurant.dietary.celiac}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                                <span className="font-medium text-white/50 w-24 shrink-0 uppercase text-xs tracking-wider pt-1">Lactose-Free</span>
                                <p className="text-gray-300">{restaurant.dietary.lactose}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
                                <span className="font-medium text-white/50 w-24 shrink-0 uppercase text-xs tracking-wider pt-1">Vegan</span>
                                <p className="text-gray-300">{restaurant.dietary.vegan}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* AI Assistant Section */}
                <div className="py-8 border-t border-white/10">
                    <div className="flex items-center justify-between mb-4">
                         <div className="flex items-center gap-2">
                            <div className="p-1.5 rounded-full bg-gradient-to-tr from-brand-primary to-orange-500 text-white">
                                <SparklesIcon />
                            </div>
                            <h4 className="font-playfair font-bold text-white text-lg">Ask AI</h4>
                         </div>
                         <span className="text-[10px] font-bold uppercase tracking-wider bg-white/10 text-white/60 px-2 py-1 rounded">Beta</span>
                    </div>

                    <div className="bg-white/5 rounded-2xl p-1 border border-white/10 focus-within:border-brand-primary/50 focus-within:bg-white/10 transition-all duration-300">
                        <form onSubmit={handleAskAi} className="relative">
                            <input 
                                type="text" 
                                value={aiQuestion}
                                onChange={(e) => setAiQuestion(e.target.value)}
                                placeholder={`Ask about ${restaurant.name} (e.g. Opening hours?)`}
                                className="w-full bg-transparent border-none outline-none text-white placeholder-white/30 py-3 pl-4 pr-12 text-sm"
                            />
                            <button 
                                type="submit"
                                disabled={aiLoading || !aiQuestion.trim()}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-white/10 hover:bg-brand-primary text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {aiLoading ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                                    </svg>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* AI Answer Display */}
                    {(aiAnswer || aiError) && (
                        <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/5 animate-fade-in">
                            {aiError ? (
                                <p className="text-red-400 text-sm">{aiError}</p>
                            ) : (
                                <>
                                    <p className="text-gray-200 text-sm leading-relaxed">{aiAnswer}</p>
                                    
                                    {/* Sources / Grounding */}
                                    {aiSources.length > 0 && (
                                        <div className="mt-3 pt-3 border-t border-white/10">
                                            <p className="text-xs text-white/40 mb-2 uppercase tracking-wider">Sources:</p>
                                            <ul className="space-y-1">
                                                {aiSources.map((chunk, idx) => {
                                                    if (!chunk.web?.uri) return null;
                                                    return (
                                                        <li key={idx}>
                                                            <a 
                                                                href={chunk.web.uri} 
                                                                target="_blank" 
                                                                rel="noopener noreferrer"
                                                                className="text-xs text-brand-primary hover:text-white truncate block transition-colors"
                                                            >
                                                                {chunk.web.title || chunk.web.uri}
                                                            </a>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    )}
                                </>
                            )}
                             <div className="mt-3 text-[10px] text-white/30 italic">
                                * AI-generated content. Verify critical info.
                            </div>
                        </div>
                    )}
                </div>

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
