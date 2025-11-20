
import React from 'react';

const Why: React.FC = () => {
    return (
        <section id="why" className="relative py-24 pb-32 md:pb-48 overflow-hidden z-10">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    
                    <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-8">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Why</span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8">
                        I am one of those people who spend the first few minutes of every meal taking pictures of the plate in front of me. But I thought to myself...
                    </p>
                    
                    <div className="relative inline-block mb-12">
                         <div className="absolute -inset-2 bg-brand-primary/20 blur-xl rounded-full"></div>
                         <p className="relative text-xl md:text-2xl text-white font-playfair italic leading-relaxed opacity-90">
                            "Would anyone else appreciate these photos?"
                        </p>
                    </div>

                    <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8">
                        ...and so this food guide was born, not out of neccessity but out of my love for food. 
                    </p>
                </div>

                {/* Three Pillars - Liquid Glass Bubbles */}
                <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
                    {/* Pillar 1 */}
                    <div className="group relative bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"></div>
                        <h3 className="text-2xl font-playfair font-bold text-brand-primary mb-4 relative z-10">Simple.</h3>
                        <p className="text-gray-400 leading-relaxed relative z-10">
                            No detailed spice analysis or chef biography. Just the key points you need to know before booking a table.
                        </p>
                    </div>

                    {/* Pillar 2 */}
                    <div className="group relative bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"></div>
                        <h3 className="text-2xl font-playfair font-bold text-brand-primary mb-4 relative z-10">Direct.</h3>
                        <p className="text-gray-400 leading-relaxed relative z-10">
                            What's on the menu? How much does it cost? Where is it located? All the essentials in one place.
                        </p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="group relative bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"></div>
                        <h3 className="text-2xl font-playfair font-bold text-brand-primary mb-4 relative z-10">Informative.</h3>
                        <p className="text-gray-400 leading-relaxed relative z-10">
                            Real dietary info, ratings, and personal recommendations. If I didn't like it, you know why.
                        </p>
                    </div>
                </div>
                
                <div className="mt-20 text-center">
                    <p className="text-white/40 font-playfair italic text-sm tracking-wider">
                        Food is all about sharing with friends and family.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Why;
