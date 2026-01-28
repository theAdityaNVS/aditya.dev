import React from 'react';
import { Code, Database, Server, Wrench, Cpu, Globe } from 'lucide-react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'atom': return <Code />;
      case 'server': return <Server />;
      case 'database': return <Database />;
      case 'sparkles': return <Cpu />; // AI
      default: return <Wrench />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-4">Tech Stack & Expertise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of the technologies I use to build scalable solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {SKILLS.map((skill) => (
            <div 
              key={skill.name}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                {getIcon(skill.icon)}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{skill.name}</h3>
              <div className="w-full bg-slate-800 rounded-full h-1.5 mb-2">
                <div 
                  className="bg-primary h-1.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-xs text-slate-500 uppercase tracking-wider">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
