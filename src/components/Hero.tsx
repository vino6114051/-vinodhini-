import { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ChevronDown } from 'lucide-react';

const roles = ['Frontend Developer', 'React Developer', 'Mobile Developer', 'Full Stack Developer'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let i = typing ? 0 : current.length;
    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(current.slice(0, i + 1));
        i++;
        if (i === current.length) {
          clearInterval(interval);
          setTimeout(() => setTyping(false), 1800);
        }
      } else {
        setDisplayed(current.slice(0, i - 1));
        i--;
        if (i === 0) {
          clearInterval(interval);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTyping(true);
        }
      }
    }, typing ? 80 : 45);
    return () => clearInterval(interval);
  }, [roleIndex, typing]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-teal-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
<div className="pt-20 text-center">
  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs sm:text-sm font-medium mb-6">
    <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
    Available for opportunities
  </div>
</div>
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Vinodhini
        </h1>
        <p className="text-slate-400 text-lg md:text-xl mb-6 font-light">
          B.E. Electronics & Communication Engineering
        </p>

        {/* Animated role */}
        <div className="h-12 flex items-center justify-center mb-8">
          <span className="text-2xl md:text-3xl font-semibold text-teal-400">
            {displayed}
            <span className="inline-block w-0.5 h-7 bg-teal-400 ml-1 animate-pulse" />
          </span>
        </div>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg leading-relaxed mb-10">
          Passionate about building impactful web and mobile applications using React, React Native, and Django.
          Bringing ideas to life with clean code and intuitive design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-3.5 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5"
          >
            View My Work
          </button>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto px-8 py-3.5 border border-slate-600 hover:border-teal-500 text-slate-300 hover:text-teal-400 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            Get in Touch
          </button>
        </div>

        {/* Contact info strip */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          <a href="tel:7010968143" className="flex items-center gap-1.5 hover:text-teal-400 transition-colors">
            <Phone size={14} />
            7010968143
          </a>
          <a href="mailto:vinovenkat152020@gmail.com" className="flex items-center gap-1.5 hover:text-teal-400 transition-colors">
            <Mail size={14} />
            vinovenkat152020@gmail.com
          </a>
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            Salem, Tamil Nadu
          </span>
          <a
            href="https://www.linkedin.com/in/vinodhini8143"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-teal-400 transition-colors"
          >
            <Linkedin size={14} />
            LinkedIn
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-teal-400 transition-colors"
          >
            <Github size={14} />
            GitHub
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-teal-400 transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
