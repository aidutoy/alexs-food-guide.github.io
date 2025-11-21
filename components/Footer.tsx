
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const location = useLocation();
    const navigate = useNavigate();

    const handleScrollLink = (id: string) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    const top = element.getBoundingClientRect().top + window.scrollY;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) {
                const top = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    };

    return (
        <footer className="bg-brand-dark border-t border-white/10 text-white py-8 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="text-2xl font-playfair font-bold mb-4 block">
                            Alex's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Food Guide</span>
                        </Link>
                        <p className="text-white/50 font-light text-sm leading-relaxed max-w-sm">
                             A personal curated collection of culinary experiences, hidden gems, and honest reviews from my travels around the world.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="col-span-1">
                        <h4 className="font-playfair font-bold text-base mb-4 text-white">Explore</h4>
                        <ul className="space-y-2 text-sm text-white/60">
                            <li><Link to="/" className="hover:text-brand-primary transition-colors duration-300">Home</Link></li>
                            <li><Link to="/locations" className="hover:text-brand-primary transition-colors duration-300">Locations</Link></li>
                            <li><Link to="/search" className="hover:text-brand-primary transition-colors duration-300">Search</Link></li>
                            <li><Link to="/contact" className="hover:text-brand-primary transition-colors duration-300">Contact</Link></li>
                        </ul>
                    </div>

                    {/* About Links */}
                    <div className="col-span-1">
                         <h4 className="font-playfair font-bold text-base mb-4 text-white">About</h4>
                         <ul className="space-y-2 text-sm text-white/60">
                            <li>
                                <button onClick={() => handleScrollLink('about')} className="hover:text-brand-primary transition-colors duration-300 text-left">The Concept</button>
                            </li>
                             <li>
                                <button onClick={() => handleScrollLink('why')} className="hover:text-brand-primary transition-colors duration-300 text-left">The Why</button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/30 text-xs tracking-wider">
                        &copy; {currentYear} Alex's Food Guide. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
