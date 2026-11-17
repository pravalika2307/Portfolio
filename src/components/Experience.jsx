import { useState, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, Milestone, Loader2, Sparkles } from 'lucide-react';
import Card3DTilt from './Card3DTilt';
import { CONFIG } from '../config';

const CareerTimeline3D = lazy(() => import('./CareerTimeline3D'));

export default function Experience() {
  const [activeMilestone, setActiveMilestone] = useState(3); // Default to Current (Agile Receivables)

  return (
    <section id="experience" className="py-24 px-6 relative bg-[#0B0B0D]">
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-[#FF6B35]/4 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#FFB36B]/3 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-xs font-technical-mono uppercase tracking-widest text-[#FF6B35]">
            <span>// 03</span>
            <span className="w-8 h-px bg-[#FF6B35]/40" />
            <span>Professional Experience & Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-[#F5F2EE]">
            Engineering Trajectory
          </h2>
          <p className="text-[#99969A] text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Hands-on contributions in sales automation platforms, CRM integration architectures, and predictive machine learning solutions.
          </p>
        </div>

        {/* Dual Grid: 3D Career Timeline + Interactive Milestone Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (5 cols): Interactive 3D Career Timeline Sculpture */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Card3DTilt maxTilt={3} className="obsidian-panel rounded-3xl p-6 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="flex items-center justify-between pb-4 border-b border-white/5 font-technical-mono text-xs">
                <div className="flex items-center space-x-2 text-[#FF6B35]">
                  <Milestone className="w-4 h-4" />
                  <span className="text-[#F5F2EE] font-bold">3D Career Timeline</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#FF6B35]/15 text-[#FF6B35] text-[10px] font-bold">
                  INTERACTIVE WAYPOINTS
                </span>
              </div>

              <div className="py-3 text-xs text-[#99969A] leading-relaxed font-sans">
                Spatial timeline visualizing milestone progression across industry internships, applied ML engineering, and computational degrees.
              </div>

              {/* 3D Canvas Viewport */}
              <div className="rounded-2xl bg-[#060607]/80 border border-white/5 overflow-hidden p-2">
                <Suspense
                  fallback={
                    <div className="h-[320px] flex flex-col items-center justify-center space-y-2 text-[#99969A] font-technical-mono text-xs">
                      <Loader2 className="w-5 h-5 animate-spin text-[#FF6B35]" />
                      <span>Loading 3D Career Waypoints...</span>
                    </div>
                  }
                >
                  <CareerTimeline3D
                    activeIndex={activeMilestone}
                    onSelectMilestone={(idx) => setActiveMilestone(idx)}
                  />
                </Suspense>
              </div>

              <div className="pt-3 flex items-center justify-between text-[11px] font-technical-mono text-[#99969A]">
                <span className="flex items-center space-x-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#FFB36B]" />
                  <span>Interactive 3D Trajectory</span>
                </span>
                <span className="text-[#FF6B35]">Three.js</span>
              </div>
            </Card3DTilt>
          </div>

          {/* Right Column (7 cols): Layered Interactive Milestone Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {CONFIG.experience.map((exp, idx) => {
              // Map index: 0 is Agile Receivables (milestone 3), 1 is IBM Edunet (milestone 1)
              const mappedMilestoneIdx = idx === 0 ? 3 : 1;
              const isSelected = activeMilestone === mappedMilestoneIdx;

              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  onMouseEnter={() => setActiveMilestone(mappedMilestoneIdx)}
                  className="cursor-pointer"
                >
                  <Card3DTilt maxTilt={4}>
                    <div
                      className={`obsidian-panel rounded-3xl p-6 sm:p-8 border transition-all duration-300 relative overflow-hidden group shadow-xl ${
                        isSelected
                          ? 'border-[#FF6B35]/50 bg-[#151518]/95 shadow-[0_10px_35px_-10px_rgba(255,107,53,0.15)]'
                          : 'border-white/5 hover:border-white/20'
                      }`}
                    >
                      {/* Top Accent Line */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B35]/0 via-[#FF6B35] to-[#FFB36B]/0 transition-opacity duration-300 ${
                          isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                        }`}
                      />

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

                          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F5F2EE]">
                            {exp.role}
                          </h3>

                          <div className="text-sm sm:text-base font-semibold text-[#FFB36B] font-technical-mono">
                            {exp.company}
                          </div>
                        </div>

                        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-[#151518] border border-white/5 text-xs font-technical-mono text-[#F5F2EE] self-start sm:self-auto">
                          <Calendar className="w-3.5 h-3.5 text-[#FF6B35]" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="py-5 space-y-3">
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
                        <span className="text-xs text-[#99969A] mr-1">Technologies:</span>
                        {exp.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-[#151518] border border-white/5 text-xs text-[#99969A] hover:text-[#F5F2EE] hover:border-white/15 transition-colors"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card3DTilt>
                </motion.div>
              );
            })}

            {/* Academic Foundation Milestone Banner linking to Education */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-[#151518]/70 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-technical-mono text-xs"
            >
              <div className="space-y-1">
                <span className="text-[#FF6B35] font-bold uppercase tracking-wider text-[11px]">
                  Academic Foundations
                </span>
                <p className="text-[#99969A] font-sans">
                  Master of Computer Applications (MCA '26) & B.Sc Cognitive Systems (9.1 CGPA distinction).
                </p>
              </div>
              <a
                href="#education"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-3.5 py-1.5 rounded-lg bg-[#1C1C20] border border-white/10 hover:border-[#FF6B35]/40 text-[#F5F2EE] hover:text-white transition-colors self-start sm:self-auto cursor-pointer"
              >
                View Academic Details &rarr;
              </a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
