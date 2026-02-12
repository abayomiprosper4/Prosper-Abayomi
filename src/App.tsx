
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Services from './components/Services';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  // Page load sequence
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-[#050505] text-white selection:bg-blue-500 selection:text-white">
      <CustomCursor />
      
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar />
          
          <main>
            <Hero />
            <About />
            <Work />
            <Services />
            <Contact />
          </main>

          {/* Noise Overlay for Texture */}
          <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9998] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
          
          {/* Subtle Ambient Light */}
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
            <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[150px] rounded-full"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/5 blur-[150px] rounded-full"></div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
