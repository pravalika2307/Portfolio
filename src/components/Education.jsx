import { motion } from 'framer-motion';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';
import { CONFIG } from '../config';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative bg-[#0B0B0D]">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-[#FFB36B]/3 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-xs font-technical-mono uppercase tracking-widest text-[#FF6B35]">
            <span>// 04</span>
            <span className="w-8 h-px bg-[#FF6B35]/40" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#F5F2EE]">
            Academic Foundation
          </h2>
          <p className="text-[#99969A] text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Rigorous computational foundation bridging advanced distributed software architectures with cognitive computing principles.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CONFIG.education.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="obsidian-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/5 hover:border-[#FF6B35]/30 transition-all duration-300 relative group shadow-xl"
            >
              <div className="space-y-5">
                {/* Header: Icon, Dates, Honors */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <div className="w-11 h-11 rounded-xl bg-[#151518] border border-white/5 flex items-center justify-center text-[#FF6B35]">
                    <GraduationCap className="w-5 h-5" />
                  </div>

                  <div className="flex items-center space-x-2 font-technical-mono">
                    {edu.grade && (
                      <span className="px-2.5 py-1 rounded-md bg-[#FF6B35]/15 text-[#FF6B35] border border-[#FF6B35]/30 text-xs font-bold">
                        {edu.grade}
                      </span>
                    )}
                    <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-md bg-[#151518] border border-white/5 text-xs text-[#F5F2EE]">
                      <Calendar className="w-3 h-3 text-[#99969A]" />
                      <span>{edu.period}</span>
                    </span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <div className="space-y-1">
                  <h3 className="text-xl font-bold font-display text-[#F5F2EE] group-hover:text-[#FFB36B] transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-technical-mono text-[#FF6B35]">
                    {edu.institution}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#99969A] leading-relaxed font-normal">
                  {edu.description}
                </p>

                {/* Highlights List */}
                <ul className="space-y-2 pt-2">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start space-x-2.5 text-xs text-[#99969A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6B35] mt-0.5 flex-shrink-0" />
                      <span className="leading-relaxed text-[#F5F2EE]/90">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Status Tag */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-technical-mono text-[#99969A]">
                <span className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />
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
