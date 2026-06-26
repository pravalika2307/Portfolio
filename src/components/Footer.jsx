import { Terminal, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { CONFIG } from '../config';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-900 bg-[#030014] py-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        {/* Designer & Title */}
        <div className="flex flex-col space-y-1">
          <p className="text-sm font-bold text-white tracking-wide">
            Designed & Developed by Pravalika Palle
          </p>
          <p className="text-xs text-gray-450 font-medium">
            Software Engineer | AI Developer
          </p>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-500 font-normal">
          &copy; 2026 All Rights Reserved
        </div>

      </div>
    </footer>
  );
}
