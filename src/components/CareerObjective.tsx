import { motion } from 'motion/react';
import { Target, MapPin, Building2, Compass, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function CareerObjective() {
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

  const highlights = [
    {
      title: "Open to Internship Opportunities",
      subtitle: "React.js & MERN Stack",
      description: "Ready to step in as a React.js Developer Intern, MERN Stack Developer Intern, or Junior Web Developer. Eager to take on tickets, learn from senior peers, and deliver clean code.",
      icon: Zap,
      accent: "from-blue-500/20 to-cyan-500/10",
      border: "border-blue-500/30",
      iconColor: "text-blue-400"
    },
    {
      title: "Interested in Karachi Software Houses",
      subtitle: "Tech Industry Hub",
      description: "Focused on joining tech teams, software export houses, and digital product agencies in Karachi, Pakistan to build scalable, high-impact web software.",
      icon: Building2,
      accent: "from-purple-500/20 to-indigo-500/10",
      border: "border-purple-500/30",
      iconColor: "text-purple-400"
    },
    {
      title: "Willing to Relocate to Karachi",
      subtitle: "From Hyderabad, Sindh",
      description: "Currently based in Hyderabad, Sindh with complete flexibility to relocate immediately to Karachi for on-site, hybrid, or full-time development positions.",
      icon: MapPin,
      accent: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/30",
      iconColor: "text-emerald-400"
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-t border-slate-800/40">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 text-left">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono-code mb-2">
            <span>Career Aspirations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Let's Grow Together
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mt-3" />
        </div>

        {/* Narrative Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl mb-12 shadow-xl">
          <div className="max-w-4xl space-y-4">
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-medium">
              "{PERSONAL_INFO.careerObjective}"
            </p>
            <p className="text-sm text-slate-400 leading-relaxed">
              As a motivated fresher with a formal Software Engineering diploma, I am eager to contribute fresh energy, a rigorous work ethic, and a continuous appetite to master modern web practices under experienced engineering mentorship.
            </p>
          </div>
        </div>

        {/* Three Core Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`group relative p-7 rounded-2xl bg-slate-900/60 hover:bg-slate-900/90 border ${item.border} backdrop-blur-md transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center ${item.iconColor} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CheckCircle2 className={`w-5 h-5 ${item.iconColor}`} />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono-code text-slate-400 block">
                    {item.subtitle}
                  </span>
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Action Callout */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <span>Have an opening or internship position in Karachi? Let's connect</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
