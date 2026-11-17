import { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, FileText, Activity, Code2, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { CONFIG } from '../config';

const ThreeCanvas = lazy(() => import('./ThreeCanvas'));

const titles = [
  'Software Engineer',
  'Full-Stack Developer',
  'Applied AI & GenAI Enthusiast',
  'Backend & Systems Builder'
];

export default function Hero() {
  const [typedTitleIndex, setTypedTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[typedTitleIndex];
    const speed = isDeleting ? 30 : 60;
    const holdDelay = isDeleting ? 30 : 2000;

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
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 px-6 technical-grid overflow-hidden"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-[500px] h-[500px] bg-teal-500/5 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-sky-500/5 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Identity & Narrative */}
          <div className="lg:col-span-7 space-y-7 z-10">
            {/* Live Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono-code"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              <span>Available for Software Engineering & AI Roles</span>
            </motion.div>

            {/* Name & Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-tight">
                {CONFIG.name}
              </h1>
              
              <div className="h-9 sm:h-11 flex items-center text-xl sm:text-2xl font-bold font-display text-teal-400">
                <span>{currentText}</span>
                <span className="typing-caret" />
              </div>
            </motion.div>

            {/* Concise Mission / Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal"
            >
              I build reliable full-stack applications, intelligent automation platforms, and scalable backend services with modern engineering rigor. Currently engineering sales & marketing automation systems at <span className="text-white font-semibold">Agile Receivables</span> and holding an MCA (2026) alongside a 9.1 CGPA in B.Sc Computer Science & Cognitive Systems.
            </motion.p>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 max-w-xl"
            >
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="text-[11px] font-mono-code text-slate-400">Current Role</div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5 truncate">Agile Receivables Intern</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <div className="text-[11px] font-mono-code text-slate-400">Academic Merit</div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">MCA '26 • CGPA 9.1</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 col-span-2 sm:col-span-1">
                <div className="text-[11px] font-mono-code text-slate-400">Core Focus</div>
                <div className="text-xs font-semibold text-slate-200 mt-0.5">Full-Stack & Applied AI</div>
              </div>
            </motion.div>

            {/* Action Buttons */}
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
                className="px-5 py-3 rounded-xl text-xs font-semibold bg-teal-500 text-slate-950 hover:bg-teal-400 shadow-md shadow-teal-500/20 transition-all duration-200 flex items-center space-x-2 cursor-pointer"
              >
                <span>Explore Featured Projects</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={CONFIG.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl text-xs font-semibold bg-slate-900 text-slate-200 hover:text-white hover:bg-slate-850 border border-slate-800 hover:border-slate-700 transition-all duration-200 flex items-center space-x-2"
              >
                <FileText className="w-3.5 h-3.5 text-teal-400" />
                <span>View Resume</span>
              </a>

              <a
                href={CONFIG.resumePath}
                download={CONFIG.resumeFileName}
                className="px-4 py-3 rounded-xl text-xs font-semibold bg-slate-900/60 text-slate-300 hover:text-white border border-slate-800/80 hover:border-slate-700 transition-all duration-200 flex items-center space-x-2 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF</span>
              </a>

              <div className="flex items-center space-x-2 pl-2">
                <a
                  href={CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all duration-200"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-slate-700 transition-all duration-200"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive 3D Connected Systems Visual */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="engineering-panel rounded-3xl p-4 md:p-6 relative overflow-hidden border border-slate-800/90 shadow-2xl"
            >
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 font-mono-code text-[11px] text-slate-400">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-slate-500 pl-1">topology_mesh.3d</span>
                </div>
                <div className="flex items-center space-x-1.5 text-teal-400">
                  <Activity className="w-3.5 h-3.5 animate-pulse" />
                  <span>Interactive Node Matrix</span>
                </div>
              </div>

              {/* 3D Canvas Container */}
              <div className="h-[340px] sm:h-[400px] w-full relative">
                <Suspense
                  fallback={
                    <div className="w-full h-full flex flex-col items-center justify-center space-y-2 text-slate-500 font-mono-code text-xs">
                      <Loader2 className="w-6 h-6 animate-spin text-teal-400" />
                      <span>Initializing WebGL Scene...</span>
                    </div>
                  }
                >
                  <ThreeCanvas />
                </Suspense>

                {/* Micro-telemetry Overlays */}
                <div className="absolute bottom-3 left-3 bg-slate-950/85 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-lg text-[10px] font-mono-code text-slate-300 flex items-center space-x-2 pointer-events-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-ping" />
                  <span>39 Services • 128 Edges</span>
                </div>

                <div className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-md border border-slate-800 px-3 py-1.5 rounded-lg text-[10px] font-mono-code text-slate-300 pointer-events-none">
                  <span>FPS: 60 • Three.js WebGL</span>
                </div>
              </div>

              {/* Bottom Spec Footer */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                <div className="flex items-center space-x-1.5">
                  <Code2 className="w-3.5 h-3.5 text-teal-400" />
                  <span>Python • FastAPI • React • GenAI</span>
                </div>
                <span className="text-slate-500 text-[10px]">Drag to rotate</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
