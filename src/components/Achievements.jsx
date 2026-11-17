import { motion } from 'framer-motion';
import { Trophy, Users, Code, Sparkles, Calendar, MapPin } from 'lucide-react';
import { CONFIG } from '../config';

const achievementIcons = {
  'National Hackathon': <Trophy className="w-5 h-5 text-amber-400" />,
  'Community Hackathon': <Trophy className="w-5 h-5 text-teal-400" />,
  'Technical Community': <Users className="w-5 h-5 text-sky-400" />,
  'Open Source': <Code className="w-5 h-5 text-emerald-400" />
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6 relative bg-[#0b0f17]">
      {/* Subtle Glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-teal-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono-code text-teal-400">
            <span>[ SECTION: ACHIEVEMENTS & COMMUNITY ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Hackathons & Engineering Initiatives
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Verified participation in competitive hackathons, regional developer groups, and active open-source software contributions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONFIG.achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="engineering-panel engineering-panel-interactive rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-slate-800 group"
            >
              <div className="space-y-4">
                {/* Category & Date */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {achievementIcons[item.category] || <Sparkles className="w-5 h-5 text-teal-400" />}
                    </div>
                    <span className="text-xs font-mono-code font-bold uppercase tracking-wider text-teal-400">
                      {item.category}
                    </span>
                  </div>

                  <span className="text-xs font-mono-code text-slate-400 flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{item.date}</span>
                  </span>
                </div>

                {/* Title & Venue */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-display text-white group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono-code text-slate-400 flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{item.venue}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {item.summary}
                </p>
              </div>

              {/* Tags Footer */}
              <div className="pt-4 mt-6 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono-code text-slate-400"
                  >
                    {tag}
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
