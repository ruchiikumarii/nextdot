import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Clientele: React.FC = () => {
  return (
    <div className="bg-white pt-24">
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">Trusted by Industry Leaders</h1>
        
        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 opacity-70">
           {['Acme Enterprise', 'Global Health', 'MediCorp', 'FinTech Solutions', 'MediaGiant', 'LogisticsOne', 'EduTech Pro', 'GovSystems'].map((logo, i) => (
             <div key={i} className="h-24 bg-gray-50 rounded-xl flex items-center justify-center font-bold text-gray-400 text-lg border border-gray-100">
               {logo}
             </div>
           ))}
        </div>

        {/* Mini Case Snapshots */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
           <div className="border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow">
             <div className="text-sm font-semibold text-blue-600 mb-2">HEALTHCARE</div>
             <h3 className="text-2xl font-bold mb-4">Automating Claims Review</h3>
             <div className="space-y-2 text-gray-600 mb-6">
               <p><span className="font-semibold text-gray-900">Problem:</span> 4 week backlog in manual review.</p>
               <p><span className="font-semibold text-gray-900">Solution:</span> NextComply AI deployed on-prem.</p>
               <p><span className="font-semibold text-gray-900">Outcome:</span> 85% auto-approval rate.</p>
             </div>
             <a href="#" className="flex items-center gap-2 font-medium">Read Case Study <ArrowRight size={16}/></a>
           </div>

           <div className="border border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-shadow">
             <div className="text-sm font-semibold text-purple-600 mb-2">MEDIA</div>
             <h3 className="text-2xl font-bold mb-4">Synthetic Localization</h3>
             <div className="space-y-2 text-gray-600 mb-6">
               <p><span className="font-semibold text-gray-900">Problem:</span> High cost of dubbing for 12 languages.</p>
               <p><span className="font-semibold text-gray-900">Solution:</span> AI Voice cloning pipeline.</p>
               <p><span className="font-semibold text-gray-900">Outcome:</span> 90% cost reduction, same-day release.</p>
             </div>
             <a href="#" className="flex items-center gap-2 font-medium">Read Case Study <ArrowRight size={16}/></a>
           </div>
        </div>
      </section>
    </div>
  );
};