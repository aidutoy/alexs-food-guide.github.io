import React from 'react';
import CityGallery from '../components/CityGallery';

const GalleryPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white pt-20 pb-20">
            {/* Cinematic Background Noise/Grain */}
            <div 
                className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
            ></div>

            <div className="relative z-10">
                <CityGallery 
                    badge="Visual Index"
                    title={
                        <>
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-500">Gallery</span>
                        </>
                    }
                    subtitle="My personal photo collection of my favourite places to eat. All pictures are my own with no edits and no AI. Just as I saw it."
                    sectionId="gallery-page"
                />
            </div>
        </div>
    );
};

export default GalleryPage;
