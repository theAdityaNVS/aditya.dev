import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Roadmap', href: '#roadmap' }, // Added Roadmap link
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className={`mx-auto max-w-7xl px-6 transition-all duration-300 ${
          isScrolled 
            ? 'bg-darker/80 backdrop-blur-md rounded-full border border-white/10 shadow-lg py-3 mx-4 lg:mx-auto' 
            : 'bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-2xl font-bold tracking-tighter text-white">
            <Terminal className="text-primary h-6 w-6" />
            <span>ADITYA.DEV</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button
              onClick={() => document.getElementById('ai-assistant')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary/20 text-primary border border-primary/50 px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Ask AI
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay with Smooth Transition */}
      <div 
        className={`fixed inset-0 z-40 bg-darker/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center space-y-8 transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`text-3xl font-bold text-white hover:text-primary transition-all duration-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button
             onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('ai-assistant')?.scrollIntoView({ behavior: 'smooth' });
             }}
             className={`text-xl font-bold text-primary transition-all duration-300 delay-300 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            Talk to AI
          </button>
      </div>
    </nav>
  );
};

export default Navbar;