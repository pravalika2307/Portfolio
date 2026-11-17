import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Layout, Server, Database, BrainCircuit, 
  CheckSquare, Wrench, Search 
} from 'lucide-react';
import Card3DTilt from './Card3DTilt';
import { CONFIG } from '../config';

const categoryIcons = {
  'Programming': <Code2 className="w-5 h-5 text-[#FF6B35]" />,
  'Frontend': <Layout className="w-5 h-5 text-[#FFB36B]" />,
  'Backend': <Server className="w-5 h-5 text-[#FF6B35]" />,
  'Databases': <Database className="w-5 h-5 text-[#FFB36B]" />,
  'AI & GenAI': <BrainCircuit className="w-5 h-5 text-[#FF6B35]" />,
  'Testing & Quality': <CheckSquare className="w-5 h-5 text-[#FFB36B]" />,
  'Tools & Platforms': <Wrench className="w-5 h-5 text-[#FF6B35]" />
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
    <section id="skills" className="py-24 px-6 relative bg-[#0B0B0D]">
      {/* Subtle Glow */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#FF6B35]/4 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-white/5">
          <div className="space-y-3">
            <div className="flex items-center space-x-3 text-xs font-technical-mono uppercase tracking-widest text-[#FF6B35]">
              <span>// 05</span>
              <span className="w-8 h-px bg-[#FF6B35]/40" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-[#F5F2EE]">
              Technical Repertoire
            </h2>
            <p className="text-[#99969A] text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
              Active engineering competencies across programming languages, backend frameworks, data layers, and applied AI automation.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#99969A]" />
            <input
              type="text"
              placeholder="Search technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#151518] border border-white/10 focus:border-[#FF6B35] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#F5F2EE] placeholder-[#99969A] font-technical-mono transition-colors outline-none"
            />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-technical-mono font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#FF6B35] text-[#0B0B0D] font-bold shadow-md shadow-[#FF6B35]/20'
                  : 'bg-[#151518] text-[#99969A] hover:text-[#F5F2EE] border border-white/5'
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
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="h-full"
            >
              <Card3DTilt maxTilt={6} className="obsidian-panel obsidian-panel-interactive rounded-2xl p-6 border border-white/5 flex flex-col justify-between group h-full preserve-3d">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center space-x-3 pb-3 border-b border-white/5 translate-z-10">
                    <div className="w-9 h-9 rounded-xl bg-[#151518] border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {categoryIcons[cat.category] || <Code2 className="w-5 h-5 text-[#FF6B35]" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-heading text-[#F5F2EE] group-hover:text-[#FFB36B] transition-colors">
                        {cat.category}
                      </h3>
                      <p className="text-[11px] font-technical-mono text-[#99969A]">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Skill Chips */}
                  <div className="flex flex-wrap gap-2 pt-1 translate-z-20">
                    {(searchTerm.trim() ? cat.matchingSkills : cat.skills).map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-lg bg-[#151518] border border-white/5 text-xs font-technical-mono text-[#F5F2EE] group-hover:border-white/10 hover:border-[#FF6B35]/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Count Footer */}
                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-technical-mono text-[#99969A] translate-z-10">
                  <span>{cat.skills.length} competencies</span>
                  <span className="text-[#FF6B35] font-semibold">Active Practice</span>
                </div>
              </Card3DTilt>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
