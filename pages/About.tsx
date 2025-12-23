import React from 'react';
import { X, Check, Target, RefreshCw, Zap, Users, Coffee, MessageSquare, Volume2, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero Section */}
      <section className="px-6 sm:px-10 lg:px-16 py-24 sm:py-32 lg:py-48 max-w-6xl mx-auto w-full">
        <span className="inline-block px-3 py-1 bg-ivory border border-border text-[10px] font-bold uppercase tracking-widest text-primary/60 mb-8 rounded-sm">/studio</span>
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-serif text-primary mb-12 tracking-tight leading-[1.05] text-balance">
          We Build Like <br /><span className="italic text-accent">Owners</span>.
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl text-secondary font-light leading-relaxed mb-16 sm:mb-20 text-balance lg:max-w-4xl">
          Vantixio was created to build products the way serious teams should — with clarity, accountability, and long-term thinking.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-20 border-t border-border pt-16">
          <div className="space-y-8">
            <h3 className="text-[10px] uppercase tracking-ultra text-secondary font-bold">The Problem</h3>
            <ul className="space-y-6">
              {['Fragmented offshore teams', 'Shallow, feature-only execution', 'Lack of real accountability'].map((item, i) => (
                <li key={i} className="flex items-center text-primary/70 text-lg">
                  <X className="w-5 h-5 mr-4 text-red-900/40 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <h3 className="text-[10px] uppercase tracking-ultra text-secondary font-bold">Our Promise</h3>
            <p className="text-2xl sm:text-3xl font-serif italic text-primary leading-snug">
              We exist to bridge the gap. We design for scale, longevity, and actual business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-ivory border-y border-border px-6 sm:px-10 lg:px-16 py-20 sm:py-32">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
            <div className="lg:sticky lg:top-32">
               <h2 className="text-3xl sm:text-5xl font-serif text-primary mb-8 sm:mb-10 tracking-tight">Partners, Not Vendors</h2>
               <p className="text-secondary text-base sm:text-lg leading-relaxed sm:leading-loose mb-6 sm:mb-8 font-light">
                 When we partner with a company, we don’t just deliver features. We challenge assumptions, push back when something doesn’t make sense, and take responsibility for outcomes, not just output.
               </p>
               <p className="text-secondary text-base sm:text-lg leading-relaxed sm:leading-loose font-light">
                 That’s why our partnerships last years. We integrate with your goals.
               </p>
            </div>
            
            <div className="flex flex-col gap-5 sm:gap-8">
               <h3 className="text-[10px] uppercase tracking-ultra text-secondary mb-2 font-bold px-1">The Core Philosophy</h3>
               {[
                 { title: 'Ownership Mindset', desc: 'We treat every product as if it were our own, sweating the small stuff that matters.', icon: Target },
                 { title: 'Iteration Over Perfection', desc: 'We build fast, gather data, and refine based on real-world usage.', icon: RefreshCw },
                 { title: 'Clarity Over Complexity', desc: 'Simple code and clean architecture scale. Complex systems break.', icon: Zap },
                 { title: 'Longevity Over Sprints', desc: 'We optimize for the next five years, not just the next five weeks.', icon: Users }
               ].map((item, i) => (
                 <div key={i} className="flex flex-col xs:flex-row gap-5 sm:gap-6 p-6 sm:p-10 bg-white border border-border hover:border-accent hover:shadow-xl transition-all duration-500 rounded-sm group">
                   <div className="mt-1 text-accent group-hover:scale-110 transition-transform flex-shrink-0">
                     <item.icon size={26} sm:size={28} strokeWidth={1} />
                   </div>
                   <div className="flex flex-col">
                     <h4 className="text-primary font-bold tracking-widest mb-2 sm:mb-3 text-[10px] sm:text-xs uppercase">{item.title}</h4>
                     <p className="text-secondary font-light text-sm sm:text-base leading-relaxed">{item.desc}</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Studio Life / Culture Section */}
      <section className="relative min-h-[500px] sm:min-h-[600px] flex flex-col justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=2000" 
            alt="Cafe workspace" 
            className="w-full h-full object-cover grayscale brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
        </div>

        <div className="relative z-10 px-6 sm:px-10 lg:px-16 py-20 sm:py-32 max-w-7xl mx-auto w-full text-white text-center sm:text-left">
          <div className="max-w-3xl mx-auto sm:mx-0">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-8 mb-8 sm:mb-12 opacity-80">
              <div className="flex items-center gap-2">
                <Coffee size={14} className="text-accent-light" />
                <span className="text-[9px] sm:text-[10px] uppercase tracking-ultra font-bold">Work, Coffee</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20 hidden xs:block"></div>
              <div className="flex items-center gap-2">
                <Volume2 size={14} className="text-accent-light" />
                <span className="text-[9px] sm:text-[10px] uppercase tracking-ultra font-bold">Loud Ideas</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20 hidden xs:block"></div>
              <div className="flex items-center gap-2">
                <Zap size={14} className="text-accent-light" />
                <span className="text-[9px] sm:text-[10px] uppercase tracking-ultra font-bold">Quiet Focus</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-6xl lg:text-7xl font-serif mb-6 sm:mb-8 tracking-tight leading-[1.1] text-balance">
              Where it all <br /><span className="italic text-accent-light">happens.</span>
            </h2>
            
            <p className="text-lg sm:text-2xl text-white/60 font-light mb-10 sm:mb-12 max-w-xl leading-relaxed mx-auto sm:mx-0">
              We believe the best products come from environments that balance high energy with deep work.
            </p>

            <Button 
              href="mailto:contact@vantixio.com?subject=Joining%20the%20Team" 
              variant="inverted"
              className="group mx-auto sm:mx-0"
              fullWidth={false}
            >
              <span className="flex items-center gap-3">
                JOIN THE TEAM
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>

        {/* Decorative corner element */}
        <div className="absolute bottom-10 right-10 text-white/5 pointer-events-none hidden lg:block">
          <span className="text-9xl font-serif font-bold italic">V.</span>
        </div>
      </section>

      {/* Ideal Fit Section */}
      <section className="px-6 sm:px-10 lg:px-16 py-20 sm:py-32 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-24">
           <div className="bg-white p-6 sm:p-12 border border-border shadow-sm rounded-sm">
             <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-8 sm:mb-10 flex items-center">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-accent flex-shrink-0" /> Ideal Partnership
             </h3>
             <ul className="space-y-5 sm:space-y-6">
                {['Founders who care about technical debt', 'Teams building serious, mission-critical products', 'Businesses thinking 2-5 years ahead'].map((t, i) => (
                    <li key={i} className="text-secondary text-base sm:text-lg font-light pl-6 sm:pl-8 border-l-2 border-accent/20 leading-relaxed">{t}</li>
                ))}
             </ul>
           </div>
           <div className="bg-ivory p-6 sm:p-12 border border-border shadow-sm rounded-sm">
             <h3 className="text-xl sm:text-2xl font-serif font-bold text-primary mb-8 sm:mb-10 flex items-center">
                <X className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary/20 flex-shrink-0" /> Not A Good Fit
             </h3>
             <ul className="space-y-5 sm:space-y-6">
                {['Optimizing solely for the lowest possible cost', 'Wanting blind execution without strategic input', 'Ignoring security or scalability for speed'].map((t, i) => (
                    <li key={i} className="text-secondary text-base sm:text-lg font-light pl-6 sm:pl-8 border-l-2 border-primary/10 leading-relaxed">{t}</li>
                ))}
             </ul>
           </div>
        </div>
      </section>
    </div>
  );
};