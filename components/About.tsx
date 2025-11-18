import React from 'react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-4xl font-playfair font-bold text-brand-dark mb-6">The Concept</h2>
                    <p className="text-brand-secondary leading-relaxed mb-4">
                        When I moved from Scotland to Bonn, my introduction flyer to the University had a nice map of the city and the Rhein. I took this map and pinned it up on a board in the student dorm kitchen. I started pinning restaurants, cafes, bars, and attractions I discovered with coloured pins and string. I would capture the basics, name, price, and a short recommendation on what to eat or drink. Fast-forward four years and I am taking this concept and turning it into a food guide to share with anyone who enjoys a good time and tasty food.
                    </p>
                </div>
                <div className="order-1 md:order-2">
                    <img
                        src="https://raw.githubusercontent.com/aidutoy/alexs-food-guide-images/main/images/Bonn/map.jpg"
                        alt="The original map"
                        className="rounded-lg shadow-2xl w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;