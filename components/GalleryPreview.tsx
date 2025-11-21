
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cities } from '../data/mockData';
import GalleryIcon from './icons/GalleryIcon';
import CloseIcon from './icons/CloseIcon';
import ArrowUpRightIcon from './icons/ArrowUpRightIcon';

interface GalleryItem {
    url: string;
    caption: string;
    restaurantId: string;
    restaurantName: string;
    cityId: string;
}

const GalleryPreview: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    // Initialize images with a shuffle
    const [displayImages] = useState<GalleryItem[]>(() => {
        const allImages: GalleryItem[] = cities.flatMap(city => 
            city.restaurants.flatMap(r => 
                [r.mainImage, ...r.images].map(img => ({
                    url: img.url,
                    caption: img.caption,
                    restaurantId: r.id,
                    restaurantName: r.name,
                    cityId: city.id
                }))
            )
        );

        // Fisher-Yates Shuffle
        for (let i = allImages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allImages[i], allImages[j]] = [allImages[j], allImages[i]];
        }

        // Take top 15 after shuffle
        return allImages.slice(0, 15);
    });
    
    // Duplicate for infinite scroll effect
    const scrollImages = [...displayImages, ...displayImages];

    return (
        <section className="py-24 bg-brand-dark relative overflow-hidden border-t border-white/5">
             <div className="max-w-7xl mx-auto px-4 mb-12 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Gallery</span>
                </h2>
                <p className="text-white/60 text-lg font-light max-w-2xl mx-auto mb-8">
                    Dive into the full collection of culinary moments.
                </p>
                <Link 
                    to="/gallery"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-brand-dark font-bold uppercase tracking-widest hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-xl hover:scale-105"
                >
                    <GalleryIcon className="w-5 h-5" />
                    Open Gallery
                </Link>
             </div>

             {/* Marquee Container */}
             <div className="relative w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none"></div>

                {/* Scrolling Track */}
                <div className="flex gap-4 animate-scroll w-max hover:[animation-play-state:paused]">
                    {scrollImages.map((img, idx) => (
                        <div 
                            key={idx} 
                            onClick={() => setSelectedImage(img)}
                            className="relative w-64 h-48 md:w-80 md:h-60 rounded-2xl overflow-hidden shrink-0 border border-white/10 transition-all duration-500 cursor-pointer hover:scale-105 hover:border-white/30 hover:shadow-2xl group"
                        >
                            <img 
                                src={img.url} 
                                alt={img.caption} 
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                <p className="text-white text-sm font-medium truncate">{img.restaurantName}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </div>

             {/* Preview Modal */}
             {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={() => setSelectedImage(null)}>
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in"></div>
                    <div 
                        className="relative bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl animate-fade-in" 
                        onClick={e => e.stopPropagation()}
                    >
                        <button 
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-black/50 text-white rounded-full hover:bg-white hover:text-black transition-colors border border-white/10"
                        >
                            <CloseIcon className="w-6 h-6" />
                        </button>
                        
                        <div className="flex-1 overflow-hidden bg-black flex items-center justify-center relative">
                            <img 
                                src={selectedImage.url} 
                                alt={selectedImage.caption} 
                                className="w-full h-full object-contain max-h-[60vh] md:max-h-[70vh]"
                            />
                        </div>
                        
                        <div className="bg-zinc-900 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/5">
                            <div>
                                <h3 className="text-2xl font-playfair font-bold text-white mb-1">{selectedImage.restaurantName}</h3>
                                <p className="text-white/60 text-sm italic line-clamp-2">{selectedImage.caption}</p>
                            </div>
                            
                            <Link 
                                to={`/city/${selectedImage.cityId}?restaurant=${selectedImage.restaurantId}`}
                                className="flex items-center gap-2 bg-brand-primary hover:bg-brand-primary/80 text-white px-6 py-3 rounded-full font-medium transition-all shrink-0 shadow-lg hover:shadow-brand-primary/20"
                            >
                                View Restaurant
                                <ArrowUpRightIcon className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>
             )}
        </section>
    );
}

export default GalleryPreview;
