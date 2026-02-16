import React from 'react';
import { ArrowRight, Target, Zap, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const About: React.FC = () => {
  return (
    <div className="bg-white pt-24">
      {/* Hero */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight reveal-on-scroll">
              We exist to prevent <br/>
              <span className="text-gray-500">irresponsible automation.</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed reveal-on-scroll delay-100">
              The market is flooded with prompt wrappers and fragile demos. We build rigorous, domain-engineered AI systems that enterprises can actually trust in production.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center reveal-on-scroll delay-200">
            <img 
              src="/images/Logoblack.jpg.jpeg" 
              alt="Nextdot - Responsible AI" 
              className="w-full h-auto max-w-sm rounded-xl object-contain"
            />
          </div>
        </div>
      </section>

      {/* Philosophy / Service as an Agent */}
      <section className="relative bg-gray-900 text-white py-24 overflow-hidden">
        {/* Background Banner Layer */}
        <div className="absolute inset-0 z-0">
           <img 
             src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
             alt="AI Infrastructure Background" 
             className="w-full h-full object-cover opacity-40"
           />
           {/* Gradient Overlay for Readability */}
           <div className="absolute inset-0 bg-gray-900/90 mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="reveal-on-scroll">
              <div className="inline-block bg-blue-900/50 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold mb-6 border border-blue-500/30 backdrop-blur-sm">
                OUR PHILOSOPHY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Service as an Agent</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                We don’t just build services. We convert services into structured, scalable AI agents. 
                Where others see a chatbot, we see a deterministic workflow engine wrapped in natural language.
              </p>
              {/* Interactive List: Spotlight Effect */}
              <ul className="space-y-4 mt-8 group/list">
                {[
                  "Deterministic outputs over creative hallucinations",
                  "Deep integration with domain logic",
                  "Scalable infrastructure, not just scripts"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 transition-all duration-300 group-hover/list:opacity-30 hover:!opacity-100 hover:translate-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-800/80 backdrop-blur-md rounded-3xl p-8 border border-gray-700 relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500 reveal-on-scroll delay-200 shadow-2xl">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-blue-500/20 transition-all duration-700"></div>
               <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700 transform group-hover:-translate-y-1 transition-transform duration-300">
                     <Target className="text-blue-400 mt-1" size={24} />
                     <div>
                       <h4 className="font-semibold mb-1 text-white">Domain Logic</h4>
                       <p className="text-sm text-gray-500">Encoded rulesets that define boundaries.</p>
                     </div>
                  </div>
                  <div className="flex items-center justify-center">
                     <ArrowRight className="text-gray-600 rotate-90 md:rotate-0 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700 transform group-hover:translate-y-1 transition-transform duration-300">
                     <Zap className="text-yellow-400 mt-1" size={24} />
                     <div>
                       <h4 className="font-semibold mb-1 text-white">Agent Action</h4>
                       <p className="text-sm text-gray-500">Autonomous execution within safe bounds.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evolution (Redesigned - Clean & Minimal) */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden border-t border-gray-200">
        <style>{`
          @keyframes slideRight {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          .animate-slide-right {
            animation: slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0; /* Start hidden */
          }
        `}</style>
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none -mt-32 opacity-60"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-50/30 rounded-full blur-3xl pointer-events-none -mb-32"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24 reveal-on-scroll">
             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">Our Evolution</h2>
          </div>

          {/* Horizontal Flow Layout - Minimal Clean Design */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 relative">
             
             {/* 1. Creative */}
             <div 
               className="w-full lg:w-48 h-24 lg:h-32 flex-shrink-0 group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 hover:border-purple-100 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center z-10 animate-slide-right"
               style={{ animationDelay: '0ms' }}
             >
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">Creative</h3>
             </div>

             {/* Plus 1 */}
             <div className="text-gray-300 flex-shrink-0 animate-slide-right" style={{ animationDelay: '100ms' }}>
                <Plus size={24} className="text-gray-300 stroke-[1.5]" />
             </div>

             {/* 2. Technology */}
             <div 
               className="w-full lg:w-48 h-24 lg:h-32 flex-shrink-0 group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center z-10 animate-slide-right"
               style={{ animationDelay: '200ms' }}
             >
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">Technology</h3>
             </div>

             {/* Plus 2 */}
             <div className="text-gray-300 flex-shrink-0 animate-slide-right" style={{ animationDelay: '300ms' }}>
                 <Plus size={24} className="text-gray-300 stroke-[1.5]" />
             </div>

             {/* 3. Media */}
             <div 
               className="w-full lg:w-48 h-24 lg:h-32 flex-shrink-0 group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 hover:border-pink-100 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center z-10 animate-slide-right"
               style={{ animationDelay: '400ms' }}
             >
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">Media</h3>
             </div>

             {/* Arrow */}
             <div className="text-blue-500 flex-shrink-0 animate-slide-right" style={{ animationDelay: '500ms' }}>
                <ArrowRight size={28} className="rotate-90 lg:rotate-0 stroke-[2]" />
             </div>

             {/* 4. Result (Nextdot | AI Capability Center) - BIGGER */}
             <Link to="/ai-capability-center" className="w-full lg:flex-1 max-w-lg lg:h-32 relative group animate-slide-right cursor-pointer" style={{ animationDelay: '600ms' }}>
                <div className="absolute inset-0 bg-blue-600/20 blur-xl rounded-full transform scale-75 animate-pulse"></div>
                <div className="relative bg-gray-900 rounded-2xl p-6 border border-gray-800 shadow-2xl shadow-blue-900/20 hover:shadow-blue-900/40 transition-all duration-500 flex items-center justify-center text-center overflow-hidden h-full transform hover:scale-[1.02]">
                   {/* Animated Gradient Border Effect */}
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                   
                   <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white tracking-tight leading-tight">Nextdot | AI Capability Center</h3>
                   </div>
                </div>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};