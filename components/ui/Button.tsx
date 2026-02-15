import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'white' | 'outline-white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  children, 
  ...props 
}) => {
  // Added 'relative', 'overflow-hidden', 'font-bold' for better visibility and premium feel
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full active:scale-95 hover:-translate-y-0.5";
  
  const variants = {
    primary: "group bg-gray-900 text-white hover:bg-black hover:shadow-lg hover:shadow-gray-900/30 focus:ring-gray-900 border border-transparent",
    secondary: "bg-white text-gray-900 hover:bg-gray-50 hover:shadow-md border border-gray-200",
    outline: "bg-transparent text-gray-900 border border-gray-300 hover:bg-gray-50 hover:border-gray-400",
    ghost: "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100/50",
    
    // New high-contrast variants for dark backgrounds
    white: "group bg-white text-gray-900 hover:bg-gray-100 hover:shadow-lg hover:shadow-white/20 border border-transparent",
    "outline-white": "bg-transparent text-white border border-gray-500 hover:bg-gray-800 hover:border-white"
  };

  const sizes = {
    sm: "h-9 px-4 text-xs",
    md: "h-11 px-6 text-sm",
    lg: "h-14 px-8 text-base",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {/* Premium Shine Effect for Solid Buttons */}
      {(variant === 'primary' || variant === 'white') && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent z-10 pointer-events-none" />
      )}
      
      {/* Text Layer - z-20 ensures it's always above background/effects */}
      <span className="relative z-20 flex items-center gap-2">{children}</span>
    </button>
  );
};