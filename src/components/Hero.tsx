
import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const item: Variants = {
    hidden: { y: 60, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1.2 }}
        transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/20 blur-[150px] rounded-full pointer-events-none"
      />

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="z-10"
      >
        <motion.div variants={item} className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">Available for collaboration</span>
        </motion.div>
        
        <motion.h1 
          variants={item}
          className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] tracking-tighter mb-10"
        >
          Prosper <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/10">
            Abayomi
          </span>
        </motion.h1>

        <motion.div variants={item} className="max-w-2xl">
          <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light mb-10">
            Computer Scientist and UX Architect building scalable SaaS solutions. Merging high-end frontend precision with strategic social media storytelling.
          </p>
          
          <div className="flex flex-wrap gap-6 items-center">
            <motion.button 
              whileHover="hover"
              className="relative group px-10 py-5 bg-white text-black font-bold rounded-full text-xs uppercase tracking-widest overflow-hidden"
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div 
                variants={{ hover: { x: '100%' } }}
                transition={{ duration: 0.5, ease: [0.6, 0.01, -0.05, 0.95] as [number, number, number, number] }}
                className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0" 
              />
              <span className="relative z-10 group-hover:text-black transition-colors duration-300 flex items-center gap-2">
                Explore Work <ArrowRight className="w-4 h-4" />
              </span>
            </motion.button>
            
            <motion.a 
              href="#"
              download="Prosper_Abayomi_CV.pdf"
              className="group relative flex items-center gap-3 px-6 py-4 rounded-full border border-white/20 hover:border-white transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <Download className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
              <span className="text-xs uppercase tracking-widest font-semibold">Download CV</span>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-20 left-0 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none select-none">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="inline-block text-[8vh] font-bold uppercase tracking-tighter"
        >
          Frontend Engineer • Social Media Manager • SaaS Construction • UI/UX Design • Prompt Engineering • &nbsp;
          Frontend Engineer • Social Media Manager • SaaS Construction • UI/UX Design • Prompt Engineering • &nbsp;
        </motion.div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/4 h-1/2 opacity-20 hidden lg:block">
        <motion.div 
          animate={{ rotate: [0, 5, -5, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full border border-white/5 rounded-[40px] bg-gradient-to-tr from-blue-500/10 to-transparent flex items-center justify-center backdrop-blur-3xl overflow-hidden"
        >
           <div className="w-4/5 h-4/5 border border-white/5 rounded-[30px] flex flex-col p-6 space-y-4">
              <div className="flex justify-between items-center">
                <div className="h-4 w-4 rounded-full bg-blue-500/30" />
                <div className="h-2 w-24 bg-white/10 rounded-full" />
              </div>
              <div className="flex-1 w-full bg-white/5 rounded-2xl relative">
                <motion.div 
                  animate={{ width: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-0 left-0 h-1 bg-blue-600/50"
                />
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
