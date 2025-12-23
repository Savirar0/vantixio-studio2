import React from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Clients } from './pages/Clients';
import { Contact } from './pages/Contact';

const App: React.FC = () => {
  return (
    <Layout>
      <section id="home" className="scroll-mt-24">
        <Home />
      </section>
      <section id="about" className="scroll-mt-24">
        <About />
      </section>
      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>
      <section id="clients" className="scroll-mt-24">
        <Clients />
      </section>
      <section id="contact" className="scroll-mt-24">
        <Contact />
      </section>
    </Layout>
  );
};

export default App;