import React from 'react';
import { Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { InteractiveDemo } from '../../../components/InteractiveDemo';

export const Compliance: React.FC = () => {
  return (
    <div className="bg-white pt-24">
      <section className="py-20 px-4 max-w-7xl mx-auto text-center">
         <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
            <Shield size={16} /> NextComply AI
         </div>
         <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Rules Compliance Checker</h1>
         <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
           Enterprise grade AI engine for regulatory validation and compliance automation. 
           Eliminate manual review bottlenecks.
         </p>
         <Button size="lg">Request Demo</Button>
      </section>

      {/* The Problem */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Why Manual Review Fails</h2>
            <div className="space-y-6">
              {[
                { title: "Cost Inefficiency", desc: "Manual compliance reviews cost healthcare payers $X billion annually." },
                { title: "Human Error", desc: "Fatigue leads to a 15-20% error rate in complex regulatory checks." },
                { title: "Scale Limits", desc: "Linear hiring cannot keep up with exponential data growth." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-red-100 p-2 rounded-lg h-fit text-red-600"><AlertTriangle size={20} /></div>
                  <div>
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
             <div className="text-center py-12">
               <span className="text-6xl font-bold text-gray-900 block mb-2">300%</span>
               <span className="text-gray-500 uppercase tracking-wide text-sm">Growth in Compliance Burden</span>
             </div>
          </div>
        </div>
      </section>

      {/* Product Demo */}
      <section className="py-24 max-w-6xl mx-auto px-4">
         <h2 className="text-3xl font-bold mb-12 text-center">How it Works</h2>
         <InteractiveDemo />
      </section>
    </div>
  );
};