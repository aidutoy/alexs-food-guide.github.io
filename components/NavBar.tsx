import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import SearchIcon from './icons/SearchIcon';
import GalleryIcon from './icons/GalleryIcon';
import KnifeIcon from './icons/KnifeIcon';
import MapPinIcon from './icons/MapPinIcon';
import BookmarkIcon from './icons/BookmarkIcon';
import { useSaved } from '../context/SavedContext';

const NavBar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const { savedIds, setIsDrawerOpen, savedToast } = useSaved();

    // Effect for scroll detection
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

    // Effect for body scroll lock when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const handleMobileRouterLinkClick = () => {
        setIsMenuOpen(false);
    };

    const navClass = `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled || !isHomePage || isMenuOpen ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-transparent'}`;
    const navLinkClass = "text-white/80 hover:text-white transition-colors duration-300 px-2.5 py-2 rounded-md text-sm font-medium flex items-center gap-1.5";
    const mobileNavLinkClass = "text-white text-3xl font-playfair hover:text-gray-300 transition-colors duration-300 flex items-center gap-3";

    return (
        <>
            <nav className={navClass}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                             <Link to="/" onClick={() => setIsMenuOpen(false)} className="font-playfair text-2xl font-bold">
                                <span className="text-white">Alex's</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Food Guide</span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:block">
                            <div className="ml-6 flex items-center space-x-2">
                                <Link to="/map" className={navLinkClass}>
                                    <MapPinIcon className="w-4 h-4 mb-0.5" />
                                    Map
                                </Link>
                                <Link to="/locations" className={navLinkClass}>Locations</Link>
                                <Link to="/gallery" className={navLinkClass}>
                                    <GalleryIcon className="w-4 h-4 mb-0.5" />
                                    Gallery
                                </Link>
                                <Link to="/what-to-eat" className={navLinkClass}>
                                    <KnifeIcon className="w-4 h-4 mb-0.5" />
                                    What to Eat
                                </Link>
                                <Link to="/contact" className={navLinkClass}>Contact</Link>
                                <Link to="/search" className={navLinkClass}>
                                    <SearchIcon className="w-4 h-4" />
                                    Search
                                </Link>

                                {/* Saved Shortlist Button */}
                                <button
                                    onClick={() => setIsDrawerOpen(true)}
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/15 text-white/90 hover:text-white border border-white/10 transition-all text-xs font-medium ml-2 shadow-sm active:scale-95"
                                    title="View my saved spots shortlist"
                                    aria-label="Open saved shortlist"
                                >
                                    <BookmarkIcon className={`w-4 h-4 ${savedIds.length > 0 ? 'text-brand-primary' : 'text-white/60'}`} filled={savedIds.length > 0} />
                                    <span>Saved</span>
                                    {savedIds.length > 0 && (
                                        <span className="w-4 h-4 rounded-full bg-brand-primary text-white text-[10px] font-bold flex items-center justify-center">
                                            {savedIds.length}
                                        </span>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Right Controls: Saved & Hamburger */}
                        <div className="flex items-center gap-2 lg:hidden">
                            <button
                                onClick={() => setIsDrawerOpen(true)}
                                className="p-2 rounded-full bg-white/5 text-white/80 border border-white/10 relative"
                                aria-label="Open saved shortlist"
                            >
                                <BookmarkIcon className="w-5 h-5" filled={savedIds.length > 0} />
                                {savedIds.length > 0 && (
                                    <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-brand-primary text-white text-[9px] font-bold flex items-center justify-center">
                                        {savedIds.length}
                                    </span>
                                )}
                            </button>

                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
                                aria-controls="mobile-menu"
                                aria-expanded={isMenuOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isMenuOpen ? (
                                    <CloseIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`
                    fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-sm lg:hidden 
                    transition-opacity duration-300 ease-in-out
                    ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
                id="mobile-menu"
            >
                <div className="flex flex-col items-center justify-center h-full space-y-6 overflow-y-auto py-8">
                    <Link to="/map" onClick={handleMobileRouterLinkClick} className={mobileNavLinkClass}>
                        <MapPinIcon className="w-6 h-6" />
                        Map
                    </Link>
                    <Link to="/locations" onClick={handleMobileRouterLinkClick} className={mobileNavLinkClass}>Locations</Link>
                    <Link to="/gallery" onClick={handleMobileRouterLinkClick} className={mobileNavLinkClass}>Gallery</Link>
                    <Link to="/what-to-eat" onClick={handleMobileRouterLinkClick} className={mobileNavLinkClass}>What to Eat</Link>
                    <Link to="/contact" onClick={handleMobileRouterLinkClick} className={mobileNavLinkClass}>Contact</Link>
                    <Link to="/search" onClick={handleMobileRouterLinkClick} className={mobileNavLinkClass}>Search</Link>
                    
                    <button
                        onClick={() => {
                            setIsMenuOpen(false);
                            setIsDrawerOpen(true);
                        }}
                        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-primary text-white text-lg font-medium mt-4 shadow-xl"
                    >
                        <BookmarkIcon className="w-5 h-5" filled={true} />
                        <span>Saved Shortlist ({savedIds.length})</span>
                    </button>
                </div>
            </div>

            {/* Floating Toast Notification for Saved items */}
            {savedToast && (
                <div className="fixed bottom-6 right-6 z-50 bg-zinc-900 text-white px-4 py-2.5 rounded-2xl shadow-2xl flex items-center gap-2.5 border border-white/20 animate-fade-in text-sm font-medium">
                    <BookmarkIcon className="w-4 h-4 text-brand-primary" filled={true} />
                    <span>{savedToast}</span>
                </div>
            )}
        </>
    );
};

export default NavBar;
