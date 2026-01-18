import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Network Node G Concept */}
      <path
        d="M70 30 
           C 65 20, 50 15, 35 25
           C 15 35, 15 65, 35 75
           C 50 85, 75 80, 80 60
           L 55 60"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-primary"
      />

      {/* Nodes/Dots at key points */}
      <circle cx="70" cy="30" r="6" className="fill-primary" />
      <circle cx="80" cy="60" r="6" className="fill-primary" />
      <circle cx="55" cy="60" r="6" className="fill-primary" />

      {/* Optional: Connection line or subtle detail */}
      <circle cx="20" cy="50" r="3" className="fill-primary/50" />
    </svg>
  );
};

export default Logo;
