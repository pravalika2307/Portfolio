import { useState } from 'react';
import { Mail, Copy, Check, Send, Download, ArrowUpRight, MapPin, Loader2, AlertCircle, RotateCcw } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import Card3DTilt from './Card3DTilt';
import MagneticButton from './MagneticButton';
import { CONFIG } from '../config';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONFIG.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      errs.name = 'Please provide your name.';
    } else if (trimmedName.length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!trimmedEmail) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      errs.email = 'Please enter a valid email address (e.g. name@domain.com).';
    }

    if (!trimmedMessage) {
      errs.message = 'Please include a message.';
    } else if (trimmedMessage.length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent duplicate submissions while in-flight
    if (!validate()) return;

    setIsSubmitting(true);
    setErrorMessage('');
    setSubmitStatus('idle');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || CONFIG.web3formsAccessKey;

    if (!accessKey) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      setErrorMessage(
        'Web3Forms access key is not yet configured. Please set VITE_WEB3FORMS_ACCESS_KEY in your environment, or reach out directly to pravalikareddy722@gmail.com.'
      );
      return;
    }

    try {
      const payload = {
        access_key: accessKey,
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim() || `Portfolio Transmission from ${formData.name.trim()}`,
        message: formData.message.trim(),
        from_name: 'Pravalika Portfolio Contact',
        botcheck: false
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setErrors({});
      } else {
        setSubmitStatus('error');
        setErrorMessage(
          result.message || 'Transmission could not be dispatched. Please try again or email directly.'
        );
      }
    } catch {
      setSubmitStatus('error');
      setErrorMessage(
        'Network error: Unable to connect to transmission gateway. Please check your internet connection or email directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-[#0B0B0D]">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#FF6B35]/4 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-xs font-technical-mono uppercase tracking-widest text-[#FF6B35]">
            <span>// 07</span>
            <span className="w-8 h-px bg-[#FF6B35]/40" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-[#F5F2EE]">
            Initiate Conversation
          </h2>
          <p className="text-[#99969A] text-sm sm:text-base max-w-2xl font-normal leading-relaxed">
            Available for software engineering roles, full-stack systems development, and applied AI initiatives. Reach out directly or send a message below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Transmission & Links */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card with Quick Copy */}
            <Card3DTilt maxTilt={5} className="obsidian-panel rounded-2xl p-6 border border-white/5 space-y-4 preserve-3d">
              <div className="flex items-center justify-between translate-z-10">
                <div className="flex items-center space-x-2 text-xs font-technical-mono text-[#FF6B35]">
                  <Mail className="w-4 h-4" />
                  <span>Direct Transmission</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center space-x-1 px-2.5 py-1 rounded-md bg-[#151518] border border-white/5 text-[11px] font-technical-mono text-[#99969A] hover:text-[#F5F2EE] hover:border-white/10 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#FF6B35]" />
                      <span className="text-[#FF6B35]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#99969A]" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="translate-z-20">
                <a
                  href={`mailto:${CONFIG.email}`}
                  className="text-base sm:text-lg font-technical-mono font-bold text-[#F5F2EE] hover:text-[#FFB36B] transition-colors break-all"
                >
                  {CONFIG.email}
                </a>
                <p className="text-xs text-[#99969A] mt-1 font-sans">
                  Fastest channel for direct inquiries and technical interview scheduling.
                </p>
              </div>
            </Card3DTilt>

            {/* Social & Professional Ledger */}
            <div className="grid grid-cols-2 gap-4 font-technical-mono">
              <Card3DTilt maxTilt={7} className="h-full">
                <a
                  href={CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="obsidian-panel obsidian-panel-interactive rounded-2xl p-5 border border-white/5 flex flex-col justify-between group h-full preserve-3d block"
                >
                  <div className="flex items-center justify-between translate-z-10">
                    <GithubIcon className="w-5 h-5 text-[#99969A] group-hover:text-[#F5F2EE] transition-colors" />
                    <ArrowUpRight className="w-4 h-4 text-[#99969A] group-hover:text-[#FF6B35] transition-colors" />
                  </div>
                  <div className="pt-4 translate-z-20">
                    <span className="text-xs text-[#99969A]">GitHub</span>
                    <div className="text-sm font-bold text-[#F5F2EE] mt-0.5 truncate">@pravalika2307</div>
                  </div>
                </a>
              </Card3DTilt>

              <Card3DTilt maxTilt={7} className="h-full">
                <a
                  href={CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="obsidian-panel obsidian-panel-interactive rounded-2xl p-5 border border-white/5 flex flex-col justify-between group h-full preserve-3d block"
                >
                  <div className="flex items-center justify-between translate-z-10">
                    <LinkedinIcon className="w-5 h-5 text-[#FFB36B]" />
                    <ArrowUpRight className="w-4 h-4 text-[#99969A] group-hover:text-[#FF6B35] transition-colors" />
                  </div>
                  <div className="pt-4 translate-z-20">
                    <span className="text-xs text-[#99969A]">LinkedIn</span>
                    <div className="text-sm font-bold text-[#F5F2EE] mt-0.5 truncate">Pravalika Palle</div>
                  </div>
                </a>
              </Card3DTilt>
            </div>

            {/* Location & Resume Box */}
            <Card3DTilt maxTilt={4} className="obsidian-panel rounded-2xl p-6 border border-white/5 space-y-4 font-technical-mono preserve-3d">
              <div className="flex items-center space-x-2 text-xs text-[#99969A] translate-z-10">
                <MapPin className="w-4 h-4 text-[#FF6B35]" />
                <span>Base Location: Hyderabad, India</span>
              </div>

              <div className="flex items-center gap-3 pt-1 translate-z-20">
                <MagneticButton strength={0.25} className="flex-1">
                  <a
                    href={CONFIG.resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-[#151518] border border-white/5 text-xs font-semibold text-[#F5F2EE] hover:text-white hover:border-[#FF6B35]/50 transition-colors"
                  >
                    <span>View Resume</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF6B35]" />
                  </a>
                </MagneticButton>

                <MagneticButton strength={0.25} className="flex-1">
                  <a
                    href={CONFIG.resumePath}
                    download={CONFIG.resumeFileName}
                    className="w-full flex items-center justify-center space-x-1.5 px-4 py-2.5 rounded-xl bg-[#FF6B35] text-[#0B0B0D] hover:bg-[#FFB36B] text-xs font-bold transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download CV</span>
                  </a>
                </MagneticButton>
              </div>
            </Card3DTilt>

          </div>

          {/* Right Column: Transmission Form with Web3Forms Integration */}
          <div className="lg:col-span-7">
            <Card3DTilt maxTilt={3} className="obsidian-panel rounded-3xl p-6 sm:p-8 border border-white/5 shadow-xl relative preserve-3d">
              <h3 className="text-xl font-bold font-heading text-[#F5F2EE] mb-1 translate-z-20">
                Dispatch Message
              </h3>
              <p className="text-xs font-technical-mono text-[#99969A] mb-6 translate-z-10">
                Direct transmission to {CONFIG.email} via Web3Forms
              </p>

              {/* Success Message Banner */}
              {submitStatus === 'success' ? (
                <div className="p-6 sm:p-8 rounded-2xl bg-[#FF6B35]/10 border border-[#FF6B35]/30 text-center space-y-4 translate-z-20">
                  <div className="w-12 h-12 rounded-full bg-[#FF6B35]/20 text-[#FF6B35] flex items-center justify-center mx-auto shadow-lg shadow-[#FF6B35]/20">
                    <Check className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="text-lg font-bold text-[#F5F2EE] font-heading">
                      Transmission Dispatched Successfully
                    </h4>
                    <p className="text-xs sm:text-sm text-[#99969A] max-w-md mx-auto font-sans leading-relaxed">
                      Thank you for reaching out! Your message has been routed to{' '}
                      <span className="text-[#FFB36B] font-semibold">{CONFIG.email}</span>. I will review it and reply shortly.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitStatus('idle')}
                      className="px-4 py-2 rounded-xl bg-[#1C1C20] hover:bg-[#FF6B35]/15 border border-white/10 hover:border-[#FF6B35]/40 text-xs font-technical-mono text-[#F5F2EE] transition-colors inline-flex items-center space-x-1.5 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5 text-[#FF6B35]" />
                      <span>Dispatch Another Transmission</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4 font-technical-mono translate-z-10">
                  {/* Honeypot Spam Filter (Hidden from Users) */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex="-1"
                    autoComplete="off"
                    className="hidden"
                    style={{ display: 'none' }}
                  />

                  {/* Error Notification Banner */}
                  {submitStatus === 'error' && (
                    <div className="p-4 rounded-xl bg-[#FF6B35]/15 border border-[#FF6B35]/40 text-xs space-y-2">
                      <div className="flex items-start space-x-2 text-[#FF6B35] font-bold">
                        <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                        <span>Transmission Gateway Notice</span>
                      </div>
                      <p className="text-[#F5F2EE]/90 leading-relaxed font-sans text-xs">
                        {errorMessage}
                      </p>
                      <div className="pt-1">
                        <a
                          href={`mailto:${CONFIG.email}?subject=${encodeURIComponent(
                            formData.subject || 'Portfolio Inquiry'
                          )}&body=${encodeURIComponent(formData.message || '')}`}
                          className="text-[#FFB36B] hover:text-[#FF6B35] underline font-semibold flex items-center space-x-1 text-xs"
                        >
                          <span>Click here to send directly via your email client &rarr;</span>
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="contact-name" className="text-xs text-[#99969A] block">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Alex Morgan"
                        aria-invalid={Boolean(errors.name)}
                        className={`w-full bg-[#151518] border rounded-xl px-4 py-2.5 text-xs text-[#F5F2EE] placeholder-[#99969A]/50 outline-none transition-colors disabled:opacity-50 ${
                          errors.name ? 'border-[#FF6B35]' : 'border-white/10 focus:border-[#FF6B35]'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-[#FF6B35] block mt-0.5">{errors.name}</span>
                      )}
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="text-xs text-[#99969A] block">
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="alex@company.com"
                        aria-invalid={Boolean(errors.email)}
                        className={`w-full bg-[#151518] border rounded-xl px-4 py-2.5 text-xs text-[#F5F2EE] placeholder-[#99969A]/50 outline-none transition-colors disabled:opacity-50 ${
                          errors.email ? 'border-[#FF6B35]' : 'border-white/10 focus:border-[#FF6B35]'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-[#FF6B35] block mt-0.5">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div className="space-y-1">
                    <label htmlFor="contact-subject" className="text-xs text-[#99969A] block">
                      Subject <span className="text-[#99969A]/60">(Optional)</span>
                    </label>
                    <input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      disabled={isSubmitting}
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder="Software Engineer Role / Project"
                      className="w-full bg-[#151518] border border-white/10 focus:border-[#FF6B35] rounded-xl px-4 py-2.5 text-xs text-[#F5F2EE] placeholder-[#99969A]/50 outline-none transition-colors disabled:opacity-50"
                    />
                  </div>

                  {/* Message Field */}
                  <div className="space-y-1">
                    <label htmlFor="contact-message" className="text-xs text-[#99969A] block">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      disabled={isSubmitting}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Hi Pravalika, I came across your portfolio and wanted to discuss..."
                      aria-invalid={Boolean(errors.message)}
                      className={`w-full bg-[#151518] border rounded-xl px-4 py-2.5 text-xs text-[#F5F2EE] placeholder-[#99969A]/50 outline-none transition-colors resize-none font-sans disabled:opacity-50 ${
                        errors.message ? 'border-[#FF6B35]' : 'border-white/10 focus:border-[#FF6B35]'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-[#FF6B35] block mt-0.5">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <MagneticButton strength={0.15} className="w-full">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#FF6B35] hover:bg-[#FFB36B] text-[#0B0B0D] font-bold text-xs tracking-wider uppercase transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer shadow-md shadow-[#FF6B35]/20 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-[#0B0B0D]" />
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Transmission</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </MagneticButton>
                </form>
              )}
            </Card3DTilt>
          </div>

        </div>

      </div>
    </section>
  );
}
