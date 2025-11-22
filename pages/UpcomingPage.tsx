
import React from 'react';

interface UpcomingRestaurant {
    name: string;
    city: string;
    cuisine: string;
    notes?: string;
}

const upcomingList: UpcomingRestaurant[] = [
    { name: "El Inca", city: "Cologne", cuisine: "Peruvian", notes: "Authentic ceviche and Pisco sours." },
    { name: "Thai Viet Street Food", city: "Cologne", cuisine: "Thai/Vietnamese", notes: "Heard good things about the Pad Thai." },
    { name: "El Patio", city: "Bruhl", cuisine: "Spanish", notes: "Tapas night out planned." },
    { name: "River boat Cruise", city: "Cairo", cuisine: "Experience", notes: "Dinner on the Nile." },
    { name: "Rooftop 7000", city: "Giza", cuisine: "Rooftop Bar", notes: "Views of the pyramids." },
    { name: "Giftun Azur Resort", city: "Hurghada", cuisine: "Resort Dining", notes: "Testing the all-inclusive buffet." },
];

const UpcomingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-dark text-white pt-24 pb-20 px-4 relative overflow-hidden">
            {/* Ambient Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                 <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
                 <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 drop-shadow-2xl">
                        Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Reviews</span>
                    </h1>
                    <p className="text-white/60 text-xl font-light max-w-2xl mx-auto">
                        A list of places on my radar that I will be visiting and reviewing soon.
                    </p>
                </div>

                <div className="grid gap-6">
                    {upcomingList.map((item, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center hover:bg-white/10 transition-colors duration-300 group">
                            <div>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-3 py-1 rounded-full bg-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest border border-brand-primary/20">
                                        {item.cuisine}
                                    </span>
                                    <span className="text-white/40 text-sm uppercase tracking-wide font-medium">
                                        {item.city}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-playfair font-bold text-white group-hover:text-brand-primary transition-colors duration-300">
                                    {item.name}
                                </h3>
                                {item.notes && (
                                    <p className="text-white/60 mt-2 font-light italic">
                                        "{item.notes}"
                                    </p>
                                )}
                            </div>
                            <div className="mt-4 md:mt-0">
                                <span className="inline-block w-12 h-1 bg-white/20 rounded-full group-hover:w-20 group-hover:bg-brand-primary transition-all duration-300"></span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UpcomingPage;
    