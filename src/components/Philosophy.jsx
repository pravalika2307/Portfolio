import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 px-6 relative bg-gradient-to-b from-[#030014] to-[#080715]">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-[350px] h-[350px] bg-blue-650/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20">
          Philosophy
        </div>
        
        <h2 className="text-3xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-tight">
          How I Build Software
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="glass-panel p-8 md:p-12 rounded-3xl border border-gray-900/60 max-w-3xl mx-auto relative overflow-hidden group hover-border-glow hover:border-blue-500/15 transition-all duration-300"
        >
          {/* Microglow */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/5 group-hover:bg-blue-500/10 blur-xl transition-all duration-300 rounded-full" />
          
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gray-900/80 border border-gray-850 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
              <Lightbulb className="w-6 h-6 text-yellow-400" />
            </div>
          </div>

          <p className="text-sm md:text-base text-gray-300 leading-relaxed font-normal italic max-w-2xl mx-auto">
            "I enjoy building software that is simple, reliable, and user-focused. Every project is an opportunity to improve my engineering skills, learn new technologies, and create practical solutions with measurable impact."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
