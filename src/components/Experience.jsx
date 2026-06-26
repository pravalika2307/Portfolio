import { motion } from 'framer-motion';
import { Calendar, Briefcase, GraduationCap, CheckCircle2, Cpu } from 'lucide-react';
import { CONFIG } from '../config';

export default function Experience() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 90, damping: 18 }
    }
  };

  return (
    <section id="timeline" className="py-32 px-6 relative bg-[#030014]">
      {/* Background glow spot */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-650/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20">
            Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-none">
            Education & Experience
          </h2>
          <p className="text-gray-450 text-sm md:text-base max-w-md mx-auto font-normal leading-relaxed">
            A chronological timeline of my professional experience, academic training, and core milestones.
          </p>
        </div>

        {/* Timeline Line & Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative border-l border-gray-900 ml-4 md:ml-10 space-y-12"
        >
          {CONFIG.timeline.map((event, index) => {
            const isEducation = event.type === 'education';
            
            return (
              <motion.div
                key={event.role}
                variants={itemVariants}
                className="relative pl-8 md:pl-12 group"
              >
                {/* Timeline Indicator Node */}
                <div className={`absolute -left-[13px] top-2 w-6 h-6 rounded-full bg-gray-950 border-2 flex items-center justify-center transition-all duration-300 shadow-[0_0_12px_rgba(59,130,246,0.15)] ${
                  isEducation 
                    ? 'border-indigo-500/80 group-hover:border-indigo-400' 
                    : 'border-blue-500/80 group-hover:border-blue-400'
                }`}>
                  {isEducation ? (
                    <GraduationCap className="w-3 h-3 text-indigo-400" />
                  ) : (
                    <Briefcase className="w-3 h-3 text-blue-400" />
                  )}
                </div>

                {/* Timeline Item Card */}
                <div className="glass-panel p-8 rounded-3xl relative overflow-hidden border border-gray-900 group-hover:border-blue-500/15 transition-all duration-300">
                  
                  {/* Glowing reflections */}
                  <div className={`absolute -top-10 -right-10 w-32 h-32 blur-2xl group-hover:bg-opacity-15 pointer-events-none transition-all duration-300 rounded-full ${
                    isEducation ? 'bg-indigo-500/4' : 'bg-blue-600/5'
                  }`} />
                  
                  {/* Card Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 border-b border-gray-900 pb-5 mb-5">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded border ${
                          isEducation 
                            ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' 
                            : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                        }`}>
                          {isEducation ? 'Academic Education' : 'IBM Program'}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold font-display text-white group-hover:text-blue-400 transition-colors duration-250 leading-tight">
                        {event.role}
                      </h3>
                      <div className="text-sm text-gray-300 font-semibold">
                        {event.organization}
                      </div>
                    </div>

                    <div className="flex items-center space-x-1.5 text-xs text-gray-450 bg-gray-950/60 border border-gray-850 px-3.5 py-1.5 rounded-full font-semibold">
                      <Calendar className="w-3.5 h-3.5 text-blue-450" />
                      <span>{event.period}</span>
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="space-y-4">
                    <p className="text-sm text-gray-400 leading-relaxed font-normal">
                      {event.description}
                    </p>

                    {/* Accomplishment points list */}
                    <ul className="space-y-2.5 text-xs text-gray-450 font-normal">
                      {event.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            isEducation ? 'text-indigo-500/80' : 'text-blue-500/80'
                          }`} />
                          <span className="leading-relaxed">{pt}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies row if work item */}
                    {event.tech && (
                      <div className="pt-4 border-t border-gray-900">
                        <span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase block mb-2">Technologies Used</span>
                        <div className="flex flex-wrap gap-1.5">
                          {event.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-lg bg-gray-950/50 border border-gray-900 text-[10px] font-semibold text-gray-400 tracking-wide flex items-center space-x-1"
                            >
                              <Cpu className="w-3 h-3 text-blue-450" />
                              <span>{t}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
