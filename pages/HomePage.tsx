
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Why from '../components/Why';
import CityGrid from '../components/CityGrid';
import { cities } from '../data/mockData';

const HomePage: React.FC = () => {
    return (
        <div>
            <Hero />
            <About />
            <Why />
            <CityGrid cities={cities} />
        </div>
    );
};

export default HomePage;
