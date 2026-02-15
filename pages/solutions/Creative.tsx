import React from 'react';
import { Film, Image, Wand2 } from 'lucide-react';

export const Creative: React.FC = () => {
  return (
    <div className="bg-white pt-24">
      <section className="py-20 px-4 max-w-7xl mx-auto">
         <h1 className="text-5xl font-bold text-gray-900 mb-6">AI for Creative & Media</h1>
         <p className="text-xl text-gray-600 max-w-3xl">
           Synthetic production systems that scale your content engine. 
           From AI video workflows to hyper-personalized assets.
         </p>
      </section>

      <div className="grid md:grid-cols-2 gap-px bg-gray-200 max-w-7xl mx-auto border-t border-gray-200">
         <div className="bg-white p-12 hover:bg-gray-50 transition-colors">
            <Film className="text-purple-600 mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-4">Video Automation</h3>
            <p className="text-gray-600">Turn articles into videos, localize content into 30+ languages, and generate B-roll instantly.</p>
         </div>
         <div className="bg-white p-12 hover:bg-gray-50 transition-colors">
            <Wand2 className="text-pink-600 mb-6" size={32} />
            <h3 className="text-2xl font-bold mb-4">Synthetic Production</h3>
            <p className="text-gray-600">Create studio-quality assets without the studio. Virtual sets, AI presenters, and dynamic audio.</p>
         </div>
      </div>
    </div>
  );
};