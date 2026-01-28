import React from 'react';
import { ArrowRight, Github, Linkedin, Twitter, ChevronDown } from 'lucide-react';
import { SOCIALS, RESUME_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Background Shapes */}
      <div className="absolute top-20 right-0 -mr-20 w-72 h-72 bg-secondary/30 rounded-full blur-[80px] animate-blob"></div>
      <div className="absolute bottom-20 left-0 -ml-20 w-80 h-80 bg-primary/30 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm animate-[fadeIn_1s_ease-out]">
            <span className="text-primary font-medium text-sm tracking-wide">HELLO, I'M ADITYA</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight animate-[fadeIn_1.2s_ease-out]">
          Crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digital Experiences</span> <br />
          with MERN & AI.
        </h1>
        
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed animate-[fadeIn_1.4s_ease-out]">
          {RESUME_DATA.bio}
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeIn_1.6s_ease-out]">
          <a href="#projects" className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]">
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
            Contact Me
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 animate-[fadeIn_1.8s_ease-out]">
          {SOCIALS.map((social) => (
            <a 
                key={social.platform} 
                href={social.url} 
                target="_blank" 
                rel="noreferrer"
                className="text-slate-400 hover:text-white hover:scale-110 transition-all"
            >
                {social.icon === 'github' && <Github size={24} />}
                {social.icon === 'linkedin' && <Linkedin size={24} />}
                {social.icon === 'twitter' && <Twitter size={24} />}
            </a>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 cursor-pointer" onClick={() => document.getElementById('skills')?.scrollIntoView({behavior: 'smooth'})}>
        <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest opacity-50">Scroll</span>
            <ChevronDown size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;