import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/constants';
import TiltCard from '../ui/TiltCard';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-display font-bold text-white mb-4">
            People I've Worked With
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <TiltCard key={t.id} className="h-full">
              <div className="glass-panel p-8 rounded-3xl h-full flex flex-col relative group hover:bg-white/10 transition-colors">
                <Quote className="absolute top-6 right-6 text-white/10 group-hover:text-primary/20 transition-colors scale-150" size={40} />
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic relative z-10">
                  "{t.text}"
                </p>
                
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm">{t.name}</h4>
                    <p className="text-primary text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;