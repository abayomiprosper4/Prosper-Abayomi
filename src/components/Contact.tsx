
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto border-t border-white/10 pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
             <motion.h2 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               className="text-6xl md:text-8xl font-bold tracking-tighter mb-12"
             >
               Let's <br />
               <span className="text-white/20">Create.</span>
             </motion.h2>
             
             <div className="space-y-8">
               <a href="mailto:hello@prosper.tech" className="flex items-center gap-4 group">
                 <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                   <Mail className="w-5 h-5" />
                 </div>
                 <span className="text-xl font-medium tracking-tight">hello@prosper.tech</span>
               </a>
             </div>
          </div>

          <div className="flex flex-col justify-end">
             <p className="text-2xl font-light text-white/60 mb-12 leading-relaxed">
               I am currently available for selective freelance collaborations and full-time opportunities with forward-thinking teams.
             </p>
             
             <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'Github', icon: <Github />, href: '#' },
                  { label: 'LinkedIn', icon: <Linkedin />, href: '#' },
                  { label: 'Twitter', icon: <Twitter />, href: '#' },
                  { label: 'Instagram', icon: <ArrowUpRight />, href: '#' },
                ].map((social) => (
                  <motion.a 
                    key={social.label}
                    href={social.href}
                    whileHover={{ x: 10 }}
                    className="flex items-center justify-between py-4 border-b border-white/10 group"
                  >
                    <span className="text-sm uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{social.label}</span>
                    <span className="text-white/20 group-hover:text-blue-500 transition-colors">{social.icon}</span>
                  </motion.a>
                ))}
             </div>
          </div>
        </div>
      </div>
      
      <div className="mt-32 text-center">
        <p className="text-[10px] uppercase tracking-[0.5em] text-white/20">
          © 2024 Prosper Abayomi — All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Contact;
