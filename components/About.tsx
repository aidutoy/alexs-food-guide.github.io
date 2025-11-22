
import React from 'react';

const PinIcon = () => (
    <svg className="w-12 h-12 text-brand-primary mb-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
);

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 md:py-32 relative overflow-hidden">
            {/* Connecting Gradient from Hero - adjusted for new background */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-brand-dark via-brand-dark/90 to-transparent pointer-events-none z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
                <div className="order-2 md:order-1">
                    <div className="
                        animate-[slide-up_0.6s_ease-out_forwards]
                        bg-white/5 backdrop-blur-xl border border-white/10
                        p-8 md:p-12 rounded-[3rem] shadow-2xl
                        relative overflow-hidden group
                    ">
                        {/* Subtle internal shine */}
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 to-transparent opacity-50 pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            <PinIcon />
                            <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-8 leading-tight">
                                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Concept</span>
                            </h2>
                            <div className="space-y-6 text-lg font-light text-gray-300 leading-relaxed">
                                <p>
                                    When I was 25 years old, I moved from Scotland to Bonn for University. My introduction flyer to the University had a nice map of the city and the Rhein. I took that map a year later and thought...
                                </p>
                                <p className="pl-4 border-l-2 border-brand-primary/50 italic text-white/90">
                                    "Wouldn't it be cool to stick this up on a board in the kitchen and pin my favourite spots in Bonn?"
                                </p>
                                <p>
                                    So I start pinning restaurants, cafes, bars, and attractions that I discovered with different colours and string. I would capture the basics: name, price, and a short recommendation. Fast-forward four years, and I am taking this semi-private concept and turning it into a public digital food guide to share with anyone who enjoys a good time and tasty food.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="order-1 md:order-2 relative flex justify-center md:justify-end">
                    {/* Elegant Framed Image Box */}
                    <div className="relative w-full max-w-md aspect-[4/5]">
                        
                        {/* The 'Frame' Element - Wireframe style */}
                        <div className="absolute inset-0 border border-brand-primary/30 rounded-2xl transform translate-x-6 translate-y-6 z-0"></div>
                        
                        {/* The Image Container */}
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl z-10 group bg-black">
                            {/* Removed dark overlay on idle to brighten image */}
                            
                            <img
                                src="https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/map.jpg"
                                alt="The original map with pins"
                                className="w-full h-full object-cover transform transition-transform duration-1000 ease-out scale-105 group-hover:scale-100"
                            />
                            
                            {/* Inner Border */}
                            <div className="absolute inset-0 border border-white/10 rounded-2xl z-30 pointer-events-none"></div>
                        </div>

                        {/* Decorative minimalist accents */}
                         <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-brand-primary/50 rounded-tr-lg z-20"></div>
                         <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-white/20 rounded-bl-lg z-20"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
