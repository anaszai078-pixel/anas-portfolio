import { motion } from 'motion/react';
import { GraduationCap, Code2, Briefcase, CheckCircle2, Sparkles, MapPin, Compass } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_CARDS } from '../data/portfolioData';

export default function About() {
  const cardIcons = [GraduationCap, Code2, Briefcase];

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800/40">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[110px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono-code mb-2">
            <span>Background &amp; Profile</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-3" />
        </div>

        {/* Narrative & Profile Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-16 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-8 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
              I am a <strong className="text-white font-semibold">Software Engineering diploma holder</strong> with a strong interest in frontend and full-stack web development. I have learned modern web technologies including <span className="text-cyan-300 font-medium">HTML</span>, <span className="text-cyan-300 font-medium">CSS</span>, <span className="text-amber-300 font-medium">JavaScript</span>, <span className="text-blue-400 font-medium">React.js</span>, <span className="text-emerald-400 font-medium">Node.js</span>, <span className="text-slate-200 font-medium">Express.js</span> and <span className="text-teal-300 font-medium">MongoDB</span>.
            </p>

            <p className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm">
              I enjoy creating responsive user interfaces, understanding application logic and continuously improving my development skills. I am looking for an opportunity in a professional software house where I can gain practical experience and grow as a developer.
            </p>
          </div>

          {/* Quick Snapshot Card */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-950/90 border border-slate-800/80 shadow-xl space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono-code flex items-center gap-2 text-blue-400">
              <Compass className="w-4 h-4" />
              Quick Snapshot
            </h3>

            <div className="space-y-3.5 text-xs sm:text-sm">
              <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-slate-800/80">
                <span className="text-slate-400">Education</span>
                <span className="text-white font-medium text-right">ADSE (Aptech Learning)</span>
              </div>

              <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-slate-800/80">
                <span className="text-slate-400">Current Base</span>
                <span className="text-white font-medium text-right">Hyderabad, Sindh</span>
              </div>

              <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-slate-800/80">
                <span className="text-slate-400">Target Market</span>
                <span className="text-emerald-400 font-medium text-right">Karachi, Pakistan</span>
              </div>

              <div className="flex items-start justify-between gap-4 pb-2.5 border-b border-slate-800/80">
                <span className="text-slate-400">Role Target</span>
                <span className="text-blue-300 font-medium text-right">React &amp; MERN Intern</span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <span className="text-slate-400">Relocation</span>
                <span className="text-emerald-400 font-medium text-right">100% Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Three Specific Information Cards required by prompt */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ABOUT_CARDS.map((card, idx) => {
            const Icon = cardIcons[idx] || Sparkles;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-7 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-blue-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-blue-950/40"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:text-blue-300 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono-code text-slate-400 tracking-wider">
                    0{idx + 1}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs text-blue-400 font-medium block">
                    {card.subtitle}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
