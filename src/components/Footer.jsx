import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { CONFIG } from '../config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#070a0f] py-12 px-6 relative z-10 font-mono-code">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Brand & Identity */}
        <div className="space-y-1">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="font-display font-bold text-sm text-white">
              {CONFIG.name}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-teal-400">
              MCA 2026
            </span>
          </div>
          <p className="text-xs text-slate-400">
            Software Engineer | Full-Stack Developer | Applied AI & GenAI Enthusiast
          </p>
        </div>

        {/* Tech Stack & Status */}
        <div className="text-xs text-slate-500 space-y-1">
          <div>Built with React 19, Tailwind CSS, Three.js & Vite</div>
          <div>Deployed on Vercel • Hyderabad, India</div>
        </div>

        {/* Actions & Links */}
        <div className="flex items-center space-x-3">
          <a
            href={CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 hover:border-slate-700 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-teal-400 hover:border-slate-700 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
