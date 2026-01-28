import React from 'react';

export const JPMorganLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full p-1">
    <path d="M4 2H20V22H4V2Z" fill="#fff" fillOpacity="0.01"/> {/* Hit area */}
    {/* Abstract Octagon representation for JPMC */}
    <path fillRule="evenodd" clipRule="evenodd" d="M7.5 3H16.5L21 7.5V16.5L16.5 21H7.5L3 16.5V7.5L7.5 3Z" fill="#0A0A0A"/> 
    <path d="M9 7H15V17H9V7Z" fill="white"/>
    <rect width="100%" height="100%" fill="#117ACA"/> {/* JPMC Blue bg */}
    <path d="M6 8H18" stroke="white" strokeWidth="2"/>
    <path d="M6 12H18" stroke="white" strokeWidth="2"/>
    <path d="M6 16H14" stroke="white" strokeWidth="2"/>
  </svg>
);

// Improved JPMC Logo (Chase Octagon style)
export const ChaseLogo = () => (
    <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <rect width="24" height="24" rx="4" fill="#117ACA"/>
        <path d="M16.5 6.5L19 9V15L16.5 17.5H15V6.5H16.5Z" fill="white"/>
        <path d="M7.5 6.5H9V17.5H7.5L5 15V9L7.5 6.5Z" fill="white"/>
        <path d="M6.5 7.5L9 5H15L17.5 7.5V9H6.5V7.5Z" fill="white"/>
        <path d="M6.5 16.5H17.5V15L15 17.5H9L6.5 15V16.5Z" fill="white"/>
    </svg>
);

export const TCSLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="#3A3A3A"/> {/* Dark Grey BG */}
    {/* Stylized TATA/TCS spiral */}
    <path d="M7 8C7 8 10 5 14 6C18 7 18 11 16 13C14 15 10 15 10 15" stroke="#5F9EA0" strokeWidth="2" strokeLinecap="round"/> 
    <path d="M9 18C9 18 13 19 16 17" stroke="#5F9EA0" strokeWidth="2" strokeLinecap="round"/>
    <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">TCS</text>
  </svg>
);

export const HackerEarthLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="#323754"/> {/* HE Dark Blue */}
    <path d="M7 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M17 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M7 12H17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="17" cy="7" r="1.5" fill="#00D2FF"/>
  </svg>
);

export const LingoJrLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
    <rect width="24" height="24" rx="4" fill="#FF6B6B"/>
    <path d="M8 7V17H14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 10C14 10 16 10 16 12C16 14 14 14 14 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const DefaultCompanyLogo = ({ name }: { name: string }) => (
    <div className="w-full h-full bg-slate-700 flex items-center justify-center text-white font-bold text-xs rounded-md">
        {name.substring(0, 2).toUpperCase()}
    </div>
);
