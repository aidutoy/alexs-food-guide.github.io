
import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { cities } from '../data/mockData';
import type { Restaurant } from '../types';
import { RestaurantModal } from '../components/RestaurantModal';
import ChevronLeftIcon from '../components/icons/ChevronLeftIcon';
import SearchIcon from '../components/icons/SearchIcon';

const SearchPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const searchParams = new URLSearchParams(location.search);
    const tagParam = searchParams.get('tag');
    
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCity, setSelectedCity] = useState('All');
    const [selectedPrice, setSelectedPrice] = useState<number | null>(null);
    const [minRating, setMinRating] = useState<number>(0);
    const [selectedDietary, setSelectedDietary] = useState<string[]>([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
    const [filteredRestaurants, setFilteredRestaurants] = useState<(Restaurant & { cityName: string })[]>([]);
    const [placeholderText, setPlaceholderText] = useState("Search restaurants, cuisines, tags...");

    const dietaryOptions = ['Gluten-Free', 'Vegetarian', 'Vegan', 'Lactose-Free'];

    // Responsive Placeholder Text
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setPlaceholderText("Search restaurants...");
            } else {
                setPlaceholderText("Search restaurants, cuisines, tags (e.g. 'Pizza', 'Vegan')...");
            }
        };
        
        // Initial call
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Filtering Logic
    useEffect(() => {
        const lowerTerm = searchTerm.toLowerCase();
        
        let results = cities.flatMap(city => 
            city.restaurants.map(r => ({ ...r, cityName: city.name }))
        ).filter(restaurant => {
            // 1. City Filter
            if (selectedCity !== 'All' && restaurant.cityName !== selectedCity) {
                return false;
            }
            
            // 2. Price Filter
            if (selectedPrice !== null && restaurant.ratings.price !== selectedPrice) {
                return false;
            }

            // 3. Rating Filter (Food Rating)
            if (minRating > 0 && restaurant.ratings.food < minRating) {
                return false;
            }

             // 4. Dietary Filter
             if (selectedDietary.length > 0) {
                const hasAllDietary = selectedDietary.every(diet => {
                    return restaurant.tags && restaurant.tags.some(t => t.toLowerCase() === diet.toLowerCase());
                });
                if (!hasAllDietary) return false;
            }

            // 5. Search Term / Tag Filter
            if (tagParam && !searchTerm) {
                // Tag mode
                return restaurant.tags && restaurant.tags.some(t => t.toLowerCase() === tagParam.toLowerCase());
            } else if (searchTerm) {
                // Search mode
                return (
                    restaurant.name.toLowerCase().includes(lowerTerm) ||
                    restaurant.cuisine.toLowerCase().includes(lowerTerm) ||
                    restaurant.description.toLowerCase().includes(lowerTerm) ||
                    (restaurant.alexsTip && restaurant.alexsTip.toLowerCase().includes(lowerTerm)) ||
                    (restaurant.tags && restaurant.tags.some(t => t.toLowerCase().includes(lowerTerm))) ||
                    (restaurant.dietary && Object.values(restaurant.dietary).some(d => d.toLowerCase().includes(lowerTerm)))
                );
            }
            
            // If no search term and no tag, but filters are active, show filtered results
            if (!searchTerm && !tagParam && (selectedCity !== 'All' || selectedPrice !== null || minRating > 0 || selectedDietary.length > 0)) {
                return true;
            }

            // If nothing active, don't show all by default (optional, keeps UI clean)
            // Change to `return true` if you want to show all restaurants initially
            return false;
        });

        // Deduplicate by name AND city to allow same place in different cities
        const uniqueMap = new Map();
        results.forEach(r => {
            const uniqueKey = `${r.name}-${r.cityName}`;
            if (!uniqueMap.has(uniqueKey)) {
                uniqueMap.set(uniqueKey, r);
            }
        });
        results = Array.from(uniqueMap.values());

        setFilteredRestaurants(results);

    }, [searchTerm, tagParam, selectedCity, selectedPrice, minRating, selectedDietary]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const openModal = (restaurant: Restaurant) => {
        setSelectedRestaurant(restaurant);
    };

    const closeModal = () => {
        setSelectedRestaurant(null);
    };

    const togglePrice = (price: number) => {
        setSelectedPrice(selectedPrice === price ? null : price);
    }

    const toggleRating = (rating: number) => {
        setMinRating(minRating === rating ? 0 : rating);
    }

    const toggleDietary = (diet: string) => {
        if (selectedDietary.includes(diet)) {
            setSelectedDietary(selectedDietary.filter(d => d !== diet));
        } else {
            setSelectedDietary([...selectedDietary, diet]);
        }
    };

    const clearAllFilters = () => {
        setSearchTerm('');
        setSelectedCity('All');
        setSelectedPrice(null);
        setMinRating(0);
        setSelectedDietary([]);
        navigate('/search');
    }

    return (
        <div className="min-h-screen bg-brand-dark text-white relative pt-24">
             {/* Ambient Background Elements */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
            </div>

             {/* Header & Search Input */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 relative z-10">
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

                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
                            Find Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-orange-400">Craving</span>
                        </h1>
                        
                        {/* Search Bar */}
                        <div className="relative group mb-8">
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-orange-400 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                            <div className="relative flex items-center bg-white/5 backdrop-blur-xl border border-white/20 rounded-full px-6 py-4 shadow-2xl transition-colors focus-within:bg-white/10 focus-within:border-white/40">
                                <SearchIcon className="w-6 h-6 text-white/50 mr-4 shrink-0" />
                                <input 
                                    type="text" 
                                    placeholder={placeholderText} 
                                    className="w-full bg-transparent border-none outline-none text-white placeholder-white/30 text-lg font-light"
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                    autoFocus
                                />
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="flex flex-col flex-wrap justify-center gap-4 animate-fade-in">
                            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                                 {/* City Select */}
                                 <div className="relative">
                                    <select
                                        value={selectedCity}
                                        onChange={(e) => setSelectedCity(e.target.value)}
                                        className="appearance-none bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full py-2 pl-4 pr-10 focus:outline-none focus:border-brand-primary transition-colors cursor-pointer text-sm h-full"
                                    >
                                        <option value="All" className="bg-zinc-800 text-white">All Cities</option>
                                        {cities.map(city => (
                                            <option key={city.id} value={city.name} className="bg-zinc-800 text-white">{city.name}</option>
                                        ))}
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-white/50">
                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                 </div>

                                 {/* Divider (Desktop) */}
                                 <div className="hidden md:block w-px bg-white/10 h-10"></div>

                                 {/* Price Toggles */}
                                 <div className="flex items-center justify-center bg-white/5 rounded-full p-1 border border-white/10">
                                    {[1, 2, 3].map((price) => (
                                        <button
                                            key={price}
                                            onClick={() => togglePrice(price)}
                                            className={`
                                                px-4 py-1.5 rounded-full text-sm font-medium transition-all
                                                ${selectedPrice === price 
                                                    ? 'bg-brand-primary text-white shadow-lg' 
                                                    : 'text-white/50 hover:text-white hover:bg-white/5'
                                                }
                                            `}
                                        >
                                            {Array(price).fill('€').join('')}
                                        </button>
                                    ))}
                                 </div>

                                 {/* Rating Toggles */}
                                 <div className="flex items-center gap-2 bg-white/5 rounded-full p-1 px-2 border border-white/10">
                                    <span className="text-xs text-white/40 uppercase tracking-wider pl-2 hidden sm:inline">Food</span>
                                    {[3, 4, 5].map((rating) => (
                                        <button
                                            key={rating}
                                            onClick={() => toggleRating(rating)}
                                            className={`
                                                px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1
                                                ${minRating === rating 
                                                    ? 'bg-white text-brand-dark shadow-lg' 
                                                    : 'text-white/50 hover:text-white hover:bg-white/5'
                                                }
                                            `}
                                        >
                                            {rating}+ <span className="text-xs">★</span>
                                        </button>
                                    ))}
                                 </div>
                            </div>

                             {/* Dietary Toggles */}
                             <div className="flex flex-wrap items-center justify-center gap-2 bg-white/5 rounded-[2rem] p-1 px-2 border border-white/10 w-fit mx-auto">
                                <span className="text-xs text-white/40 uppercase tracking-wider pl-2 hidden sm:inline">Dietary</span>
                                {dietaryOptions.map((diet) => (
                                    <button
                                        key={diet}
                                        onClick={() => toggleDietary(diet)}
                                        className={`
                                            px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1
                                            ${selectedDietary.includes(diet)
                                                ? 'bg-brand-accent text-brand-dark shadow-lg' 
                                                : 'text-white/50 hover:text-white hover:bg-white/5'
                                            }
                                        `}
                                    >
                                        {diet}
                                    </button>
                                ))}
                             </div>
                        </div>
                    </div>
                </div>

                {/* Results Status */}
                <div className="text-center border-b border-white/10 pb-8">
                    <p className="text-white/60 text-lg font-light">
                        {filteredRestaurants.length > 0 ? (
                             <>Found <span className="text-white font-medium">{filteredRestaurants.length}</span> results</>
                        ) : (
                            searchTerm || tagParam || selectedCity !== 'All' || selectedPrice !== null || minRating > 0 || selectedDietary.length > 0 ? (
                                "No results found matching your criteria."
                            ) : (
                                "Apply filters or start typing to explore..."
                            )
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
                                key={`${restaurant.id}-${restaurant.cityName}`} 
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
                                        
                                        {/* Stars in grid */}
                                        <div className="flex gap-0.5 mb-3 opacity-70">
                                            {Array.from({length: 5}, (_, i) => (
                                                <svg key={i} className={`w-3 h-3 ${i < restaurant.ratings.food ? 'text-brand-primary' : 'text-white/20'}`} fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                </svg>
                                            ))}
                                        </div>

                                        {restaurant.tags && (
                                            <div className="flex flex-wrap gap-2 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
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
                    searchTerm || tagParam || selectedCity !== 'All' || selectedPrice !== null || minRating > 0 || selectedDietary.length > 0 ? (
                        <div className="text-center py-20 bg-white/5 rounded-[2rem] border border-white/10 animate-fade-in">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                <SearchIcon className="w-8 h-8 text-white/30" />
                            </div>
                            <h3 className="text-2xl font-playfair font-bold text-white mb-2">No matches found</h3>
                            <p className="text-white/50 text-lg italic mb-8">Try adjusting your filters or search terms.</p>
                            <button 
                                onClick={clearAllFilters}
                                className="inline-block px-8 py-3 rounded-full bg-brand-primary hover:bg-red-700 text-white transition-all shadow-lg"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    ) : null
                )}
            </div>

            <RestaurantModal restaurant={selectedRestaurant} onClose={closeModal} />
        </div>
    );
};

export default SearchPage;
    