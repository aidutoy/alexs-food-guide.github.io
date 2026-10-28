import React, { createContext, useContext, useState, useEffect } from 'react';
import { cities } from '../data/mockData';
import type { Restaurant } from '../types';

interface SavedContextType {
  savedIds: string[];
  isSaved: (id: string) => boolean;
  toggleSave: (id: string) => void;
  removeSaved: (id: string) => void;
  clearAllSaved: () => void;
  savedRestaurants: { restaurant: Restaurant; cityId: string; cityName: string }[];
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  savedToast: string | null;
}

const STORAGE_KEY = 'alexs_saved_restaurants';

const SavedContext = createContext<SavedContextType | undefined>(undefined);

export const SavedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [savedToast, setSavedToast] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
    } catch (err) {
      console.warn('Could not save to localStorage', err);
    }
  }, [savedIds]);

  const showToast = (message: string) => {
    setSavedToast(message);
    setTimeout(() => {
      setSavedToast(null);
    }, 2400);
  };

  const isSaved = (id: string) => savedIds.includes(id);

  const toggleSave = (id: string) => {
    setSavedIds(prev => {
      if (prev.includes(id)) {
        showToast('Removed from shortlist');
        return prev.filter(item => item !== id);
      } else {
        showToast('Saved to your shortlist!');
        return [...prev, id];
      }
    });
  };

  const removeSaved = (id: string) => {
    setSavedIds(prev => prev.filter(item => item !== id));
    showToast('Removed from shortlist');
  };

  const clearAllSaved = () => {
    setSavedIds([]);
    showToast('Cleared shortlist');
  };

  // Find restaurant objects and their parent cities
  const savedRestaurants = savedIds.map(id => {
    for (const city of cities) {
      const rest = city.restaurants.find(r => r.id === id);
      if (rest) {
        return { restaurant: rest, cityId: city.id, cityName: city.name };
      }
    }
    return null;
  }).filter(Boolean) as { restaurant: Restaurant; cityId: string; cityName: string }[];

  return (
    <SavedContext.Provider value={{
      savedIds,
      isSaved,
      toggleSave,
      removeSaved,
      clearAllSaved,
      savedRestaurants,
      isDrawerOpen,
      setIsDrawerOpen,
      savedToast
    }}>
      {children}
    </SavedContext.Provider>
  );
};

const fallbackSavedContext: SavedContextType = {
  savedIds: [],
  isSaved: () => false,
  toggleSave: () => {},
  removeSaved: () => {},
  clearAllSaved: () => {},
  savedRestaurants: [],
  isDrawerOpen: false,
  setIsDrawerOpen: () => {},
  savedToast: null,
};

export const useSaved = () => {
  const context = useContext(SavedContext);
  if (!context) {
    return fallbackSavedContext;
  }
  return context;
};
