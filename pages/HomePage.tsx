
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Why from '../components/Why';
import FeaturedCitiesCarousel from '../components/FeaturedCitiesCarousel';
import GalleryPreview from '../components/GalleryPreview';
import DecisionMaker from '../components/DecisionMaker';
import { cities } from '../data/mockData';

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

                {/* Anchored Ambient Light Sources - No floating blobs */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary/10 via-brand-dark/0 to-transparent"></div>
                
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[500px] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-brand-dark/0 to-transparent"></div>
            </div>

            <div className="relative z-10">
                <Hero />
                <About />
                <Why />
                <FeaturedCitiesCarousel cities={cities} />
                <DecisionMaker />
                <GalleryPreview />
            </div>
        </div>
    );
};

export default HomePage;
