import { useState } from 'react';
import { Mail, Copy, Check, Send, Download, FileText, MapPin, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { CONFIG } from '../config';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) errs.message = 'Please include a message.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 px-6 relative bg-[#0b0f17]">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/3 w-[450px] h-[450px] bg-teal-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-xs font-mono-code text-teal-400">
            <span>[ SECTION: CONTACT & CONNECT ]</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Let's Discuss Opportunities
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Interested in software engineering roles, full-stack development, applied AI initiatives, or technical discussions. Reach out directly or send a message below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Channels & Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with One-Click Copy */}
            <div className="engineering-panel rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-xs font-mono-code text-teal-400">
                  <Mail className="w-4 h-4" />
                  <span>Direct Email</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center space-x-1 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono-code text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-teal-400" />
                      <span className="text-teal-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <a
                  href={`mailto:${CONFIG.email}`}
                  className="text-base sm:text-lg font-mono-code font-bold text-white hover:text-teal-300 transition-colors break-all"
                >
                  {CONFIG.email}
                </a>
                <p className="text-xs text-slate-400 mt-1">
                  Fastest response channel for inquiries and interview scheduling.
                </p>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="engineering-panel engineering-panel-interactive rounded-2xl p-5 border border-slate-800 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <GithubIcon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-400 transition-colors" />
                </div>
                <div className="pt-4">
                  <span className="text-xs font-mono-code text-slate-400">GitHub</span>
                  <div className="text-sm font-bold text-white mt-0.5 truncate">@pravalika2307</div>
                </div>
              </a>

              <a
                href={CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="engineering-panel engineering-panel-interactive rounded-2xl p-5 border border-slate-800 flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between">
                  <LinkedinIcon className="w-5 h-5 text-sky-400" />
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-teal-400 transition-colors" />
                </div>
                <div className="pt-4">
                  <span className="text-xs font-mono-code text-slate-400">LinkedIn</span>
                  <div className="text-sm font-bold text-white mt-0.5 truncate">Pravalika Palle</div>
                </div>
              </a>
            </div>

            {/* Location & Resume Box */}
            <div className="engineering-panel rounded-2xl p-6 border border-slate-800 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-mono-code text-slate-400">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>Base Location: Hyderabad, India</span>
              </div>

              <div className="flex items-center gap-3 pt-1">
                <a
                  href={CONFIG.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-200 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5 text-teal-400" />
                  <span>View Resume</span>
                </a>

                <a
                  href={CONFIG.resumePath}
                  download={CONFIG.resumeFileName}
                  className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-teal-500/10 border border-teal-500/30 text-xs font-semibold text-teal-300 hover:bg-teal-500/20 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="engineering-panel rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl relative">
              <h3 className="text-xl font-bold font-display text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs font-mono-code text-slate-400 mb-6">
                Direct transmission to pravalikareddy722@gmail.com
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-teal-500/10 border border-teal-500/30 text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white font-display">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you for reaching out! I will review your message and reply as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="text-xs font-mono-code text-slate-300">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 outline-none transition-colors"
                      />
                      {errors.name && <span className="text-[11px] text-rose-400 font-mono-code">{errors.name}</span>}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="text-xs font-mono-code text-slate-300">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 outline-none transition-colors"
                      />
                      {errors.email && <span className="text-[11px] text-rose-400 font-mono-code">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-subject" className="text-xs font-mono-code text-slate-300">
                      Subject
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Software Engineer Role / Project Collaboration"
                      className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="text-xs font-mono-code text-slate-300">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Pravalika, I came across your portfolio and wanted to discuss..."
                      className="w-full bg-slate-900 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 outline-none transition-colors resize-none"
                    />
                    {errors.message && <span className="text-[11px] text-rose-400 font-mono-code">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer shadow-md shadow-teal-500/20 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
