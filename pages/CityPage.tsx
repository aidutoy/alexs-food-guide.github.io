
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { cities } from '../data/mockData';
import type { Restaurant } from '../types';
import RestaurantModal from '../components/RestaurantModal';
import ChevronLeftIcon from '../components/icons/ChevronLeftIcon';

const CityPage: React.FC = () => {
  const { cityId } = useParams<{ cityId: string }>();
  const city = cities.find((c) => c.id === cityId);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const navigate = useNavigate();

  if (!city) {
    return (
      <div className="min-h-screen bg-brand-dark flex flex-col items-center justify-center text-center px-4 pt-16 relative overflow-hidden">
         {/* Ambient Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10">
            <h1 className="text-5xl font-playfair font-bold text-white mb-4">City Not Found</h1>
            <p className="text-white/60 mb-8 text-lg">We couldn't find the city you're looking for.</p>
            <Link to="/" className="inline-block bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3 px-8 rounded-full transition-all backdrop-blur-sm">
                Back to Home
            </Link>
        </div>
      </div>
    );
  }

  const openModal = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const closeModal = () => {
    setSelectedRestaurant(null);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white relative">
      {/* Ambient Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
         <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Hero Section with Gradient Blend */}
      <div className="relative h-[60vh] w-full">
        <img 
            src={city.image} 
            alt={city.name} 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/10 via-brand-dark/10 to-brand-dark"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl md:text-8xl font-playfair font-bold text-white drop-shadow-2xl animate-[slide-up_0.8s_ease-out_forwards]">
                {city.name}
            </h1>
            <p className="text-white text-xl md:text-2xl font-light mt-4 max-w-2xl animate-[slide-up_0.8s_ease-out_0.2s_forwards] opacity-0 drop-shadow-lg">
                Discovering the best tastes in town
            </p>
        </div>

        {/* Back Button */}
        <div className="absolute top-24 left-4 md:left-8 z-20">
             <button
                onClick={() => navigate(-1)}
                className="
                    group flex items-center gap-2 
                    bg-black/20 hover:bg-black/40 backdrop-blur-md 
                    border border-white/10 hover:border-white/30
                    text-white px-5 py-2.5 rounded-full 
                    transition-all duration-300
                "
            >
                <ChevronLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                <span className="font-medium text-sm uppercase tracking-wider">Back</span>
            </button>
        </div>
      </div>
      
      {/* Restaurants Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10 -mt-20">
        <h2 className="text-3xl font-playfair font-bold text-white mb-10 pl-2 border-l-4 border-brand-primary drop-shadow-lg">
            Curated Restaurants
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {city.restaurants.map((restaurant, index) => (
                <div 
                    key={restaurant.id} 
                    className="group cursor-pointer"
                    onClick={() => openModal(restaurant)}
                    style={{ animationDelay: `${index * 100}ms` }}
                >
                    <div className="
                        relative aspect-[4/5] rounded-[2rem] overflow-hidden 
                        border border-white/10 bg-white/5 shadow-2xl
                        transition-all duration-500 ease-out
                        group-hover:border-white/30 group-hover:shadow-brand-primary/10
                        group-hover:-translate-y-2
                    ">
                        {/* Image */}
                        <img 
                            src={restaurant.mainImage.url} 
                            alt={restaurant.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Gradient Overlay - Adjusted to be lighter */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90 transition-opacity"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-brand-primary font-medium tracking-widest uppercase text-xs mb-2 drop-shadow-md">
                                {restaurant.cuisine}
                            </p>
                            <h3 className="text-3xl font-playfair font-bold text-white mb-2 leading-tight drop-shadow-md">
                                {restaurant.name}
                            </h3>
                            <div className="h-0.5 w-12 bg-white/30 group-hover:w-full transition-all duration-500"></div>
                        </div>
                        
                        {/* Hover Shine */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                    </div>
                </div>
            ))}
        </div>
      </div>

      <RestaurantModal restaurant={selectedRestaurant} onClose={closeModal} />
    </div>
  );
};

export default CityPage;
