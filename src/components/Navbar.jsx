import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { CONFIG } from '../config';

const navItems = [
  { name: 'Hero', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Hackathons', href: '#hackathons' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Shrink height of navbar when scroll exceeds 40px
      setScrolled(window.scrollY > 40);

      // Scroll observer to track current visible section
      const scrollPosition = window.scrollY + 180;
      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.name.toLowerCase());
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-2.5 shadow-xl shadow-black/20' : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center space-x-2 text-white font-display font-extrabold text-base tracking-wider hover:opacity-90 transition-opacity">
          <Terminal className="w-4.5 h-4.5 text-blue-500" />
          <span>{CONFIG.name.split(' ')[0]}<span className="text-blue-500">.dev</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-1.5 bg-gray-950/20 border border-gray-900/50 rounded-full px-2 py-1 backdrop-blur-md">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors duration-250 ${activeSection === item.name.toLowerCase() ? 'text-white' : 'text-gray-400 hover:text-gray-250'
                }`}
            >
              <span className="relative z-10">{item.name}</span>
              {activeSection === item.name.toLowerCase() && (
                <motion.div
                  layoutId="navItemBgHighlight"
                  className="absolute inset-0 bg-blue-600/10 border border-blue-500/15 rounded-full"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Action Call */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="/Pravalika_Palle_Resume.pdf"
            download="Pravalika_Palle_Resume.pdf"
            className="flex items-center space-x-1.5 px-4.5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase border border-gray-800 bg-gray-950/50 hover:bg-blue-600 hover:border-blue-500 text-white transition-all duration-300"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Toggle Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-400 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden glass-nav border-t border-gray-850"
          >
            <div className="px-6 py-4 flex flex-col space-y-2.5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    setTimeout(() => {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }, 150);
                  }}
                  className={`text-sm font-semibold py-2 transition-colors ${activeSection === item.name.toLowerCase() ? 'text-blue-400' : 'text-gray-300 hover:text-white'
                    }`}
                >
                  {item.name}
                </a>
              ))}
              <hr className="border-gray-850 my-2" />
              <div className="flex items-center justify-between pt-2">
                <a
                  href="/Pravalika_Palle_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-2 px-4.5 py-2 rounded-full text-xs font-bold border border-blue-500/30 bg-blue-500/10 hover:bg-blue-600 text-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>View Resume</span>
                </a>
                <div className="flex space-x-3.5">
                  <a href={CONFIG.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="GitHub">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
