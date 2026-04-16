import { motion } from "motion/react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-ink relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column - Text */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="text-sm font-medium text-blue-400 mb-4 tracking-wider uppercase">// Ready to Build</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight text-white leading-[1.1] mb-6">
              Done experimenting with AI?
            </h2>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-8 md:mb-12">
              Let’s define what production looks like for your organisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-ink px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-white/90 transition-colors text-sm md:text-base">
                Start the Conversation →
              </button>
              <button className="bg-white/10 border border-white/20 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium hover:bg-white/20 transition-colors text-sm md:text-base">
                See What We Build →
              </button>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="w-full lg:w-1/2"
          >
            <form className="flex flex-col gap-5 md:gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Full Name*</label>
                <input 
                  type="text" 
                  placeholder="Enter your full name" 
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 transition-colors" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">Company Name*</label>
                <input 
                  type="text" 
                  placeholder="Enter your company name" 
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 transition-colors" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">Work Email*</label>
                <input 
                  type="email" 
                  placeholder="Enter your work email address" 
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 transition-colors" 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">Phone</label>
                <div className="flex gap-2">
                  <select className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-400 transition-colors w-20 md:w-24 appearance-none cursor-pointer">
                    <option className="text-ink">+91</option>
                    <option className="text-ink">+1</option>
                    <option className="text-ink">+44</option>
                  </select>
                  <input 
                    type="tel" 
                    placeholder="Enter your phone number" 
                    className="flex-1 bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 transition-colors" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white mb-2">How can we help you?</label>
                <textarea 
                  placeholder="Type your message here" 
                  rows={4} 
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-blue-400 transition-colors resize-none" 
                />
              </div>
              
              <div className="flex items-start gap-3 mt-2">
                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-blue-500 focus:ring-blue-500" />
                <p className="text-xs text-white/60 leading-relaxed">
                  I agree to share information with Nextdot for the purpose of fulfilling this request and in accordance with Nextdot's Privacy Statement.
                </p>
              </div>
              
              <button 
                type="button"
                className="w-full sm:w-32 bg-blue-600 text-white rounded-full py-3 font-medium hover:bg-blue-500 transition-colors mt-4 sm:self-start"
              >
                Submit
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
