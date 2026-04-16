import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export default function Blogs() {
  const featuredPost = {
    title: "The Shift from AI Experimentation to Production Systems",
    excerpt: "Why most enterprise AI initiatives fail at the proof-of-concept stage, and the engineering principles required to build systems that actually run in production.",
    category: "Architecture",
    date: "Oct 24, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2065&auto=format&fit=crop"
  };

  const recentPosts = [
    {
      title: "Designing Multi-Agent Workflows for Healthcare Compliance",
      category: "Engineering",
      date: "Oct 12, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2062&auto=format&fit=crop"
    },
    {
      title: "Why LLMOps is the New Bottleneck for Enterprise AI",
      category: "Infrastructure",
      date: "Sep 28, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop"
    },
    {
      title: "Building Forward-Deployed Engineering Pods",
      category: "Operations",
      date: "Sep 15, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-paper text-ink selection:bg-blue-500/30">
      {/* 1. HERO */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-400/10 blur-[120px]"></div>
          <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-300/10 blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          {/* Connecting Lines */}
          <div className="absolute -top-48 left-4 md:left-6 w-px h-48 bg-gradient-to-b from-transparent to-blue-500 hidden md:block" />
          <div className="absolute top-0 left-4 md:left-6 w-2 h-2 -ml-[3px] rounded-full bg-blue-500 hidden md:block shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          <div className="absolute top-0 left-4 md:left-6 w-px h-full bg-line hidden md:block" />

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-tight text-ink max-w-5xl mb-8 leading-[1.1]"
          >
            Insights & Systems
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-xl md:text-2xl text-ink/60 max-w-3xl leading-relaxed"
          >
            How we think about, build, and deploy AI systems in real environments.
          </motion.p>
        </div>
      </section>

      {/* 2. FEATURED POST */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="group cursor-pointer"
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-surface border border-line rounded-3xl p-6 lg:p-8 hover:border-accent/30 hover:shadow-sm transition-all duration-500">
              <div className="rounded-2xl overflow-hidden h-[300px] lg:h-[450px] border border-line relative">
                <div className="absolute inset-0 bg-accent/5 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                  referrerPolicy="no-referrer" 
                />
              </div>
              
              <div className="space-y-6 lg:pr-8">
                <div className="flex items-center gap-4 text-sm font-mono tracking-wide">
                  <span className="text-accent uppercase">{featuredPost.category}</span>
                  <span className="text-line">|</span>
                  <span className="text-ink/60 flex items-center gap-1.5"><Calendar size={14} /> {featuredPost.date}</span>
                  <span className="text-line">|</span>
                  <span className="text-ink/60 flex items-center gap-1.5"><Clock size={14} /> {featuredPost.readTime}</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-ink leading-tight group-hover:text-accent transition-colors">
                  {featuredPost.title}
                </h2>
                
                <p className="text-lg text-ink/70 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="pt-4">
                  <span className="inline-flex items-center gap-2 text-ink font-medium group-hover:text-accent transition-colors">
                    Read Article <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. RECENT POSTS GRID */}
      <section className="py-24 bg-surface border-t border-line">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12 flex items-end justify-between"
          >
            <div>
              <span className="text-accent text-xs font-mono tracking-widest uppercase mb-4 block">
                // Archive
              </span>
              <h2 className="text-3xl md:text-4xl font-display text-ink">
                Recent Publications
              </h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.1 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="rounded-2xl overflow-hidden h-[240px] border border-line relative mb-6">
                  <div className="absolute inset-0 bg-accent/5 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-xs font-mono tracking-wide mb-4">
                    <span className="text-accent uppercase">{post.category}</span>
                    <span className="text-line">|</span>
                    <span className="text-ink/60">{post.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-display font-medium text-ink mb-4 leading-snug group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  
                  <div className="mt-auto pt-4 flex items-center justify-between border-t border-line/50">
                    <span className="text-sm text-ink/60 flex items-center gap-1.5">
                      <Clock size={14} /> {post.readTime}
                    </span>
                    <ArrowRight size={18} className="text-ink/40 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16 text-center"
          >
            <button className="px-8 py-4 bg-transparent border border-line text-ink rounded-full hover:border-accent hover:text-accent transition-all font-medium text-sm tracking-wide uppercase">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
