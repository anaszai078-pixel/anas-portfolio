import { Mail, Github, Linkedin, ArrowUp, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand & Role */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center font-display font-extrabold text-white text-base">
                A
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                M<span className="text-blue-500">.</span>ANAS
              </span>
            </div>
            <p className="text-sm font-medium text-blue-400">
              {PERSONAL_INFO.title}
            </p>
            <p className="text-xs text-slate-400 max-w-md">
              Software Engineering Fresher from Hyderabad, Sindh · Open to Internship and Junior Developer opportunities in Karachi, Pakistan.
            </p>
          </div>

          {/* Quick Links & Socials */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <nav className="flex items-center gap-5 text-xs font-medium text-slate-300">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#education" className="hover:text-white transition-colors">Education</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              <button
                onClick={onOpenResume}
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Curriculum Vitae
              </button>
            </nav>

            <div className="flex items-center gap-2.5">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/50 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-blue-500 flex items-center justify-center text-slate-300 hover:text-white transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <button
                onClick={scrollToTop}
                className="w-9 h-9 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white border border-blue-500/30 flex items-center justify-center transition-colors ml-2"
                title="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Muhammad Anas. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Built with React &amp; Tailwind CSS</span>
            <span>·</span>
            <span>Hyderabad &amp; Karachi, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
