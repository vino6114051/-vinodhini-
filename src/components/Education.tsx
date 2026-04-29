import { GraduationCap, BookOpen, Calendar } from 'lucide-react';

const educationItems = [
  {
    degree: 'B.E. Electronics & Communication Engineering',
    institution: 'Mahendra Engineering College for Women',
    board: 'Anna University',
    period: '2020 – 2024',
    icon: GraduationCap,
    highlight: 'Core',
    color: 'teal',
  },
  {
    degree: 'Python Full Stack Development',
    institution: 'Besant Technology, Chennai Velachery',
    board: 'Professional Certification',
    period: '2024 – 2025 (6 Months)',
    icon: BookOpen,
    highlight: 'Ongoing',
    color: 'sky',
  },
];

const colorMap: Record<string, { icon: string; badge: string; border: string }> = {
  teal: {
    icon: 'text-teal-400 bg-teal-500/10',
    badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    border: 'hover:border-teal-500/30',
  },
  sky: {
    icon: 'text-sky-400 bg-sky-500/10',
    badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    border: 'hover:border-sky-500/30',
  },
};

export default function Education() {
  return (
    <section id="education" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">Academic Background</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {educationItems.map((item) => {
            const Icon = item.icon;
            const c = colorMap[item.color];
            return (
              <div
                key={item.degree}
                className={`p-7 bg-slate-800/50 border border-slate-700/50 rounded-2xl transition-all duration-300 ${c.border}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${c.icon}`}>
                  <Icon size={22} />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${c.badge}`}>
                    {item.highlight}
                  </span>
                </div>

                <h3 className="text-white font-bold text-base leading-snug mb-2">{item.degree}</h3>
                <p className="text-slate-300 text-sm mb-1">{item.institution}</p>
                <p className="text-slate-500 text-xs mb-4">{item.board}</p>

                <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                  <Calendar size={12} />
                  {item.period}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
