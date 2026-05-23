import { useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, GraduationCap, Award } from 'lucide-react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.section-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      {/* Section label */}
      <div className="max-w-7xl mx-auto">
        <div className="section-reveal text-center mb-16">
          <span className="font-rajdhani text-xs tracking-[0.4em] uppercase text-purple-400 mb-4 block">
            — Who I Am —
          </span>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile image with 3D frame */}
          <div className="section-reveal flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              {/* Rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/30 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-dashed border-cyan-500/20 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Glow rings */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-purple-600/20 to-cyan-600/20 blur-xl" />

              {/* Main image frame */}
              <div className="absolute inset-8 rounded-full overflow-hidden border-2 border-purple-500/40"
                style={{ boxShadow: '0 0 40px rgba(168,85,247,0.3), 0 0 80px rgba(168,85,247,0.1)' }}>
                <img
                  src="/images/profile.jpg"
                  alt="Harshavardhan S"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
              </div>

              {/* Corner decorations */}
              {['top-0 right-8', 'bottom-0 left-8', 'top-8 left-0', 'bottom-8 right-0'].map((pos, i) => (
                <div
                  key={i}
                  className={`absolute ${pos} w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 blur-sm`}
                  style={{ boxShadow: '0 0 10px #a855f7' }}
                />
              ))}

              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full border border-purple-500/30 whitespace-nowrap">
                <span className="font-rajdhani text-sm text-purple-300 font-semibold tracking-wider">
                  🎨 Creative Designer
                </span>
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="space-y-6">
            <div className="section-reveal">
              <h3 className="font-orbitron text-2xl font-bold text-white mb-2">
                Harshavardhan S
              </h3>
              <p className="font-rajdhani text-purple-400 text-lg font-semibold tracking-wider">
                Graphic Designer | UI/UX Enthusiast | Software Developer
              </p>
            </div>

            <div className="section-reveal">
              <p className="text-white/60 leading-relaxed">
                Creative Graphic Designer and aspiring Video Editor with hands-on experience in
                branding, social media creatives, and startup projects. Currently working as a
                Graphic Design Intern at Upfront, creating marketing visuals and digital content.
              </p>
              <p className="text-white/60 leading-relaxed mt-3">
                Skilled in <span className="text-purple-400 font-semibold">Photoshop</span>,{' '}
                <span className="text-cyan-400 font-semibold">Canva</span>, and{' '}
                <span className="text-pink-400 font-semibold">Figma</span>, with growing expertise
                in video editing tools. Passionate about creating engaging visual content for
                social media, promotions, and brand storytelling.
              </p>
            </div>

            {/* Contact Info */}
            <div className="section-reveal grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: <Phone size={14} />, text: '+91 8143244752', color: 'text-green-400' },
                { icon: <Mail size={14} />, text: 'harshas1401@gmail.com', color: 'text-cyan-400' },
                { icon: <MapPin size={14} />, text: 'Vellore, Tamil Nadu', color: 'text-pink-400' },
                { icon: <GraduationCap size={14} />, text: 'B.Tech CS — VIT AP', color: 'text-yellow-400' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 glass-card rounded-xl px-4 py-3"
                >
                  <span className={item.color}>{item.icon}</span>
                  <span className="text-white/60 text-sm font-inter truncate">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="section-reveal space-y-3">
              <h4 className="font-rajdhani text-sm tracking-widest uppercase text-white/30 flex items-center gap-2">
                <Award size={14} className="text-purple-400" /> Education
              </h4>
              <div className="glass-card rounded-2xl p-4 border border-purple-500/20">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" style={{ boxShadow: '0 0 8px #a855f7' }} />
                  <div>
                    <p className="text-white font-semibold font-rajdhani">Vellore Institute of Technology (VIT AP)</p>
                    <p className="text-purple-400 text-sm">B.Tech Computer Science · 2024–Present</p>
                  </div>
                </div>
              </div>
              <div className="glass-card rounded-2xl p-4 border border-cyan-500/20">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0" style={{ boxShadow: '0 0 8px #06b6d4' }} />
                  <div>
                    <p className="text-white font-semibold font-rajdhani">ASC Independent PU College</p>
                    <p className="text-cyan-400 text-sm">Pre-University Course (PUC) · 2022–2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
