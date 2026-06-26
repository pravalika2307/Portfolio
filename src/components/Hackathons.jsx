import { motion } from 'framer-motion';
import { Trophy, Calendar, Cpu } from 'lucide-react';
import { CONFIG } from '../config';

// Map event names to clean initials for placeholder logo branding
function getEventLogo(event) {
  const clean = event.replace(/[^a-zA-Z0-9\s]/g, '');
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return event.slice(0, 2).toUpperCase();
}

export default function Hackathons() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 18 }
    }
  };

  return (
    <section id="hackathons" className="py-32 px-6 relative bg-gradient-to-b from-[#030014] to-[#080715]">
      {/* Background glow spots */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-indigo-655/4 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-blue-655/4 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20">
            Hackathons
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-none">
            Hackathons & Innovation
          </h2>
          <p className="text-gray-455 text-sm md:text-base max-w-xl mx-auto font-normal leading-relaxed">
            Competitive builds, product sprint challenges, and campus placements projects.
          </p>
        </div>

        {/* Hackathons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {CONFIG.hackathons.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ scale: 1.025, y: -6 }}
              className="glass-panel p-8 rounded-3xl flex flex-col justify-between relative overflow-hidden group hover-border-glow border border-gray-900/60 transition-all duration-300"
            >
              <div className="space-y-5">
                {/* Event logo / Trophy header row */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-900">
                  <div className="flex items-center space-x-3">
                    {/* Event logo placeholder (initials) */}
                    <div className="w-10 h-10 rounded-full bg-gray-950/90 border border-gray-850 flex items-center justify-center font-display font-extrabold text-[11px] text-blue-400 tracking-wider shadow-inner group-hover:scale-105 transition-transform duration-300">
                      {getEventLogo(item.event)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-display text-white group-hover:text-blue-400 transition-colors duration-200 leading-tight">
                        {item.event}
                      </h3>
                      <span className="text-[10px] text-gray-500 font-mono font-medium">Project: {item.project}</span>
                    </div>
                  </div>

                  {/* Trophy Achievement Badge */}
                  <span className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 text-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.08)]">
                    <Trophy className="w-3.5 h-3.5 animate-bounce" />
                    <span>{item.achievement}</span>
                  </span>
                </div>

                {/* Sub-header (Year & description) */}
                <div className="space-y-3.5">
                  <div className="flex items-center space-x-1.5 text-xs text-gray-455 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-blue-450" />
                    <span>Year: {item.year}</span>
                    {item.venue && (
                      <>
                        <span className="text-gray-700">•</span>
                        <span className="text-gray-400">{item.venue}</span>
                      </>
                    )}
                  </div>

                  <p className="text-sm text-gray-450 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Technologies footer */}
              <div className="pt-5 mt-6 border-t border-gray-900">
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-gray-950/60 border border-gray-900 text-[10px] font-semibold text-gray-400 tracking-wide flex items-center space-x-1"
                    >
                      <Cpu className="w-3 h-3 text-blue-450" />
                      <span>{t}</span>
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
