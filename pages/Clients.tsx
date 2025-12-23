import React from 'react';
import { CLIENT_CATEGORIES } from '../constants';
import { Marquee } from '../components/Marquee';
import { ArrowDownRight } from 'lucide-react';
import { Button } from '../components/Button';

export const Clients: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-32 max-w-[1440px] mx-auto w-full text-center">
        <div className="flex justify-center mb-6">
           <span className="inline-block px-3 py-1 bg-ivory border border-border text-[10px] font-bold uppercase tracking-ultra text-primary/60 rounded-sm">/clients</span>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-primary mb-8 sm:mb-12 tracking-tight">Who We Serve</h1>
        <p className="max-w-xl mx-auto text-secondary font-light mb-12 sm:mb-20 text-base sm:text-lg text-balance">
          We’ve partnered with high-growth startups and global enterprises across several critical sectors.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 sm:mb-24 max-w-5xl mx-auto">
          {CLIENT_CATEGORIES.map((cat, idx) => (
            <Button 
              key={idx} 
              href="#contact"
              variant="unstyled"
              className="group relative px-6 py-5 sm:px-10 sm:py-8 border border-border text-secondary bg-white text-base sm:text-lg font-light hover:border-accent hover:text-primary transition-all duration-500 rounded-sm cursor-pointer overflow-hidden flex items-center justify-center min-w-[160px] xs:min-w-[240px] flex-grow sm:flex-grow-0 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]"
            >
              <div className="absolute inset-0 bg-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <span className="relative z-10 flex items-center gap-3">
                {cat}
                <ArrowDownRight className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all duration-500 text-accent" />
              </span>
              
              <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
            </Button>
          ))}
        </div>
      </section>

      {/* Marquee Section with Title */}
      <div className="border-y border-border bg-ivory py-16 sm:py-24 flex flex-col items-center overflow-hidden">
         <span className="text-[10px] uppercase tracking-widest text-primary/40 mb-8 sm:mb-12 font-bold select-none">Global Partnership History</span>
        <Marquee />
      </div>
    </div>
  );
};