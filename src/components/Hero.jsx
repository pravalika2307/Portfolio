import { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ArrowUpRight, Activity, Code2, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { CONFIG } from '../config';

const ThreeCanvas = lazy(() => import('./ThreeCanvas'));

const titles = [
  'Software Engineer',
  'Full-Stack Developer',
  'Applied AI & GenAI Enthusiast',
  'Systems & API Builder'
];

export default function Hero() {
  const [typedTitleIndex, setTypedTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[typedTitleIndex];
    const speed = isDeleting ? 25 : 55;
    const holdDelay = isDeleting ? 25 : 2200;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), holdDelay);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setTypedTitleIndex((prev) => (prev + 1) % titles.length);
      } else {
        setCurrentText((prev) =>
          isDeleting ? prev.slice(0, -1) : fullText.slice(0, prev.length + 1)
        );
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, typedTitleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-[94vh] flex items-center pt-28 pb-16 px-6 obsidian-grid overflow-hidden"
    >
      {/* Warm Ambient Glow Highlights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[550px] h-[550px] bg-[#FF6B35]/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FFB36B]/4 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Editorial Introduction */}
          <div className="lg:col-span-7 space-y-7 z-10">
            
            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#1C1C20]/90 border border-white/5 text-xs text-[#F5F2EE] font-technical-mono"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B35]"></span>
              </span>
              <span className="text-[11px] uppercase tracking-wider text-[#99969A]">
                Available for Software Engineering Roles
              </span>
            </motion.div>

            {/* Name & Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display-hero tracking-tight text-[#F5F2EE] leading-none">
                PRAVALIKA PALLE
              </h1>
              
              <div className="h-9 sm:h-11 flex items-center text-xl sm:text-2xl font-bold font-technical-tag text-[#FF6B35]">
                <span>{currentText}</span>
                <span className="typing-caret" />
              </div>
            </motion.div>

            {/* Concise Mission / Hero Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base sm:text-lg text-[#99969A] leading-relaxed max-w-2xl font-normal"
            >
              {CONFIG.heroStatement}
            </motion.p>

            {/* Architectural Status Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 max-w-xl font-technical-mono text-xs"
            >
              <div className="p-3 rounded-xl bg-[#151518]/90 border border-white/5">
                <div className="text-[10px] text-[#99969A] uppercase tracking-wider">Current</div>
                <div className="text-xs font-semibold text-[#F5F2EE] mt-0.5 truncate">Agile Receivables</div>
              </div>
              <div className="p-3 rounded-xl bg-[#151518]/90 border border-white/5">
                <div className="text-[10px] text-[#99969A] uppercase tracking-wider">Academics</div>
                <div className="text-xs font-semibold text-[#FFB36B] mt-0.5">MCA '26 • 9.1 CGPA</div>
              </div>
              <div className="p-3 rounded-xl bg-[#151518]/90 border border-white/5 col-span-2 sm:col-span-1">
                <div className="text-[10px] text-[#99969A] uppercase tracking-wider">Discipline</div>
                <div className="text-xs font-semibold text-[#F5F2EE] mt-0.5">Systems & GenAI</div>
              </div>
            </motion.div>

            {/* Prominent Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-5 py-3 rounded-xl text-xs font-technical-mono font-bold bg-[#FF6B35] text-[#0B0B0D] hover:bg-[#FFB36B] transition-all duration-200 flex items-center space-x-2 cursor-pointer shadow-lg shadow-[#FF6B35]/15"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={CONFIG.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl text-xs font-technical-mono font-semibold bg-[#1C1C20] text-[#F5F2EE] hover:text-white border border-white/10 hover:border-[#FF6B35]/50 hover:bg-[#FF6B35]/10 transition-all duration-200 flex items-center space-x-2"
              >
                <span>View Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6B35]" />
              </a>

              <a
                href={CONFIG.resumePath}
                download={CONFIG.resumeFileName}
                className="px-4 py-3 rounded-xl text-xs font-technical-mono font-semibold bg-[#151518] text-[#99969A] hover:text-[#F5F2EE] border border-white/5 hover:border-white/15 transition-all duration-200 flex items-center space-x-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download CV</span>
              </a>

              <div className="flex items-center space-x-2 pl-2">
                <a
                  href={CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-[#1C1C20] border border-white/5 text-[#99969A] hover:text-[#F5F2EE] hover:border-white/15 transition-all duration-200"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-[#1C1C20] border border-white/5 text-[#99969A] hover:text-[#FFB36B] hover:border-white/15 transition-all duration-200"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: 3D Connected Systems Interactive Centerpiece */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="obsidian-panel rounded-3xl p-4 md:p-6 relative overflow-hidden border border-white/10 shadow-2xl"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/5 font-technical-mono text-[11px] text-[#99969A]">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFB36B]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="text-[#99969A] pl-1 font-technical-mono">topology_mesh.3d</span>
                </div>
                <div className="flex items-center space-x-1.5 text-[#FF6B35]">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>Interactive 3D Engine</span>
                </div>
              </div>

              {/* 3D Canvas */}
              <div className="h-[340px] sm:h-[400px] w-full relative">
                <Suspense
                  fallback={
                    <div className="w-full h-full flex flex-col items-center justify-center space-y-2 text-[#99969A] font-technical-mono text-xs">
                      <Loader2 className="w-6 h-6 animate-spin text-[#FF6B35]" />
                      <span>Loading WebGL Scene...</span>
                    </div>
                  }
                >
                  <ThreeCanvas />
                </Suspense>

                {/* Micro Telemetry Badges */}
                <div className="absolute bottom-3 left-3 bg-[#0B0B0D]/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-technical-mono text-[#F5F2EE] flex items-center space-x-2 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-ping" />
                  <span>Connected Architecture Mesh</span>
                </div>

                <div className="absolute top-3 right-3 bg-[#0B0B0D]/85 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-technical-mono text-[#99969A] pointer-events-none">
                  <span>60 FPS • Three.js</span>
                </div>
              </div>

              {/* Footer Spec */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-technical-mono text-[#99969A]">
                <div className="flex items-center space-x-1.5">
                  <Code2 className="w-3.5 h-3.5 text-[#FF6B35]" />
                  <span>Python • FastAPI • React • GenAI</span>
                </div>
                <span className="text-[#99969A]/80 text-[10px]">Drag to orbit</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
