import { useEffect, useState, useRef } from 'react';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';

const roles = [
  'Graphic Designer',
  'UI/UX Enthusiast',
  'Video Editor',
  'Brand Storyteller',
  'Creative Director',
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; size: number; delay: number; duration: number; color: string }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        if (isDeleting) {
          setDisplayed(currentRole.slice(0, displayed.length - 1));
        } else {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        }
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  // Generate particles
  useEffect(() => {
    const colors = ['#a855f7', '#06b6d4', '#ec4899', '#f59e0b'];
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 8,
      duration: Math.random() * 10 + 8,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(newParticles);
  }, []);

  // Mouse parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

    const elements = containerRef.current.querySelectorAll('[data-parallax]');
    elements.forEach((el) => {
      const depth = parseFloat((el as HTMLElement).dataset.parallax || '0');
      (el as HTMLElement).style.transform = `translate(${x * depth}px, ${y * depth}px)`;
    });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Gradient orbs */}
      <div data-parallax="-20" className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-600/10 blur-[100px] transition-transform duration-200 ease-out" />
      <div data-parallax="15" className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] transition-transform duration-200 ease-out" />
      <div data-parallax="-10" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-pink-500/5 blur-[80px] transition-transform duration-200 ease-out" />

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            opacity: 0.6,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
          }}
        />
      ))}

      {/* Scan line */}
      <div className="scan-line" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">

        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-400/30 mb-8 text-sm font-rajdhani text-green-400 tracking-wider">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Available for Work — Graphic Design Intern @ Upfront
        </div>

        {/* Name */}
        <div data-parallax="-5" className="transition-transform duration-200 ease-out">
          <h1 className="font-orbitron font-black text-5xl sm:text-7xl lg:text-8xl mb-4 leading-none tracking-tight">
            <span className="block text-white/10 text-2xl sm:text-3xl lg:text-4xl font-light tracking-[0.5em] mb-4 font-rajdhani">
              PORTFOLIO
            </span>
            <span className="gradient-text drop-shadow-2xl">HARSHA</span>
            <br />
            <span className="text-white/90">VARDHAN</span>
          </h1>
        </div>

        {/* Role typewriter */}
        <div className="flex items-center justify-center gap-2 mb-6 h-12">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
          <p className="font-rajdhani text-xl sm:text-2xl text-purple-300 font-semibold tracking-wider min-w-[280px] text-center">
            {displayed}
            <span className="cursor-blink text-cyan-400">|</span>
          </p>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-cyan-500"></div>
        </div>

        {/* Summary */}
        <p className="max-w-2xl mx-auto text-white/50 text-base sm:text-lg leading-relaxed mb-10 font-inter">
          Creative Graphic Designer & Video Editor based at{' '}
          <span className="text-purple-400">Vellore Institute of Technology</span>.
          Passionate about{' '}
          <span className="text-cyan-400">branding, storytelling</span>, and creating
          engaging visual content that resonates.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#portfolio"
            className="group relative px-8 py-4 rounded-full font-rajdhani font-bold text-lg tracking-wider overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
            <span className="relative flex items-center gap-2 text-white">
              View My Work
              <ExternalLink size={18} className="group-hover:rotate-12 transition-transform" />
            </span>
          </a>

          <a
            href="#contact"
            className="group px-8 py-4 rounded-full font-rajdhani font-bold text-lg tracking-wider border border-purple-500/50 text-purple-300 hover:border-purple-400 hover:bg-purple-500/10 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
            Download Resume
          </a>
        </div>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {[
            { value: '2+', label: 'Years Experience' },
            { value: '50+', label: 'Projects Done' },
            { value: '10+', label: 'Tools Mastered' },
            { value: '100%', label: 'Passion' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-orbitron text-3xl sm:text-4xl font-bold gradient-text">{stat.value}</div>
              <div className="font-rajdhani text-xs text-white/40 tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/harshavardhan-s-287ba7328/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white/40 hover:text-purple-400 transition-all duration-300 font-rajdhani text-sm tracking-wider"
          >
            <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-purple-500/50 flex items-center justify-center transition-all duration-300 group-hover:bg-purple-500/10">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            LinkedIn
          </a>

          <a
            href="mailto:harshas1401@gmail.com"
            className="group flex items-center gap-2 text-white/40 hover:text-cyan-400 transition-all duration-300 font-rajdhani text-sm tracking-wider"
          >
            <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-cyan-500/50 flex items-center justify-center transition-all duration-300 group-hover:bg-cyan-500/10">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            Email
          </a>

          <a
            href="https://harshavardhansportfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white/40 hover:text-pink-400 transition-all duration-300 font-rajdhani text-sm tracking-wider"
          >
            <div className="w-8 h-8 rounded-full border border-white/10 group-hover:border-pink-500/50 flex items-center justify-center transition-all duration-300 group-hover:bg-pink-500/10">
              <ExternalLink size={14} />
            </div>
            Portfolio
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-rajdhani text-xs text-white/30 tracking-widest uppercase">Scroll</span>
        <ChevronDown className="text-purple-400/60" size={20} />
      </div>
    </section>
  );
}
