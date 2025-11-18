
import React from 'react';
import CityGrid from '../components/CityGrid';
import { cities } from '../data/mockData';

const LocationsPage: React.FC = () => {
    return (
        <div>
            <CityGrid cities={cities} />
        </div>
    );
};

export default LocationsPage;
