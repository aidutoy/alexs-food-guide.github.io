import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import MapPage from './pages/MapPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import LocationsPage from './pages/LocationsPage';
import SearchPage from './pages/SearchPage';
import GalleryPage from './pages/GalleryPage';
import WhatToEatPage from './pages/WhatToEatPage';
import ComparePage from './pages/ComparePage';
import { SavedProvider } from './context/SavedContext';
import { SavedDrawer } from './components/SavedDrawer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <SavedProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="bg-brand-dark text-white font-roboto flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/city/:cityId" element={<CityPage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/locations" element={<LocationsPage />} />
              <Route path="/compare" element={<ComparePage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/what-to-eat" element={<WhatToEatPage />} />
              <Route path="/decide" element={<WhatToEatPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/search" element={<SearchPage />} />
            </Routes>
          </main>
          <Footer />
          <SavedDrawer />
        </div>
      </HashRouter>
    </SavedProvider>
  );
}

export default App;