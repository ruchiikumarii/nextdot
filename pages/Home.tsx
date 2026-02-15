import React from 'react';
import { Button } from '../components/ui/Button';
import { ArrowRight, Cpu, Activity, Video, BarChart3, Lock, Zap, Shield, AlertTriangle, CheckCircle, Database, GitBranch, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

// Custom Logo Component mimicking the radial sphere pattern (Blue Lines)
const HeroLogoBackground = ({ className }: { className?: string }) => (
  <div className={className}>
    <svg 
      viewBox="0 0 200 200" 
      className="w-full h-full animate-[spin_80s_linear_infinite] will-change-transform" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="circleClip">
          <circle cx="100" cy="100" r="100" />
        </clipPath>
      </defs>
      <g clipPath="url(#circleClip)">
        {/* Background - Transparent/White */}
        <circle cx="100" cy="100" r="100" fill="transparent" />
        
        {/* Radiating Lines - Blue Brand Color */}
        {Array.from({ length: 120 }).map((_, i) => {
          // Origin point for rays (offset to create 3D feel of looking at a sphere pole)
          const originX = 145; 
          const originY = 55;
          
          const angle = (i * 3) * (Math.PI / 180);
          const length = 300; 
          
          const x2 = originX + length * Math.cos(angle);
          const y2 = originY + length * Math.sin(angle);
          
          return (
            <line 
              key={i} 
              x1={originX} y1={originY} 
              x2={x2} y2={y2} 
              stroke="#2563eb" 
              strokeWidth={Math.random() * 0.8 + 0.5} 
            />
          );
        })}
        {/* Small solid point at origin to handle line convergence cleanly */}
        <circle cx="145" cy="55" r="12" fill="#2563eb" />
      </g>
    </svg>
  </div>
);

export const Home: React.FC = () => {
  const heroRef = React.useRef<HTMLDivElement>(null);
  const backgroundRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Parallax for background
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }

      // Fade out hero content on scroll
      if (heroRef.current) {
        const opacity = Math.max(0, 1 - scrollY / 600);
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[105vh] flex items-center justify-center pt-20 overflow-hidden">
        
        {/* BACKGROUND LAYER - PARALLAX */}
        <div ref={backgroundRef} className="absolute inset-0 z-0 pointer-events-none will-change-transform">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[100px] animate-float delay-100 mix-blend-multiply"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[100px] animate-float delay-700 mix-blend-multiply"></div>
          <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[80px] animate-float delay-1000"></div>

          {/* Primary Logo Pattern - Top Right */}
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] md:w-[900px] md:h-[900px] opacity-[0.06] animate-in fade-in duration-1000">
             <HeroLogoBackground />
          </div>
          
          {/* Secondary Logo Pattern - Bottom Left */}
          <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] opacity-[0.04] rotate-180">
            <div className="animate-[spin_120s_linear_infinite_reverse]">
              <HeroLogoBackground />
            </div>
          </div>
        </div>

        {/* HERO CONTENT */}
        <div ref={heroRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-20 will-change-transform">
          
          {/* Headline with Staggered Reveal */}
          <div className="max-w-4xl mb-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-tight">
              <span className="inline-block opacity-0 animate-fade-in-up [animation-delay:100ms]">Domain</span>{' '}
              <span className="inline-block opacity-0 animate-fade-in-up [animation-delay:200ms]">Engineered</span> <br className="hidden md:block"/>
              <span className="text-gray-500 inline-block opacity-0 animate-fade-in-up [animation-delay:400ms]">
                AI Products <span className="text-gray-300">&</span> Agents
              </span>
            </h1>
          </div>

          <p className="text-xl text-gray-600 max-w-2xl mb-12 leading-relaxed opacity-0 animate-fade-in-up [animation-delay:600ms]">
            We design and deploy production grade AI systems for regulated enterprises, healthcare operators and creative industries. Built for performance, compliance, and scale.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-start gap-4 mb-16 opacity-0 animate-fade-in-up [animation-delay:800ms]">
            <Button size="lg" variant="primary" className="rounded-full h-14 px-8 text-lg shadow-xl shadow-blue-900/10 hover:shadow-blue-900/30 transition-all">
              Book a Call
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" size="lg" className="rounded-full h-14 px-8 text-lg hover:bg-gray-50/80 backdrop-blur-sm">
              Contact Sales
            </Button>
          </div>

           {/* Human in loop badge - UPDATED VISIBILITY */}
           <div className="flex items-center justify-start gap-6 text-base font-medium text-gray-600 mb-12 opacity-0 animate-fade-in-up [animation-delay:1000ms]">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-default">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div> Human in the loop
              </span>
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-gray-200 shadow-sm hover:shadow-md transition-shadow cursor-default">
                 <div className="w-2 h-2 rounded-full bg-blue-500"></div> Enterprise ready
              </span>
           </div>
        </div>
      </section>

      {/* SECTION 2: WHAT MAKES US DIFFERENT */}
      <section id="about" className="relative z-10 py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 reveal-on-scroll text-left">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">What Makes Nextdot Different</h2>
            <p className="text-lg text-gray-500 max-w-2xl">Moving beyond experimental AI demos to deployable, resilient systems.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Service as an Agent",
                desc: "We don’t just build services; we productize services into intelligent agents. Nextdot operates at the intersection of AI engineering and productization, transforming domain expertise into deployable AI products.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Domain First Engineering",
                desc: "Focused on healthcare, compliance, and regulated ecosystems. Our models are trained and structured around rigorous domain logic, not just generic prompts.",
                image: "https://images.unsplash.com/photo-1576091160550-217358c7db81?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Production over Experimentation",
                desc: "We build deployable systems, not experimental AI demos. We consciously distance ourselves from generic automation vendors, prompt wrapper startups, and low-cost dev shops.",
                image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, idx) => (
              <div key={idx} className={`reveal-on-scroll delay-${(idx + 1) * 100} group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col`}>
                <div className="h-48 overflow-hidden relative bg-gray-100">
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm flex-grow">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: VERTICAL FOCUS */}
      <section id="solutions" className="relative z-10 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 reveal-on-scroll">Our Vertical Focus</h2>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Card 1: 1:1 Aspect Ratio - LINKED to AI Engineering */}
            <Link to="/solutions/engineering" className="reveal-on-scroll delay-100 group block">
               <div className="relative aspect-square overflow-hidden rounded-2xl mb-6 shadow-md group-hover:shadow-xl transition-all duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
                    alt="AI Engineering" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-gray-900 shadow-sm">
                    <Cpu size={20} />
                  </div>
               </div>
               <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">AI Engineering</h3>
               <p className="text-gray-500 mb-4">Enterprise AI architecture, RAG systems, LLM orchestration, model lifecycle, governance.</p>
               <div className="flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:translate-x-2 transition-transform cursor-pointer">
                 Explore Engineering <ArrowRight size={16} />
               </div>
            </Link>

            {/* Card 2: 4:5 Aspect Ratio - LINKED to Healthcare Compliance (Primary Healthcare Solution) */}
            <Link to="/solutions/healthcare/compliance" className="reveal-on-scroll delay-200 group block">
               <div className="relative aspect-[4/5] overflow-hidden rounded-2xl mb-6 shadow-md group-hover:shadow-xl transition-all duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
                    alt="AI Healthcare" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-red-600 shadow-sm">
                    <Activity size={20} />
                  </div>
               </div>
               <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">AI for Healthcare</h3>
               <p className="text-gray-500 mb-4">Compliance, automation, doctor enablement, AI voice systems for clinics.</p>
               <div className="flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:translate-x-2 transition-transform">
                 View Healthcare Solutions <ArrowRight size={16} />
               </div>
            </Link>

            {/* Card 3: 1:1 Aspect Ratio - LINKED to Creative */}
            <Link to="/solutions/creative" className="reveal-on-scroll delay-300 group block">
               <div className="relative aspect-square overflow-hidden rounded-2xl mb-6 shadow-md group-hover:shadow-xl transition-all duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
                    alt="AI Creative" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-purple-600 shadow-sm">
                    <Video size={20} />
                  </div>
               </div>
               <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">AI for Creative</h3>
               <p className="text-gray-500 mb-4">AI avatars, content automation, synthetic production systems.</p>
               <div className="flex items-center gap-2 text-sm font-medium text-gray-900 group-hover:translate-x-2 transition-transform">
                 View Creative Suite <ArrowRight size={16} />
               </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: FLAGSHIP PRODUCT HIGHLIGHT */}
      <section className="relative z-10 py-24 bg-gray-900 text-white overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            {/* Content Side */}
            <div className="lg:w-1/2 reveal-on-scroll">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold mb-6 border border-blue-500/30">
                 <Shield size={12} /> FLAGSHIP PRODUCT
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">NextComply AI</h2>
              <p className="text-xl text-blue-100 mb-8 font-light">
                Rules Compliance Checker
              </p>
              <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                Enterprise grade AI engine for regulatory validation and compliance automation. 
                Built to eliminate friction in high-stakes environments.
              </p>

              <div className="space-y-8 mb-10">
                {/* Stat Card */}
                <div className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors">
                  <div className="flex items-start gap-4">
                     <div className="bg-red-500/10 p-2 rounded-lg text-red-400">
                        <AlertTriangle size={20} />
                     </div>
                     <div>
                       <h4 className="text-lg font-semibold mb-2 text-white">The Compliance Gap</h4>
                       <p className="text-gray-400 text-sm leading-relaxed mb-3">
                         Regulatory burden has grown <span className="text-white font-bold">300%</span> in the last 5 years. 
                         Manual review is the single largest bottleneck in healthcare operations.
                       </p>
                       <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Market Analysis 2024</div>
                     </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div>
                   <h4 className="font-semibold text-white mb-4">Why Manual Review Fails</h4>
                   <ul className="space-y-3">
                      {[
                        "Linear headcount scaling cannot match exponential data growth",
                        "Human fatigue leads to 15-20% error rates in complex checks",
                        "Retroactive penalties cost enterprises billions annually"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                          <CheckCircle size={18} className="text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                   </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                {/* UPDATED BUTTON: Uses 'white' variant for visibility on dark bg */}
                <Button variant="white" className="h-12 px-8">
                  Request Demo
                </Button>
                {/* UPDATED BUTTON: Uses 'outline-white' variant for visibility on dark bg */}
                <Button variant="outline-white" className="h-12 px-8">
                  View Technical Specs
                </Button>
              </div>
            </div>

            {/* Visual Side - Video Display */}
            <div className="lg:w-1/2 w-full reveal-on-scroll delay-200">
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700 bg-gray-800/80 aspect-[4/3] group hover:border-blue-500/50 transition-colors duration-500 hover:scale-[1.01] transition-transform">
                  <video 
                    className="w-full h-full object-cover"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                  >
                    {/* Placeholder tech video - Replace with actual dashboard recording */}
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-software-interface-scrolling-on-computer-screen-29774-large.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* Overlay to ensure consistency with dark theme */}
                  <div className="absolute inset-0 bg-blue-900/5 pointer-events-none mix-blend-overlay"></div>
               </div>
               <p className="text-center text-gray-500 text-sm mt-4">NextComply Dashboard v2.4 (Dark Mode)</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: ENGINEERING METHODOLOGY (IMPROVED) */}
      <section className="relative z-10 py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 reveal-on-scroll">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-6">
              Engineering First
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Production AI Methodology</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We implement rigorous engineering standards to ensure your AI is deterministic, secure, and observable from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: "Secure Data Layer",
                desc: "RAG pipelines with strict permission boundaries. We isolate context to ensure models only know what they need to know.",
                step: "01",
                image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Orchestration",
                desc: "Multi-model routing logic. We decouple intelligence from the provider, allowing seamless model swapping and fallback.",
                step: "02",
                image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Governance & Validation",
                desc: "Deterministic guardrails and human-in-the-loop workflows to catch hallucinations before they reach the user.",
                step: "03",
                image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Observability",
                desc: "Full trace logging and semantic monitoring. We track drift, latency, and cost in real-time.",
                step: "04",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`group relative flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 hover:-translate-y-2 reveal-on-scroll`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                    
                    {/* Step Badge */}
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-bold text-gray-900 border border-white/50 shadow-sm z-10">
                       STEP {item.step}
                    </div>
                 </div>

                 {/* Content Section */}
                 <div className="p-8 flex flex-col flex-grow">
                   <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                     {item.title}
                   </h3>
                   <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-grow">
                     {item.desc}
                   </p>
                   
                   {/* Decorative Line that expands on hover */}
                   <div className="w-8 h-1 bg-gray-100 rounded-full group-hover:w-full group-hover:bg-blue-500 transition-all duration-500 ease-out"></div>
                 </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Note */}
          <div className="mt-20 text-center reveal-on-scroll delay-300">
             <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full text-sm font-medium text-gray-600 border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-default">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span>SOC2 & HIPAA Compliant Architecture Patterns</span>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CAPABILITY CENTER */}
      <section id="capability" className="relative z-10 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
          <div className="bg-white rounded-[40px] p-2 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto overflow-hidden rounded-[32px] group">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Skyline_at_Jamshedpur.jpg" 
                  alt="Jamshedpur Skyline" 
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                   <span className="text-white/80 text-sm font-medium tracking-wider uppercase mb-1">Capability Hub</span>
                   <h3 className="text-white text-3xl font-bold group-hover:translate-x-2 transition-transform">Jamshedpur</h3>
                </div>
              </div>
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-6 w-fit">
                   Strategic Differentiator
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">Applied AI Infrastructure from India's Industrial Heartland</h2>
                <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                  Building Applied AI talent and infrastructure. Our Jamshedpur center focuses on Research, Engineering, and Talent Development to power enterprise builds globally.
                </p>
                <div className="flex gap-4">
                   <Link to="/capability-center">
                     <Button variant="outline" className="rounded-full">Explore the Center</Button>
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: TRUST */}
      <section className="relative z-10 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal-on-scroll">
          <p className="text-gray-400 font-medium mb-10">TRUSTED BY LEADING ENTERPRISES AND OPERATORS</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Simple Text Placeholders for Logos to keep it clean */}
             {['Acme Corp', 'HealthPlus', 'MediCare', 'Global Tech', 'CreativeSt', 'Logistics.ai'].map((logo) => (
               <div key={logo} className="h-12 flex items-center justify-center font-bold text-xl text-gray-300 hover:text-gray-900 hover:scale-105 transition-all cursor-default">
                 {logo}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CLOSING CTA */}
      <section id="contact" className="relative z-10 py-32 bg-gray-900 text-white overflow-hidden">
        {/* Background Logo Pattern - Added as per request */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.15] pointer-events-none">
           <HeroLogoBackground />
        </div>

        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-800/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10 reveal-on-scroll">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">AI is moving from experimentation to infrastructure.</h2>
          <p className="text-xl text-gray-400 mb-12">Build systems that last. Partner with domain engineers.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             {/* UPDATED BUTTON: Uses 'white' variant for visibility on dark bg */}
             <Button variant="white" className="h-14 px-10 text-lg">
                Book a Call
             </Button>
             <span className="text-gray-500 text-sm mt-4 sm:mt-0">or contact sales@nextdot.ai</span>
          </div>
        </div>
      </section>
    </div>
  );
};