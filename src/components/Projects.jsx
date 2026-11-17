import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { CONFIG } from '../config';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [synapseTab, setSynapseTab] = useState('brief'); // 'brief' | 'fallback' | 'forecast'

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
    <section id="projects" className="py-28 px-6 relative bg-[#0b0f17]">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-sky-500/5 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/3 left-0 w-[450px] h-[450px] bg-teal-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-800/80">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono-code text-teal-400">
              <span>[ SECTION: PROJECTS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
              Featured Software & Platforms
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
              Real applications demonstrating full-stack architecture, applied generative AI, high-throughput REST APIs, and algorithmic systems.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium font-mono-code transition-all duration-200 cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-teal-500 text-slate-950 font-semibold shadow-sm'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* 1. FLAGSHIP SPOTLIGHT PROJECT: SynapseIQ */}
        {flagship && (activeFilter === 'all' || activeFilter === 'ai') && (
          <div className="engineering-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-teal-500/30 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/5 blur-[100px] pointer-events-none rounded-full" />

            {/* Flagship Header Badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold font-mono-code uppercase tracking-wider bg-teal-500/15 border border-teal-500/40 text-teal-300">
                  ★ Flagship Spotlight
                </span>
                <span className="text-xs font-mono-code text-slate-400">
                  {flagship.category}
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href={flagship.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-slate-700 px-3.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>

                {flagship.live && (
                  <a
                    href={flagship.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-xs font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 px-3.5 py-1.5 rounded-lg transition-colors shadow-sm cursor-pointer"
                  >
                    <span>Launch Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Flagship Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-start">
              
              {/* Left Column: Context & Tech Specs */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    {flagship.title}
                  </h3>
                  <p className="text-sm font-mono-code text-teal-400 mt-1">
                    {flagship.tagline}
                  </p>
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {flagship.longDescription}
                </p>

                {/* Important Architecture Note Callout */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-amber-500/30 text-xs space-y-1">
                  <div className="text-amber-400 font-mono-code font-bold flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Technical Architecture Note</span>
                  </div>
                  <p className="text-slate-300 leading-normal">
                    This platform is architected exclusively with a modern <span className="text-white font-semibold">React & TypeScript</span> client application interacting directly with the <span className="text-white font-semibold">Google Gemini API</span>. It deliberately does not require an external Python/FastAPI backend server, utilizing client-side analytical engines for fallback resiliency.
                  </p>
                </div>

                {/* Metrics Pill Grid */}
                <div className="grid grid-cols-3 gap-2.5 pt-1">
                  {flagship.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900/70 border border-slate-800">
                      <div className="text-[10px] font-mono-code text-slate-400">{m.label}</div>
                      <div className="text-xs font-bold text-slate-100 mt-0.5 truncate">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {flagship.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono-code text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Platform Preview Simulator */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-slate-950/90 border border-slate-800 overflow-hidden shadow-xl">
                  {/* Simulator Control Bar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                    <div className="flex items-center space-x-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                      <span className="text-[11px] font-mono-code text-slate-400 pl-1">synapseiq-ai.vercel.app</span>
                    </div>

                    {/* Tab Switcher */}
                    <div className="flex rounded-lg bg-slate-950 p-0.5 border border-slate-800 text-[10px] font-mono-code">
                      <button
                        onClick={() => setSynapseTab('brief')}
                        className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                          synapseTab === 'brief' ? 'bg-teal-500/20 text-teal-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Executive Brief
                      </button>
                      <button
                        onClick={() => setSynapseTab('fallback')}
                        className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                          synapseTab === 'fallback' ? 'bg-teal-500/20 text-teal-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Fallback Engine
                      </button>
                      <button
                        onClick={() => setSynapseTab('forecast')}
                        className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                          synapseTab === 'forecast' ? 'bg-teal-500/20 text-teal-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Forecast Matrix
                      </button>
                    </div>
                  </div>

                  {/* Simulator Window Viewport */}
                  <div className="p-5 font-mono-code text-xs space-y-4 min-h-[300px]">
                    {synapseTab === 'brief' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                          <span className="text-teal-400 font-semibold">&gt; SYNAPSE_AI_BRIEF_GENERATOR</span>
                          <span className="px-2 py-0.5 rounded bg-teal-500/10 text-teal-400 text-[10px]">GEMINI_PRO_ACTIVE</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-1.5 text-slate-300 text-[11px]">
                          <div className="text-white font-semibold">Strategic Executive Summary:</div>
                          <p className="text-slate-400 leading-relaxed font-sans">
                            Customer acquisition velocity increased 14.2% week-over-week. Churn risks detected in Tier-2 accounts; recommender recommends deploying automated CRM outreach sequence within 48 hours.
                          </p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[10px]">
                          <div className="p-2 rounded bg-slate-900/40 border border-slate-800">
                            <span className="text-slate-400">Contextual Health:</span>
                            <div className="text-emerald-400 font-bold text-xs mt-0.5">94.8 / 100</div>
                          </div>
                          <div className="p-2 rounded bg-slate-900/40 border border-slate-800">
                            <span className="text-slate-400">Decision Confidence:</span>
                            <div className="text-teal-300 font-bold text-xs mt-0.5">High (Gemini Flash)</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {synapseTab === 'fallback' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                          <span className="text-amber-400 font-semibold">&gt; CLIENT_SIDE_FALLBACK_SIMULATOR</span>
                          <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 text-[10px]">OFFLINE_RESILIENT</span>
                        </div>
                        <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800/80 space-y-1 text-slate-300 text-[11px]">
                          <div className="text-amber-300 font-semibold">Analytical Engine Fallback Triggered:</div>
                          <p className="text-slate-400 font-sans leading-relaxed">
                            Simulated upstream latency: 0ms failure impact. Client-side deterministic algorithms computed business metrics and generated heuristic recommendations without API interruption.
                          </p>
                        </div>
                        <div className="space-y-1 text-[10px] text-slate-400">
                          <div>[1] Ingested 1,200 local telemetry data points</div>
                          <div>[2] Applied client-side moving average and quantile filters</div>
                          <div className="text-emerald-400">[3] Fallback metrics synthesized successfully in 12ms</div>
                        </div>
                      </div>
                    )}

                    {synapseTab === 'forecast' && (
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
                          <span className="text-sky-400 font-semibold">&gt; INTERACTIVE_SCENARIO_FORECAST</span>
                          <span className="px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 text-[10px]">MONTE_CARLO_SIM</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-[11px] text-slate-300">
                            <span>Projected Revenue Target (Q4)</span>
                            <span className="text-teal-400 font-bold">+28.4%</span>
                          </div>
                          <div className="w-full bg-slate-900 rounded-full h-2 overflow-hidden border border-slate-800">
                            <div className="bg-teal-500 h-full rounded-full" style={{ width: '74%' }} />
                          </div>
                          <div className="flex justify-between text-[10px] text-slate-500">
                            <span>Base: $140K</span>
                            <span>Target: $190K</span>
                          </div>
                        </div>
                        <div className="p-2.5 rounded bg-slate-900/50 border border-slate-800 text-[10px] text-slate-400 space-y-1">
                          <span className="text-slate-300 font-semibold">Recommended Action:</span>
                          <p className="font-sans">Shift 15% outreach budget into high-converting account-based marketing sequences.</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Simulator Footer */}
                  <div className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800 text-[11px] font-mono-code text-slate-400 flex items-center justify-between">
                    <span className="flex items-center space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-teal-400" />
                      <span>Pure Client-Side React + TypeScript</span>
                    </span>
                    <a
                      href={flagship.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-400 hover:text-teal-300 font-semibold flex items-center space-x-1"
                    >
                      <span>Try Interactive App</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2. OTHER FEATURED & SPECIALIZED PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45 }}
              className="engineering-panel engineering-panel-interactive rounded-2xl p-6 flex flex-col justify-between border border-slate-800 group relative"
            >
              <div className="space-y-4">
                {/* Header: Badge & Category */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono-code font-bold uppercase px-2.5 py-0.5 rounded-full border ${
                    project.badge.includes('Hackathon') 
                      ? 'bg-amber-500/10 text-amber-400 border-amber-500/25'
                      : project.badge.includes('Architecture') || project.badge.includes('Systems')
                      ? 'bg-teal-500/10 text-teal-300 border-teal-500/25'
                      : 'bg-sky-500/10 text-sky-400 border-sky-500/25'
                  }`}>
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-mono-code text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-teal-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono-code text-slate-400 mt-0.5">
                    {project.tagline}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Technical Highlights / Metrics */}
                <div className="grid grid-cols-2 gap-2 pt-1 font-mono-code text-[11px]">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-slate-900/60 border border-slate-800/80">
                      <span className="text-slate-400 text-[10px] block">{m.label}</span>
                      <span className="text-slate-200 font-semibold mt-0.5 block truncate">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: Tech Badges & GitHub Links */}
              <div className="pt-5 mt-6 border-t border-slate-800/80 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono-code text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-slate-400 group-hover:text-white" />
                    <span>View Repository</span>
                  </a>

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-xs font-semibold text-teal-400 hover:text-teal-300 cursor-pointer"
                    >
                      <span>Live Preview</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[10px] font-mono-code text-slate-400">
                      Verified Implementation
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
