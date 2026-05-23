import { useEffect, useRef } from 'react';
import { Briefcase, Star } from 'lucide-react';

const experiences = [
  {
    role: 'Graphic Designer Intern',
    company: 'Upfront',
    period: 'March 2026 – Present',
    type: 'Internship',
    color: '#a855f7',
    achievements: [
      'Designed social media creatives, posters, and branding materials for startup projects',
      'Created marketing visuals for campaigns and digital platforms',
      'Collaborated with team members to maintain brand consistency',
      'Contributed to UI/UX design and product visual development',
      'Delivered creative content within deadlines in a fast-paced environment',
    ],
  },
];

const graphicAchievements = [
  {
    title: 'Vitopia Lead Designer',
    desc: 'Led the design team for Vitopia, delivering end-to-end creatives for a large-scale event with 12-14 artists, including posters, social media campaigns, and branding assets',
    icon: '🎨',
    color: '#a855f7',
  },
  {
    title: 'Karnataka Association Team Lead',
    desc: 'Served as Team Lead for Karnataka Association, designing impactful promotional materials and event visuals for community engagement',
    icon: '🎯',
    color: '#06b6d4',
  },
  {
    title: 'Startup Creatives',
    desc: 'Collaborated with startup teams to develop branding assets, advertisements, and marketing creatives for digital platforms',
    icon: '🚀',
    color: '#ec4899',
  },
  {
    title: 'Social Media Specialist',
    desc: 'Specialized in social media design, event promotion, and visual storytelling to enhance audience engagement',
    icon: '📱',
    color: '#f59e0b',
  },
];

export default function ExperienceSection() {
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
    <section id="experience" ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      {/* Glow decoration */}
      <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-purple-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="section-reveal text-center mb-16">
          <span className="font-rajdhani text-xs tracking-[0.4em] uppercase text-pink-400 mb-4 block">
            — Career Journey —
          </span>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Experience</span> & Achievements
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience Timeline */}
          <div className="section-reveal">
            <h3 className="font-orbitron text-xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase size={20} className="text-purple-400" />
              Work Experience
            </h3>

            {experiences.map((exp) => (
              <div key={exp.role} className="relative">
                {/* Timeline connector */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="timeline-dot mt-1"
                      style={{ background: `linear-gradient(135deg, ${exp.color}, #06b6d4)`, boxShadow: `0 0 12px ${exp.color}` }}
                    />
                    <div className="timeline-line mt-2" />
                  </div>

                  <div className="pb-8 flex-1">
                    <div className="glass-card rounded-2xl p-6 border"
                      style={{ borderColor: `${exp.color}30` }}>
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                        <div>
                          <h4 className="font-orbitron text-base font-bold text-white">{exp.role}</h4>
                          <p className="font-rajdhani text-sm font-semibold mt-1" style={{ color: exp.color }}>
                            @ {exp.company}
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span
                            className="text-xs px-3 py-1 rounded-full font-rajdhani font-semibold tracking-wider"
                            style={{ background: `${exp.color}20`, color: exp.color }}
                          >
                            {exp.type}
                          </span>
                          <span className="text-xs text-white/30 font-inter">{exp.period}</span>
                        </div>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-2">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                            <span className="text-purple-400 mt-1 flex-shrink-0">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Current status */}
            <div className="flex items-center gap-3 px-4 py-3 glass rounded-xl border border-green-500/20">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="font-rajdhani text-sm text-green-400 font-semibold">Currently Active at Upfront</span>
            </div>
          </div>

          {/* Graphic Design Achievements */}
          <div className="section-reveal">
            <h3 className="font-orbitron text-xl font-bold text-white mb-8 flex items-center gap-3">
              <Star size={20} className="text-cyan-400" />
              Design Highlights
            </h3>
            <div className="space-y-4">
              {graphicAchievements.map((item) => (
                <div
                  key={item.title}
                  className="glass-card rounded-2xl p-5 border group transition-all duration-300"
                  style={{ borderColor: `${item.color}20` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-rajdhani text-base font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
