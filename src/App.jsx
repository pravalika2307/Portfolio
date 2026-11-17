import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Top scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-[#0b0f17] text-slate-100 selection:bg-teal-500/25 selection:text-teal-200">
      {/* Top Precision Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-teal-500 via-sky-400 to-teal-300 origin-[0%] z-50 shadow-[0_0_10px_rgba(20,184,166,0.5)]"
        style={{ scaleX }}
      />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-0">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
