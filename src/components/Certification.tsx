import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, ShieldCheck, Sparkles, BookOpen, Layers, ExternalLink } from 'lucide-react';
import { CERTIFICATION_DATA } from '../data/portfolioData';

export default function Certification() {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyCredential = () => {
    if (CERTIFICATION_DATA.credentialId) {
      navigator.clipboard.writeText(CERTIFICATION_DATA.credentialId);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  return (
    <section className="relative py-20 overflow-hidden border-t border-slate-800/40">
      {/* Ambient gradient */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-purple-600/10 blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono-code mb-2">
            <span>Specialized Training</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Professional Certification
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Certified technical coursework in modern full-stack JavaScript architecture.
          </p>
        </div>

        {/* Certificate Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl p-1 bg-gradient-to-r from-blue-500/30 via-indigo-500/20 to-purple-500/30 shadow-2xl shadow-blue-950/30"
        >
          <div className="relative rounded-[22px] bg-slate-900/95 border border-slate-800 p-8 sm:p-10 backdrop-blur-xl overflow-hidden">
            {/* Background seal watermarks */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 blur-xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Certificate Badge & Header */}
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-semibold">
                    <Award className="w-3.5 h-3.5" />
                    <span>Certified Developer</span>
                  </div>

                  <span className="text-xs text-slate-400 font-mono-code">
                    {CERTIFICATION_DATA.issueDate}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                    {CERTIFICATION_DATA.title}
                  </h3>
                  <p className="text-base font-medium text-blue-400 mt-1">
                    Issued by: {CERTIFICATION_DATA.institution}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                  {CERTIFICATION_DATA.description}
                </p>

                {/* Modules Covered */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono-code block">
                    Curriculum Competencies Verified:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {CERTIFICATION_DATA.modules.map((mod, idx) => (
                      <div
                        key={idx}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Verification Crest */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 text-center space-y-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-[2px] shadow-lg shadow-blue-600/30">
                  <div className="w-full h-full rounded-2xl bg-slate-950 flex items-center justify-center text-blue-400">
                    <ShieldCheck className="w-10 h-10 text-blue-400" />
                  </div>
                </div>

                <div>
                  <div className="text-sm font-bold text-white tracking-tight">
                    APTECH LEARNING
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5 font-mono-code">
                    MERN Stack Specialization
                  </div>
                </div>

                <div className="w-full pt-3 border-t border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Credential</span>
                    <span className="font-mono-code text-blue-400 font-medium">{CERTIFICATION_DATA.credentialId}</span>
                  </div>

                  <button
                    onClick={handleCopyCredential}
                    className="w-full py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-colors"
                  >
                    {isCopied ? "Credential ID Copied!" : "Copy Credential ID"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
