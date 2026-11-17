import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Layout, Server, Database, BrainCircuit, 
  CheckSquare, Wrench, Search 
} from 'lucide-react';
import { CONFIG } from '../config';

const categoryIcons = {
  'Programming': <Code2 className="w-5 h-5 text-teal-400" />,
  'Frontend': <Layout className="w-5 h-5 text-sky-400" />,
  'Backend': <Server className="w-5 h-5 text-emerald-400" />,
  'Databases': <Database className="w-5 h-5 text-teal-300" />,
  'AI & GenAI': <BrainCircuit className="w-5 h-5 text-teal-400" />,
  'Testing & Quality': <CheckSquare className="w-5 h-5 text-sky-300" />,
  'Tools & Platforms': <Wrench className="w-5 h-5 text-teal-400" />
};

export default function Skills() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...CONFIG.skills.map((c) => c.category)];

  const filteredCategories = CONFIG.skills.map((cat) => {
    const matchingSkills = cat.skills.filter((skill) =>
      skill.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      ...cat,
      matchingSkills
    };
  }).filter((cat) => {
    if (selectedCategory !== 'All' && cat.category !== selectedCategory) {
      return false;
    }
    if (searchTerm.trim() !== '') {
      return cat.matchingSkills.length > 0;
    }
    return true;
  });

  return (
    <section id="skills" className="py-28 px-6 relative bg-[#0b0f17]">
      {/* Subtle Glow */}
      <div className="absolute top-1/4 left-1/3 w-[450px] h-[450px] bg-teal-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-800/80">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono-code text-teal-400">
              <span>[ SECTION: SKILLS ]</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
              Technical Capabilities
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
              Curated technical stack representing active production proficiency across programming, frontend architecture, backend services, and AI workflows.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-900/90 border border-slate-800 focus:border-teal-500 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 font-mono-code transition-colors outline-none"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium font-mono-code transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-teal-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="engineering-panel engineering-panel-interactive rounded-2xl p-6 border border-slate-800 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center space-x-3 pb-3 border-b border-slate-800/80">
                  <div className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {categoryIcons[cat.category] || <Code2 className="w-5 h-5 text-teal-400" />}
                  </div>
                  <div>
                    <h3 className="text-base font-bold font-display text-white group-hover:text-teal-300 transition-colors">
                      {cat.category}
                    </h3>
                    <p className="text-[11px] font-mono-code text-slate-400">
                      {cat.description}
                    </p>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {(searchTerm.trim() ? cat.matchingSkills : cat.skills).map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono-code text-slate-200 group-hover:border-slate-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Count Footer */}
              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                <span>{cat.skills.length} competencies</span>
                <span className="text-teal-400 font-semibold">Production Ready</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
