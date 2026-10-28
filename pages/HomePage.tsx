import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Why from '../components/Why';
import DestinationMap from '../components/DestinationMap';
import CityGallery from '../components/CityGallery';

const HomePage: React.FC = () => {
    return (
        <div className="relative bg-brand-dark overflow-hidden selection:bg-brand-primary selection:text-white">
            {/* Global Ambient Background - Clean Architectural Design */}
            <div className="fixed inset-0 pointer-events-none z-0 bg-brand-dark">
                 {/* Geometric Dot Pattern */}
                <div 
                    className="absolute inset-0 opacity-[0.07]" 
                    style={{ 
                        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px)', 
                        backgroundSize: '40px 40px' 
                    }}
                ></div>

                {/* Anchored Ambient Light Sources */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary/10 via-brand-dark/0 to-transparent"></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[500px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-brand-dark/0 to-transparent"></div>
            </div>

            <div className="relative z-10">
                <Hero />
                <About />
                <Why />
                
                {/* Interactive Map before the Gallery */}
                <DestinationMap />

                {/* City Gallery */}
                <CityGallery 
                    badge="Visual Index"
                    title={
                        <>
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-500">Gallery</span>
                        </>
                    }
                    subtitle="My personal photo collection of my favourite places to eat. All pictures are my own with no edits and no AI. Just as I saw it."
                    sectionId="gallery"
                />
            </div>
        </div>
    );
};

export default HomePage;
