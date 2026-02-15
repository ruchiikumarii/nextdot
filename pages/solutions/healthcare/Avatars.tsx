import React from 'react';
import { Video, UserCheck } from 'lucide-react';

export const Avatars: React.FC = () => {
  return (
    <div className="bg-white pt-24">
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
         <h1 className="text-5xl font-bold text-gray-900 mb-6">AI Avatars for Doctors</h1>
         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
           Scalable doctor-led communication at low marginal cost. 
           Patient education, post-op instructions, and brand authority—delivered by you, digitally.
         </p>
      </section>

      <section className="py-12 max-w-5xl mx-auto px-4">
        <div className="aspect-video bg-gray-900 rounded-2xl flex items-center justify-center text-white relative overflow-hidden group">
           {/* Placeholder for Video */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
              <span className="font-bold text-xl">Dr. Smith Digital Twin</span>
              <span className="text-sm text-gray-400">Generated from 5 minutes of footage.</span>
           </div>
           <Video size={64} className="opacity-50 group-hover:opacity-100 transition-opacity" />
        </div>
      </section>
    </div>
  );
};