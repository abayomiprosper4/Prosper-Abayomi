
import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row gap-24 items-start">
            <div className="lg:w-2/3">
              <h2 className="text-xs uppercase tracking-[0.5em] mb-12 text-white/40">Philosophy</h2>
              
              <div className="text-3xl md:text-5xl font-light leading-tight mb-12">
                Where  <span className="text-blue-500 font-bold italic">technology</span> meets <span className="text-white font-medium">problem-solving</span>, <span className="text-white font-medium underline underline-offset-8 decoration-white/20">I thrive</span>.
              </div>

              <div className="space-y-8 text-white/60 text-lg leading-relaxed max-w-2xl">
                <p>
                  I've spent my academic and early professional years building interactive UIs and leveraging ever-changing tools and technologies. I thrive in cross-functional teams, driving efficiency while solving complex needs and adjusting to evolving industry demands.
                </p>
                <p>
                  I have a major research interest in <span className="text-white">Systems Architecture</span> and <span className="text-white">AI-based Software Development</span>, exploring how we can evaluate maintainability, boost building capabilities, and improve the core development systems in modern micro-frontend architectures.
                </p>
              </div>

              <div className="mt-16">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-6 font-bold">Tech Stack & Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {SKILLS.map((skill, i) => (
                    <motion.div 
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.3)' }}
                      className="px-5 py-2.5 border border-white/5 bg-white/2 cursor-default transition-all duration-300 rounded-full text-[10px] uppercase tracking-widest font-semibold"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.01, borderColor: 'rgba(255,255,255,0.2)' }}
                  className="mt-6 flex flex-col md:flex-row gap-4 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">🎻</span>
                    <div>
                      <p className="text-sm italic leading-relaxed text-white/70">
                        I am also a music enthusiast, and majorly play the violin, a beautiful instrument, that brings a solid understanding of music theory and it's logical applications into my creative process.
                      </p>
                    </div>
                  </div>
                  <div className="md:ml-auto flex items-center rounded-full border border-white/10 bg-gradient-to-br from-blue-500/10 to-transparent px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-white/40">
                    #logic<span className="text-blue-500 font-bold">x</span>melody
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="lg:w-1/3 w-full relative group">
               <motion.div 
                 className="aspect-[4/5] overflow-hidden rounded-[3rem] bg-zinc-900 border border-white/10"
                 whileHover={{ rotate: -2, scale: 0.98 }}
                 transition={{ duration: 0.5 }}
               >
                 <img 
                   src="/IMG_20260308_102015.jpg" 
                   alt="Prosper Abayomi" 
                   className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
               </motion.div>
               <motion.div 
                 animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full -z-10" 
               />
               <div className="absolute -top-4 -right-4 text-xs font-bold tracking-widest text-blue-500 bg-white px-4 py-2 rounded-full transform rotate-12">
                 FACE OF THE BRAND
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
