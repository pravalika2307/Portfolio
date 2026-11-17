import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { CONFIG } from '../config';

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative bg-[#0b0f17]">
      {/* Subtle Glow Spot */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-teal-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono-code text-teal-400">
            <span>[ SECTION: EXPERIENCE ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Engineering & Professional Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Real-world software engineering contributions, automation platform architecture, and machine learning model development.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8 relative">
          
          {CONFIG.experience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="engineering-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800 hover:border-slate-700/80 transition-all duration-300 relative overflow-hidden group shadow-xl"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-sky-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Header: Role, Company, Period */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-500/10 text-teal-400 text-[11px] font-mono-code font-semibold border border-teal-500/20">
                      {exp.type}
                    </span>
                    <span className="text-xs font-mono-code text-slate-400 flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{exp.location}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-display text-white">
                    {exp.role}
                  </h3>

                  <div className="text-base font-semibold text-teal-400">
                    {exp.company}
                  </div>
                </div>

                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono-code text-slate-300 self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-teal-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Highlights List */}
              <div className="py-6 space-y-3">
                <div className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">
                  Key Technical Contributions:
                </div>
                <ul className="space-y-3">
                  {exp.highlights.map((pt, i) => (
                    <li key={i} className="flex items-start space-x-3 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-400 mt-1 flex-shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono-code text-slate-400 mr-2">Technologies:</span>
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono-code text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
