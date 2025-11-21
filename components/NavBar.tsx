
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import SearchIcon from './icons/SearchIcon';
import LanguageSelector from './LanguageSelector';

declare global {
    interface Window {
        googleTranslateElementInit: () => void;
        google: any;
    }
}

const NavBar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // Initialize Google Translate
    useEffect(() => {
        if (!window.googleTranslateElementInit) {
            window.googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement({
                    pageLanguage: 'en',
                    includedLanguages: 'en,de,fr,es,it,pt,nl,pl,sv,ru,ja,zh-CN,ko,hi,ar,tr,vi,th',
                    layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
                    autoDisplay: false
                }, 'google_translate_element');
            };
        }

        if (!document.getElementById('google-translate-script')) {
            const script = document.createElement('script');
            script.id = 'google-translate-script';
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            script.async = true;
            document.body.appendChild(script);
        }

        // Inject custom styles to hide Google's default banner and widgets
        const style = document.createElement('style');
        style.innerHTML = `
            .goog-te-banner-frame.skiptranslate { display: none !important; } 
            body { top: 0px !important; } 
            .goog-te-gadget-icon { display: none !important; } 
            #google_translate_element { display: none !important; }
            .goog-tooltip { display: none !important; }
            .goog-te-gadget-simple { background-color: transparent !important; border: none !important; font-size: 0 !important; }
        `;
        document.head.appendChild(style);
    }, []);

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

    const navClass = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHomePage || isMenuOpen ? 'bg-brand-dark shadow-lg' : 'bg-transparent'}`;
    const navLinkClass = "text-white hover:text-gray-300 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2";
    const mobileNavLinkClass = "text-white text-3xl font-playfair hover:text-gray-300 transition-colors duration-300";


    return (
        <>
            <div id="google_translate_element" className="fixed bottom-0 right-0 pointer-events-none opacity-0"></div>
            
            <nav className={navClass}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                             <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-white font-playfair text-2xl font-bold">
                                Alex's Food Guide
                            </Link>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-4">
                                <Link to="/locations" className={navLinkClass}>Locations</Link>
                                <Link to="/contact" className={navLinkClass}>Contact</Link>
                                <Link to="/search" className={navLinkClass}>
                                    <SearchIcon className="w-4 h-4" />
                                    Search
                                </Link>
                                <div className="h-4 w-px bg-white/20 mx-2"></div>
                                <LanguageSelector />
                            </div>
                        </div>
                         <div className="-mr-2 flex md:hidden">
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
                    fixed inset-0 z-40 bg-brand-dark/95 backdrop-blur-sm md:hidden 
                    transition-opacity duration-300 ease-in-out
                    ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
                `}
                id="mobile-menu"
            >
                <div className="flex flex-col items-center justify-center h-full space-y-8 overflow-y-auto py-8">
                    <Link to="/locations" onClick={handleMobileRouterLinkClick} className={mobileNavLinkClass}>Locations</Link>
                    <Link to="/contact" onClick={handleMobileRouterLinkClick} className={mobileNavLinkClass}>Contact</Link>
                    <Link to="/search" onClick={handleMobileRouterLinkClick} className={mobileNavLinkClass}>Search</Link>
                    <div className="border-t border-white/10 w-24 my-4"></div>
                    <LanguageSelector mobile onClose={handleMobileRouterLinkClick} />
                </div>
            </div>
        </>
    );
};

export default NavBar;
