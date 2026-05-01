const skillGroups = [
  {
    category: 'Frontend',
    color: 'teal',
    skills: [
      'React.js',
      'React Native',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Responsive UI',
    ],
  },
  {
    category: 'Backend',
    color: 'sky',
    skills: [
      'Django',
      'Node.js (Basic)',
      'REST API',
      'Python',
      'Axios / Fetch',
    ],
  },
  {
    category: 'Database',
    color: 'emerald',
    skills: [
      'MySQL',
      'MongoDB',
      'Local Storage Mock Backend',
    ],
  },
  {
    category: 'AI / ML',
    color: 'amber',
    skills: [
      'RAG Basics',
      'Groq API',
      'Llama Models',
      'AI Chatbot Integration',
    ],
  },
  {
    category: 'AI Tools',
    color: 'yellow',
    skills: [
      'ChatGPT',
      'Gemini',
      'Claude AI',
      'DeepSeek',
      'Groq',
      'Bolt.new',
      'Lovable AI',
      'GitHub Copilot',
      'NotebookLM',
      'Google AI Studio',
    ],
  },
  {
    category: 'Mobile',
    color: 'rose',
    skills: [
      'React Native',
      'Expo',
      'EAS Build',
      'APK / AAB Builds',
    ],
  },
  {
    category: 'Tools & DevOps',
    color: 'slate',
    skills: [
      'Git & GitHub',
      'Postman',
      'VS Code',
    ],
  },
];

const colorMap: Record<
  string,
  { badge: string; dot: string; border: string; heading: string }
> = {
  teal: {
    badge:
      'bg-teal-500/10 text-teal-300 border-teal-500/20 hover:bg-teal-500/20',
    dot: 'bg-teal-400',
    border: 'border-teal-500/30',
    heading: 'text-teal-400',
  },
  sky: {
    badge:
      'bg-sky-500/10 text-sky-300 border-sky-500/20 hover:bg-sky-500/20',
    dot: 'bg-sky-400',
    border: 'border-sky-500/30',
    heading: 'text-sky-400',
  },
  emerald: {
    badge:
      'bg-emerald-500/10 text-emerald-300 border-emerald-500/20 hover:bg-emerald-500/20',
    dot: 'bg-emerald-400',
    border: 'border-emerald-500/30',
    heading: 'text-emerald-400',
  },
  amber: {
    badge:
      'bg-amber-500/10 text-amber-300 border-amber-500/20 hover:bg-amber-500/20',
    dot: 'bg-amber-400',
    border: 'border-amber-500/30',
    heading: 'text-amber-400',
  },
  yellow: {
    badge:
      'bg-yellow-500/10 text-yellow-300 border-yellow-500/20 hover:bg-yellow-500/20',
    dot: 'bg-yellow-400',
    border: 'border-yellow-500/30',
    heading: 'text-yellow-400',
  },
  rose: {
    badge:
      'bg-rose-500/10 text-rose-300 border-rose-500/20 hover:bg-rose-500/20',
    dot: 'bg-rose-400',
    border: 'border-rose-500/30',
    heading: 'text-rose-400',
  },
  slate: {
    badge:
      'bg-slate-600/30 text-slate-300 border-slate-600/40 hover:bg-slate-600/50',
    dot: 'bg-slate-400',
    border: 'border-slate-600/40',
    heading: 'text-slate-400',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Technical Skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My Toolkit
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            A comprehensive set of technologies I use to design, build, and ship software.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ category, color, skills }) => {
            const c = colorMap[color];
            return (
              <div
                key={category}
                className={`p-6 bg-slate-900 rounded-2xl border ${c.border} hover:border-opacity-60 transition-all duration-300`}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <span className={`w-2.5 h-2.5 rounded-full ${c.dot}`} />
                  <h3
                    className={`font-semibold text-sm tracking-wide uppercase ${c.heading}`}
                  >
                    {category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors duration-200 cursor-default ${c.badge}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}