import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(item => item.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActive(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass border-b border-purple-500/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 opacity-20 animate-pulse"></div>
            <div className="absolute inset-[2px] rounded-lg border border-purple-500/50 flex items-center justify-center">
              <span className="font-orbitron text-sm font-bold gradient-text">HS</span>
            </div>
          </div>
          <span className="font-orbitron text-sm font-bold hidden sm:block text-white/80 tracking-widest">
            HARSHA<span className="gradient-text">DEV</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`font-rajdhani font-semibold text-sm tracking-widest uppercase transition-all duration-300 relative group ${
                active === item.href.replace('#', '')
                  ? 'text-purple-400'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 ${
                  active === item.href.replace('#', '') ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden lg:flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/50 text-sm font-rajdhani font-semibold tracking-wider text-purple-300 hover:bg-purple-500/20 transition-all duration-300 hover:border-purple-400"
        >
          Hire Me
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white/80 hover:text-white transition-colors"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 overflow-hidden ${
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass border-t border-purple-500/20 px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`font-rajdhani font-semibold text-base tracking-wider uppercase py-2 border-b border-purple-500/10 transition-colors ${
                active === item.href.replace('#', '') ? 'text-purple-400' : 'text-white/70'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-5 py-3 rounded-full border border-purple-500/50 text-sm font-rajdhani font-semibold tracking-wider text-purple-300 text-center hover:bg-purple-500/20 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
