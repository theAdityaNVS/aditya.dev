import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AIAssistant from './components/AIAssistant';
import DeploymentRoadmap from './components/DeploymentRoadmap';
import Contact from './components/Contact';
import ScrollReveal from './components/ScrollReveal';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-darker text-slate-200 selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Spacer for aesthetics */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        
        <ScrollReveal>
          <Projects />
        </ScrollReveal>

        <DeploymentRoadmap />
        
        <ScrollReveal>
          <AIAssistant />
        </ScrollReveal>
        
        <ScrollReveal>
          <Contact />
        </ScrollReveal>
      </main>
    </div>
  );
};

export default App;