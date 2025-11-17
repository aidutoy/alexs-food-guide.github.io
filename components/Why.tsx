
import React from 'react';

const Why: React.FC = () => {
    return (
        <section id="why" className="py-20 md:py-32 bg-brand-light">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-playfair font-bold text-brand-dark mb-6">The Reason Why</h2>
                <p className="text-lg text-brand-secondary leading-relaxed mb-4">
                    Food is a universal language. It connects us to different cultures, creates lasting memories, and brings people together. I started this guide out of a pure passion for exploring this language.
                </p>
                <p className="text-lg text-brand-secondary leading-relaxed">
                    This project is my way of documenting the incredible craftsmanship of chefs, the warmth of hospitality, and the simple joy of a perfect meal. It's a tribute to the art of dining and a personal quest to find and share the truly exceptional.
                </p>
            </div>
        </section>
    );
};

export default Why;
