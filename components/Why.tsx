
import React from 'react';

const CameraIcon = () => (
    <svg className="w-12 h-12 text-brand-primary mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
);

const Why: React.FC = () => {
    return (
        <section id="why" className="relative py-24 pb-32 md:pb-48 overflow-hidden z-10">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center justify-center p-4 rounded-full bg-white/5 backdrop-blur-md mb-6 border border-white/10 shadow-lg">
                        <CameraIcon />
                    </div>
                    
                    <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-8">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Why</span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-8">
                        I am one of those people who spend the first few minutes of every meal taking pictures of the plate in front of me. 
                        Not everyone is a fan of this, but I do it to remember. 
                    </p>
                    
                    <div className="relative inline-block">
                         <div className="absolute -inset-2 bg-brand-primary/20 blur-xl rounded-full"></div>
                         <p className="relative text-xl md:text-2xl text-white font-playfair italic leading-relaxed opacity-90">
                            "What good does this photo do stuck in my phone?"
                        </p>
                    </div>
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
                        <h3 className="text-2xl font-playfair font-bold text-brand-primary mb-4 relative z-10">Useful.</h3>
                        <p className="text-gray-400 leading-relaxed relative z-10">
                            What's on the menu? How much does it cost? Where is it located? All the essentials in one place.
                        </p>
                    </div>

                    {/* Pillar 3 */}
                    <div className="group relative bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/5 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 shadow-xl">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]"></div>
                        <h3 className="text-2xl font-playfair font-bold text-brand-primary mb-4 relative z-10">Honest.</h3>
                        <p className="text-gray-400 leading-relaxed relative z-10">
                            Real dietary info, personal recommendations, and unbiased verdicts. If I didn't like it, it's not here.
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
