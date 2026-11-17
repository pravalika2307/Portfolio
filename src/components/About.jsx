import { motion } from 'framer-motion';
import { Terminal, Cpu, Database, Server } from 'lucide-react';

const engineeringPrinciples = [
  {
    icon: <Server className="w-5 h-5 text-teal-400" />,
    title: 'Resilient Backend Architecture',
    summary: 'Designing modular REST APIs and relational schemas using FastAPI, SQLAlchemy, and PostgreSQL with clear data validation and deterministic error handling.'
  },
  {
    icon: <Cpu className="w-5 h-5 text-sky-400" />,
    title: 'Applied Generative AI',
    summary: 'Integrating LLMs and the Google Gemini API to solve real workflow bottlenecks—focusing on contextual prompts, response schemas, and client-side analytical fallback logic.'
  },
  {
    icon: <Database className="w-5 h-5 text-emerald-400" />,
    title: 'Business Automation & ML',
    summary: 'Automating sales, marketing, and CRM data pipelines at Agile Receivables, combined with empirical ML feature engineering delivering measurable accuracy gains.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative bg-[#0b0f17]">
      {/* Subtle Glow Backdrop */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-teal-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono-code text-teal-400">
            <span>[ SECTION: ABOUT ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Engineering software with clarity, discipline, and purpose.
          </h2>
        </div>

        {/* Editorial Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base leading-relaxed">
            <p>
              I am a Software Engineer and MCA graduate (2026) driven by the mechanics of how software systems handle complexity. Rather than viewing software as isolated scripts or visual mockups, I approach engineering from first principles: clear data contracts, predictable API endpoints, robust relational modeling, and resilient user interfaces.
            </p>

            <p>
              In my current role as a Growth & Technology Intern at <span className="text-white font-medium">Agile Receivables</span>, I contribute directly to software development and internal technology initiatives. My work centers on building a Sales and Marketing Automation platform—architecting CRM workflows, lead management pipelines, outreach automation, and investigating HubSpot CRM synchronization architecture. I also troubleshoot application edge cases and incorporate AI-assisted developer tooling to enhance engineering velocity.
            </p>

            <p>
              Previously at <span className="text-white font-medium">IBM Edunet Foundation</span>, I developed machine learning solutions using Python, Pandas, NumPy, and Scikit-learn. By performing structured data preprocessing, outlier detection, and systematic feature engineering, I improved predictive regression accuracy by 18% and delivered an interactive Streamlit application for workforce forecasting.
            </p>

            <p>
              My academic trajectory combines a Master of Computer Applications (MCA) completed in 2026 with a Bachelor of Science in Computer Science & Cognitive Systems (2021–2024), where I graduated with a <span className="text-teal-400 font-semibold font-mono-code">CGPA of 9.1</span>. This background provides a balanced foundation across computational algorithms, cognitive system concepts, and production software patterns.
            </p>

            {/* Engineering Ethos Card */}
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 font-mono-code text-xs text-slate-300 space-y-2">
              <div className="flex items-center space-x-2 text-teal-400 font-semibold">
                <Terminal className="w-4 h-4" />
                <span>Engineering Philosophy</span>
              </div>
              <p className="font-sans text-sm text-slate-400 leading-normal">
                "I prioritize software that is simple, testable, and genuinely useful. I believe in writing readable code, respecting system boundaries, and measuring success by real operational impact rather than technical hype."
              </p>
            </div>
          </div>

          {/* Right Column: Key Engineering Pillars */}
          <div className="lg:col-span-5 space-y-5">
            <div className="text-xs font-mono-code uppercase tracking-wider text-slate-400 pb-1">
              Core Technical Capabilities
            </div>

            {engineeringPrinciples.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="engineering-panel engineering-panel-interactive p-6 rounded-2xl space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-base font-bold font-display text-white">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {pillar.summary}
                </p>
              </motion.div>
            ))}

            {/* Quick Education / Credential Highlight Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/90 space-y-3">
              <div className="text-xs font-mono-code text-teal-400 font-semibold">
                Academic Background
              </div>
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-white">Master of Computer Applications (MCA)</span>
                  <span className="text-slate-400 font-mono-code">2026</span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>B.Sc Computer Science & Cognitive Systems</span>
                  <span className="text-teal-400 font-mono-code font-semibold">CGPA: 9.1</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
