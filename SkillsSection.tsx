import { useEffect, useRef, useState } from 'react';

const designSkills = [
  { name: 'Adobe Photoshop', level: 90, color: '#31A8FF' },
  { name: 'Figma', level: 85, color: '#a855f7' },
  { name: 'Canva', level: 95, color: '#00C4CC' },
  { name: 'Adobe Lightroom', level: 80, color: '#31A8FF' },
  { name: 'Adobe Premiere Pro', level: 70, color: '#9999FF' },
  { name: 'After Effects', level: 65, color: '#9999FF' },
];

const technicalSkills = [
  { name: 'Java', level: 75, color: '#f59e0b' },
  { name: 'Python', level: 70, color: '#3b82f6' },
  { name: 'HTML/CSS', level: 85, color: '#ec4899' },
  { name: 'JavaScript', level: 65, color: '#eab308' },
  { name: 'JavaFX', level: 60, color: '#06b6d4' },
  { name: 'SQLite', level: 65, color: '#10b981' },
];

const softSkills = [
  { name: 'Creativity', icon: '🎨', desc: 'Out-of-the-box thinking' },
  { name: 'Attention to Detail', icon: '🔍', desc: 'Pixel-perfect precision' },
  { name: 'Team Collaboration', icon: '🤝', desc: 'Cross-functional teams' },
  { name: 'Time Management', icon: '⏱️', desc: 'Deadline-driven' },
  { name: 'Brand Storytelling', icon: '📖', desc: 'Compelling narratives' },
  { name: 'Video Editing', icon: '🎬', desc: 'Reels & transitions' },
];

const tools = [
  'Photoshop', 'Figma', 'Canva', 'Lightroom', 'Premiere Pro',
  'After Effects', 'Vitopia', 'Karnataka Ads', 'Social Media Design',
  'Branding', 'Visual Storytelling', 'UI/UX Design',
];

function SkillBar({ name, level, color, visible }: { name: string; level: number; color: string; visible: boolean }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-rajdhani text-sm font-semibold text-white/80 tracking-wider">{name}</span>
        <span className="font-orbitron text-xs text-white/40">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1500 ease-out"
          style={{
            width: visible ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}80, ${color})`,
            boxShadow: `0 0 10px ${color}60`,
            transitionDuration: '1.5s',
          }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.section-reveal');
    elements?.forEach((el) => observer.observe(el));

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="section-reveal text-center mb-16">
          <span className="font-rajdhani text-xs tracking-[0.4em] uppercase text-cyan-400 mb-4 block">
            — What I Do —
          </span>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Design Skills */}
          <div className="section-reveal glass-card rounded-3xl p-8 border border-purple-500/20">
            <h3 className="font-orbitron text-lg font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-lg">🎨</span>
              Design & Creative
            </h3>
            <div className="space-y-6">
              {designSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} visible={visible} />
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="section-reveal glass-card rounded-3xl p-8 border border-cyan-500/20">
            <h3 className="font-orbitron text-lg font-bold text-white mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-lg">💻</span>
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <SkillBar key={skill.name} {...skill} visible={visible} />
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="section-reveal mb-16">
          <h3 className="font-orbitron text-xl font-bold text-white mb-8 text-center">
            Soft <span className="gradient-text">Skills</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill.name}
                className="glass-card rounded-2xl p-4 text-center border border-purple-500/15 group cursor-default"
              >
                <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                  {skill.icon}
                </div>
                <div className="font-rajdhani text-sm font-bold text-white/90">{skill.name}</div>
                <div className="font-inter text-xs text-white/30 mt-1">{skill.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools cloud */}
        <div className="section-reveal">
          <h3 className="font-orbitron text-xl font-bold text-white mb-8 text-center">
            Tools & <span className="gradient-text">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full glass border border-purple-500/20 font-rajdhani text-sm text-white/60 hover:text-white hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300 cursor-default"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
