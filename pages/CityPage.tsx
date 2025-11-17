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
      <div className="h-screen flex flex-col items-center justify-center text-center px-4 pt-16">
        <h1 className="text-4xl font-playfair font-bold text-brand-dark mb-4">City Not Found</h1>
        <p className="text-brand-secondary mb-8">We couldn't find the city you're looking for.</p>
        <Link to="/" className="bg-brand-primary text-white font-bold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity">
            Back to Home
        </Link>
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
    <div className="pt-16 min-h-screen bg-brand-light">
      <div 
        className="h-64 md:h-96 w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${city.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white tracking-wider">{city.name}</h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
         <div className="mb-8">
            <button
                onClick={() => navigate(-1)}
                className="flex items-center text-brand-secondary hover:text-brand-dark font-semibold transition-colors group"
            >
                <ChevronLeftIcon className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                Back
            </button>
        </div>
        <h2 className="text-3xl font-playfair font-bold text-brand-dark mb-10 text-center">Restaurants in {city.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {city.restaurants.map((restaurant) => (
                <div 
                    key={restaurant.id} 
                    className="group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer bg-white"
                    onClick={() => openModal(restaurant)}
                >
                    <div className="relative">
                        <img 
                            src={restaurant.mainImage.url} 
                            alt={restaurant.name}
                            className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                         <div className="absolute bottom-0 left-0 p-4">
                            <h3 className="text-xl font-bold font-playfair text-white">{restaurant.name}</h3>
                            <p className="text-sm text-gray-200">{restaurant.cuisine}</p>
                        </div>
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