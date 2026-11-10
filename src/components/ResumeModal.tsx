import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, Copy, Check, Mail, MapPin, ExternalLink, GraduationCap, Award, Code2, Server, Database, Wrench } from 'lucide-react';
import { PERSONAL_INFO, SKILLS_DATA, EDUCATION_DATA, CERTIFICATION_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-slate-900 border border-slate-700/60 rounded-2xl shadow-2xl shadow-blue-950/50 z-10 overflow-hidden"
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90 backdrop-blur shrink-0">
              <div className="flex items-center gap-3">
                <span className="font-display font-bold text-lg text-white">Curriculum Vitae</span>
                <span className="hidden sm:inline-block text-xs text-slate-400 font-mono-code">
                  Muhammad_Anas_CV.pdf
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                  title="Print Resume"
                >
                  <Printer className="w-3.5 h-3.5" />
                  Print
                </button>

                <a
                  href="/Muhammad_Anas_CV.pdf"
                  download="Muhammad_Anas_CV.pdf"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm shadow-blue-500/30"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </a>

                <button
                  onClick={onClose}
                  className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-2"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Body (Scrollable printable sheet) */}
            <div className="overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-950/40 text-slate-200 selection:bg-blue-600/30">
              {/* Header Info */}
              <div className="border-b border-slate-800 pb-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                      {PERSONAL_INFO.name}
                    </h1>
                    <p className="text-base font-medium text-blue-400 mt-1">
                      {PERSONAL_INFO.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      Software Engineering Fresher
                    </p>
                  </div>

                  <div className="flex flex-col gap-1.5 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-400 transition-colors">
                        {PERSONAL_INFO.email}
                      </a>
                      <button
                        onClick={handleCopyEmail}
                        className="text-slate-400 hover:text-white transition-colors ml-1"
                        title="Copy email"
                      >
                        {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span>{PERSONAL_INFO.location}</span>
                    </div>
                    <div className="text-emerald-400 font-medium">
                      Seeking Roles in: {PERSONAL_INFO.preferredLocation} (Willing to Relocate)
                    </div>
                  </div>
                </div>
              </div>

              {/* Career Objective */}
              <section className="space-y-2">
                <h2 className="text-xs font-semibold tracking-wider text-slate-400 uppercase font-mono-code">
                  Career Objective
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {PERSONAL_INFO.careerObjective}
                </p>
              </section>

              {/* Technical Skills */}
              <section className="space-y-4">
                <h2 className="text-xs font-semibold tracking-wider text-slate-400 uppercase font-mono-code">
                  Technical Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-2">
                      <Code2 className="w-4 h-4" />
                      Frontend Development
                    </div>
                    <p className="text-xs text-slate-300">
                      React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive Design, State Management
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-2">
                      <Server className="w-4 h-4" />
                      Backend Development
                    </div>
                    <p className="text-xs text-slate-300">
                      Node.js, Express.js, REST APIs, JSON parsing, Server Middleware, Route Handlers
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 mb-2">
                      <Database className="w-4 h-4" />
                      Database &amp; Data Modeling
                    </div>
                    <p className="text-xs text-slate-300">
                      MongoDB, Mongoose ODM, NoSQL Schemas, Document Queries, Data Persistence
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 mb-2">
                      <Wrench className="w-4 h-4" />
                      Developer Tools &amp; Workflow
                    </div>
                    <p className="text-xs text-slate-300">
                      Git, GitHub, Visual Studio Code, Postman, Vite, NPM
                    </p>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section className="space-y-4">
                <h2 className="text-xs font-semibold tracking-wider text-slate-400 uppercase font-mono-code">
                  Education
                </h2>
                <div className="space-y-4">
                  {EDUCATION_DATA.map((item) => (
                    <div key={item.id} className="border-l-2 border-blue-500/40 pl-4 space-y-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                        <span className="text-xs text-slate-400 font-mono-code">{item.institution}</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Certification */}
              <section className="space-y-3">
                <h2 className="text-xs font-semibold tracking-wider text-slate-400 uppercase font-mono-code">
                  Professional Certification
                </h2>
                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/40 via-purple-950/20 to-slate-900 border border-blue-500/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-400" />
                      <h3 className="text-sm font-semibold text-white">{CERTIFICATION_DATA.title}</h3>
                    </div>
                    <span className="text-xs text-blue-400 font-mono-code">{CERTIFICATION_DATA.institution}</span>
                  </div>
                  <p className="text-xs text-slate-300">{CERTIFICATION_DATA.description}</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {CERTIFICATION_DATA.modules.map((m, idx) => (
                      <span key={idx} className="text-[11px] text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </section>

              {/* Relocation & Availability */}
              <section className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-2 text-emerald-400">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Immediate Availability · Willing to Relocate to Karachi</span>
                </div>
                <div className="text-slate-500">
                  Official CV of Muhammad Anas
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
