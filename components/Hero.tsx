
import React from 'react';
import ArrowDownIcon from './icons/ArrowDownIcon';

const Hero: React.FC = () => {
    const scrollToAbout = () => {
        const targetElement = document.getElementById('about');
        if (!targetElement) return;

        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition;
        let startTime: number | null = null;
        const duration = 1500; // Smooth 1.5s scroll

        const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        };

        const animation = (currentTime: number) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };

        requestAnimationFrame(animation);
    };

    return (
        <section
            id="home"
            className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden bg-brand-dark"
        >
            {/* Background Image with Slow Zoom */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                    src="https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/tio_pepe/tio_pepe_1.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover animate-slow-zoom opacity-60"
                />
                 {/* Gradient Overlay for seamless transition to next section */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-dark"></div>
            </div>

            {/* Ambient Glow Effects */}
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>
             <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" style={{ animationDuration: '7s' }}></div>


            <div className="relative z-10 text-center px-4 max-w-full mx-auto">
                
                <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-playfair font-bold mb-8 tracking-tight drop-shadow-2xl animate-[slide-up_1s_ease-out_0.2s_forwards] opacity-0 leading-none whitespace-nowrap">
                    Alex's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Food Guide</span>
                </h1>

                <p className="text-xl md:text-2xl font-light text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow-lg animate-[slide-up_1s_ease-out_0.4s_forwards] opacity-0">
                    A curated collection of culinary experiences and hidden gems from my travels around the world.
                </p>
            </div>

             {/* Scroll Indicator */}
            <div className="absolute bottom-10 z-10 animate-[fade-in_1s_ease-out_1.5s_forwards] opacity-0">
                <button
                    onClick={scrollToAbout}
                    className="
                        group p-4 rounded-full
                        text-white/50 hover:text-white transition-all duration-300
                    "
                    aria-label="Scroll down"
                >
                    <ArrowDownIcon className="w-6 h-6 animate-bounce" />
                </button>
            </div>
        </section>
    );
};

export default Hero;
