import React, { useMemo } from 'react';
import { ExternalLink, Github, ArrowRight, Code, Terminal, Braces, Cpu, Globe, Database, Hash } from 'lucide-react';
import { PROJECTS } from '../../data/constants';
import TiltCard from '../ui/TiltCard';

const Projects: React.FC = () => {
  // Generate random bubbles with coding icons
  const iconBubbles = useMemo(() => {
    const icons = [Code, Terminal, Braces, Cpu, Globe, Database, Hash];
    return Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        Icon: icons[i % icons.length],
        size: Math.random() * 40 + 20, // 20px to 60px
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 15 + 10}s`, // 10s to 25s
        delay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.15 + 0.05
    }));
  }, []);

  return (
    // Removed bg-darker/50 so grid is visible
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Floating Coding Icons Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
          {iconBubbles.map((bubble) => (
              <div
                  key={bubble.id}
                  className="absolute rounded-full flex items-center justify-center bg-primary/10 backdrop-blur-sm border border-primary/20 animate-fly"
                  style={{
                      width: bubble.size,
                      height: bubble.size,
                      left: bubble.left,
                      animationDuration: bubble.duration,
                      animationDelay: bubble.delay,
                      opacity: bubble.opacity,
                      top: '100%' // Start from bottom
                  }}
              >
                  <bubble.Icon className="w-[50%] h-[50%] text-primary" />
              </div>
          ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
          </div>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            View Github <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <TiltCard key={project.id}>
              <div 
                className="glass-panel rounded-4xl overflow-hidden group flex flex-col border-0 bg-slate-900/40 hover:bg-slate-900/60 transition-all duration-500 h-full"
              >
                {/* Image Area - Tall and App-like */}
                <div className="relative aspect-[4/3] overflow-hidden m-2 rounded-3xl">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darker/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Overlay Tags */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                      {project.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-bold text-white border border-white/10">
                              {tag}
                          </span>
                      ))}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                          {project.title}
                      </h3>
                      <div className="flex gap-2">
                          {project.demoUrl && (
                              <a href={project.demoUrl} className="p-2 rounded-full bg-white/5 text-white hover:bg-white/20 transition-colors" title="View Demo">
                                  <ExternalLink size={16} />
                              </a>
                          )}
                          {project.githubUrl && (
                              <a href={project.githubUrl} className="p-2 rounded-full bg-white/5 text-white hover:bg-white/20 transition-colors" title="View Code">
                                  <Github size={16} />
                              </a>
                          )}
                      </div>
                  </div>
                  
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;