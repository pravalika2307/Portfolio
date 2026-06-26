import { motion } from 'framer-motion';
import { Download, FileText, Calendar, GraduationCap, MapPin, Mail } from 'lucide-react';
import { CONFIG } from '../config';

export default function Resume() {


  return (
    <section id="resume" className="py-24 px-6 relative bg-[#030014] radial-mask">
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20">
            Credentials
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Interactive Resume
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-md mx-auto font-normal">
            A digital representation of my professional qualifications. You can download the text version below.
          </p>
        </div>

        {/* Resume Glass Board */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glass-panel p-8 md:p-12 rounded-3xl relative border border-gray-800/80 shadow-2xl space-y-10 hover-border-glow hover:border-blue-500/15"
        >
          {/* Top Control Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-800 pb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">{CONFIG.name}</h3>
                <p className="text-xs text-gray-400 mt-0.5">MCA Student & Backend Engineer</p>
              </div>
            </div>

            <a
              href="/Pravalika_Palle_Resume.pdf"
              download="Pravalika_Palle_Resume.pdf"
              className="flex items-center space-x-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 transition-all duration-300 scale-hover w-full sm:w-auto justify-center cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Grid Layout of Sections */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm text-gray-300">
            {/* Left Column (Metadata & Skills) */}
            <div className="md:col-span-4 space-y-6">
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 border-b border-gray-800/80 pb-1.5">
                  Contact Details
                </h4>
                <div className="space-y-2 text-xs text-gray-400">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    <span>{CONFIG.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>Hyderabad, India</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 border-b border-gray-800/80 pb-1.5">
                  Education
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <GraduationCap className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white text-xs">Master of Computer Applications (MCA)</div>
                      <div className="text-[11px] text-gray-400 mt-0.5">MCA Candidate (2026)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 border-b border-gray-800/80 pb-1.5">
                  Core Focus
                </h4>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {['Algorithms', 'Backend Architecture', 'Generative AI', 'Memory Storage', 'System Scaling'].map((focus) => (
                    <span
                      key={focus}
                      className="px-2 py-1 rounded bg-gray-900 border border-gray-850 text-[10px] text-gray-400 font-medium"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Timeline Highlights) */}
            <div className="md:col-span-8 space-y-8">
              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 border-b border-gray-800 pb-1.5">
                  Professional Timeline
                </h4>
                
                <div className="space-y-4">
                  <div className="relative pl-6 border-l border-gray-800">
                    <div className="absolute -left-[5.5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500" />
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="font-semibold text-white">AI & ML Intern</span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>June 2025 – July 2025</span>
                      </span>
                    </div>
                    <div className="text-xs text-gray-400 font-semibold mt-0.5">IBM Edunet Foundation</div>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      Explored spatial CNN architectures, trained machine learning classification endpoints, and engineered database workflows.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-widest text-blue-400 border-b border-gray-800 pb-1.5">
                  Top Accomplishments
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-gray-900/40 border border-gray-850/60">
                    <div className="text-xs font-bold text-white mb-1">TalentLens AI</div>
                    <p className="text-[11px] text-gray-450 leading-relaxed">
                      Implemented Redis-fork Valkey key-value session mapping for fast REST API prompt responses.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-900/40 border border-gray-850/60">
                    <div className="text-xs font-bold text-white mb-1">HRlytics AI</div>
                    <p className="text-[11px] text-gray-450 leading-relaxed">
                      Wrote relational SQLAlchemy model code supporting SQLite retention reports.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
