import React from 'react';
import { Link } from 'react-router-dom';
import DestinationMap from '../components/DestinationMap';
import ArrowUpRightIcon from '../components/icons/ArrowUpRightIcon';

const MapPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-dark text-white pt-16">
            <DestinationMap showHeader={true} sectionId="destinations-map-page" />
            
            {/* Quick footer callout linking to the dedicated Locations page */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
                <div className="bg-zinc-900/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <div>
                        <h3 className="font-playfair text-xl font-bold text-white mb-1">
                            Looking for the full destination directory?
                        </h3>
                        <p className="text-white/60 text-sm">
                            Browse curated city guides, culinary statistics, and photo cards in the Locations tab.
                        </p>
                    </div>
                    <Link
                        to="/locations"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all border border-white/10 hover:border-white/20 whitespace-nowrap active:scale-95"
                    >
                        <span>View All Locations</span>
                        <ArrowUpRightIcon className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MapPage;
