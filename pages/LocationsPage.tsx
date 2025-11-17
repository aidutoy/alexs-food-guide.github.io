
import React from 'react';
import CityGrid from '../components/CityGrid';
import { cities } from '../data/mockData';

const LocationsPage: React.FC = () => {
    return (
        <div className="pt-16">
            <CityGrid cities={cities} />
        </div>
    );
};

export default LocationsPage;