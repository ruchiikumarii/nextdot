import React from 'react';
import { ArrowUpRight, BarChart3, Clock, Database, ShieldCheck, Cpu } from 'lucide-react';
import { Button } from '../../components/ui/Button';

const CASE_STUDIES = [
  {
    id: 1,
    client: "Fortune 500 Insurer",
    title: "Scaling RAG for Enterprise Policy Retrieval",
    description: "Detailed breakdown of how we architected a retrieval augmented generation system over 10TB of policy documents, ensuring <1s latency and zero hallucinations on critical facts.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Data Processed", value: "10TB" },
      { label: "Accuracy", value: "99.9%" }
    ],
    tags: ["RAG", "Enterprise", "Insurance"]
  },
  {
    id: 2,
    client: "National Healthcare Provider",
    title: "Autonomous Voice Intake Agents",
    description: "Replacing a 50-person call center with a deterministic AI voice agent that handles appointment scheduling, triage, and EHR data entry with <500ms latency.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Call Volume", value: "15k/day" },
      { label: "Cost Savings", value: "65%" }
    ],
    tags: ["Voice AI", "Healthcare", "Automation"]
  },
  {
    id: 3,
    client: "Global Logistics Firm",
    title: "Vision Systems for Quality Control",
    description: "Deploying edge-compute vision models on factory floors to detect manufacturing defects in real-time, integrated with legacy SCADA systems.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    stats: [
      { label: "Defect Detection", value: "+40%" },
      { label: "Latency", value: "12ms" }
    ],
    tags: ["Computer Vision", "Manufacturing", "Edge AI"]
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <div className="bg-white pt-24 min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 reveal-on-scroll">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Case Studies</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Deep dives into our engineering challenges. We prioritize transparency in our architecture and outcomes.
          </p>
        </div>
        
        <div className="space-y-12">
          {CASE_STUDIES.map((study, index) => (
            <div 
              key={study.id} 
              className={`group relative bg-white border border-gray-100 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 reveal-on-scroll delay-${index * 100}`}
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Image Section */}
                <div className="lg:w-5/12 relative overflow-hidden h-64 lg:h-auto">
                  <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-900 uppercase tracking-wider shadow-sm">
                      {study.client}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center relative">
                   {/* Decorative background element */}
                   <div className="absolute right-0 top-0 w-64 h-64 bg-gray-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                   
                   <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-md border border-gray-100">
                          {tag}
                        </span>
                      ))}
                   </div>

                   <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                     {study.title}
                   </h2>
                   
                   <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                     {study.description}
                   </p>
                   
                   <div className="grid grid-cols-2 gap-8 mb-8 pt-8 border-t border-gray-100">
                      {study.stats.map((stat, i) => (
                        <div key={i} className="group/stat">
                          <span className="block font-bold text-3xl text-gray-900 mb-1 group-hover/stat:translate-x-1 transition-transform duration-300">
                            {stat.value}
                          </span>
                          <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                   </div>

                   <div className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 cursor-pointer w-fit">
                     Read Full Retrospective 
                     <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};