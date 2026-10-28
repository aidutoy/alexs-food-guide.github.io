import React from 'react';
import DecisionMaker from '../components/DecisionMaker';

const WhatToEatPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-brand-dark text-white pt-20 pb-24 relative overflow-hidden">
            {/* Ambient Lighting Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-brand-primary/10 rounded-full blur-[140px]"></div>
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-orange-500/5 rounded-full blur-[120px]"></div>
                <div 
                    className="absolute inset-0 opacity-[0.04]" 
                    style={{ 
                        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)', 
                        backgroundSize: '36px 36px' 
                    }}
                ></div>
            </div>

            <div className="relative z-10">
                <DecisionMaker />
            </div>
        </div>
    );
};

export default WhatToEatPage;
