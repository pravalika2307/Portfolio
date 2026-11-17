import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { CONFIG } from '../config';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 bg-[#060607] py-12 px-6 relative z-10 font-technical-mono">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Brand & Identity */}
        <div className="space-y-1">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="font-display font-bold text-sm text-[#F5F2EE]">
              {CONFIG.name}
            </span>
            <span className="text-[#99969A]/40">•</span>
            <span className="text-xs text-[#FF6B35]">
              MCA 2026
            </span>
          </div>
          <p className="text-xs text-[#99969A]">
            Software Engineer & Full-Stack Developer
          </p>
        </div>

        {/* Tech Stack & Location */}
        <div className="text-xs text-[#99969A]/70 space-y-1">
          <div>React 19, Tailwind CSS v4, Three.js & Vite</div>
          <div>Deployed on Vercel • Hyderabad, India</div>
        </div>

        {/* Social Actions */}
        <div className="flex items-center space-x-3">
          <a
            href={CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg bg-[#151518] border border-white/5 text-[#99969A] hover:text-[#F5F2EE] hover:border-white/10 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg bg-[#151518] border border-white/5 text-[#99969A] hover:text-[#FFB36B] hover:border-white/10 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-2 rounded-lg bg-[#151518] border border-white/5 text-[#99969A] hover:text-[#FF6B35] hover:border-[#FF6B35]/40 transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
