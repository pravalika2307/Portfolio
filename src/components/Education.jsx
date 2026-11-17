import { motion } from 'framer-motion';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { CONFIG } from '../config';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative bg-[#0b0f17]">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-sky-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono-code text-teal-400">
            <span>[ SECTION: EDUCATION ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Academic Background
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Formal computational training bridging distributed software engineering with cognitive computational models.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CONFIG.education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="engineering-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 hover:border-slate-700 transition-all duration-300 relative group shadow-xl"
            >
              <div className="space-y-5">
                {/* Header: Icon, Dates, Honors */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  <div className="flex items-center space-x-2">
                    {edu.grade && (
                      <span className="px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-300 border border-teal-500/25 text-xs font-mono-code font-bold">
                        {edu.grade}
                      </span>
                    )}
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono-code text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{edu.period}</span>
                    </span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-teal-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-mono-code text-teal-400">
                    {edu.institution}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {edu.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 pt-2">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start space-x-2.5 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Status Tag */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                <span className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  <span>Verified Degree</span>
                </span>
                <span>Hyderabad, India</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
