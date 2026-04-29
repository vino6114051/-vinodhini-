import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Live Project Developer',
    company: 'Thiran360AI',
    period: 'June 2025 – Jan 2026',
    duration: '6 Months',
    type: 'Live Project',
    badge: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
    highlights: [
      'Built KovaiS — a role-based Employee & Admin Management System with separate dashboards',
      'Developed features for attendance tracking, leave requests, salary management, and company announcements',
      'Implemented secure login with role-based access control (RBAC)',
      'Designed a fully responsive UI using React.js with REST API integration',
    ],
    stack: ['React.js', 'Django', 'MySQL', 'REST API'],
  },
  {
    role: 'Online Intern – Java Full Stack',
    company: 'Shiah Info Solutions, Sholinganallur',
    period: 'April 2024 – July 2024',
    duration: '4 Months',
    type: 'Internship',
    badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    highlights: [
      'Worked on web development fundamentals and built frontend components',
      'Practiced real-time project workflows and version control',
      'Improved understanding of routing, state handling, and API consumption',
      'Developed an Education Certification System (JSP + Tomcat) with certificate upload, AES encryption, and MySQL',
    ],
    stack: ['Java', 'JSP', 'Tomcat', 'MySQL', 'AES Encryption'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">Work History</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-slate-700 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={exp.company} className="relative md:pl-20">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 items-center justify-center">
                  <Briefcase size={18} className="text-teal-400" />
                </div>

                <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-7 hover:border-slate-600 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                      <p className="text-slate-400 mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-2 shrink-0">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${exp.badge}`}>
                        {exp.type}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-500 text-sm">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-5">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0 mt-2" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-slate-700/60 text-slate-300 text-xs rounded-md border border-slate-600/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
