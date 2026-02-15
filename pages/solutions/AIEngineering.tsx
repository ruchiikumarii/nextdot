import React from 'react';
import { Cpu, Shield, Database, Lock, Server } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export const AIEngineering: React.FC = () => {
  return (
    <div className="bg-white pt-24">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-semibold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          ENTERPRISE ARCHITECTURE
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-6 reveal-on-scroll">AI Engineering</h1>
        <p className="text-xl text-gray-600 max-w-3xl reveal-on-scroll delay-100">
          We design the nervous system of your AI organization. From orchestration layers to governance frameworks.
        </p>
      </section>

      {/* Core Services */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Server className="text-blue-600" size={24} />,
              title: "LLM Orchestration",
              desc: "Multi-model routing, fallback mechanisms, and cost optimization layers."
            },
            {
              icon: <Database className="text-purple-600" size={24} />,
              title: "RAG Systems",
              desc: "High-fidelity retrieval architectures connecting your private data to GenAI."
            },
            {
              icon: <Lock className="text-green-600" size={24} />,
              title: "Secure Deployment",
              desc: "VPC deployments, PII redaction pipelines, and enterprise access controls."
            },
            {
              icon: <Shield className="text-red-600" size={24} />,
              title: "AI Governance",
              desc: "Human-in-the-loop interfaces, audit logging, and compliance guardrails."
            },
            {
              icon: <Cpu className="text-orange-600" size={24} />,
              title: "Custom Development",
              desc: "Purpose-built models and fine-tuning for specific domain tasks."
            }
          ].map((item, i) => (
            <div key={i} className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 reveal-on-scroll" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 transition-all duration-300">
                {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, { 
                  className: `${(item.icon as React.ReactElement<{ className?: string }>).props.className || ''} transition-transform duration-300` 
                })}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture Diagram Placeholder */}
      <section className="py-20 bg-gray-900 text-white mt-20 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-center reveal-on-scroll">Reference Architecture</h2>
          <div className="border border-gray-700 rounded-3xl p-8 bg-gray-800/80 backdrop-blur text-center py-24 text-gray-500 shadow-2xl reveal-on-scroll delay-200 group hover:border-gray-600 transition-colors">
             <div className="flex flex-col md:flex-row items-center justify-center gap-8 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                <div className="p-4 border border-dashed border-gray-500 rounded-lg">User Input</div>
                <div className="h-px w-8 bg-gray-500"></div>
                <div className="p-4 border border-dashed border-gray-500 rounded-lg">Gateway</div>
                <div className="h-px w-8 bg-gray-500"></div>
                <div className="p-4 border border-dashed border-gray-500 rounded-lg bg-blue-900/20 border-blue-500 text-blue-300">LLM Router</div>
             </div>
             <p className="mt-8 text-sm">[Interactive Architecture Diagram Placeholder]</p>
          </div>
        </div>
      </section>

       <section className="py-24 text-center reveal-on-scroll">
         <h2 className="text-3xl font-bold mb-6">Ready to architect your system?</h2>
         <Button size="lg" className="hover:scale-105 transition-transform">Book Technical Discovery</Button>
       </section>
    </div>
  );
};