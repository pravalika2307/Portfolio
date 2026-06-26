import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track mouse coordinates for interactive glow spot
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Track scroll progress for top indicator bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-[#030014] text-gray-100 overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 origin-[0%] z-50"
        style={{ scaleX }}
      />

      {/* Premium Cursor-Tracking Background Glow (hidden on touch devices) */}
      <motion.div
        className="fixed pointer-events-none w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full z-0 hidden lg:block"
        animate={{
          x: mousePos.x - 300,
          y: mousePos.y - 300,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.6 }}
      />

      {/* Main UI Layout */}
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Philosophy />
        <Skills />
        <Projects />
        <Hackathons />
        <Experience />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
