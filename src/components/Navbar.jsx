import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { CONFIG } from '../config';

const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.name.toLowerCase());
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0B0B0D]/90 backdrop-blur-md border-b border-white/5 py-3.5 shadow-xl shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand Monogram */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center space-x-3 group"
        >
          <span className="w-8 h-8 rounded-lg bg-[#1C1C20] border border-[#FF6B35]/40 flex items-center justify-center font-technical-mono font-bold text-xs text-[#FF6B35] group-hover:border-[#FF6B35] group-hover:bg-[#FF6B35]/10 transition-colors">
            P
          </span>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-tight text-[#F5F2EE] group-hover:text-[#FFB36B] transition-colors">
              PRAVALIKA PALLE
            </span>
            <span className="text-[10px] font-technical-mono uppercase tracking-widest text-[#99969A]">
              Software Engineer
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-1 bg-[#151518]/80 border border-white/5 rounded-full px-3 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-1.5 text-xs font-technical-tag font-semibold rounded-full transition-colors duration-200 ${
                  isActive
                    ? 'text-[#F5F2EE]'
                    : 'text-[#99969A] hover:text-[#F5F2EE] hover:bg-white/5'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="obsidianNavIndicator"
                    className="absolute inset-0 bg-[#FF6B35]/15 border border-[#FF6B35]/40 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Resume Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href={CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg text-[#99969A] hover:text-[#F5F2EE] hover:bg-[#1C1C20] border border-transparent hover:border-white/5 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-lg text-[#99969A] hover:text-[#FFB36B] hover:bg-[#1C1C20] border border-transparent hover:border-white/5 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          
          <a
            href={CONFIG.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg text-xs font-technical-mono font-semibold bg-[#1C1C20] text-[#F5F2EE] border border-white/10 hover:border-[#FF6B35]/50 hover:bg-[#FF6B35]/10 transition-colors"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6B35]" />
          </a>

          <a
            href={CONFIG.resumePath}
            download={CONFIG.resumeFileName}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-technical-mono font-semibold bg-[#FF6B35] text-[#0B0B0D] hover:bg-[#FFB36B] transition-colors cursor-pointer"
          >
            <Download className="w-3 h-3" />
            <span>CV</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="lg:hidden p-2 rounded-lg text-[#99969A] hover:text-[#F5F2EE] bg-[#1C1C20] border border-white/5 transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="lg:hidden bg-[#0B0B0D]/98 border-b border-white/10 px-6 py-5 backdrop-blur-xl space-y-4"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 text-sm font-technical-tag font-semibold text-[#99969A] hover:text-[#F5F2EE] hover:bg-[#1C1C20] rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <a
                  href={CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[#99969A] hover:text-[#F5F2EE] bg-[#1C1C20] border border-white/5"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-[#99969A] hover:text-[#FFB36B] bg-[#1C1C20] border border-white/5"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>

              <div className="flex items-center space-x-2">
                <a
                  href={CONFIG.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-technical-mono font-semibold bg-[#1C1C20] text-[#F5F2EE] border border-white/10"
                >
                  <span>View</span>
                  <ArrowUpRight className="w-3 h-3 text-[#FF6B35]" />
                </a>
                <a
                  href={CONFIG.resumePath}
                  download={CONFIG.resumeFileName}
                  className="flex items-center space-x-1 px-3 py-1.5 rounded-lg text-xs font-technical-mono font-bold bg-[#FF6B35] text-[#0B0B0D]"
                >
                  <Download className="w-3 h-3" />
                  <span>CV</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
