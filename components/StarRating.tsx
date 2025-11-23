import React from 'react';

interface StarRatingProps {
  score: number;
  max?: number;
  size?: string;
  fillColor?: string;
  emptyColor?: string;
  gap?: string;
}

const StarRating: React.FC<StarRatingProps> = ({ 
    score, 
    max = 5, 
    size = "w-4 h-4",
    fillColor = "text-brand-primary",
    emptyColor = "text-white/20",
    gap = "gap-1"
}) => {
    // Standard star path
    const path = "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z";

  return (
    <div className={`flex ${gap}`}>
      {Array.from({ length: max }, (_, i) => {
        const starValue = i + 1;
        let fill = 0;
        if (score >= starValue) {
          fill = 100;
        } else if (score > i) {
          fill = (score - i) * 100;
        }
        
        return (
            <div key={i} className={`relative ${size} shrink-0`}>
                {/* Background Star (Empty) */}
                <svg className={`w-full h-full ${emptyColor}`} fill="currentColor" viewBox="0 0 20 20">
                    <path d={path} />
                </svg>
                
                {/* Foreground Star (Partial/Full) */}
                <div style={{ width: `${fill}%` }} className="absolute top-0 left-0 h-full overflow-hidden">
                     <svg className={`${size} max-w-none ${fillColor}`} fill="currentColor" viewBox="0 0 20 20">
                         <path d={path} />
                     </svg>
                </div>
            </div>
        );
      })}
    </div>
  );
};

export default StarRating;