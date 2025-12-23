
import React, { useState, useEffect } from 'react';
import { Home, User, Layers, Users, Mail, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'projects', 'clients', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Detect active section based on proximity to center of viewport
          if (rect.top <= window.innerHeight / 2.5 && rect.bottom >= window.innerHeight / 2.5) {
            current = `#${section}`;
            break;
          }
        }
      }
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const id = path.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(path);
    }
  };

  const getIcon = (path: string) => {
    const size = 18;
    const strokeWidth = 1.8;
    switch (path) {
      case '#home': return <Home size={size} strokeWidth={strokeWidth} />;
      case '#about': return <User size={size} strokeWidth={strokeWidth} />;
      case '#projects': return <Layers size={size} strokeWidth={strokeWidth} />;
      case '#clients': return <Users size={size} strokeWidth={strokeWidth} />;
      default: return <Mail size={size} strokeWidth={strokeWidth} />;
    }
  };

  const activeClasses = "bg-accent text-white shadow-[0_8px_16px_-4px_rgba(44,94,99,0.4)]";
  const inactiveClasses = "text-secondary/60 hover:text-accent hover:bg-accent/5";

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out ${
          scrolled ? 'py-3 bg-white/95 backdrop-blur-md border-b border-black/5 shadow-sm' : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-10 lg:px-16 flex justify-between items-center">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-lg sm:text-2xl font-serif font-bold tracking-tight text-primary select-none cursor-pointer group"
          >
            Vantixio<span className="text-accent italic font-normal group-hover:not-italic transition-all">.</span>
          </a>
          
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-6 sm:py-2.5 bg-primary text-white text-[10px] uppercase tracking-ultra font-bold rounded-sm hover:bg-accent transition-all duration-300 group cursor-pointer active:scale-95 shadow-sm"
          >
            <span className="hidden xs:inline">Discovery Call</span>
            <span className="xs:hidden">Contact</span>
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </header>

      {/* Floating Dock: Responsive Tuning */}
      <div 
        className="fixed bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-[9999] w-[92%] xs:w-auto"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) / 1.5)' }}
      >
        <nav className="flex items-center justify-between xs:justify-center gap-1 sm:gap-2 px-1.5 py-1.5 bg-white/90 backdrop-blur-xl border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-2xl ring-1 ring-black/5">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            aria-label="Home"
            className={`p-3 sm:p-4 rounded-xl transition-all duration-300 flex items-center justify-center flex-1 xs:flex-none cursor-pointer active:scale-90 ${
              activeSection === '#home' ? activeClasses : inactiveClasses
            }`}
          >
             {getIcon('#home')}
          </a>

          {NAV_ITEMS.map((item) => {
             const isActive = activeSection === item.path;
             return (
               <a
                 key={item.path}
                 href={item.path}
                 onClick={(e) => handleNavClick(e, item.path)}
                 aria-label={item.label}
                 className={`p-3 sm:p-4 rounded-xl transition-all duration-300 flex items-center justify-center flex-1 xs:flex-none cursor-pointer active:scale-90 ${
                   isActive ? activeClasses : inactiveClasses
                 }`}
               >
                 {getIcon(item.path)}
               </a>
             )
          })}

          <div className="w-[1px] h-6 bg-black/10 mx-1 hidden xs:block"></div>

          <a
             href="#contact"
             onClick={(e) => handleNavClick(e, '#contact')}
             aria-label="Contact"
             className={`p-3 sm:p-4 rounded-xl transition-all duration-300 flex items-center justify-center flex-1 xs:flex-none cursor-pointer active:scale-90 ${
               activeSection === '#contact' ? activeClasses : "text-accent hover:bg-accent/10"
             }`}
           >
              <Mail size={18} strokeWidth={1.8} />
           </a>
        </nav>
      </div>
    </>
  );
};
