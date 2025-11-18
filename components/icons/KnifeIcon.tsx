
import React from 'react';

const KnifeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    {...props}
  >
    {/* Handle */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 2.25h3v6h-3v-6z"
    />
    {/* Rivets */}
    <path
       strokeLinecap="round" 
       strokeLinejoin="round" 
       d="M12 4v.01M12 6.5v.01"
    />
    {/* Blade - Spine on right, edge on left, pointing down */}
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 8.25v13.5c-1.5-1.5-5.25-6-5.25-10.5 0-2 1-3 2.25-3h3z"
    />
  </svg>
);

export default KnifeIcon;
