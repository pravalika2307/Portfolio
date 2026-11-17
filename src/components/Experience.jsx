import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { CONFIG } from '../config';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative bg-[#0B0B0D]">
      {/* Subtle Glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#FF6B35]/4 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-xs font-technical-mono uppercase tracking-widest text-[#FF6B35]">
            <span>// 03</span>
            <span className="w-8 h-px bg-[#FF6B35]/40" />
            <span>Professional Experience & Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#F5F2EE]">
            Engineering Trajectory
          </h2>
          <p className="text-[#99969A] text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Hands-on contributions in sales automation platforms, CRM integration architectures, and predictive machine learning solutions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 relative">
          
          {CONFIG.experience.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="obsidian-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/5 hover:border-[#FF6B35]/30 transition-all duration-300 relative overflow-hidden group shadow-xl"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B35]/0 via-[#FF6B35]/40 to-[#FFB36B]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2.5 font-technical-mono">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FF6B35]/15 text-[#FF6B35] text-[11px] font-bold border border-[#FF6B35]/30">
                      {exp.type}
                    </span>
                    <span className="text-xs text-[#99969A] flex items-center space-x-1">
                      <MapPin className="w-3 h-3 text-[#99969A]" />
                      <span>{exp.location}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-display text-[#F5F2EE]">
                    {exp.role}
                  </h3>

                  <div className="text-base font-semibold text-[#FFB36B] font-technical-mono">
                    {exp.company}
                  </div>
                </div>

                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-[#151518] border border-white/5 text-xs font-technical-mono text-[#F5F2EE] self-start sm:self-auto">
                  <Calendar className="w-3.5 h-3.5 text-[#FF6B35]" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="py-6 space-y-3">
                <div className="text-xs font-technical-mono text-[#99969A] uppercase tracking-wider">
                  Key Technical Impact:
                </div>
                <ul className="space-y-2.5">
                  {exp.highlights.map((pt, i) => (
                    <li key={i} className="flex items-start space-x-3 text-sm text-[#99969A] leading-relaxed font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6B35] mt-1 flex-shrink-0" />
                      <span className="text-[#F5F2EE]/90">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2 font-technical-mono">
                <span className="text-xs text-[#99969A] mr-2">Technologies:</span>
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-[#151518] border border-white/5 text-xs text-[#99969A]"
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
