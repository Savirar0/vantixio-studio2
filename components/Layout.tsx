import React from 'react';
import { Navigation } from './Navigation';
import Dock from './Dock';
import { Footer } from './Footer';
import { LuUsers, LuLayers, LuHandshake, LuSend, LuHouse } from "react-icons/lu";

interface LayoutProps {
  children: React.ReactNode;
}

const handleSmoothScroll = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    const navHeight = 80; // h-20 = 80px
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

const items = [
  { icon: <LuHouse size={18} />, label: 'Home', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
  { icon: <LuUsers size={18} />, label: 'About', onClick: () => handleSmoothScroll('#about') },
  { icon: <LuLayers size={18} />, label: 'Projects', onClick: () => handleSmoothScroll('#projects') },
  { icon: <LuHandshake size={18} />, label: 'Clients', onClick: () => handleSmoothScroll('#clients') },
  { icon: <LuSend size={18} />, label: 'Contact', onClick: () => handleSmoothScroll('#contact') },
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-ivory text-primary flex flex-col font-sans selection:bg-accent selection:text-white">
      <Navigation />
      <Dock 
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <div className="h-24 lg:h-0" />
      <Footer />
    </div>
  );
};