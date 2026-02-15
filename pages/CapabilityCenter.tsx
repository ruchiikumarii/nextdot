import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const CapabilityCenter: React.FC = () => {
  return (
    <div className="bg-white pt-24">
      {/* Hero with Jamshedpur Image */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Skyline_at_Jamshedpur.jpg" 
          alt="Jamshedpur Skyline" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
           <div className="text-center text-white px-4 reveal-on-scroll">
             <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1 rounded-full text-sm font-semibold mb-6">
                <MapPin size={14} /> Jamshedpur, India
             </div>
             <h1 className="text-5xl md:text-7xl font-bold mb-6">AI Capability Center</h1>
             <p className="text-xl text-gray-300 max-w-2xl mx-auto">
               Research, Engineering, and Talent Development Hub building the infrastructure for global enterprise AI.
             </p>
           </div>
        </div>
      </section>

      {/* Pillars - Premium Image Cards Redesign */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
           {/* Card 1: Why Jamshedpur */}
           <div className="reveal-on-scroll delay-100 group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-500 cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden relative bg-gray-100">
                 <img 
                   src="https://images.unsplash.com/photo-1565514020125-99d6387796d8?auto=format&fit=crop&q=80&w=800" 
                   alt="Industrial Excellence" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
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
              <div className="aspect-[4/3] overflow-hidden relative bg-gray-100">
                 <img 
                   src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                   alt="Talent Development" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
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
              <div className="aspect-[4/3] overflow-hidden relative bg-gray-100">
                 <img 
                   src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" 
                   alt="Enterprise Build" 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
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