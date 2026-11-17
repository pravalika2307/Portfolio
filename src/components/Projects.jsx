import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import Card3DTilt from './Card3DTilt';
import MagneticButton from './MagneticButton';
import { CONFIG } from '../config';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [synapseTab, setSynapseTab] = useState('brief');

  const filters = [
    { id: 'all', label: 'All Projects (7)' },
    { id: 'ai', label: 'AI & GenAI' },
    { id: 'fullstack', label: 'Full-Stack & APIs' },
    { id: 'systems', label: 'Systems & ML' }
  ];

  const filteredProjects = CONFIG.projects.filter((p) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai') return p.category.includes('AI');
    if (activeFilter === 'fullstack') return p.tech.includes('FastAPI') || p.tech.includes('Next.js') || p.tech.includes('REST APIs');
    if (activeFilter === 'systems') return p.category.includes('Systems') || p.category.includes('Data') || p.category.includes('Algorithms');
    return true;
  });

  const flagship = CONFIG.projects.find((p) => p.id === 'synapseiq');
  const otherProjects = filteredProjects.filter((p) => p.id !== 'synapseiq');

  return (
    <section id="projects" className="py-24 px-6 relative bg-[#0B0B0D]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#FF6B35]/4 blur-[180px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#FFB36B]/3 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header & Filter Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/5">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-xs font-technical-mono uppercase tracking-widest text-[#FF6B35]">
              <span>// 02</span>
              <span className="w-8 h-px bg-[#FF6B35]/40" />
              <span>Selected Works & Architectures</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-[#F5F2EE]">
              Featured Engineering Projects
            </h2>
            <p className="text-[#99969A] text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
              Production-tested systems demonstrating full-stack architecture, generative AI workflows, high-throughput REST APIs, and algorithmic rigor.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-technical-mono font-semibold transition-all duration-200 cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#FF6B35] text-[#0B0B0D] shadow-md shadow-[#FF6B35]/20 font-bold'
                    : 'bg-[#151518] text-[#99969A] hover:text-[#F5F2EE] border border-white/5'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1. FLAGSHIP SPOTLIGHT SHOWCASE: SynapseIQ in 3D Perspective Tilt */}
        {flagship && (activeFilter === 'all' || activeFilter === 'ai') && (
          <Card3DTilt maxTilt={4} className="obsidian-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#FF6B35]/30 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/5 blur-[120px] pointer-events-none rounded-full" />

            {/* Flagship Top Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/5 preserve-3d">
              <div className="flex items-center space-x-3 translate-z-20">
                <span className="px-3 py-1 rounded-full text-xs font-bold font-technical-mono uppercase tracking-wider bg-[#FF6B35]/15 border border-[#FF6B35]/40 text-[#FF6B35]">
                  ★ Flagship Platform
                </span>
                <span className="text-xs font-technical-mono text-[#99969A]">
                  {flagship.category}
                </span>
              </div>

              <div className="flex items-center space-x-3 translate-z-20">
                <MagneticButton strength={0.2}>
                  <a
                    href={flagship.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-xs font-technical-mono font-semibold text-[#F5F2EE] hover:text-white bg-[#151518] border border-white/10 hover:border-white/20 px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </MagneticButton>

                {flagship.live && (
                  <MagneticButton strength={0.2}>
                    <a
                      href={flagship.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 text-xs font-technical-mono font-bold text-[#0B0B0D] bg-[#FF6B35] hover:bg-[#FFB36B] px-4 py-2 rounded-lg transition-colors shadow-sm cursor-pointer"
                    >
                      <span>Live Platform</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </MagneticButton>
                )}
              </div>
            </div>

            {/* Flagship Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-start">
              
              {/* Left Column: Context & Tech Specs */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#F5F2EE]">
                    {flagship.title}
                  </h3>
                  <p className="text-xs font-technical-mono text-[#FF6B35] mt-1 uppercase tracking-wider">
                    {flagship.tagline}
                  </p>
                </div>

                <p className="text-[#99969A] text-sm sm:text-base leading-relaxed">
                  {flagship.longDescription}
                </p>

                {/* Important Architecture Note Callout */}
                <div className="p-4 rounded-xl bg-[#151518] border border-[#FFB36B]/20 text-xs space-y-1.5">
                  <div className="text-[#FFB36B] font-technical-mono font-bold flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Architectural Specification</span>
                  </div>
                  <p className="text-[#F5F2EE]/90 leading-normal font-sans">
                    Built as a modern <span className="text-[#FF6B35] font-semibold">React & TypeScript</span> client application interacting directly with the <span className="text-[#FF6B35] font-semibold">Google Gemini API</span>. It deliberately runs without requiring an external backend server, deploying custom client-side analytical engines for offline and fallback continuity.
                  </p>
                </div>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  {flagship.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-[#151518] border border-white/5 font-technical-mono">
                      <div className="text-[10px] text-[#99969A] uppercase tracking-wider">{m.label}</div>
                      <div className="text-xs font-bold text-[#F5F2EE] mt-0.5 truncate">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {flagship.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-[#151518] border border-white/5 text-[11px] font-technical-mono text-[#99969A]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Platform Simulator */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-[#060607] border border-white/10 overflow-hidden shadow-2xl">
                  {/* Simulator Control Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-[#151518] border-b border-white/5">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B35]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFB36B]/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      <span className="text-[11px] font-technical-mono text-[#99969A] pl-1">synapseiq-ai.vercel.app</span>
                    </div>

                    {/* Tab Switcher */}
                    <div className="flex rounded-lg bg-[#0B0B0D] p-0.5 border border-white/5 text-[10px] font-technical-mono">
                      <button
                        onClick={() => setSynapseTab('brief')}
                        className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                          synapseTab === 'brief' ? 'bg-[#FF6B35]/20 text-[#FF6B35] font-bold' : 'text-[#99969A] hover:text-[#F5F2EE]'
                        }`}
                      >
                        Executive Brief
                      </button>
                      <button
                        onClick={() => setSynapseTab('fallback')}
                        className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                          synapseTab === 'fallback' ? 'bg-[#FF6B35]/20 text-[#FF6B35] font-bold' : 'text-[#99969A] hover:text-[#F5F2EE]'
                        }`}
                      >
                        Fallback Engine
                      </button>
                      <button
                        onClick={() => setSynapseTab('forecast')}
                        className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                          synapseTab === 'forecast' ? 'bg-[#FF6B35]/20 text-[#FF6B35] font-bold' : 'text-[#99969A] hover:text-[#F5F2EE]'
                        }`}
                      >
                        Forecast
                      </button>
                    </div>
                  </div>

                  {/* Simulator Window Viewport */}
                  <div className="p-5 font-technical-mono text-xs space-y-4 min-h-[290px]">
                    {synapseTab === 'brief' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-white/5">
                          <span className="text-[#FF6B35] font-semibold">&gt; SYNAPSE_AI_BRIEF_SYNTHESIS</span>
                          <span className="px-2 py-0.5 rounded bg-[#FF6B35]/10 text-[#FF6B35] text-[10px]">GEMINI_ACTIVE</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#151518] border border-white/5 space-y-1.5 text-[#F5F2EE] text-[11px]">
                          <div className="text-[#FFB36B] font-semibold">Strategic Decision Brief:</div>
                          <p className="text-[#99969A] leading-relaxed font-sans">
                            Acquisition velocity rose 14.2% across automated inbound channels. Churn risk detected in Tier-2 accounts; system recommends deploying automated CRM outreach sequence within 48 hours.
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[10px]">
                          <div className="p-2.5 rounded bg-[#151518] border border-white/5">
                            <span className="text-[#99969A]">Operational Health:</span>
                            <div className="text-[#FFB36B] font-bold text-xs mt-0.5">94.8 / 100</div>
                          </div>
                          <div className="p-2.5 rounded bg-[#151518] border border-white/5">
                            <span className="text-[#99969A]">Confidence Score:</span>
                            <div className="text-[#FF6B35] font-bold text-xs mt-0.5">High (Gemini Pro)</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {synapseTab === 'fallback' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-white/5">
                          <span className="text-[#FFB36B] font-semibold">&gt; CLIENT_SIDE_FALLBACK_SIMULATOR</span>
                          <span className="px-2 py-0.5 rounded bg-[#FFB36B]/15 text-[#FFB36B] text-[10px]">OFFLINE_RESILIENT</span>
                        </div>
                        <div className="p-3 rounded-lg bg-[#151518] border border-white/5 space-y-1 text-[#F5F2EE] text-[11px]">
                          <div className="text-[#FFB36B] font-semibold">Zero-Latency Fallback Activated:</div>
                          <p className="text-[#99969A] font-sans leading-relaxed">
                            Simulated API outage: 0ms interruption. Client-side deterministic algorithms computed revenue metrics and generated heuristic recommendations without API round-trips.
                          </p>
                        </div>
                        <div className="space-y-1 text-[10px] text-[#99969A]">
                          <div>[1] 1,200 local telemetry data points processed</div>
                          <div>[2] Quantile anomaly filters computed locally</div>
                          <div className="text-[#FF6B35]">[3] Synthetic brief rendered in 11ms</div>
                        </div>
                      </div>
                    )}

                    {synapseTab === 'forecast' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-white/5">
                          <span className="text-[#FF6B35] font-semibold">&gt; INTERACTIVE_SCENARIO_FORECAST</span>
                          <span className="px-2 py-0.5 rounded bg-[#FF6B35]/15 text-[#FF6B35] text-[10px]">MONTE_CARLO</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-[11px] text-[#F5F2EE]">
                            <span>Projected Revenue Target (Q4)</span>
                            <span className="text-[#FF6B35] font-bold">+28.4%</span>
                          </div>
                          <div className="w-full bg-[#151518] rounded-full h-2 overflow-hidden border border-white/5">
                            <div className="bg-[#FF6B35] h-full rounded-full" style={{ width: '74%' }} />
                          </div>
                          <div className="flex justify-between text-[10px] text-[#99969A]">
                            <span>Baseline: $140K</span>
                            <span>Target: $190K</span>
                          </div>
                        </div>
                        <div className="p-2.5 rounded bg-[#151518] border border-white/5 text-[10px] text-[#99969A] space-y-1">
                          <span className="text-[#F5F2EE] font-semibold">Recommended Strategic Move:</span>
                          <p className="font-sans">Shift 15% outreach budget into high-converting account-based marketing sequences.</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Simulator Footer */}
                  <div className="px-4 py-2.5 bg-[#151518] border-t border-white/5 text-[11px] font-technical-mono text-[#99969A] flex items-center justify-between">
                    <span className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF6B35]" />
                      <span>React & TypeScript Client Architecture</span>
                    </span>
                    <a
                      href={flagship.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FF6B35] hover:text-[#FFB36B] font-semibold flex items-center space-x-1"
                    >
                      <span>Launch App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </Card3DTilt>
        )}

        {/* 2. OTHER FEATURED & SPECIALIZED PROJECTS (Interactive 3D Perspective Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="h-full"
            >
              <Card3DTilt maxTilt={7} className="obsidian-panel obsidian-panel-interactive rounded-2xl p-6 flex flex-col justify-between border border-white/5 group h-full preserve-3d">
                <div className="space-y-4">
                  {/* Header: Badge & Category */}
                  <div className="flex items-center justify-between translate-z-10">
                    <span className={`text-[10px] font-technical-mono font-bold uppercase px-2.5 py-0.5 rounded-full border ${
                      project.badge.includes('Hackathon') 
                        ? 'bg-[#FF6B35]/10 text-[#FF6B35] border-[#FF6B35]/30'
                        : project.badge.includes('Architecture') || project.badge.includes('Systems')
                        ? 'bg-[#FFB36B]/10 text-[#FFB36B] border-[#FFB36B]/30'
                        : 'bg-white/5 text-[#F5F2EE] border-white/10'
                    }`}>
                      {project.badge}
                    </span>
                    <span className="text-[11px] font-technical-mono text-[#99969A]">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div className="translate-z-20">
                    <h3 className="text-xl font-bold font-heading text-[#F5F2EE] group-hover:text-[#FFB36B] transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs font-technical-mono text-[#FF6B35] mt-0.5">
                      {project.tagline}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#99969A] leading-relaxed font-normal translate-z-10">
                    {project.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-2 pt-1 font-technical-mono text-[11px] translate-z-10">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="p-2 rounded-lg bg-[#151518] border border-white/5">
                        <span className="text-[#99969A] text-[10px] block">{m.label}</span>
                        <span className="text-[#F5F2EE] font-semibold mt-0.5 block truncate">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer: Tech Badges & GitHub Links */}
                <div className="pt-5 mt-6 border-t border-white/5 space-y-4 translate-z-20">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded bg-[#151518] border border-white/5 text-[10px] font-technical-mono text-[#99969A]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1 font-technical-mono">
                    <MagneticButton strength={0.25}>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1.5 text-xs text-[#F5F2EE] hover:text-[#FF6B35] transition-colors cursor-pointer"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-[#99969A] group-hover:text-[#FF6B35]" />
                        <span>Repository</span>
                      </a>
                    </MagneticButton>

                    {project.live ? (
                      <MagneticButton strength={0.25}>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-xs font-semibold text-[#FF6B35] hover:text-[#FFB36B] cursor-pointer"
                        >
                          <span>Preview</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </MagneticButton>
                    ) : (
                      <span className="text-[10px] text-[#99969A]">
                        Shipped
                      </span>
                    )}
                  </div>
                </div>
              </Card3DTilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
