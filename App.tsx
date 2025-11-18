
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CityPage from './pages/CityPage';
import NavBar from './components/NavBar';
import ContactPage from './pages/ContactPage';
import LocationsPage from './pages/LocationsPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <HashRouter>
      <div className="bg-brand-light text-brand-secondary font-roboto">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/city/:cityId" element={<CityPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
