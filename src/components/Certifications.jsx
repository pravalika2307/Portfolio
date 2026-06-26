import { motion } from 'framer-motion';
import { Award, ShieldCheck, ArrowUpRight, Calendar } from 'lucide-react';
import { CONFIG } from '../config';

const certifications = [
  {
    id: 1,
    title: 'IBM Artificial Intelligence Professional',
    issuer: 'IBM Edunet',
    date: 'July 2024',
    description: 'Comprehensive study of machine learning workflows, artificial neural networks, deep learning representations, and natural language processing architectures.',
    credentialId: 'IBM-AI-778945',
    icon: <Award className="w-5 h-5 text-blue-400" />
  },
  {
    id: 2,
    title: 'Computer Vision Certification',
    issuer: 'Infosys Springboard',
    date: 'May 2024',
    description: 'Focused training in spatial convolutions, image segmentations, feature detection, object tracking, and deep CNN integrations using OpenCV and TensorFlow.',
    credentialId: 'INF-CV-99104',
    icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />
  }
];

export default function Certifications() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 18 }
    }
  };

  return (
    <section id="certifications" className="py-32 px-6 relative bg-gradient-to-b from-[#030014] to-[#080715]">
      {/* Decorative Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-blue-650/4 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20">
            Achievements
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-none">
            Certifications
          </h2>
          <p className="text-gray-450 text-sm md:text-base max-w-md mx-auto font-normal leading-relaxed">
            Verified academic credentials and technical specializations completed from leading institutions.
          </p>
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover-border-glow border border-gray-900/60 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top border highlight line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/25 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-5">
                {/* Header Row */}
                <div className="flex items-center justify-between pb-3 border-b border-gray-900">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-10 h-10 rounded-xl bg-gray-950 border border-gray-850 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-inner">
                      {cert.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold font-display text-white group-hover:text-blue-400 transition-colors duration-200 leading-tight">
                        {cert.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 font-semibold">{cert.issuer}</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-gray-450 leading-relaxed font-normal">
                  {cert.description}
                </p>
              </div>

              {/* Footer details */}
              <div className="pt-6 mt-6 border-t border-gray-900 flex items-center justify-between text-xs font-mono font-medium">
                <div className="space-y-1.5">
                  <div className="text-gray-500 flex items-center space-x-1">
                    <span>ID:</span>
                    <span className="text-gray-300 font-semibold">{cert.credentialId}</span>
                  </div>
                  <div className="text-gray-500 flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-450" />
                    <span className="text-gray-400">{cert.date}</span>
                  </div>
                </div>

                <a
                  href={CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 font-semibold text-blue-450 hover:text-blue-300 hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform"
                >
                  <span>Verify Profile</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
