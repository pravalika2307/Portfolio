import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, Cpu, Loader2 } from 'lucide-react';
import Card3DTilt from './Card3DTilt';
import { CONFIG } from '../config';

const Architecture3D = lazy(() => import('./Architecture3D'));

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 relative bg-[#0B0B0D]">
      {/* Subtle Glow */}
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

        {/* Dual Grid: Interactive 3D Timeline + Real-Time Architecture Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (7 cols): Experience Cards with 3D Depth & Milestone Rail */}
          <div className="lg:col-span-7 space-y-8 relative">
            
            {/* Visual 3D Timeline Rail */}
            <div className="absolute left-4 top-6 bottom-6 w-px bg-gradient-to-b from-[#FF6B35] via-[#FFB36B]/40 to-transparent hidden sm:block" />

            {CONFIG.experience.map((exp, idx) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="relative sm:pl-10"
              >
                {/* 3D Milestone Node on Rail */}
                <div className="absolute left-2.5 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0B0B0D] border-2 border-[#FF6B35] shadow-[0_0_10px_rgba(255,107,53,0.8)] hidden sm:flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFB36B] animate-ping" />
                </div>

                <Card3DTilt maxTilt={4} className="obsidian-panel rounded-3xl p-6 sm:p-8 border border-white/5 hover:border-[#FF6B35]/30 transition-colors duration-300 relative overflow-hidden group shadow-xl preserve-3d">
                  {/* Top Accent Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B35]/0 via-[#FF6B35]/40 to-[#FFB36B]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/5 translate-z-10">
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

                      <h3 className="text-2xl font-bold font-heading text-[#F5F2EE]">
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
                  <div className="py-6 space-y-3 translate-z-10">
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
                  <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2 font-technical-mono translate-z-10">
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
                </Card3DTilt>
              </motion.div>
            ))}

          </div>

          {/* Right Column (5 cols): 3D Software Architecture Simulator */}
          <div className="lg:col-span-5 sticky top-28">
            <Card3DTilt maxTilt={3} className="obsidian-panel rounded-3xl p-6 border border-white/10 shadow-2xl relative overflow-hidden group">
              <div className="flex items-center justify-between pb-4 border-b border-white/5 font-technical-mono text-xs">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-[#FF6B35]" />
                  <span className="text-[#F5F2EE] font-bold">Systems Architecture</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#FF6B35]/15 text-[#FF6B35] text-[10px]">
                  INTERACTIVE 3D
                </span>
              </div>

              <div className="py-4 text-xs text-[#99969A] leading-relaxed font-sans">
                Interactive spatial visualization of microservice boundaries, event pipelines, CRM synchronization nodes, and client-side intelligence layers.
              </div>

              {/* 3D Canvas Container */}
              <div className="rounded-2xl bg-[#060607]/80 border border-white/5 overflow-hidden p-2">
                <Suspense
                  fallback={
                    <div className="h-[260px] flex flex-col items-center justify-center space-y-2 text-[#99969A] font-technical-mono text-xs">
                      <Loader2 className="w-5 h-5 animate-spin text-[#FF6B35]" />
                      <span>Loading Architecture Topology...</span>
                    </div>
                  }
                >
                  <Architecture3D />
                </Suspense>
              </div>

              <div className="pt-4 flex items-center justify-between text-[11px] font-technical-mono text-[#99969A]">
                <span>Drag to orbit in 3D</span>
                <span className="text-[#FF6B35]">Three.js Engine</span>
              </div>
            </Card3DTilt>
          </div>

        </div>

      </div>
    </section>
  );
}
