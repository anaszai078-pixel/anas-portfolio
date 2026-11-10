import { motion } from 'motion/react';
import { GraduationCap, Calendar, BookOpen, CheckCircle, Award } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800/40">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/10 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono-code mb-2">
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Formal technical foundations and academic qualifications preparing for software industry standards.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-2 sm:before:left-3.5 before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-blue-500 before:via-indigo-500 before:to-purple-500">
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Indicator */}
              <div className="absolute -left-[30px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-blue-500 flex items-center justify-center group-hover:scale-125 group-hover:border-purple-400 transition-all duration-300 shadow-md shadow-blue-500/30">
                <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:bg-purple-300 transition-colors" />
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border border-slate-800/80 hover:border-blue-500/40 backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-950/30">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                  <div>
                    <span className="text-xs font-medium text-blue-400 uppercase tracking-wider font-mono-code">
                      {item.level}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-1 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mt-1">
                      <GraduationCap className="w-4 h-4 text-purple-400" />
                      <span>{item.institution}</span>
                    </div>
                  </div>

                  <span className="self-start text-xs font-mono-code text-slate-400 bg-slate-800/80 px-3 py-1 rounded-lg border border-slate-700/60 shrink-0">
                    {item.period}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-mono-code block mb-1">
                    Key Focus Areas:
                  </span>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
