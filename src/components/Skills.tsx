import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  FileCode2,
  LayoutTemplate,
  Palette,
  Server,
  Layers,
  Network,
  Database,
  Boxes,
  Laptop,
  GitBranch,
  GitPullRequest,
  Check,
  Sparkles
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillItem } from '../types';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'tools'>('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Developer Tools' },
  ];

  const filteredSkills = activeCategory === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'FileCode2': return FileCode2;
      case 'LayoutTemplate': return LayoutTemplate;
      case 'Palette': return Palette;
      case 'Server': return Server;
      case 'Layers': return Layers;
      case 'Network': return Network;
      case 'Database': return Database;
      case 'Boxes': return Boxes;
      case 'Laptop': return Laptop;
      case 'GitBranch': return GitBranch;
      case 'GitPullRequest': return GitPullRequest;
      default: return Code2;
    }
  };

  return (
    <section id="skills" className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800/40">
      {/* Ambient gradient lights */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-purple-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 font-mono-code mb-2">
              <span>Core Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
              Technical Skills
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Modern frontend and full-stack web technologies learned through coursework and practical hands-on building.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Zero-pill compliant segmented control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 backdrop-blur-md self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'text-white bg-blue-600 shadow-sm shadow-blue-500/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const IconComponent = getIcon(skill.iconName);
              return (
                <motion.div
                  layout
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                  className="group relative p-6 rounded-2xl bg-slate-900/60 hover:bg-slate-900/95 border border-slate-800/80 hover:border-blue-500/40 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-blue-950/40"
                >
                  {/* Subtle hover gradient wash */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:text-white group-hover:bg-blue-600 transition-all duration-300 shadow-sm">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-mono-code text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded border border-slate-700/50">
                      {skill.tag}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider font-mono-code">
                        {skill.category}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Stack Overview Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Full-Stack JavaScript Focus</h4>
              <p className="text-xs text-slate-400">Trained on end-to-end client-server architecture with React &amp; Node ecosystem.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 font-mono-code">
            <span className="text-blue-400">React.js</span>
            <span className="text-slate-600">·</span>
            <span className="text-emerald-400">Node.js</span>
            <span className="text-slate-600">·</span>
            <span className="text-slate-300">Express.js</span>
            <span className="text-slate-600">·</span>
            <span className="text-teal-400">MongoDB</span>
            <span className="text-slate-600">·</span>
            <span className="text-purple-400">Git / GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}
