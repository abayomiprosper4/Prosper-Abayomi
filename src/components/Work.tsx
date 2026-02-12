
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../../constants';
import { ExternalLink } from 'lucide-react';

const Work: React.FC = () => {
  return (
    <section id="work" className="py-32 px-6 md:px-12 lg:px-24 bg-[#080808]">
      <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
        <div>
          <h2 className="text-xs uppercase tracking-[0.5em] mb-4 text-white/40">Selected Works</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-xl">Impact over <span className="italic text-white/20">Noise</span></h3>
        </div>
        <div className="text-white/40 text-sm max-w-[240px] leading-relaxed mb-4">
          Curated collection of projects bridging the gap between Computer Science and real-world utility.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12 lg:gap-x-24">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-100px" }}
            className="group cursor-none"
            data-cursor="pointer"
          >
            <div className="relative aspect-[16/11] overflow-hidden rounded-[2.5rem] bg-zinc-900 mb-10 border border-white/5">
              <motion.img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex flex-col items-center justify-center gap-4">
                 <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="px-8 py-4 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-2"
                 >
                   View Detail <ExternalLink className="w-3 h-3" />
                 </motion.div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-baseline">
                <p className="text-[10px] uppercase tracking-[0.3em] text-blue-500 font-bold">{project.category}</p>
                <span className="text-[10px] text-white/20 font-mono">0{index + 1}</span>
              </div>
              <h4 className="text-3xl font-bold tracking-tight group-hover:text-blue-500 transition-colors">{project.title}</h4>
              <p className="text-white/50 text-base leading-relaxed max-w-lg">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-32 flex justify-center">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-5 rounded-full border border-white/10 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-white hover:text-black transition-all duration-500"
        >
          View More Projects
        </motion.button>
      </div>
    </section>
  );
};

export default Work;
