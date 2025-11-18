
import React from 'react';

const PinIcon = () => (
    <svg className="w-12 h-12 text-brand-primary mb-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
);

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-brand-dark relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div className="order-2 md:order-1">
                    <div className="animate-[slide-up_0.6s_ease-out_forwards]">
                        <PinIcon />
                        <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-8 leading-tight">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Concept</span>
                        </h2>
                        <div className="space-y-6 text-lg font-light text-gray-300 leading-relaxed">
                            <p>
                                When I moved from Scotland to Bonn, my introduction flyer to the University had a nice map of the city and the Rhein.
                            </p>
                            <p className="pl-4 border-l-2 border-brand-primary/50 italic text-white/90">
                                "I took this map and pinned it up on a board in the student dorm kitchen. I started pinning restaurants, cafes, bars, and attractions I discovered with coloured pins and string."
                            </p>
                            <p>
                                I would capture the basics: name, price, and a short recommendation. Fast-forward four years, and I am taking this tactile concept and turning it into a digital food guide to share with anyone who enjoys a good time and tasty food.
                            </p>
                        </div>
                    </div>
                </div>
                
                <div className="order-1 md:order-2 relative group">
                    {/* Image backing effect */}
                    <div className="absolute inset-0 bg-brand-primary rounded-[2rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
                    <div className="absolute inset-0 bg-white/5 rounded-[2rem] -rotate-3 scale-105 backdrop-blur-sm border border-white/10"></div>
                    
                    <img
                        src="https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/map.jpg"
                        alt="The original map with pins"
                        className="relative z-10 rounded-[2rem] shadow-2xl w-full h-auto object-cover rotate-2 hover:rotate-0 transition-transform duration-700 border border-white/10"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
