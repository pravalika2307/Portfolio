import { motion } from 'framer-motion';
import { Terminal, Brain, Database, Code } from 'lucide-react';

export default function About() {
  const cardData = [
    {
      icon: <Terminal className="w-5 h-5 text-blue-400" />,
      title: 'Backend Engineering',
      description: 'Designing highly optimized REST APIs and microservices using FastAPI, Flask, and robust relational/non-relational schemas.'
    },
    {
      icon: <Brain className="w-5 h-5 text-indigo-400" />,
      title: 'Artificial Intelligence',
      description: 'Developing intelligent applications integrating Generative AI, Large Language Models (LLMs), Prompt Engineering, and BreethAI.'
    },
    {
      icon: <Database className="w-5 h-5 text-teal-400" />,
      title: 'Advanced Storage',
      description: 'Caching, message brokering, and scaling databases using Valkey, SQLite, and optimized queries.'
    },
    {
      icon: <Code className="w-5 h-5 text-purple-400" />,
      title: 'Problem Solving',
      description: 'Strengthening system logic with solid algorithms (BFS, Dijkstra, A*) and clean C++, Java, and Python fundamentals.'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative bg-gradient-to-b from-[#030014] to-[#080715]">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[350px] h-[350px] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Summary / Left */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20">
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold font-display text-white">
              Architecting intelligent backends & smart applications.
            </h2>
            <div className="text-gray-400 space-y-4 leading-relaxed font-normal">
              <p>
                I enjoy designing software that solves practical problems through clean engineering, intelligent automation, and scalable backend systems. As an MCA candidate graduating in 2026, my academic foundation is paired with practical experience building and optimizing backend servers, relational databases, and predictive machine learning architectures.
              </p>
              <p>
                Rather than chasing tools, I focus on system reliability, modular code, and creating real-world impact. Whether configuring fast memory caching layers or training classification algorithms, I strive to design logic that is elegant, clean, and performant.
              </p>
            </div>
          </motion.div>

          {/* Core Focus Grid / Right */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cardData.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
                className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col space-y-3 relative overflow-hidden group"
              >
                {/* Microglow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/5 group-hover:bg-blue-500/10 blur-xl transition-all duration-300 rounded-full" />
                
                <div className="w-10 h-10 rounded-xl bg-gray-900/60 border border-gray-800 flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold font-display text-white group-hover:text-blue-400 transition-colors duration-200">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed font-normal">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
