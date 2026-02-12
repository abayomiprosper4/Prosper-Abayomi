
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, ICONS } from '../../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-xs uppercase tracking-[0.5em] mb-6 text-white/40">Competencies</h2>
            <h3 className="text-5xl md:text-6xl font-bold tracking-tighter mb-10 leading-[0.9]">Elevating Digital <span className="text-white/20 italic">Presence</span></h3>
            <p className="text-white/50 text-lg leading-relaxed mb-12">
              My skillset bridges the technical gap between code and consumer, ensuring that every deployment is as impactful as it is functional.
            </p>
            
            <div className="space-y-6">
              {["High-Performance Web Apps", "Strategic Brand Voice", "AI Integration", "Mobile Optimization"].map((item, i) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:scale-150 transition-transform" />
                  <span className="text-xs uppercase tracking-[0.2em] font-medium opacity-60 group-hover:opacity-100 transition-opacity">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, borderColor: 'rgba(59, 130, 246, 0.3)' }}
                className="p-10 border border-white/5 rounded-[2.5rem] bg-white/[0.02] backdrop-blur-md transition-all duration-500 group"
              >
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-16 h-16 rounded-3xl bg-blue-600/5 border border-blue-500/10 flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500"
                >
                  {ICONS[service.icon]}
                </motion.div>
                <h4 className="text-2xl font-bold mb-6 tracking-tight">{service.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
