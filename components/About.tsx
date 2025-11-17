
import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-4xl font-playfair font-bold text-brand-dark mb-6">About The Guide</h2>
                    <p className="text-brand-secondary leading-relaxed mb-4">
                        Alex's Food Guide is a curated collection of culinary experiences from around the globe. It's more than just reviews; it's a journal of flavors, ambiances, and the stories behind the meals.
                    </p>
                    <p className="text-brand-secondary leading-relaxed">
                        Each city is a new chapter, and every restaurant is a character. My goal is to capture the essence of a place through its food, providing honest, detailed insights to help fellow food lovers embark on their own delicious adventures.
                    </p>
                </div>
                <div className="order-1 md:order-2">
                    <img
                        src="https://picsum.photos/seed/about/600/500"
                        alt="A person enjoying a meal"
                        className="rounded-lg shadow-2xl w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
