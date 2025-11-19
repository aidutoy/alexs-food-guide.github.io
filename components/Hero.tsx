
import React from 'react';
import KnifeIcon from './icons/KnifeIcon';

const Hero: React.FC = () => {
    const scrollToAbout = () => {
        const targetElement = document.getElementById('about');
        if (targetElement) {
            const top = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    return (
        <section
            id="home"
            className="relative h-[100dvh] flex flex-col items-center justify-center text-white overflow-hidden"
        >
            {/* Background Image with Slow Zoom */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <img
                    src="https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/tio_pepe/tio_pepe_6.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover animate-slow-zoom opacity-90"
                    fetchPriority="high"
                />
                 {/* Extended Gradient Overlay for smoother transition - lightened for brightness */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-brand-dark/90"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-full mx-auto">
                
                {/* Glassy Title Wrapper */}
                <div className="relative inline-block">
                     <div className="absolute inset-0 bg-white/5 blur-2xl rounded-full transform scale-110 opacity-50"></div>
                     <h1 className="relative text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-playfair font-bold mb-8 tracking-tight drop-shadow-2xl animate-[slide-up_1s_ease-out_0.2s_forwards] opacity-0 leading-none whitespace-nowrap">
                        Alex's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Food Guide</span>
                    </h1>
                </div>

                <p className="text-xl md:text-2xl font-light text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-lg animate-[slide-up_1s_ease-out_0.4s_forwards] opacity-0">
                    A curated collection of culinary experiences and hidden gems from my travels around the world.
                </p>
            </div>

             {/* Scroll Indicator - Bubble removed */}
            <div className="absolute bottom-12 z-20 animate-[fade-in_1s_ease-out_1.5s_forwards] opacity-0">
                <button
                    onClick={scrollToAbout}
                    className="
                        group relative p-4
                        bg-transparent
                        hover:scale-110
                        transition-all duration-300 ease-out
                        cursor-pointer
                    "
                    aria-label="Scroll down"
                >
                    <KnifeIcon className="w-12 h-12 text-white drop-shadow-lg relative z-10 animate-bounce" />
                </button>
            </div>
        </section>
    );
};

export default Hero;