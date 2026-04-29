import { Target, Zap, Users, Code } from 'lucide-react';

const highlights = [
  {
    icon: Code,
    title: 'Frontend Focus',
    desc: 'Specialized in React.js and React Native for web and mobile apps.',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    desc: 'Quickly adapted to live project environments and new technologies.',
  },
  {
    icon: Users,
    title: 'Team Player',
    desc: 'Collaborated with teams in internships and live project deliveries.',
  },
  {
    icon: Target,
    title: 'Problem Solver',
    desc: 'Strong analytical mindset from an ECE engineering background.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Passionate Developer. Creative Thinker.</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-5">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a <span className="text-teal-400 font-medium">Frontend & Mobile Developer</span> with hands-on
              experience in React, React Native, and Django, gained through live projects and professional internships.
            </p>
            <p className="text-slate-400 leading-relaxed">
              With a foundation in Electronics & Communication Engineering from Mahendra Engineering College for Women
              (Anna University, 2024), I bring strong problem-solving skills and an analytical mindset to every
              challenge I tackle.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I've worked on real-world systems including role-based employee management platforms, AI-powered
              eCommerce chatbots with RAG, and full-stack Django + React applications. I thrive on shipping
              production-quality code and continuously leveling up my skills.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              {['React.js', 'React Native', 'Django', 'Python', 'JavaScript', 'MySQL'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-300 text-sm rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="p-5 bg-slate-800/60 border border-slate-700/50 rounded-2xl hover:border-teal-500/40 hover:bg-slate-800 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4 group-hover:bg-teal-500/20 transition-colors">
                  <Icon size={20} className="text-teal-400" />
                </div>
                <h3 className="text-white font-semibold mb-1.5 text-sm">{title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
