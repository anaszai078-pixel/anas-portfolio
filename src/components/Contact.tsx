import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send, Copy, Check, ExternalLink, Github, Linkedin, MessageSquare, Briefcase, Sparkles, Building2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('React/MERN Internship Opportunity in Karachi');
  const [message, setMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailSubject = encodeURIComponent(subject || 'Job Opportunity / Internship Inquiry');
    const emailBody = encodeURIComponent(
      `Hello Muhammad Anas,\n\nName: ${name || 'Recruiter / Hiring Team'}\nContact Email: ${email || 'N/A'}\n\nMessage:\n${message || 'We would like to connect with you regarding a software engineering opportunity in Karachi.'}\n\nBest regards,\n${name || 'Hiring Manager'}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${emailSubject}&body=${emailBody}`;
  };

  const handleCopyFormattedMessage = () => {
    const formatted = `To: ${PERSONAL_INFO.email}\nSubject: ${subject}\n\nFrom: ${name || 'Recruiter'} (${email || 'Not specified'})\n\nMessage:\n${message}`;
    navigator.clipboard.writeText(formatted);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2200);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800/40">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-purple-600/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono-code mb-2">
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Let's Connect
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3" />
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            I am actively looking for internship and junior opportunities in Karachi. Feel free to reach out directly via email or the message form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Primary Email Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md shadow-xl space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider">
                  Direct Email
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Active Inquiries
                </span>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1 overflow-hidden">
                  <div className="text-xs text-slate-400">Email Address</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-base sm:text-lg font-semibold text-white hover:text-blue-400 transition-colors block truncate"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs transition-colors shadow-sm shadow-blue-600/30 whitespace-nowrap"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email Me</span>
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? "Copied" : "Copy"}</span>
                </button>
              </div>
            </div>

            {/* Location Cards */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Current Base</div>
                  <div className="text-sm font-semibold text-white">{PERSONAL_INFO.location}</div>
                  <div className="text-xs text-slate-400 mt-0.5">Hyderabad, Sindh, Pakistan</div>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Preferred Job Location</div>
                  <div className="text-sm font-semibold text-emerald-400">{PERSONAL_INFO.preferredLocation}</div>
                  <div className="text-xs text-slate-400 mt-0.5">Willing to relocate immediately</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800/90 backdrop-blur-md space-y-3">
              <span className="text-xs font-mono-code text-slate-400 uppercase tracking-wider block">
                Professional Profiles
              </span>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-slate-500 text-slate-300 hover:text-white transition-all text-xs font-medium group"
                >
                  <Github className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 ml-auto group-hover:text-slate-300" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 border border-slate-700/60 hover:border-blue-500/60 text-slate-300 hover:text-white transition-all text-xs font-medium group"
                >
                  <Linkedin className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 ml-auto group-hover:text-slate-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Mailto Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl shadow-2xl space-y-6">
              <div>
                <h3 className="text-xl font-display font-bold text-white tracking-tight">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Submitting prepares a pre-filled email directly addressed to <span className="text-blue-400 font-mono-code">anaszai078@gmail.com</span> using your default mail app.
                </p>
              </div>

              <form onSubmit={handleMailtoSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Systems Ltd / Tech HR"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-slate-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. hr@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-slate-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Subject / Position
                  </label>
                  <input
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. React.js Developer Intern - Karachi"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-slate-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-300">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your note, job opportunity description, or interview invitation..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-slate-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via Email Client (mailto)</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyFormattedMessage}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 transition-colors"
                    title="Copy message details"
                  >
                    {copiedMessage ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedMessage ? "Copied" : "Copy Message"}</span>
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-400 flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Direct mailto contact ensures messages reach Muhammad Anas directly without server drop-off.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
