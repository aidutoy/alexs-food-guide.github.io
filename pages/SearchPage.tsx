
import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { cities } from '../data/mockData';
import type { Restaurant } from '../types';
import RestaurantModal from '../components/RestaurantModal';
import ChevronLeftIcon from '../components/icons/ChevronLeftIcon';
import SearchIcon from '../components/icons/SearchIcon';

const SearchPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const tagParam = searchParams.get('tag');
    
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
    const [filteredRestaurants, setFilteredRestaurants] = useState<(Restaurant & { cityName: string })[]>([]);

    // Initialize search from URL if needed, but prioritize typed input logic
    useEffect(() => {
        if (tagParam && !searchTerm) {
            // If there's a tag in URL and no manual search, filter by tag
            const results = cities.flatMap(city => 
                city.restaurants
                    .filter(r => r.tags && r.tags.some(t => t.toLowerCase() === tagParam.toLowerCase()))
                    .map(r => ({ ...r, cityName: city.name }))
            );
            setFilteredRestaurants(results);
        } else if (searchTerm) {
            // If user is typing, perform global search
            const lowerTerm = searchTerm.toLowerCase();
            const results = cities.flatMap(city => 
                city.restaurants
                    .filter(r => 
                        r.name.toLowerCase().includes(lowerTerm) ||
                        r.cuisine.toLowerCase().includes(lowerTerm) ||
                        r.description.toLowerCase().includes(lowerTerm) ||
                        (r.alexsTip && r.alexsTip.toLowerCase().includes(lowerTerm)) ||
                        (r.tags && r.tags.some(t => t.toLowerCase().includes(lowerTerm))) ||
                        (r.dietary && Object.values(r.dietary).some(d => d.toLowerCase().includes(lowerTerm)))
                    )
                    .map(r => ({ ...r, cityName: city.name }))
            );
            setFilteredRestaurants(results);
        } else {
            // Default state: Show nothing or maybe all? Let's show nothing until search
             setFilteredRestaurants([]);
        }
    }, [searchTerm, tagParam]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
        // If user starts typing, we might want to clear the tag param visually from URL or just ignore it
        // For now, we just let the searchTerm logic take precedence in the effect
    };

    const openModal = (restaurant: Restaurant) => {
        setSelectedRestaurant(restaurant);
    };

    const closeModal = () => {
        setSelectedRestaurant(null);
    };

    return (
        <div className="min-h-screen bg-brand-dark text-white relative pt-24">
             {/* Ambient Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
            </div>

             {/* Header & Search Input */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <button
                        onClick={() => navigate(-1)}
                        className="
                            group inline-flex items-center gap-2 
                            bg-black/20 hover:bg-black/40 backdrop-blur-md 
                            border border-white/10 hover:border-white/30
                            text-white px-4 py-2 rounded-full 
                            transition-all duration-300
                        "
                    >
                        <ChevronLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                        <span className="font-medium text-sm uppercase tracking-wider hidden sm:inline">Back</span>
                    </button>
                </div>

                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-8">
                        Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Craving</span>
                    </h1>
                    
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-orange-400 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <div className="relative flex items-center bg-white/5 backdrop-blur-xl border border-white/20 rounded-full px-6 py-4 shadow-2xl transition-colors focus-within:bg-white/10 focus-within:border-white/40">
                            <SearchIcon className="w-6 h-6 text-white/50 mr-4" />
                            <input 
                                type="text" 
                                placeholder="Search restaurants, cuisines, tags (e.g. 'Pizza', 'Vegan', 'Spicy')..." 
                                className="w-full bg-transparent border-none outline-none text-white placeholder-white/30 text-lg font-light"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                autoFocus
                            />
                        </div>
                    </div>
                </div>

                {/* Results Status */}
                <div className="text-center border-b border-white/10 pb-8">
                    <p className="text-white/60 text-lg font-light">
                        {searchTerm ? (
                            <>Found <span className="text-white font-medium">{filteredRestaurants.length}</span> results for "<span className="text-white italic">{searchTerm}</span>"</>
                        ) : tagParam ? (
                            <>Showing <span className="text-white font-medium">{filteredRestaurants.length}</span> results for tag "<span className="text-white italic capitalize">{tagParam}</span>"</>
                        ) : (
                            "Start typing to explore the guide..."
                        )}
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
                {filteredRestaurants.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredRestaurants.map((restaurant) => (
                             <div 
                                key={restaurant.id} 
                                className="group cursor-pointer animate-fade-in"
                                onClick={() => openModal(restaurant)}
                            >
                                <div className="
                                    relative aspect-[4/5] rounded-[2rem] overflow-hidden 
                                    border border-white/10 bg-white/5 shadow-2xl
                                    transition-all duration-500 ease-out
                                    group-hover:border-white/30 group-hover:shadow-brand-primary/10
                                    group-hover:-translate-y-2
                                ">
                                    <img 
                                        src={restaurant.mainImage.url} 
                                        alt={restaurant.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex justify-between items-end mb-2">
                                             <p className="text-brand-primary font-medium tracking-widest uppercase text-xs">
                                                {restaurant.cuisine}
                                            </p>
                                            <span className="text-white/40 text-xs uppercase tracking-widest">{restaurant.cityName}</span>
                                        </div>
                                       
                                        <h3 className="text-2xl font-playfair font-bold text-white mb-2 leading-tight">
                                            {restaurant.name}
                                        </h3>
                                        {restaurant.tags && (
                                            <div className="flex flex-wrap gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                {restaurant.tags.slice(0, 3).map(tag => (
                                                    <span key={tag} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/10 text-white/70 backdrop-blur-sm">
                                                        {tag}
                                                    </span>
                                                ))}
                                                {restaurant.tags.length > 3 && (
                                                    <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-white/10 text-white/70 backdrop-blur-sm">
                                                        +{restaurant.tags.length - 3}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    searchTerm || tagParam ? (
                        <div className="text-center py-20 bg-white/5 rounded-[2rem] border border-white/10 animate-fade-in">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                <SearchIcon className="w-8 h-8 text-white/30" />
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-white mb-2">No matches found</h3>
                            <p className="text-white/50 text-lg italic">Try adjusting your search terms or browsing by city.</p>
                            <Link to="/locations" className="inline-block mt-8 px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10">
                                Browse All Cities
                            </Link>
                        </div>
                    ) : null
                )}
            </div>

            <RestaurantModal restaurant={selectedRestaurant} onClose={closeModal} />
        </div>
    );
};

export default SearchPage;
