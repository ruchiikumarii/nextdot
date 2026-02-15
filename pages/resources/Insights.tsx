import React, { useState } from 'react';
import { ArrowRight, BookOpen, Mic, TrendingUp, Shield } from 'lucide-react';

const CATEGORIES = ["All", "AI Governance", "Healthcare AI", "Enterprise Architecture", "Market Analysis"];

const INSIGHTS = [
  {
    id: 1,
    category: "Market Analysis",
    title: "The End of Prompt Wrappers: Why Vertical AI Wins",
    excerpt: "Analysis of the shifting venture capital landscape and why rigorous domain engineering is the only moat left for AI startups.",
    date: "Oct 12, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    category: "AI Governance",
    title: "Human-in-the-Loop Architectures for FinTech",
    excerpt: "How to design approval flows that satisfy regulatory bodies without slowing down automated decision engines.",
    date: "Oct 08, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    category: "Healthcare AI",
    title: "Reducing Latency in Clinical Voice Agents",
    excerpt: "Technical deep dive into optimizing websocket streams and VAD (Voice Activity Detection) for natural doctor-patient interactions.",
    date: "Sep 28, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    category: "Enterprise Architecture",
    title: "RAG vs Long Context Windows: A Cost Analysis",
    excerpt: "When to fine-tune, when to RAG, and when to just stuff the context window. A CFO's guide to token economics.",
    date: "Sep 15, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    category: "Healthcare AI",
    title: "HIPAA Compliance in the Age of LLMs",
    excerpt: "Navigating BAA agreements with foundation model providers and creating PII redaction pipelines that actually work.",
    date: "Sep 10, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 6,
    category: "AI Governance",
    title: "The Black Box Problem: Observability Tools 2024",
    excerpt: "Reviewing the top open source and commercial tools for tracing LLM chains and monitoring drift in production.",
    date: "Aug 22, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
  }
];

export const Insights: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredInsights = activeCategory === "All" 
    ? INSIGHTS 
    : INSIGHTS.filter(i => i.category === activeCategory);

  return (
    <div className="bg-white pt-24 min-h-screen">
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-16 reveal-on-scroll">
          <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Engineering Insights</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Technical breakdowns, market analysis, and architectural patterns from our engineering team.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12 reveal-on-scroll delay-100">
          {CATEGORIES.map(category => (
            <button 
              key={category} 
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:-translate-y-0.5 ${
                activeCategory === category 
                  ? 'bg-gray-900 text-white shadow-lg shadow-gray-900/20' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {filteredInsights.map((insight, index) => (
             <div 
                key={insight.id} 
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards"
                style={{ animationDelay: `${index * 100}ms` }}
             >
               {/* Image Container */}
               <div className="aspect-[16/10] overflow-hidden relative">
                 <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                 <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                 />
                 <div className="absolute top-4 left-4 z-20">
                   <span className="bg-white/95 backdrop-blur px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-gray-900 shadow-sm border border-gray-100">
                     {insight.category}
                   </span>
                 </div>
               </div>

               {/* Content */}
               <div className="p-6 flex flex-col flex-grow">
                 <div className="flex items-center gap-3 text-xs text-gray-400 mb-4 font-medium">
                   <span>{insight.date}</span>
                   <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                   <span>{insight.readTime}</span>
                 </div>

                 <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                   {insight.title}
                 </h3>
                 
                 <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                   {insight.excerpt}
                 </p>

                 <div className="flex items-center gap-2 text-sm font-bold text-gray-900 mt-auto group-hover:gap-3 transition-all duration-300">
                   Read Article 
                   <ArrowRight size={16} className="text-blue-600" />
                 </div>
               </div>
             </div>
           ))}
        </div>
      </section>
    </div>
  );
};