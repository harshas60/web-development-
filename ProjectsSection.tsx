import { useEffect, useRef } from 'react';
import { ExternalLink, Code2, Cpu, Music, Car } from 'lucide-react';

const projects = [
  {
    title: 'Laser-Based Micro-Particle Detection in Water',
    subtitle: 'Smart Water Quality Monitor',
    icon: <Cpu className="text-cyan-400" size={24} />,
    color: '#06b6d4',
    tech: ['ESP32', 'Arduino', 'Optical Sensing', 'LCD Display', 'C++'],
    status: 'Completed',
    description: 'Developed a portable system using ESP32 and Arduino to detect suspended particles in water using optical sensing techniques.',
    highlights: [
      'Integrated turbidity and light sensors to analyze water quality and classify contamination levels',
      'Displayed real-time data on LCD with LED and buzzer alerts for detection',
      'Gained hands-on experience in embedded systems, sensor interfacing, and real-time monitoring',
    ],
  },
  {
    title: 'MusicPal App — Music Application',
    subtitle: 'Interactive Music Player',
    icon: <Music className="text-purple-400" size={24} />,
    color: '#a855f7',
    tech: ['Java', 'JavaFX', 'SQLite', 'Media Handling'],
    status: 'Completed',
    description: 'Developed an interactive music player with playlist management, search functionality, and playback controls.',
    highlights: [
      'Implemented features like play/pause, next/previous track, and volume control for smooth user experience',
      'Built a clean and user-friendly interface with efficient performance',
      'Used Java, JavaFX, and SQLite for data handling and media management',
    ],
  },
  {
    title: 'Automated Parking System',
    subtitle: 'Smart Parking Solution',
    icon: <Car className="text-pink-400" size={24} />,
    color: '#ec4899',
    tech: ['Embedded C', 'Arduino', 'JavaFX', 'Python', 'Sensors'],
    status: 'Completed',
    description: 'Developed an automated parking solution for vehicle entry, exit, and slot allocation.',
    highlights: [
      'Implemented features like real-time slot detection, automatic billing, and payment integration',
      'Designed to improve efficiency, reduce congestion, and enhance user convenience',
      'Built using Embedded C, Arduino, JavaFX, and Python with a focus on scalability',
    ],
  },
];

export default function ProjectsSection() {
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
    <section id="projects" ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="section-reveal text-center mb-16">
          <span className="font-rajdhani text-xs tracking-[0.4em] uppercase text-purple-400 mb-4 block">
            — What I've Built —
          </span>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto" />
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="section-reveal glass-card rounded-3xl overflow-hidden border group"
              style={{
                borderColor: `${project.color}20`,
                transitionDelay: `${idx * 0.1}s`,
              }}
            >
              {/* Card top accent */}
              <div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
              />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
                  >
                    {project.icon}
                  </div>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-rajdhani font-semibold tracking-wider"
                    style={{ background: `${project.color}20`, color: project.color }}
                  >
                    ✓ {project.status}
                  </span>
                </div>

                <h3 className="font-orbitron text-sm font-bold text-white mb-1 leading-snug group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="font-rajdhani text-sm font-semibold mb-4" style={{ color: project.color }}>
                  {project.subtitle}
                </p>

                <p className="text-white/50 text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-6">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-white/40 text-xs leading-relaxed">
                      <span style={{ color: project.color }} className="mt-0.5 flex-shrink-0">▹</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-lg font-inter"
                      style={{
                        background: `${project.color}10`,
                        color: `${project.color}cc`,
                        border: `1px solid ${project.color}20`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className="px-6 pb-6">
                <div
                  className="flex items-center gap-2 text-xs font-rajdhani font-semibold tracking-wider opacity-50 group-hover:opacity-100 transition-opacity cursor-pointer"
                  style={{ color: project.color }}
                >
                  <Code2 size={14} />
                  View Details
                  <ExternalLink size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
