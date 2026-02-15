import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const CapabilityCenter: React.FC = () => {
  return (
    <div className="bg-white pt-24">
      {/* Hero with Applied AI Infrastructure Image */}
      <section 
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(/assets/images/Applied_Ai_Infra.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="text-center text-white px-4 py-12 reveal-on-scroll z-10">
           <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1 rounded-full text-sm font-semibold mb-6">
              <MapPin size={14} /> Jamshedpur, India
           </div>
           <h1 className="text-5xl md:text-7xl font-bold mb-6">AI Capability Center</h1>
           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
             Research, Engineering, and Talent Development Hub building the infrastructure for global enterprise AI.
           </p>
        </div>
      </section>

      {/* Pillars - Premium Image Cards Redesign */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
           {/* Card 1: Why Jamshedpur */}
           <div className="reveal-on-scroll delay-100 group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-500 cursor-pointer">
              <div className="h-56 overflow-hidden relative">
                 <img 
                   src="/assets/images/Why_Jamshedpur.jpeg" 
                   alt="Why Jamshedpur" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                 />
              </div>
              <div className="p-8">
                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Why Jamshedpur?</h3>
                 <p className="text-gray-500 leading-relaxed text-sm">
                   India's first planned industrial city. We tap into the region's disciplined, engineering-first legacy to build rigorous AI systems, not just software.
                 </p>
              </div>
           </div>

           {/* Card 2: Talent Development */}
           <div className="reveal-on-scroll delay-200 group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-500 cursor-pointer">
              <div className="h-56 overflow-hidden relative">
                 <img 
                   src="/assets/images/Talent_development.JPG.jpeg" 
                   alt="Talent Development" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                 />
              </div>
              <div className="p-8">
                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Talent Development</h3>
                 <p className="text-gray-500 leading-relaxed text-sm">
                   Bridging theory and practice. Our residency programs train engineers in LLM orchestration, evaluation frameworks, and production deployment.
                 </p>
              </div>
           </div>

           {/* Card 3: Enterprise Build */}
           <div className="reveal-on-scroll delay-300 group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-500 cursor-pointer">
              <div className="h-56 overflow-hidden relative">
                 <img 
                   src="/assets/images/Enterprise_build.jpeg" 
                   alt="Enterprise Build" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                 />
              </div>
              <div className="p-8">
                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">Enterprise Build</h3>
                 <p className="text-gray-500 leading-relaxed text-sm">
                   A dedicated offshore development center (ODC) model designed for security and scale. Physical isolation zones for sensitive client data.
                 </p>
              </div>
           </div>
        </div>
      </section>

      <section className="bg-gray-50 py-24 text-center">
         <div className="reveal-on-scroll">
            <h2 className="text-3xl font-bold mb-8">Partner with our Center</h2>
            <Button size="lg" className="hover:scale-105 transition-transform shadow-lg shadow-blue-900/10">Contact Operations</Button>
         </div>
      </section>
    </div>
  );
};