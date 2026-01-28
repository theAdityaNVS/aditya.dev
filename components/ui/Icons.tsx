import React from 'react';

export const Icons: Record<string, React.ReactNode> = {
  react: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#222" fillOpacity="0"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <ellipse rx="10" ry="4.5" transform="rotate(0 12 12)" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse rx="10" ry="4.5" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse rx="10" ry="4.5" transform="rotate(120 12 12)" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  typescript: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5Z" fill="currentColor" fillOpacity="0.1"/>
      <path d="M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5Z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 9H6V10.5H7.25V16H8.75V10.5H10V9Z" fill="currentColor"/>
      <path d="M15.5 13.5C15.5 12.6716 14.8284 12 14 12H13.5C12.6716 12 12 12.6716 12 13.5V14.25C12 14.6642 12.3358 15 12.75 15H14.5C15.0523 15 15.5 15.4477 15.5 16V16.5C15.5 17.3284 14.8284 18 14 18H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  tailwind: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M7 19C4.5 19 3 17 3 14C3 11 4.5 10 6.5 10C8.5 10 9.5 11 10.5 12.5C11.5 14 12.5 15 14.5 15C16.5 15 17.5 14 18 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 11C8.5 11 7 9 7 6C7 3 8.5 2 10.5 2C12.5 2 13.5 3 14.5 4.5C15.5 6 16.5 7 18.5 7C20.5 7 21.5 6 22 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  nodejs: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M12 2L4 6.5V17.5L12 22L20 17.5V6.5L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M12 22V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M20 6.5L12 13L4 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15 17.5L16.5 15M10.5 15.5L9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  mongodb: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
       <path d="M12 2C12 2 5 10 5 16C5 19.866 8.13401 23 12 23C15.866 23 19 19.866 19 16C19 10 12 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
       <path d="M12 2V23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
       <path d="M12 14C14 13 15 15 15 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  gemini: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor"/>
    </svg>
  ),
  docker: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M4 10H6V12H4V10Z" fill="currentColor"/>
      <path d="M7 10H9V12H7V10Z" fill="currentColor"/>
      <path d="M10 10H12V12H10V10Z" fill="currentColor"/>
      <path d="M4 7H6V9H4V7Z" fill="currentColor"/>
      <path d="M7 7H9V9H7V7Z" fill="currentColor"/>
      <path d="M10 7H12V9H10V7Z" fill="currentColor"/>
      <path d="M7 4H9V6H7V4Z" fill="currentColor"/>
      <path d="M2 14C2 14 3 13 6 13C9 13 11 14 13 15C15 16 19 16 22 14V19C22 19 18 21 14 21C10 21 6 20 2 19V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  git: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M16 12L12 8L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 8V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="5" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M6 16V14C6 12 12 12 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 16V14C18 12 12 12 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
};