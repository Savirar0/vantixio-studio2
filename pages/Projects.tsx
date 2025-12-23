import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { Button } from '../components/Button';

export const Projects: React.FC = () => {
  return (
    <div className="flex flex-col bg-ivory">
      <section className="px-5 sm:px-10 lg:px-16 py-20 sm:py-32 lg:py-48 max-w-[1440px] mx-auto w-full">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 sm:mb-24 pb-10 sm:pb-12 border-b border-primary/10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 bg-white border border-border text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-6 sm:mb-8 rounded-sm">/work</span>
            <h1 className="text-3xl sm:text-6xl lg:text-8xl font-serif font-medium text-primary mb-6 sm:mb-8 tracking-tighter">Selected Work</h1>
            <p className="text-lg sm:text-2xl text-secondary font-light max-w-xl text-balance">
              Built as <strong className="text-primary font-medium">long-term technical partnerships</strong>, focused on tangible business outcomes.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end w-full md:w-auto">
            <span className="text-[10px] uppercase tracking-ultra text-accent font-bold mb-1 sm:mb-2">Portfolio</span>
            <span className="text-xl sm:text-2xl font-serif italic text-primary/30">2023 — 2025</span>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
          {PROJECTS.map((project, idx) => {
            const isHighlight = project.highlight;
            const targetUrl = project.link || '#contact';
            
            return (
              <Button 
                key={idx} 
                href={targetUrl}
                variant="unstyled"
                className={`group relative bg-white border border-border hover:border-accent/30 flex flex-col overflow-hidden rounded-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] ${isHighlight ? 'sm:col-span-2' : ''}`}
              >
                <div className="flex flex-col h-full">
                  {/* Visual Area */}
                  <div className={`w-full ${isHighlight ? 'h-64 xs:h-80 sm:h-[500px]' : 'h-64 xs:h-80'} relative overflow-hidden bg-primary/5`}>
                    <img 
                      src={project.imageUrl || 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'} 
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-all duration-[1000ms] ease-out filter grayscale brightness-105 contrast-[0.95] group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 group-hover:contrast-100"
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/20 backdrop-blur-[1px] z-10">
                      <span className="px-6 py-3 sm:px-8 sm:py-3.5 bg-white text-primary text-[10px] uppercase tracking-ultra font-black rounded-sm shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        {project.link ? 'View Case Study' : 'Inquire Now'}
                      </span>
                    </div>

                    <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-0 transition-opacity duration-1000 pointer-events-none mix-blend-multiply" 
                         style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}>
                    </div>
                    
                    <div className="absolute top-6 left-6 sm:top-10 sm:left-10 text-6xl sm:text-8xl font-serif font-bold text-white/10 select-none group-hover:opacity-0 transition-opacity duration-500 pointer-events-none leading-none">
                      {(idx + 1).toString().padStart(2, '0')}
                    </div>
                  </div>

                  {/* Information block */}
                  <div className="p-6 sm:p-12 flex flex-col flex-grow relative bg-white transition-colors duration-500 group-hover:bg-ivory/50">
                    <div className="absolute -top-6 right-6 sm:right-12 w-12 h-12 sm:w-16 sm:h-16 bg-accent text-white flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500 shadow-2xl z-20">
                      <ArrowUpRight size={24} strokeWidth={1.5} className="sm:w-7 sm:h-7" />
                    </div>

                    <div className="mb-4 sm:mb-8 text-left">
                      <span className="text-[10px] uppercase tracking-ultra text-accent font-bold px-2 py-1 bg-accent/5 rounded-sm inline-block">{project.category}</span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-serif text-primary mb-4 sm:mb-6 group-hover:text-accent transition-colors duration-500 tracking-tight leading-none text-left">{project.title}</h3>
                    
                    {project.description && (
                      <p className="text-secondary/70 font-light leading-relaxed text-sm sm:text-lg mt-auto max-w-sm text-left">
                        {project.description}
                      </p>
                    )}
                  </div>
                </div>
              </Button>
            );
          })}
        </div>
        
        {/* Footer Link */}
        <div className="mt-24 sm:mt-40 text-center">
          <Button 
            href="#contact" 
            variant="unstyled"
            className="group inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-primary hover:text-accent transition-all duration-700 text-lg sm:text-2xl italic font-serif"
          >
            <span className="border-b border-primary/30 group-hover:border-accent pb-1">Request full archive & case studies</span>
            <div className="w-8 h-8 sm:w-10 sm:h-10 border border-primary/10 rounded-full flex items-center justify-center group-hover:border-accent transition-colors">
              <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 -rotate-90 group-hover:-rotate-45 transition-transform duration-700 ease-in-out" />
            </div>
          </Button>
        </div>
      </section>
    </div>
  );
};