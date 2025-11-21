
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
                    src="https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/tio_pepe/tio_pepe_1.jpg"
                    alt="Hero Background"
                    className="w-full h-full object-cover animate-slow-zoom"
                    fetchPriority="high"
                />
                 {/* Dark overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/50"></div>

                 {/* Gradient Overlay for smooth transition to next section */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-dark/90"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent"></div>
            </div>

            <div className="relative z-10 w-full flex flex-col items-center justify-center">
                
                {/* 
                    Mobile/Tablet: Full width blurred strip
                    Desktop: Transparent container (blur handled by specific blobs/gradients)
                */}
                <div className="
                    w-full py-16 lg:py-0
                    flex flex-col items-center justify-center
                    bg-black/10 backdrop-blur-sm
                    lg:bg-transparent lg:backdrop-blur-none lg:w-auto
                ">
                    {/* Title Wrapper */}
                    <div className="relative mb-4 lg:mb-8 text-center px-2 sm:px-4">
                         {/* Desktop Radial Gradient - Hidden on mobile/tablet */}
                         <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(closest-side,_var(--tw-gradient-stops))] from-black/70 via-transparent to-transparent blur-3xl pointer-events-none"></div>
                         
                         <h1 className="
                            relative 
                            text-[8vw] md:text-[8vw] lg:text-8xl xl:text-9xl 
                            font-playfair font-bold tracking-tight 
                            drop-shadow-2xl 
                            animate-[slide-up_1s_ease-out_0.2s_forwards] opacity-0 
                            leading-none 
                            whitespace-nowrap
                         " style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
                            <span>Alex's</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Food Guide</span>
                        </h1>
                    </div>

                    <div className="relative text-center px-4">
                        {/* Desktop Description Blur - Hidden on mobile/tablet */}
                         <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-black/30 blur-2xl rounded-full -z-10"></div>
                        <p className="
                            text-sm sm:text-base md:text-lg lg:text-2xl 
                            font-light text-gray-100 
                            max-w-2xl mx-auto 
                            leading-relaxed 
                            drop-shadow-lg 
                            animate-[slide-up_1s_ease-out_0.4s_forwards] opacity-0 
                            relative
                        ">
                            My personal collection of restaurants, cafes, and hidden gems from my travels around the world.
                        </p>
                    </div>
                </div>
            </div>

             {/* Scroll Indicator */}
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
