import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
          className="flex items-center gap-2 text-teal-400 font-bold text-xl tracking-tight"
        >
          <Code2 size={22} />
          <span>Vinodhini</span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="px-4 py-2 text-sm text-slate-300 hover:text-teal-400 transition-colors duration-200 rounded-md hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="ml-4 px-5 py-2 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold text-sm rounded-lg transition-colors duration-200"
          >
            Hire Me
          </button>
        </nav>

        <button
          className="md:hidden text-slate-300 hover:text-teal-400 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900/98 backdrop-blur-sm border-t border-slate-800 px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left px-4 py-3 text-slate-300 hover:text-teal-400 hover:bg-white/5 rounded-md transition-colors text-sm"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="mt-2 px-5 py-3 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold text-sm rounded-lg transition-colors"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
}
