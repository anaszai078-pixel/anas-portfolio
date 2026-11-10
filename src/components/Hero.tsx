import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, FileDown, MapPin, Sparkles, Code2, Server, Database, GitBranch, Layers, Cpu, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

// Image asset generated in Phase 1
const WORKSTATION_IMAGE = '/src/assets/images/dev_workstation_glow_1794225547659.jpg';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(110);

  // Animated typing text effect
  useEffect(() => {
    const roles = PERSONAL_INFO.rolesTyping;
    const fullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing characters
        const nextText = fullText.substring(0, currentText.length + 1);
        setCurrentText(nextText);

        if (nextText === fullText) {
          // Pause at complete word
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(80 + Math.random() * 40);
        }
      } else {
        // Deleting characters
        const nextText = fullText.substring(0, currentText.length - 1);
        setCurrentText(nextText);

        if (nextText === '') {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(400);
        } else {
          setTypingSpeed(45);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      const topOffset = 80;
      const elementPosition = contactEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Name character-by-character animation
  const nameLetters = "Muhammad Anas".split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="home" className="relative min-h-[92vh] pt-28 pb-16 lg:py-36 flex items-center overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/10 to-purple-600/15 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute -top-10 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-blue-600/10 blur-[100px] pointer-events-none -z-10" />

      {/* Subtle background tech grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic & Action Hierarchy */}
          <motion.div
            variants={containerVariants}
            initial={shouldReduceMotion ? "visible" : "hidden"}
            animate="visible"
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Status Badge: OPEN TO INTERNSHIP OPPORTUNITIES */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{PERSONAL_INFO.status}</span>
              </div>
            </motion.div>

            {/* Word-by-word reveal & Character Name Animation */}
            <motion.div variants={itemVariants} className="space-y-2">
              <span className="text-lg sm:text-xl font-medium text-slate-300 block">
                Hi, I'm
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                <span className="inline-block bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  {nameLetters.map((char, index) => (
                    <motion.span
                      key={index}
                      variants={letterVariants}
                      className="inline-block"
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </motion.span>
                  ))}
                </span>
              </h1>
            </motion.div>

            {/* Professional Title & Animated Typing Text */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-display font-semibold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {PERSONAL_INFO.title}
              </h2>

              {/* Dynamic typing ticker */}
              <div className="flex items-center gap-2 text-base sm:text-lg font-mono-code text-slate-300 min-h-[32px]">
                <span className="text-blue-500 select-none">&gt;</span>
                <span className="text-slate-200 font-medium">{currentText}</span>
                <span className="w-2 h-5 bg-blue-400 inline-block animate-pulse -ml-1 align-middle" />
              </div>
            </motion.div>

            {/* Introduction paragraph */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-balance"
            >
              {PERSONAL_INFO.heroIntro}
            </motion.p>

            {/* Location display banner */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-medium py-1"
            >
              <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{PERSONAL_INFO.locationDisplay}</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="#contact"
                onClick={scrollToContact}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Contact Me</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 hover:border-blue-500/50 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-4 h-4 text-blue-400 group-hover:translate-y-0.5 transition-transform" />
                <span>Download CV</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Developer-Themed Illustration with Floating Technology Icons */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Ambient halo glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-indigo-500/20 to-purple-600/20 rounded-3xl blur-2xl -z-10" />

            {/* Main Interactive Workstation Illustration Frame */}
            <div className="relative w-full max-w-md rounded-2xl p-1 bg-gradient-to-b from-blue-500/30 via-indigo-500/10 to-purple-500/30 shadow-2xl shadow-blue-950/80">
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80">
                {/* Visual Window Header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800/80 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="font-mono-code text-[11px] text-slate-400">
                    workstation.tsx · React 19 + MERN
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-blue-400 font-mono-code">
                    <Terminal className="w-3 h-3" />
                    <span>DEV</span>
                  </div>
                </div>

                {/* Developer Workstation Image with fallback */}
                <div className="relative aspect-square w-full bg-slate-900 overflow-hidden">
                  <img
                    src={WORKSTATION_IMAGE}
                    alt="Developer code workstation with multi-monitor setup and modern glowing interface"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    onError={(e) => {
                      // Fallback in case of sandboxed image loading
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />

                  {/* Scrim overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Mini floating code snippet card inside workstation view */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 shadow-lg font-mono-code text-[11px] text-slate-300">
                    <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5">
                      <span className="text-blue-400 font-semibold">// candidate_profile.js</span>
                      <span className="text-emerald-400">ready_to_deploy</span>
                    </div>
                    <div className="text-slate-300 leading-snug">
                      <span className="text-purple-400">const</span> developer = &#123; name: <span className="text-emerald-300">"M. Anas"</span>, target: <span className="text-amber-300">"Karachi Software Houses"</span>, passion: <span className="text-cyan-300">"React &amp; MERN"</span> &#125;;
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Technology Badges around the illustration */}
              {/* React Floating Badge */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -left-4 sm:-left-6 px-3 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 shadow-xl shadow-cyan-950/40 flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white leading-none">React.js</div>
                  <div className="text-[9px] text-cyan-300/80 font-mono-code leading-none mt-0.5">Frontend</div>
                </div>
              </motion.div>

              {/* Node.js / Express Floating Badge */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [6, -6, 6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -right-2 sm:-right-4 px-3 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-emerald-500/40 shadow-xl shadow-emerald-950/40 flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-white leading-none">Node &amp; Express</div>
                  <div className="text-[9px] text-emerald-300/80 font-mono-code leading-none mt-0.5">REST APIs</div>
                </div>
              </motion.div>

              {/* MongoDB Floating Badge */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [-5, 5, -5] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-5 sm:-right-7 px-3 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-purple-500/40 shadow-xl shadow-purple-950/40 flex items-center gap-2"
              >
                <div className="w-6 h-6 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Database className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-white leading-none">MongoDB</div>
                  <div className="text-[8px] text-purple-300/80 font-mono-code leading-none mt-0.5">Mongoose</div>
                </div>
              </motion.div>

              {/* Git / GitHub Badge */}
              <motion.div
                animate={shouldReduceMotion ? {} : { y: [5, -5, 5] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute bottom-16 -left-5 sm:-left-7 px-2.5 py-1.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-orange-500/30 shadow-xl shadow-orange-950/30 flex items-center gap-1.5"
              >
                <GitBranch className="w-3.5 h-3.5 text-orange-400" />
                <span className="text-[10px] font-semibold text-slate-200">Git &amp; GitHub</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
