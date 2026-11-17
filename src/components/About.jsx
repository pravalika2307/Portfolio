import { motion } from 'framer-motion';
import { Terminal, Server, Cpu, Database } from 'lucide-react';
import Card3DTilt from './Card3DTilt';

const pillars = [
  {
    num: "01",
    title: "Backend Engineering",
    icon: <Server className="w-4 h-4 text-[#FF6B35]" />,
    detail: "FastAPI, PostgreSQL, SQLAlchemy & RESTful microservices with strict schema validation."
  },
  {
    num: "02",
    title: "Applied Intelligence",
    icon: <Cpu className="w-4 h-4 text-[#FFB36B]" />,
    detail: "Google Gemini API integrations, prompt pipelines, and client-side analytical fallback logic."
  },
  {
    num: "03",
    title: "Business Automation",
    icon: <Database className="w-4 h-4 text-[#FF6B35]" />,
    detail: "CRM workflow orchestration, HubSpot data synchronization, and machine learning pipelines."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative bg-[#0B0B0D]">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#FF6B35]/4 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Index Marker */}
        <div className="flex items-center space-x-3 text-xs font-technical-mono uppercase tracking-widest text-[#FF6B35]">
          <span>// 01</span>
          <span className="w-8 h-px bg-[#FF6B35]/40" />
          <span>Core Profile & Philosophy</span>
        </div>

        {/* Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Concise Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-[#F5F2EE] leading-tight">
              Architecting software systems with clarity, discipline, and measurable impact.
            </h2>

            <div className="space-y-5 text-[#99969A] text-base leading-relaxed">
              <p>
                I am a Software Engineer and MCA graduate (2026) driven by scalable architectures and systems engineering. I focus on building reliable software from first principles: deterministic API contracts, resilient state management, and practical AI automation that solves tangible operational bottlenecks.
              </p>
              <p>
                At <span className="text-[#F5F2EE] font-semibold">Agile Receivables</span>, I contribute to sales and marketing automation platforms—architecting CRM pipelines, lead routing workflows, and HubSpot synchronization. Previously at <span className="text-[#F5F2EE] font-semibold">IBM Edunet Foundation</span>, I developed machine learning models improving regression accuracy by 18% through systematic feature engineering.
              </p>
            </div>

            {/* Ethos Callout Strip */}
            <div className="p-5 rounded-2xl bg-[#151518] border border-white/5 font-technical-mono text-xs text-[#99969A] flex items-start space-x-3.5">
              <Terminal className="w-4 h-4 text-[#FF6B35] mt-0.5 flex-shrink-0" />
              <p className="leading-relaxed">
                "I prioritize software that is simple, testable, and robust. True engineering quality is measured by operational uptime and real user outcomes, not superficial complexity."
              </p>
            </div>
          </div>

          {/* Right Column: Architectural Pillars & Credential Ledger with 3D Tilt */}
          <div className="lg:col-span-5 space-y-4">
            
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <Card3DTilt maxTilt={5} className="obsidian-panel obsidian-panel-interactive p-5 rounded-2xl border border-white/5 space-y-2 group preserve-3d">
                  <div className="flex items-center justify-between translate-z-10">
                    <span className="font-technical-mono text-xs font-bold text-[#FF6B35]">
                      {pillar.num}
                    </span>
                    <div className="w-7 h-7 rounded-lg bg-[#151518] border border-white/5 flex items-center justify-center">
                      {pillar.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-bold font-heading text-[#F5F2EE] group-hover:text-[#FFB36B] transition-colors translate-z-20">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#99969A] leading-relaxed translate-z-10">
                    {pillar.detail}
                  </p>
                </Card3DTilt>
              </motion.div>
            ))}

            {/* Verified Education & Experience Micro-card */}
            <Card3DTilt maxTilt={4} className="p-5 rounded-2xl bg-[#151518]/90 border border-white/5 space-y-3 font-technical-mono text-xs preserve-3d">
              <div className="text-[11px] uppercase tracking-wider text-[#FF6B35] font-bold translate-z-10">
                Credentials Snapshot
              </div>
              <div className="space-y-2 text-[#99969A] translate-z-10">
                <div className="flex justify-between items-center text-[#F5F2EE]">
                  <span>Agile Receivables (Intern)</span>
                  <span className="text-[#FF6B35]">2026 – Present</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>MCA (Completed 2026)</span>
                  <span>Master's</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>B.Sc Cognitive Systems</span>
                  <span className="text-[#FFB36B] font-bold">CGPA: 9.1</span>
                </div>
              </div>
            </Card3DTilt>

          </div>

        </div>

      </div>
    </section>
  );
}
