
import React, { useState, useEffect, useRef } from 'react';
import type { ImageWithCaption } from '../types';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import CloseIcon from './icons/CloseIcon';
import InfoIcon from './icons/InfoIcon';

interface LightboxProps {
    images: ImageWithCaption[];
    initialIndex: number;
    onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, initialIndex, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [showCaption, setShowCaption] = useState(false);
    
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, []);

    // Reset zoom/pan when changing images
    useEffect(() => {
        setScale(1);
        setPosition({ x: 0, y: 0 });
    }, [currentIndex]);

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const toggleZoom = (e: React.MouseEvent | React.TouchEvent) => {
        // Prevent toggling zoom if we were dragging
        if (isDragging) return;

        if (scale > 1) {
            setScale(1);
            setPosition({ x: 0, y: 0 });
        } else {
            setScale(2.5);
            // Optional: could calculate click position to zoom towards pointer
            // For simplicity, zoom to center or reset
        }
    };

    const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
        if (scale === 1) return;
        
        setIsDragging(true);
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
        
        setDragStart({ 
            x: clientX - position.x, 
            y: clientY - position.y 
        });
    };

    const handlePointerMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging || scale === 1) return;
        e.preventDefault(); // Prevent scrolling on touch

        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;

        setPosition({
            x: clientX - dragStart.x,
            y: clientY - dragStart.y
        });
    };

    const handlePointerUp = () => {
        setIsDragging(false);
    };

    return (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center animate-fade-in backdrop-blur-sm">
            {/* Main Image Container */}
            <div 
                className="relative w-full h-full flex items-center justify-center overflow-hidden"
                ref={containerRef}
                onMouseDown={handlePointerDown}
                onMouseMove={handlePointerMove}
                onMouseUp={handlePointerUp}
                onMouseLeave={handlePointerUp}
                onTouchStart={handlePointerDown}
                onTouchMove={handlePointerMove}
                onTouchEnd={handlePointerUp}
            >
                <img
                    src={images[currentIndex].url}
                    alt={images[currentIndex].caption}
                    className="max-h-screen max-w-full object-contain transition-transform duration-200 ease-out select-none cursor-zoom-in"
                    style={{ 
                        transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                        cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
                    }}
                    onClick={(e) => {
                         // Differentiate between drag end and click
                         if (!isDragging) toggleZoom(e);
                    }}
                    draggable={false}
                />
            </div>

            {/* Controls Overlay (Only visible if not zoomed or if overlay UI is desired) */}
             <div className="absolute inset-0 pointer-events-none">
                {/* Close Button */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-white/20 transition-all pointer-events-auto z-50"
                >
                    <CloseIcon className="w-8 h-8" />
                </button>

                {/* Navigation */}
                {images.length > 1 && (
                    <>
                        <button 
                            onClick={prevImage}
                            className="absolute top-1/2 left-4 -translate-y-1/2 p-3 rounded-full bg-black/20 hover:bg-black/50 text-white pointer-events-auto transition-all"
                        >
                            <ChevronLeftIcon className="w-8 h-8" />
                        </button>
                        <button 
                            onClick={nextImage}
                            className="absolute top-1/2 right-4 -translate-y-1/2 p-3 rounded-full bg-black/20 hover:bg-black/50 text-white pointer-events-auto transition-all"
                        >
                            <ChevronRightIcon className="w-8 h-8" />
                        </button>
                    </>
                )}

                {/* Caption Bar */}
                <div className={`
                    absolute bottom-0 left-0 right-0 p-6 
                    bg-gradient-to-t from-black via-black/80 to-transparent 
                    transition-transform duration-300 pointer-events-auto
                    ${showCaption ? 'translate-y-0' : 'translate-y-full md:translate-y-0'}
                `}>
                    <div className="max-w-3xl mx-auto text-center">
                         <p className="text-white text-lg font-light italic">
                            {images[currentIndex].caption}
                        </p>
                        <p className="text-white/30 text-sm mt-2">
                            {currentIndex + 1} / {images.length}
                        </p>
                    </div>
                </div>
                
                {/* Mobile Caption Toggle */}
                <button 
                    onClick={() => setShowCaption(!showCaption)}
                    className="md:hidden absolute bottom-4 right-4 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white pointer-events-auto z-50"
                >
                    <InfoIcon className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
};

export default Lightbox;
