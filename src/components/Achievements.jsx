import { motion } from 'framer-motion';
import { Trophy, Users, Code, Sparkles, Calendar, MapPin } from 'lucide-react';
import { CONFIG } from '../config';

const achievementIcons = {
  'National Hackathon': <Trophy className="w-5 h-5 text-[#FF6B35]" />,
  'Community Hackathon': <Trophy className="w-5 h-5 text-[#FFB36B]" />,
  'Technical Community': <Users className="w-5 h-5 text-[#FF6B35]" />,
  'Open Source': <Code className="w-5 h-5 text-[#FFB36B]" />
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 relative bg-[#0B0B0D]">
      {/* Subtle Glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#FF6B35]/4 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-xs font-technical-mono uppercase tracking-widest text-[#FF6B35]">
            <span>// 06</span>
            <span className="w-8 h-px bg-[#FF6B35]/40" />
            <span>Hackathons & Initiatives</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#F5F2EE]">
            Achievements & Community
          </h2>
          <p className="text-[#99969A] text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Fast-paced engineering hackathons, regional developer groups, and active open-source software contributions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONFIG.achievements.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="obsidian-panel obsidian-panel-interactive rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/5 group"
            >
              <div className="space-y-4">
                {/* Category & Date */}
                <div className="flex items-center justify-between pb-3 border-b border-white/5">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#151518] border border-white/5 flex items-center justify-center">
                      {achievementIcons[item.category] || <Sparkles className="w-5 h-5 text-[#FF6B35]" />}
                    </div>
                    <span className="text-xs font-technical-mono font-bold uppercase tracking-wider text-[#FF6B35]">
                      {item.category}
                    </span>
                  </div>

                  <span className="text-xs font-technical-mono text-[#99969A] flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-[#99969A]" />
                    <span>{item.date}</span>
                  </span>
                </div>

                {/* Title & Venue */}
                <div className="space-y-1">
                  <h3 className="text-lg font-bold font-display text-[#F5F2EE] group-hover:text-[#FFB36B] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs font-technical-mono text-[#99969A] flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-[#99969A]" />
                    <span>{item.venue}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#99969A] leading-relaxed font-normal">
                  {item.summary}
                </p>
              </div>

              {/* Tags Footer */}
              <div className="pt-4 mt-6 border-t border-white/5 flex flex-wrap gap-1.5 font-technical-mono">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-[#151518] border border-white/5 text-[10px] text-[#99969A]"
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
