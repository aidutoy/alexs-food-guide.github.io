import React, { useState, useEffect } from 'react';
import { getOpenStatus, type OpenStatusResult } from '../utils/openingHours';

interface OpenStatusBadgeProps {
  openingHours?: string[];
  size?: 'sm' | 'md' | 'lg';
  showDetail?: boolean;
  className?: string;
}

export const OpenStatusBadge: React.FC<OpenStatusBadgeProps> = ({
  openingHours,
  size = 'sm',
  showDetail = true,
  className = '',
}) => {
  const [status, setStatus] = useState<OpenStatusResult | null>(() => getOpenStatus(openingHours));

  useEffect(() => {
    // Initial update
    setStatus(getOpenStatus(openingHours));

    // Update every minute to stay live
    const interval = setInterval(() => {
      setStatus(getOpenStatus(openingHours));
    }, 60000);

    return () => clearInterval(interval);
  }, [openingHours]);

  if (!status) {
    return null;
  }

  const isSmall = size === 'sm';
  const isLarge = size === 'lg';

  let themeClasses = '';
  let dotColor = '';

  if (status.type === 'open') {
    themeClasses = 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30';
    dotColor = 'bg-emerald-400';
  } else if (status.type === 'closing-soon') {
    themeClasses = 'bg-amber-500/15 text-amber-300 border-amber-500/30';
    dotColor = 'bg-amber-400 animate-pulse';
  } else {
    themeClasses = 'bg-zinc-800/80 text-zinc-400 border-white/10';
    dotColor = 'bg-zinc-500';
  }

  const paddingClasses = isSmall 
    ? 'px-2.5 py-0.5 text-[11px]' 
    : isLarge 
      ? 'px-3.5 py-1.5 text-xs sm:text-sm font-medium' 
      : 'px-3 py-1 text-xs';

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border backdrop-blur-md font-mono transition-all duration-300 shadow-sm ${themeClasses} ${paddingClasses} ${className}`}
      title={status.detail ? `${status.label} (${status.detail})` : status.label}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        {status.isOpen && (
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${dotColor}`}></span>
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColor}`}></span>
      </span>

      <span className="font-semibold tracking-wide">
        {status.label}
      </span>

      {showDetail && status.detail && (
        <span className="opacity-75 font-normal border-l border-current/20 pl-1.5 ml-0.5">
          {status.detail}
        </span>
      )}
    </span>
  );
};

export default OpenStatusBadge;
