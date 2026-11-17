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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-[#0B0B0D] text-[#F5F2EE] selection:bg-[#FF6B35]/25 selection:text-[#FFB36B]">
      {/* Precision Burnt Orange Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#FF6B35] via-[#FFB36B] to-[#FF6B35] origin-[0%] z-50 shadow-[0_0_12px_rgba(255,107,53,0.5)]"
        style={{ scaleX }}
      />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Flow */}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}
