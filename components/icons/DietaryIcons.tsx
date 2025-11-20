
import React from 'react';

interface IconProps {
    className?: string;
}

// Wheat symbol with a line through it (Yellow)
export const GlutenFreeIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <div title="Gluten-Free">
        <svg 
            className={`${className} text-yellow-400`} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={2} 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            {/* Wheat Grain Body */}
            <path d="M12 4a2 2 0 0 0-2 2v8a2 2 0 0 0 4 0V6a2 2 0 0 0-2-2z" />
            {/* Stem */}
            <path d="M12 14v8" />
            {/* Left Grains/Leaves */}
            <path d="M7 8c0 2 3 3 3 3" />
            <path d="M7 12c0 2 3 3 3 3" />
            {/* Right Grains/Leaves */}
            <path d="M17 8c0 2-3 3-3 3" />
            <path d="M17 12c0 2-3 3-3 3" />
            {/* Strikethrough */}
            <line x1="5" y1="5" x2="19" y2="19" strokeWidth={2.5} stroke="currentColor" />
        </svg>
    </div>
);

// Milk carton with a line through it (Blue)
export const LactoseFreeIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <div title="Lactose-Free">
        <svg 
            className={`${className} text-blue-400`} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={2} 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            {/* Milk Carton */}
            <path d="M7 8v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8" />
            <path d="M7 8l5-5 5 5" />
            <path d="M12 3v5" />
            {/* Label on carton */}
            <path d="M10 14h4" />
            <path d="M10 17h4" />
            {/* Strikethrough */}
            <line x1="3" y1="3" x2="21" y2="21" strokeWidth={2.5} stroke="currentColor" />
        </svg>
    </div>
);

// Carrot (Orange)
export const VegetarianIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
     <div title="Vegetarian">
        <svg 
            className={`${className} text-orange-400`} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={2} 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
             {/* Carrot Body */}
             <path d="M12 22c0-4 5-13 6-16l-5-2-6 3c2 4 5 11 5 15z" />
             {/* Carrot Greens */}
             <path d="M13 4l2-3" />
             <path d="M11 4l-2-3" />
             <path d="M12 4v-3" />
             {/* Texture lines */}
             <path d="M10 10h4" />
             <path d="M11 14h2" />
        </svg>
    </div>
);

// Leaf (Green)
export const VeganIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
    <div title="Vegan">
        <svg 
            className={`${className} text-green-400`} 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth={2} 
            strokeLinecap="round" 
            strokeLinejoin="round"
        >
            {/* Leaf Shape */}
            <path d="M20.2 20.2c-1 1-6.6-1.2-11.2-5.8C4.4 9.8 2.2 4.2 3.2 3.2c1-1 6.6 1.2 11.2 5.8 4.6 4.6 6.8 10.2 5.8 11.2z" />
            {/* Midrib */}
            <path d="M3.2 3.2l17 17" />
        </svg>
    </div>
);
