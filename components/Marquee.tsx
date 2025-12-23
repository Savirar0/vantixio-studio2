import React from 'react';
import { CLIENT_LOGOS } from '../constants';

export const Marquee: React.FC = () => {
  return (
    <div className="relative flex overflow-x-hidden group">
      <div className="animate-marquee whitespace-nowrap flex space-x-24">
        {/* Triple the content to create seamless loop */}
        {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, index) => (
          <span 
            key={`${client}-${index}`} 
            className="text-3xl md:text-4xl font-serif font-bold text-secondary/60 uppercase tracking-widest select-none hover:text-primary transition-colors duration-500 cursor-default"
          >
            {client}
          </span>
        ))}
      </div>
      
      {/* Gradients to fade edges */}
      <div className="absolute top-0 left-0 h-full w-32 bg-gradient-to-r from-ivory to-transparent z-10"></div>
      <div className="absolute top-0 right-0 h-full w-32 bg-gradient-to-l from-ivory to-transparent z-10"></div>
    </div>
  );
};