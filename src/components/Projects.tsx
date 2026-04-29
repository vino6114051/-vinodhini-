import { ExternalLink, Bot, Building2 } from 'lucide-react';

const projects = [
  {
    icon: Building2,
    title: 'KovaiS – Employee & Admin Management System',
    label: 'Live Project @ Thiran360AI',
    labelColor: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    description:
      'A comprehensive role-based management platform with separate dashboards for admins and employees. Handles attendance tracking, leave requests, salary management, and company announcements — all backed by a secure REST API.',
    features: [
      'Role-based access control (Admin / Employee)',
      'Real-time attendance & leave management',
      'Salary management dashboard',
      'Company announcement system',
      'Secure JWT-based login',
      'Fully responsive React UI',
    ],
    stack: ['React.js', 'Django', 'MySQL', 'REST API', 'Python'],
    accentColor: 'teal',
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Bot,
    title: 'AI-Powered eCommerce Chatbot with RAG',
    label: 'Python Full Stack Course Project',
    labelColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    description:
      'A full-stack AI chatbot for an eCommerce platform featuring real-time messaging, Retrieval-Augmented Generation (RAG) for context-aware product answers, and Groq API integration with Llama models for fast, cost-efficient AI responses.',
    features: [
      'Real-time chat UI with typing indicators',
      'RAG with product catalog & FAQ retrieval',
      'Groq API + Llama model integration',
      'Markdown-formatted AI responses',
      'Django authentication & session management',
      'Chat history stored in MySQL',
    ],
    stack: ['React.js', 'Django', 'Python', 'MySQL', 'Groq API', 'Llama', 'REST APIs'],
    accentColor: 'amber',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const accentStyles: Record<string, { border: string; glow: string; tag: string }> = {
  teal: {
    border: 'hover:border-teal-500/40',
    glow: 'group-hover:shadow-teal-500/10',
    tag: 'bg-teal-500/10 text-teal-300 border-teal-500/20',
  },
  amber: {
    border: 'hover:border-amber-500/40',
    glow: 'group-hover:shadow-amber-500/10',
    tag: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Real-world applications built during live projects and coursework.
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, idx) => {
            const accent = accentStyles[project.accentColor];
            const Icon = project.icon;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={project.title}
                className={`group grid lg:grid-cols-2 gap-0 bg-slate-900 border border-slate-700/50 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl ${accent.border} ${accent.glow}`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-900/60" />
                </div>

                {/* Content */}
                <div className={`p-8 flex flex-col justify-center ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                      <Icon size={17} className="text-teal-400" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${project.labelColor}`}>
                      {project.label}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-xl mb-3 leading-tight">{project.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

                  <ul className="space-y-1.5 mb-6">
                    {project.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-slate-400 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-1.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2.5 py-1 text-xs rounded-md border ${accent.tag}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
