
import React from 'react';

const CameraIcon = () => (
    <svg className="w-16 h-16 text-white/80 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
);

const Why: React.FC = () => {
    return (
        <section id="why" className="relative py-32 min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax feel */}
            <div className="absolute inset-0">
                <img 
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop" 
                    alt="Restaurant ambience" 
                    className="w-full h-full object-cover filter blur-[2px] scale-105 brightness-50"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/40 to-brand-dark/90"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Glassmorphism Card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] p-8 md:p-16 shadow-2xl text-center transform hover:scale-[1.01] transition-transform duration-500">
                    <CameraIcon />
                    
                    <h2 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-10">
                        The Why
                    </h2>
                    
                    <div className="prose prose-lg prose-invert mx-auto">
                        <p className="text-xl text-gray-200 font-light leading-relaxed mb-8">
                            I am one of those people who spend the first few minutes of every meal taking pictures of the plate in front of me. 
                        </p>
                        
                        <p className="text-lg text-gray-300 leading-relaxed mb-8">
                            Not everyone is a fan of this, but I don't do it for them. I do it for myself to remember. However, I thought, <span className="text-white font-medium italic">"What good does this photo do stuck in my phone?"</span> Why not share my experiences with you?
                        </p>

                        <div className="grid md:grid-cols-3 gap-6 text-left mt-12 pt-12 border-t border-white/10">
                            <div className="bg-black/20 p-4 rounded-xl">
                                <span className="block text-brand-primary text-xl font-bold mb-2">Simple.</span>
                                <span className="text-sm text-gray-400">No detailed spice analysis. Just the key points.</span>
                            </div>
                            <div className="bg-black/20 p-4 rounded-xl">
                                <span className="block text-brand-primary text-xl font-bold mb-2">Useful.</span>
                                <span className="text-sm text-gray-400">What's on the menu? How much does it cost?</span>
                            </div>
                            <div className="bg-black/20 p-4 rounded-xl">
                                <span className="block text-brand-primary text-xl font-bold mb-2">Honest.</span>
                                <span className="text-sm text-gray-400">Dietary info and personal recommendations.</span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-12">
                        <p className="text-white/60 font-playfair italic">
                            "Food is all about sharing with friends and family."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Why;
