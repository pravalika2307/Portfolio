import { motion } from 'framer-motion';
import { Terminal, Server, Cpu, Database, Award, CheckCircle2 } from 'lucide-react';
import Card3DTilt from './Card3DTilt';

const cards = [
  {
    num: "01",
    title: "Backend Engineering",
    icon: <Server className="w-4 h-4 text-[#FF6B35]" />,
    detail: "FastAPI, PostgreSQL, SQLAlchemy & RESTful microservices with strict schema validation and deterministic error boundaries.",
    tag: "Systems & APIs",
    spec: "FastAPI • PostgreSQL"
  },
  {
    num: "02",
    title: "Applied Intelligence",
    icon: <Cpu className="w-4 h-4 text-[#FFB36B]" />,
    detail: "Google Gemini API integrations, structured prompt pipelines, and client-side deterministic fallback engines for continuous uptime.",
    tag: "Applied GenAI",
    spec: "Gemini • Fallbacks"
  },
  {
    num: "03",
    title: "Business Automation",
    icon: <Database className="w-4 h-4 text-[#FF6B35]" />,
    detail: "Sales & marketing automation platforms, CRM workflow orchestration, and HubSpot data synchronization architecture.",
    tag: "Enterprise Flows",
    spec: "HubSpot • CRM Sync"
  },
  {
    num: "04",
    title: "Credentials Snapshot",
    icon: <Award className="w-4 h-4 text-[#FFB36B]" />,
    isCredentials: true,
    tag: "Verified Track Record",
    spec: "MCA '26 • 9.1 CGPA"
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative bg-[#0B0B0D]">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[#FF6B35]/4 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Index Marker */}
        <div className="flex items-center space-x-3 text-xs font-technical-mono uppercase tracking-widest text-[#FF6B35]">
          <span>// 01</span>
          <span className="w-8 h-px bg-[#FF6B35]/40" />
          <span>Core Profile & Philosophy</span>
        </div>

        {/* Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column (5 cols): Concise Narrative & Ethos */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-[#F5F2EE] leading-tight">
              Architecting software systems with clarity, discipline, and measurable impact.
            </h2>

            <div className="space-y-4 text-[#99969A] text-sm sm:text-base leading-relaxed font-normal">
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

          {/* Right Column (7 cols): The 4 Balanced Cards in a 2x2 Responsive Matrix */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {cards.map((card, idx) => (
              <motion.div
                key={card.num}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="h-full"
              >
                <Card3DTilt maxTilt={4} className="h-full">
                  <div className="obsidian-panel rounded-2xl p-6 border border-white/5 hover:border-[#FF6B35]/30 transition-all duration-300 flex flex-col justify-between h-full min-h-[220px] overflow-hidden group shadow-lg">
                    {/* Header: Number & Icon */}
                    <div className="flex items-center justify-between pb-3 border-b border-white/5">
                      <span className="font-technical-mono text-xs font-bold px-2 py-0.5 rounded bg-[#FF6B35]/15 text-[#FF6B35] border border-[#FF6B35]/30">
                        {card.num}
                      </span>
                      <div className="w-8 h-8 rounded-lg bg-[#151518] border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                        {card.icon}
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="py-3 flex-1 flex flex-col justify-center">
                      <h3 className="text-base sm:text-lg font-bold font-heading text-[#F5F2EE] group-hover:text-[#FFB36B] transition-colors leading-snug break-words mb-2">
                        {card.title}
                      </h3>

                      {card.isCredentials ? (
                        <div className="space-y-1.5 font-technical-mono text-xs text-[#99969A]">
                          <div className="flex items-center justify-between text-[#F5F2EE]">
                            <span className="truncate">Agile Receivables</span>
                            <span className="text-[#FF6B35] font-semibold text-[11px]">Present</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="truncate">MCA Completed</span>
                            <span className="text-[#99969A] text-[11px]">2026</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="truncate">B.Sc Cognitive Systems</span>
                            <span className="text-[#FFB36B] font-bold text-[11px]">9.1 CGPA</span>
                          </div>
                        </div>
                      ) : (
                        <p className="text-xs sm:text-[13px] text-[#99969A] leading-relaxed break-words font-sans">
                          {card.detail}
                        </p>
                      )}
                    </div>

                    {/* Footer Spec Strip */}
                    <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-technical-mono text-[#99969A]">
                      <span className="text-[#FF6B35] font-semibold flex items-center space-x-1">
                        <CheckCircle2 className="w-3 h-3 text-[#FF6B35]" />
                        <span>{card.tag}</span>
                      </span>
                      <span className="text-[#99969A]/80 text-[10px]">{card.spec}</span>
                    </div>
                  </div>
                </Card3DTilt>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
