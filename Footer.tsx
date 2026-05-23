import { Heart, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-10 px-6 border-t border-purple-500/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl border border-purple-500/30 flex items-center justify-center">
              <span className="font-orbitron text-sm font-bold gradient-text">HS</span>
            </div>
            <div>
              <p className="font-orbitron text-sm font-bold text-white/80">HARSHAVARDHAN S</p>
              <p className="font-rajdhani text-xs text-purple-400 tracking-wider">Graphic Designer & UI/UX Enthusiast</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {['home', 'about', 'skills', 'experience', 'projects', 'portfolio', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="font-rajdhani text-sm text-white/30 hover:text-purple-400 transition-colors tracking-wider uppercase"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/harshavardhan-s-287ba7328/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-purple-500/30 flex items-center justify-center text-white/30 hover:text-purple-400 hover:border-purple-400/50 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="mailto:harshas1401@gmail.com"
              className="w-8 h-8 rounded-full border border-cyan-500/30 flex items-center justify-center text-white/30 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </a>
            <a
              href="https://harshavardhansportfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-pink-500/30 flex items-center justify-center text-white/30 hover:text-pink-400 hover:border-pink-400/50 transition-all duration-300"
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-white/20 font-inter text-xs flex items-center justify-center gap-1">
            Designed & Built with <Heart size={12} className="text-pink-500" fill="currentColor" /> by Harshavardhan S · 2025
          </p>
          <p className="text-white/10 text-xs mt-1 font-rajdhani tracking-wider">
            © All rights reserved · VIT AP · MH5, Near CB Block, Amaravati
          </p>
        </div>
      </div>
    </footer>
  );
}
