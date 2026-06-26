import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Mail, FileText, Download, ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { CONFIG } from '../config';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };



  // 4 premium contact cards configuration
  const contactCards = [
    {
      title: 'Email',
      icon: <Mail className="w-5 h-5 text-blue-450" />,
      detail: 'pravalikareddy722@gmail.com',
      href: 'mailto:pravalikareddy722@gmail.com',
      actionText: 'Send message',
      isExternal: false
    },
    {
      title: 'GitHub',
      icon: <GithubIcon className="w-5 h-5 text-gray-400" />,
      detail: 'https://github.com/pravalika2307',
      href: CONFIG.github,
      actionText: 'View repos',
      isExternal: true
    },
    {
      title: 'LinkedIn',
      icon: <LinkedinIcon className="w-5 h-5 text-blue-450" />,
      detail: 'https://www.linkedin.com/in/pravalikapalle23/',
      href: CONFIG.linkedin,
      actionText: 'Let\'s connect',
      isExternal: true
    }
  ];

  return (
    <section id="contact" className="py-32 px-6 relative bg-gradient-to-b from-[#080715] to-[#030014]">
      {/* Background glow spots */}
      <div className="absolute top-1/4 right-10 w-[350px] h-[350px] bg-blue-600/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-1/3 w-[300px] h-[300px] bg-indigo-650/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 border border-blue-500/20">
            Connect
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight leading-none">
            Get In Touch
          </h2>
          <p className="text-gray-450 text-sm md:text-base max-w-md mx-auto font-normal leading-relaxed">
            Open to discussing internships, software engineering roles, and technical collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Grid of 4 Premium Contact Cards / Left */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((card) => (
                <motion.a
                  key={card.title}
                  href={card.href}
                  target={card.isExternal ? '_blank' : undefined}
                  rel={card.isExternal ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="glass-panel p-5 rounded-2xl flex flex-col justify-between h-36 border border-gray-900/60 hover:border-blue-500/20 transition-all duration-300 relative overflow-hidden group shadow-sm"
                >
                  <div className="space-y-3">
                    <div className="w-9 h-9 rounded-xl bg-gray-950 border border-gray-850 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">{card.title}</h4>
                      <p className="text-xs text-gray-300 font-medium truncate mt-0.5 max-w-[150px]">{card.detail}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1 text-[10px] font-bold uppercase tracking-wider text-blue-400 group-hover:text-blue-300 pt-2 transition-colors">
                    <span>{card.actionText}</span>
                    {card.isExternal ? <ExternalLink className="w-3 h-3" /> : <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />}
                  </div>
                </motion.a>
              ))}

              {/* Resume Card (Custom with 2 buttons) */}
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                className="glass-panel p-5 rounded-2xl flex flex-col justify-between h-36 border border-gray-900/60 hover:border-blue-500/20 transition-all duration-300 relative overflow-hidden group shadow-sm"
              >
                <div className="space-y-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gray-950 border border-gray-850 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <FileText className="w-5 h-5 text-blue-450" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">Resume</h4>
                    <p className="text-xs text-gray-300 font-medium mt-0.5">Pravalika_Palle_Resume.pdf</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-blue-400 pt-1.5 z-10">
                  <a href="/Pravalika_Palle_Resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 flex items-center space-x-0.5">
                    <span>View</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                  <a href="/Pravalika_Palle_Resume.pdf" download="Pravalika_Palle_Resume.pdf" className="hover:text-blue-300 flex items-center space-x-0.5 cursor-pointer">
                    <span>Download</span>
                    <Download className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Sub-text spacing filler */}
            <div className="hidden lg:block p-6 bg-gray-950/20 border border-gray-900/50 rounded-2xl text-[11px] text-gray-500 leading-relaxed font-normal">
              <span>Recruiter note: The resume actions open or download the official PDF resume directly.</span>
            </div>
          </div>

          {/* Form / Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 glass-panel p-8 md:p-10 rounded-3xl border border-gray-800/80 flex flex-col justify-center relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center space-y-4 py-8 flex flex-col items-center justify-center"
                >
                  <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.08)]">
                    <CheckCircle className="w-7 h-7 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-display">Message Sent</h3>
                  <p className="text-xs text-gray-400 max-w-sm leading-relaxed font-normal">
                    Thank you. I have received your message and will reach out to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-gray-350">Name</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-gray-950/60 border ${errors.name ? 'border-red-500/50' : 'border-gray-900/60 focus:border-blue-500/50'
                          } text-sm text-white placeholder-gray-650 focus:outline-none focus:ring-1 focus:ring-blue-500/35 transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-[10px] text-red-500 font-semibold">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-gray-355">Email</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl bg-gray-955/60 border ${errors.email ? 'border-red-500/50' : 'border-gray-900/60 focus:border-blue-500/50'
                          } text-sm text-white placeholder-gray-655 focus:outline-none focus:ring-1 focus:ring-blue-500/35 transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-[10px] text-red-500 font-semibold">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-bold text-gray-350">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-gray-950/60 border ${errors.subject ? 'border-red-500/50' : 'border-gray-900/60 focus:border-blue-500/50'
                        } text-sm text-white placeholder-gray-650 focus:outline-none focus:ring-1 focus:ring-blue-500/35 transition-all`}
                      placeholder="Software Engineering Internship Opportunity"
                    />
                    {errors.subject && <span className="text-[10px] text-red-500 font-semibold">{errors.subject}</span>}
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-gray-350">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-gray-950/60 border ${errors.message ? 'border-red-500/50' : 'border-gray-900/60 focus:border-blue-500/50'
                        } text-sm text-white placeholder-gray-650 focus:outline-none focus:ring-1 focus:ring-blue-500/35 transition-all resize-none`}
                      placeholder="Enter details..."
                    />
                    {errors.message && <span className="text-[10px] text-red-500 font-semibold">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20 disabled:bg-blue-800/85 disabled:cursor-not-allowed transition-all duration-300 scale-hover cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
