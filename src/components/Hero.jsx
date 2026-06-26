import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Download, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { CONFIG } from '../config';

// Typewriter component for typewriter effect on job titles
function Typewriter({ words, speed = 80, eraseSpeed = 50, delay = 1500 }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const word = words[currentWordIndex];

    if (!isDeleting && currentText === word) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) =>
          isDeleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1)
        );
      }, isDeleting ? eraseSpeed : speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, eraseSpeed, delay]);

  return (
    <span className="typing-cursor pr-1 text-blue-400">
      {currentText}
    </span>
  );
}

export default function Hero() {
  const words = ['Software Engineer', 'AI Developer', 'Problem Solver'];
  const [particles, setParticles] = useState([]);

  // Generate lightweight drift particles once
  useEffect(() => {
    const items = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 80 + 10}%`,
      size: Math.random() * 3 + 2,
      duration: Math.random() * 18 + 15,
      delay: Math.random() * 5
    }));
    setParticles(items);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 90, damping: 18 }
    }
  };



  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 overflow-hidden animated-grid">
      {/* Drifting blurred soft spheres background */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none z-0"
        animate={{
          x: [0, 50, -40, 0],
          y: [0, -60, 50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ top: '15%', left: '15%' }}
      />
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-purple-500/4 blur-[100px] pointer-events-none z-0"
        animate={{
          x: [0, -40, 50, 0],
          y: [0, 50, -40, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        style={{ bottom: '20%', right: '15%' }}
      />

      {/* Drifting subtle particles */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-blue-500/10"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size
            }}
            animate={{
              y: [0, -90, 0],
              opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-7"
        >
          {/* Recruiter Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-1.5 shadow-[0_0_20px_rgba(59,130,246,0.06)]"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-blue-400" />
            <span>Open to Software Engineering & AI Opportunities</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-7xl font-extrabold font-display tracking-tight text-white"
          >
            Pravalika Palle
          </motion.h1>

          {/* Headline - Typewriter job title */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-3.5xl font-bold font-display tracking-wide text-white min-h-[40px] flex items-center justify-center"
          >
            <Typewriter words={words} />
          </motion.h2>

          {/* Highlight Bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs md:text-sm text-gray-300 bg-gray-950/40 border border-gray-900/60 px-5 py-2.5 rounded-2xl max-w-2xl mx-auto backdrop-blur-sm"
          >
            <span className="flex items-center space-x-1.5"><span className="text-[14px]">🎓</span> <span className="font-semibold text-gray-200">MCA Candidate (2026)</span></span>
            <span className="text-gray-800 hidden sm:inline">•</span>
            <span className="flex items-center space-x-1.5"><span className="text-[14px]">💼</span> <span className="font-semibold text-gray-200">IBM AI & ML Intern</span></span>
            <span className="text-gray-800 hidden sm:inline">•</span>
            <span className="flex items-center space-x-1.5"><span className="text-[14px]">🏆</span> <span className="font-semibold text-gray-200">2 National Hackathons</span></span>
            <span className="text-gray-800 hidden sm:inline">•</span>
            <span className="flex items-center space-x-1.5"><span className="text-[14px]">🚀</span> <span className="font-semibold text-gray-200">4 Software Projects</span></span>
          </motion.div>

          {/* Recruiter Subtitle */}
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-sm md:text-base text-gray-400 font-normal leading-relaxed"
          >
            Building intelligent applications, scalable backend systems, and software solutions that solve real-world problems.
          </motion.p>

          {/* Technology Highlight line */}
          <motion.p
            variants={itemVariants}
            className="text-xs md:text-sm font-semibold tracking-widest text-blue-400/90 uppercase font-mono pt-1"
          >
            Python • FastAPI • React.js • SQL • Machine Learning
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 pt-6"
          >
            <a
              href="/Pravalika_Palle_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6.5 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0"
            >
              <FileText className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span>View Resume</span>
            </a>

            <a
              href="/Pravalika_Palle_Resume.pdf"
              download="Pravalika_Palle_Resume.pdf"
              className="flex items-center space-x-2 px-6.5 py-3.5 rounded-full font-semibold text-xs uppercase tracking-wider border border-gray-800 bg-gray-950/40 text-gray-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-950/20 hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0 cursor-pointer"
            >
              <Download className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span>Download Resume</span>
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center items-center gap-4 pt-8 text-gray-500"
          >
            <a
              href={CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-white transition-all duration-300 flex items-center space-x-2 text-xs bg-gray-900/30 hover:bg-gray-900/50 px-3.5 py-1.5 rounded-md border border-gray-800 hover:border-gray-700 hover:scale-105 active:scale-100"
            >
              <GithubIcon className="w-4 h-4 text-gray-450" />
              <span>GitHub</span>
            </a>

            <a
              href={CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-white transition-all duration-300 flex items-center space-x-2 text-xs bg-gray-900/30 hover:bg-gray-900/50 px-3.5 py-1.5 rounded-md border border-gray-800 hover:border-gray-700 hover:scale-105 active:scale-100"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-450" />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="flex flex-col items-center space-y-1.5 cursor-pointer opacity-30 hover:opacity-100 transition-opacity"
          onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold">Scroll Down</span>
          <div className="w-1.5 h-5 rounded-full bg-blue-500/80" />
        </motion.div>
      </div>
    </section>
  );
}
