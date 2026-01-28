import React from 'react';
import { Globe, Server, Database, ArrowRight, Github, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const DeploymentRoadmap: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Static Launch",
      description: "Deploy React frontend to GitHub Pages.",
      detail: "Build the production bundle (`npm run build`) and use `gh-pages` to host the static assets. This provides a fast, free global CDN for the portfolio.",
      icon: <Github size={24} />,
      status: "Current Phase",
      color: "border-green-500/50 text-green-400"
    },
    {
      id: 2,
      title: "Custom Domain",
      description: "Professionalize with a .com domain.",
      detail: "Purchase `adityanadamuni.com`. Configure DNS CNAME records to point to GitHub Pages. Set up SSL enforcement for secure HTTPS access.",
      icon: <Globe size={24} />,
      status: "Next Step",
      color: "border-blue-500/50 text-blue-400"
    },
    {
      id: 3,
      title: "Full Stack Integration",
      description: "Activate MERN capabilities.",
      detail: "Deploy Node.js/Express API to Render or Vercel. Connect MongoDB Atlas for dynamic data (blog posts, contact form storage). Update React to fetch real-time data.",
      icon: <Server size={24} />,
      status: "Future",
      color: "border-purple-500/50 text-purple-400"
    }
  ];

  return (
    <section id="roadmap" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">Deployment Roadmap</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              This portfolio is built to scale. Here is the strategic plan moving from a static prototype to a fully dynamic MERN stack application.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <ScrollReveal key={step.id} delay={index * 200}>
                <div className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 top-0 w-8 h-8 -translate-x-1/2 bg-darker border-2 border-primary rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]">
                    <span className="w-2.5 h-2.5 bg-primary rounded-full animate-pulse"></span>
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* Content Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className={`p-6 rounded-2xl bg-white/5 border ${step.color} hover:bg-white/10 transition-all duration-300 group`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 rounded-lg bg-slate-900/50 ${step.color}`}>
                          {step.icon}
                        </div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${step.color} bg-slate-900/30`}>
                          {step.status}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-slate-300 font-medium mb-2">{step.description}</p>
                      <p className="text-sm text-slate-500 leading-relaxed">{step.detail}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentRoadmap;