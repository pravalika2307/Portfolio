import { motion } from 'framer-motion';
import { 
  ExternalLink, Sparkles, Award, Map, BarChart3, Users, Clock, 
  Database, Target, Zap, Network, GitBranch, TrendingUp, CheckCircle2, 
  Code2, Atom, Globe, KeyRound, Brain, Server, Cpu, Layout
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { CONFIG } from '../config';

// Factual projects list
const projects = [
  {
    id: 1,
    title: 'TalentLens AI',
    badge: '🏆 Hackathon Project',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.08)]',
    description: 'Built TalentLens AI, an AI-powered talent intelligence platform that analyzes candidate profiles, performs semantic search, and generates personalized career insights.',
    icon: <Sparkles className="w-5 h-5 text-blue-455" />,
    tech: ['Python', 'FastAPI', 'React.js', 'Valkey', 'BreethAI', 'REST APIs'],
    metrics: [
      { label: '100+ Candidate Profiles', icon: <Users className="w-3.5 h-3.5 text-blue-405" /> },
      { label: 'Semantic Search', icon: <Sparkles className="w-3.5 h-3.5 text-indigo-405" /> },
      { label: 'Built in 24 Hours', icon: <Clock className="w-3.5 h-3.5 text-amber-450" /> }
    ],
    github: 'https://github.com/pravalika2307/talent-lens',
    demo: null,
    featured: true
  },
  {
    id: 2,
    title: 'HRlytics AI',
    badge: '🏆 Hackathon Project',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.08)]',
    description: 'Developed HRlytics AI, a workforce analytics platform for HR cost prediction, project tracking, and interactive business dashboards.',
    icon: <BarChart3 className="w-5 h-5 text-indigo-455" />,
    tech: ['Python', 'FastAPI', 'React.js', 'SQLite', 'SQLAlchemy', 'REST APIs'],
    metrics: [
      { label: '5,000+ Records', icon: <Database className="w-3.5 h-3.5 text-indigo-405" /> },
      { label: '85% Prediction Accuracy', icon: <Target className="w-3.5 h-3.5 text-rose-455" /> },
      { label: 'SQL Analytics', icon: <Code2 className="w-3.5 h-3.5 text-blue-405" /> }
    ],
    github: 'https://github.com/pravalika2307/HRlytics-AI',
    demo: null,
    featured: true
  },
  {
    id: 3,
    title: 'Shortest Path Visualizer',
    badge: '💻 Personal Project',
    badgeColor: 'text-teal-400 bg-teal-500/10 border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.08)]',
    description: 'Built an interactive visualization tool for BFS, Dijkstra, and A* algorithms with real-time graph exploration.',
    icon: <Map className="w-5 h-5 text-teal-455" />,
    tech: ['Python', 'Streamlit', 'SQLite', 'BFS', 'Dijkstra', 'A*'],
    metrics: [
      { label: 'BFS • Dijkstra • A*', icon: <Network className="w-3.5 h-3.5 text-teal-405" /> },
      { label: '50+ Nodes', icon: <GitBranch className="w-3.5 h-3.5 text-blue-405" /> },
      { label: 'Interactive Visualization', icon: <Sparkles className="w-3.5 h-3.5 text-indigo-405" /> }
    ],
    github: 'https://github.com/pravalika2307/Shortest-Path-Visualizer',
    demo: null,
    featured: false
  },
  {
    id: 4,
    title: 'Employee Salary Prediction',
    badge: '💼 Internship Project',
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.08)]',
    description: 'Developed a machine learning application for employee salary prediction using structured workforce datasets.',
    icon: <Award className="w-5 h-5 text-purple-455" />,
    tech: ['Python', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn'],
    metrics: [
      { label: 'IBM Internship', icon: <Award className="w-3.5 h-3.5 text-purple-405" /> },
      { label: '18% Accuracy Improvement', icon: <TrendingUp className="w-3.5 h-3.5 text-purple-405" /> },
      { label: 'Python + SQL', icon: <Code2 className="w-3.5 h-3.5 text-blue-405" /> }
    ],
    github: 'https://github.com/pravalika2307/employee-salary-prediction_app',
    demo: null,
    featured: false
  }
];

// Tech stack logo dictionary
const techIcons = {
  'Python': <Code2 className="w-3 h-3 text-blue-400" />,
  'FastAPI': <Zap className="w-3 h-3 text-emerald-400" />,
  'React.js': <Atom className="w-3 h-3 text-sky-400" />,
  'Valkey': <KeyRound className="w-3 h-3 text-red-500" />,
  'BreethAI': <Brain className="w-3 h-3 text-teal-400" />,
  'REST APIs': <Globe className="w-3 h-3 text-sky-400" />,
  'SQLite': <Database className="w-3 h-3 text-indigo-400" />,
  'SQL': <Database className="w-3 h-3 text-emerald-400" />,
  'SQLAlchemy': <Server className="w-3 h-3 text-gray-400" />,
  'Pandas': <Database className="w-3 h-3 text-blue-400" />,
  'NumPy': <Cpu className="w-3 h-3 text-sky-500" />,
  'Scikit-learn': <Brain className="w-3 h-3 text-teal-400" />,
  'Streamlit': <Layout className="w-3 h-3 text-orange-400" />,
  'BFS': <Network className="w-3 h-3 text-teal-450" />,
  'Dijkstra': <Network className="w-3 h-3 text-blue-450" />,
  'A*': <Network className="w-3 h-3 text-purple-455" />
};

// Interactive visual CSS mockups instead of placeholders
function ProjectMockup({ id }) {
  if (id === 1) {
    return (
      <div className="w-full h-36 bg-gray-950/80 rounded-2xl border border-gray-850 p-4 flex flex-col font-mono text-[10px] space-y-2 select-none overflow-hidden relative group-hover:border-blue-500/20 transition-all duration-300">
        <div className="flex items-center justify-between border-b border-gray-900 pb-2 mb-1.5">
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/70" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <span className="w-2 h-2 rounded-full bg-green-500/70" />
          </div>
          <span className="text-gray-600 text-[8px]">talentlens-ai.dev/console</span>
        </div>
        <div className="text-blue-400 flex items-center space-x-1.5">
          <span className="text-gray-500">&gt;</span>
          <span>semantic_search("FastAPI backend dev")</span>
        </div>
        <div className="text-gray-400 space-y-1">
          <div className="flex justify-between items-center bg-blue-500/5 border border-blue-500/10 px-2 py-1 rounded-lg">
            <span>Palle_Resume.pdf</span>
            <span className="text-emerald-400 font-bold">98% Match</span>
          </div>
          <div className="flex justify-between items-center px-2 py-1">
            <span>Dev_B.pdf</span>
            <span className="text-gray-500">84% Match</span>
          </div>
        </div>
      </div>
    );
  }
  if (id === 2) {
    return (
      <div className="w-full h-36 bg-gray-950/80 rounded-2xl border border-gray-850 p-4 flex flex-col justify-between select-none overflow-hidden relative group-hover:border-indigo-500/20 transition-all duration-300">
        <div className="flex items-center justify-between border-b border-gray-900 pb-2">
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/70" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <span className="w-2 h-2 rounded-full bg-green-500/70" />
          </div>
          <span className="text-gray-600 text-[8px] font-mono">hrlytics.io/dashboard</span>
        </div>
        <div className="flex items-end justify-between px-2 pt-2 h-16 space-x-2">
          <div className="flex-1 flex flex-col items-center space-y-1">
            <div className="w-full bg-indigo-500/10 border border-indigo-500/20 rounded-t-md h-12 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 bg-indigo-500/40 h-8" />
            </div>
            <span className="text-[8px] text-gray-500 font-mono">Q1</span>
          </div>
          <div className="flex-1 flex flex-col items-center space-y-1">
            <div className="w-full bg-indigo-500/10 border border-indigo-500/20 rounded-t-md h-12 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 bg-indigo-500/50 h-10" />
            </div>
            <span className="text-[8px] text-gray-500 font-mono">Q2</span>
          </div>
          <div className="flex-1 flex flex-col items-center space-y-1">
            <div className="w-full bg-blue-500/10 border border-blue-500/20 rounded-t-md h-12 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 right-0 bg-blue-500/60 h-12" />
            </div>
            <span className="text-[8px] text-blue-400 font-mono">Q3</span>
          </div>
        </div>
      </div>
    );
  }
  if (id === 3) {
    return (
      <div className="w-full h-36 bg-gray-950/80 rounded-2xl border border-gray-850 p-4 flex flex-col justify-between select-none overflow-hidden relative group-hover:border-teal-500/20 transition-all duration-300">
        <div className="flex items-center justify-between border-b border-gray-900 pb-2">
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/70" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <span className="w-2 h-2 rounded-full bg-green-500/70" />
          </div>
          <span className="text-gray-600 text-[8px] font-mono">pathvisualizer.org</span>
        </div>
        <div className="grid grid-cols-6 gap-1 px-4 py-1.5 h-16 items-center">
          {Array.from({ length: 18 }).map((_, i) => {
            const isStart = i === 1;
            const isEnd = i === 16;
            const isPath = [2, 8, 14, 15].includes(i);
            const isObstacle = [3, 9, 10].includes(i);
            
            let bgClass = "bg-gray-900 border border-gray-850";
            if (isStart) bgClass = "bg-green-500/30 border border-green-500/50 shadow-[0_0_8px_rgba(34,197,94,0.3)]";
            if (isEnd) bgClass = "bg-red-500/30 border border-red-500/50 shadow-[0_0_8px_rgba(239,68,68,0.3)]";
            if (isPath) bgClass = "bg-teal-500/40 border border-teal-500/60 shadow-[0_0_8px_rgba(20,184,166,0.3)] animate-pulse";
            if (isObstacle) bgClass = "bg-gray-850 border border-gray-800";
            
            return <div key={i} className={`h-4.5 rounded-sm ${bgClass}`} />;
          })}
        </div>
      </div>
    );
  }
  if (id === 4) {
    return (
      <div className="w-full h-36 bg-gray-950/80 rounded-2xl border border-gray-850 p-4 flex flex-col justify-between font-mono text-[9px] select-none overflow-hidden relative group-hover:border-purple-500/20 transition-all duration-300">
        <div className="flex items-center justify-between border-b border-gray-900 pb-2">
          <div className="flex items-center space-x-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/70" />
            <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
            <span className="w-2 h-2 rounded-full bg-green-500/70" />
          </div>
          <span className="text-gray-600 text-[8px]">salary-predictor.py</span>
        </div>
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-gray-500 text-[8px]">
            <span>Model: RandomForest</span>
            <span>R² score: 0.88</span>
          </div>
          <div className="bg-purple-500/5 border border-purple-500/10 p-2 rounded-lg space-y-1">
            <div className="flex justify-between text-gray-300">
              <span>Experience: 5 Yrs</span>
              <span>Predict: $124,500</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Primary Tech: Python</span>
              <span className="text-purple-400 font-bold">Error: ±2.4%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="projects" className="py-32 px-6 relative bg-gradient-to-b from-[#080715] to-[#030014]">
      {/* Decorative glows */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-purple-650/4 blur-[110px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-none">
            Featured Projects
          </h2>
          <p className="text-gray-455 text-sm md:text-base max-w-xl mx-auto font-normal leading-relaxed">
            Factual engineering summaries of key applications demonstrating frontend design, backend architecture, and ML pipelines.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.025, y: -8 }}
              className="glass-panel p-8 md:p-10 rounded-3xl flex flex-col justify-between relative overflow-hidden group hover-border-glow border border-gray-900/60 transition-all duration-350"
            >
              {/* Graphic Placeholder Preview & Details */}
              <div className="space-y-6">
                {/* CSS Mockup window */}
                <ProjectMockup id={project.id} />

                {/* Title, Icon & Project Type */}
                <div className="flex items-center space-x-3.5">
                  <div className="w-11 h-11 rounded-2xl bg-gray-900/80 border border-gray-850 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                    {project.icon}
                  </div>
                  <div className="space-y-1.5 flex-1 min-w-0">
                    <h3 className="text-xl md:text-2.5xl font-extrabold font-display text-white group-hover:text-blue-400 transition-colors duration-200 leading-tight truncate">
                      {project.title}
                    </h3>
                    <div className="flex">
                      <span className={`px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase border rounded-full ${project.badgeColor} flex items-center space-x-1`}>
                        <span>{project.badge}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-400 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* GitHub stars style metrics badge */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {project.metrics.map((metric, idx) => (
                    <div 
                      key={idx} 
                      className="flex items-center space-x-1.5 bg-gray-950/60 border border-gray-850 rounded-lg px-3 py-1.5 text-xs text-gray-300 font-mono font-medium shadow-sm hover:border-gray-800 transition-colors"
                    >
                      {metric.icon}
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack & Links footer */}
              <div className="pt-6 mt-8 border-t border-gray-900 space-y-5">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-xl bg-gray-950/40 border border-gray-900 text-[10px] font-semibold text-gray-400 tracking-wide flex items-center space-x-1 hover:text-white transition-colors"
                    >
                      {techIcons[t] || <Code2 className="w-3 h-3 text-gray-500" />}
                      <span>{t}</span>
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-xs text-gray-400 hover:text-white transition-colors duration-200 font-semibold"
                  >
                    <GithubIcon className="w-4.5 h-4.5 text-gray-550 group-hover:text-white transition-colors" />
                    <span>GitHub</span>
                  </a>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 text-xs text-blue-400 hover:text-blue-300 font-bold bg-blue-500/5 px-3 py-1.5 rounded-xl border border-blue-500/10 hover:border-blue-500/25 transition-all duration-200"
                    >
                      <span>Preview</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="flex items-center space-x-1.5 text-[10px] text-gray-500 font-bold bg-gray-950/40 border border-gray-900 px-3 py-1.5 rounded-xl select-none uppercase tracking-wide">
                      <span>Live Demo Coming Soon</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
