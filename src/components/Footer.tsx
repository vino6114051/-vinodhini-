import { Code2, Mail, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-teal-400 font-bold text-lg">
            <Code2 size={20} />
            Vinodhini
          </div>

          <div className="flex items-center gap-5">
            <a
              href="mailto:vinovenkat152020@gmail.com"
              className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/40 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://www.linkedin.com/in/vinodhini8143"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-teal-400 hover:border-teal-500/40 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
          </div>

          <p className="text-slate-500 text-sm flex items-center gap-1.5">
            &copy; {year} Vinodhini. Built with
            <Heart size={12} className="text-rose-400 fill-rose-400" />
            React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
