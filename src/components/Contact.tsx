import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'vinovenkat152020@gmail.com',
    href: 'mailto:vinovenkat152020@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 7010968143',
    href: 'tel:7010968143',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Salem, Tamil Nadu, India',
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/vinodhini8143',
    href: 'https://www.linkedin.com/in/vinodhini8143',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-teal-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let's Work Together
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            I'm actively looking for opportunities. Feel free to contact me directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT SIDE - CONTACT DETAILS */}
          <div className="space-y-6">
            <div className="p-7 bg-slate-900 border border-slate-800 rounded-2xl">
              <h3 className="text-white font-semibold mb-5">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4 group">
                    
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                      <Icon size={16} className="text-teal-400" />
                    </div>

                    <div>
                      <p className="text-slate-500 text-xs">{label}</p>

                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-slate-300 text-sm hover:text-teal-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-slate-300 text-sm">{value}</p>
                      )}
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* OPEN TO WORK CARD */}
            <div className="p-7 bg-gradient-to-br from-teal-500/10 to-slate-900 border border-teal-500/20 rounded-2xl">
              <h3 className="text-white font-semibold mb-2">Open to Work</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Currently seeking Frontend Developer, React Developer, or Full Stack roles. Available immediately.
              </p>

              <div className="mt-4 flex items-center gap-2 text-teal-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                Available for immediate hire
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - CTA (NO FORM) */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-7 flex flex-col justify-center items-center text-center">

            <h3 className="text-white text-xl font-semibold mb-3">
              Let’s Connect
            </h3>

            <p className="text-slate-400 text-sm mb-6 max-w-sm">
              I'm open to frontend / React / full stack opportunities. Reach out via email or LinkedIn.
            </p>

            {/* EMAIL BUTTON */}
            <a
              href="mailto:vinovenkat152020@gmail.com"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold rounded-xl transition-all hover:-translate-y-0.5"
            >
              <Mail size={16} />
              Send Email
            </a>

            {/* Divider */}
            <p className="text-slate-500 text-xs my-4">or</p>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/vinodhini8143"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-teal-400 hover:underline text-sm"
            >
              <Linkedin size={16} />
              Connect on LinkedIn
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}