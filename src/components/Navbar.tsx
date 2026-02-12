
import React from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference"
    >
      <div className="text-xl font-bold tracking-tighter uppercase cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        PA.
      </div>
      <div className="flex gap-4 md:gap-8 text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] opacity-80">
        <button onClick={() => scrollTo('about')} className="hover:opacity-100 transition-opacity">About</button>
        <button onClick={() => scrollTo('work')} className="hover:opacity-100 transition-opacity">Work</button>
        <button onClick={() => scrollTo('services')} className="hover:opacity-100 transition-opacity">Services</button>
        <button onClick={() => scrollTo('contact')} className="hover:opacity-100 transition-opacity">Contact</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
