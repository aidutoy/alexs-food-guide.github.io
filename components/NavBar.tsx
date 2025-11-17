
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const handleSmoothScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        if (!href) return;

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            let startTime: number | null = null;
            const duration = 1500; // 1.5 seconds

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
        }
    };

    const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHomePage ? 'bg-brand-dark shadow-lg' : 'bg-transparent'}`;
    const navLinkClass = "text-white hover:text-gray-300 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium";

    return (
        <nav className={navClass}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                         <Link to="/" className="text-white font-playfair text-2xl font-bold">
                            Alex's Food Guide
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#about" onClick={isHomePage ? handleSmoothScroll : undefined} className={navLinkClass}>About</a>
                            <a href="#why" onClick={isHomePage ? handleSmoothScroll : undefined} className={navLinkClass}>The Why</a>
                            <a href="#cities" onClick={isHomePage ? handleSmoothScroll : undefined} className={navLinkClass}>Cities</a>
                            <Link to="/contact" className={navLinkClass}>Contact</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;