import React from 'react';
import { Button } from '../components/ui/Button';

export const Contact: React.FC = () => {
  return (
    <div className="bg-white pt-24 min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-12 reveal-on-scroll">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Start the Conversation</h1>
          <p className="text-gray-600">
            Discuss your AI roadmap with our engineering team. No sales fluff.
          </p>
        </div>

        <form className="space-y-6 bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-xl reveal-on-scroll delay-100 hover:shadow-2xl transition-shadow duration-500">
           <div className="grid md:grid-cols-2 gap-6">
             <div className="space-y-2 group">
               <label className="text-sm font-medium text-gray-700 group-focus-within:text-blue-600 transition-colors">Name</label>
               <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all duration-300 focus:scale-[1.01] hover:border-gray-400" placeholder="John Doe" />
             </div>
             <div className="space-y-2 group">
               <label className="text-sm font-medium text-gray-700 group-focus-within:text-blue-600 transition-colors">Company</label>
               <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all duration-300 focus:scale-[1.01] hover:border-gray-400" placeholder="Acme Inc." />
             </div>
           </div>
           
           <div className="grid md:grid-cols-2 gap-6">
             <div className="space-y-2 group">
               <label className="text-sm font-medium text-gray-700 group-focus-within:text-blue-600 transition-colors">Role</label>
               <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all duration-300 focus:scale-[1.01] hover:border-gray-400" placeholder="CTO / Product Head" />
             </div>
             <div className="space-y-2 group">
               <label className="text-sm font-medium text-gray-700 group-focus-within:text-blue-600 transition-colors">Work Email</label>
               <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all duration-300 focus:scale-[1.01] hover:border-gray-400" placeholder="john@company.com" />
             </div>
           </div>

           <div className="space-y-2 group">
               <label className="text-sm font-medium text-gray-700 group-focus-within:text-blue-600 transition-colors">Brief Requirement</label>
               <textarea className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-blue-50 focus:border-blue-500 outline-none transition-all duration-300 focus:scale-[1.01] hover:border-gray-400 h-32" placeholder="We are looking to automate..." />
           </div>

           <Button className="w-full h-14 text-lg mt-4 shadow-lg shadow-gray-900/10 hover:shadow-xl hover:shadow-gray-900/20 active:scale-[0.99] transition-all" type="button">Book a Call</Button>
        </form>
      </section>
    </div>
  );
};