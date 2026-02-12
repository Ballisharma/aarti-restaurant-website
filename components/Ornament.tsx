import React from 'react';

// A simple horizontal divider with a diamond center
export const Ornament: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex items-center justify-center gap-4 opacity-80 ${className}`}>
    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-ach-gold to-transparent"></div>
    <div className="rotate-45 w-1.5 h-1.5 border border-ach-gold bg-ach-dark"></div>
    <div className="h-[1px] w-16 bg-gradient-to-r from-transparent via-ach-gold to-transparent"></div>
  </div>
);

// A vertical line that fades out at ends
export const VerticalLine: React.FC<{ height?: string }> = ({ height = "h-24" }) => (
    <div className={`w-[1px] bg-gradient-to-b from-transparent via-ach-gold/50 to-transparent mx-auto ${height}`}></div>
);

// An intricate floral divider SVG
export const FloralDivider: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div className={`flex justify-center items-center text-ach-gold/60 ${className}`}>
    <svg width="140" height="24" viewBox="0 0 140 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M70 12L65 7M70 12L75 7M70 12V2M70 12V22" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M60 12C55 12 50 16 40 16C30 16 20 12 10 12" stroke="currentColor" strokeWidth="0.5"/>
      <path d="M80 12C85 12 90 16 100 16C110 16 120 12 130 12" stroke="currentColor" strokeWidth="0.5"/>
      <circle cx="5" cy="12" r="1" fill="currentColor"/>
      <circle cx="135" cy="12" r="1" fill="currentColor"/>
      <rect x="68" y="10" width="4" height="4" transform="rotate(45 68 10)" fill="currentColor"/>
    </svg>
  </div>
);

// A corner border element
export const CornerAccent: React.FC<{ position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }> = ({ position }) => {
    const classes = {
        'top-left': 'top-0 left-0 border-t border-l rounded-tl-none',
        'top-right': 'top-0 right-0 border-t border-r rounded-tr-none',
        'bottom-left': 'bottom-0 left-0 border-b border-l rounded-bl-none',
        'bottom-right': 'bottom-0 right-0 border-b border-r rounded-br-none',
    };

    return (
        <div className={`absolute w-4 h-4 border-ach-gold/60 ${classes[position]}`}></div>
    );
};
