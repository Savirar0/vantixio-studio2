import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import { SEO, pageSEO } from './components/SEO';
import { GoogleAnalytics } from './components/GoogleAnalytics';

// Lazy load all page components
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Projects = lazy(() => import('./pages/Projects').then(module => ({ default: module.Projects })));
const Clients = lazy(() => import('./pages/Clients').then(module => ({ default: module.Clients })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

// Simple loading component
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-ivory">
    <div className="text-primary text-sm">Loading...</div>
  </div>
);

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('home');

  // Track which section is in view for dynamic SEO
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.id;
            setCurrentSection(sectionId);
            
            // Update URL hash without scrolling
            if (window.location.hash !== `#${sectionId}`) {
              window.history.replaceState(null, '', `#${sectionId}`);
            }
          }
        });
      },
      { 
        threshold: 0.5,
        rootMargin: '-100px 0px -100px 0px'
      }
    );

    // Small delay to ensure sections are mounted
    const timeoutId = setTimeout(() => {
      document.querySelectorAll('section[id]').forEach((section) => {
        observer.observe(section);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  // Get SEO config based on current section
  const getCurrentSEO = () => {
    switch (currentSection) {
      case 'about':
        return pageSEO.about;
      case 'projects':
        return pageSEO.projects;
      case 'clients':
        return pageSEO.clients;
      case 'contact':
        return pageSEO.contact;
      default:
        return pageSEO.home;
    }
  };

  const currentSEO = getCurrentSEO();

  return (
    <>
      {/* SEO Component - Updates dynamically based on visible section */}
      <SEO
        title={currentSEO.title}
        description={currentSEO.description}
        url={currentSEO.url}
      />

      {/* Google Analytics - Measurement ID */}
      <GoogleAnalytics measurementId="G-P1YRRBBXM7" />

      <Layout>
        <Suspense fallback={<PageLoader />}>
          <section id="home" className="scroll-mt-24">
            <Home />
          </section>
        </Suspense>
        
        <Suspense fallback={<PageLoader />}>
          <section id="about" className="scroll-mt-24">
            <About />
          </section>
        </Suspense>
        
        <Suspense fallback={<PageLoader />}>
          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>
        </Suspense>
        
        <Suspense fallback={<PageLoader />}>
          <section id="clients" className="scroll-mt-24">
            <Clients />
          </section>
        </Suspense>
        
        <Suspense fallback={<PageLoader />}>
          <section id="contact" className="scroll-mt-24">
            <Contact />
          </section>
        </Suspense>
      </Layout>
    </>
  );
};

export default App;