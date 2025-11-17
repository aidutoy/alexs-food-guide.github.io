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
        const duration = 2500; // Slower scroll: 2.5 seconds

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
            className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white relative"
            style={{ backgroundImage: "url('public/images/bonn/tio_pepe/tio_pepe_1.jpg')" }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-center px-4">
                <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-4 tracking-wider">
                    Alex's Food Guide
                </h1>
                <p className="text-lg md:text-xl font-roboto font-light max-w-2xl mx-auto">
                    Discovering the world's most unforgettable dishes, one city at a time.
                </p>
            </div>
            <button
                onClick={scrollToAbout}
                className="absolute bottom-10 z-10 text-white animate-bounce"
                aria-label="Scroll down"
            >
                <ArrowDownIcon className="w-10 h-10" />
            </button>
        </section>
    );
};

export default Hero;