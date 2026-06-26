import { motion } from 'framer-motion';
import { 
  Code, Coffee, Database, Braces, Terminal, Zap, FlaskConical, Globe, Atom, 
  Layout, Palette, BrainCircuit, Sparkles, MessageSquareCode, KeyRound, Brain, 
  GitFork, FileCode2, Send, Cpu, Wrench
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { CONFIG } from '../config';

const skillIcons = {
  'Python': <Code className="w-4 h-4 text-blue-400" />,
  'Java': <Coffee className="w-4 h-4 text-amber-500" />,
  'SQL': <Database className="w-4 h-4 text-emerald-400" />,
  'JavaScript': <Braces className="w-4 h-4 text-yellow-400" />,
  'C++': <Terminal className="w-4 h-4 text-purple-400" />,
  'FastAPI': <Zap className="w-4 h-4 text-emerald-400" />,
  'Flask': <FlaskConical className="w-4 h-4 text-gray-400" />,
  'REST APIs': <Globe className="w-4 h-4 text-sky-450" />,
  'React.js': <Atom className="w-4 h-4 text-sky-400" />,
  'HTML': <Layout className="w-4 h-4 text-orange-400" />,
  'CSS': <Palette className="w-4 h-4 text-blue-400" />,
  'Machine Learning': <BrainCircuit className="w-4 h-4 text-purple-400" />,
  'Generative AI': <Sparkles className="w-4 h-4 text-yellow-400" />,
  'Prompt Engineering': <MessageSquareCode className="w-4 h-4 text-pink-400" />,
  'Valkey': <KeyRound className="w-4 h-4 text-red-500" />,
  'BreethAI': <Brain className="w-4 h-4 text-teal-400" />,
  'SQLite': <Database className="w-4 h-4 text-blue-400" />,
  'Git': <GitFork className="w-4 h-4 text-orange-500" />,
  'GitHub': <GithubIcon className="w-4 h-4 text-gray-400" />,
  'Linux': <Terminal className="w-4 h-4 text-gray-300" />,
  'VS Code': <FileCode2 className="w-4 h-4 text-blue-500" />,
  'Postman': <Send className="w-4 h-4 text-orange-500" />
};

const categoryIcons = {
  'Languages': <Code className="w-5 h-5 text-blue-400" />,
  'Backend': <Cpu className="w-5 h-5 text-indigo-400" />,
  'Frontend': <Layout className="w-5 h-5 text-teal-400" />,
  'AI & Machine Learning': <BrainCircuit className="w-5 h-5 text-purple-400" />,
  'Databases': <Database className="w-5 h-5 text-emerald-400" />,
  'Developer Tools': <Wrench className="w-5 h-5 text-amber-400" />
};

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 16 }
    }
  };

  return (
    <section id="skills" className="py-32 px-6 relative bg-[#030014] radial-mask">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-indigo-650/5 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20">
            Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-none">
            Technical Arsenal
          </h2>
          <p className="text-gray-455 text-sm md:text-base max-w-xl mx-auto font-normal leading-relaxed">
            Highly structured expertise categories displaying years of active focus and tools utilization.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {CONFIG.skills.map((category) => (
            <motion.div
              key={category.category}
              variants={cardVariants}
              className="glass-panel p-6.5 md:p-8 rounded-3xl flex flex-col space-y-6 relative overflow-hidden group hover-border-glow border border-gray-900/60"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3.5 border-b border-gray-900 pb-4">
                <div className="w-10 h-10 rounded-xl bg-gray-950/80 border border-gray-850 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                  {categoryIcons[category.category] || <Code className="w-5 h-5 text-blue-400" />}
                </div>
                <h3 className="text-lg font-bold font-display text-white group-hover:text-blue-400 transition-colors duration-300">
                  {category.category}
                </h3>
              </div>

              {/* Skills Sub-Cards Grid */}
              <div className="flex flex-col space-y-2.5">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.025, x: 2 }}
                    className="flex items-center justify-between p-3 rounded-xl border border-gray-900 bg-gray-950/30 hover:border-blue-500/15 hover:bg-blue-500/5 transition-all duration-300 shadow-sm"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-950/90 flex items-center justify-center border border-gray-850 shadow-inner">
                        {skillIcons[skill.name] || <Code className="w-3.5 h-3.5" />}
                      </div>
                      <span className="text-xs font-semibold text-gray-200">{skill.name}</span>
                    </div>
                    {skill.exp && (
                      <span className="text-[9px] font-mono font-bold text-blue-400 bg-blue-500/5 px-2 py-0.5 border border-blue-500/10 rounded-md">
                        {skill.exp}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Background gradient reflection */}
              <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-blue-500/5 group-hover:bg-blue-500/10 blur-xl rounded-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
