import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll('.section-reveal');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  const contactItems = [
    {
      icon: <Phone size={18} />,
      label: 'Phone',
      value: '+91 8143244752',
      href: 'tel:+918143244752',
      color: '#10b981',
    },
    {
      icon: <Mail size={18} />,
      label: 'Email',
      value: 'harshas1401@gmail.com',
      href: 'mailto:harshas1401@gmail.com',
      color: '#06b6d4',
    },
    {
      icon: <MapPin size={18} />,
      label: 'Location',
      value: 'Vellore Institute of Technology, Amaravati',
      href: '#',
      color: '#a855f7',
    },
    {
      icon: <ExternalLink size={18} />,
      label: 'LinkedIn',
      value: 'harshavardhan-s-287ba7328',
      href: 'https://www.linkedin.com/in/harshavardhan-s-287ba7328/',
      color: '#0077B5',
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 px-6 overflow-hidden">
      {/* Gradient decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="section-reveal text-center mb-16">
          <span className="font-rajdhani text-xs tracking-[0.4em] uppercase text-purple-400 mb-4 block">
            — Let's Connect —
          </span>
          <h2 className="font-orbitron text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-white/40 font-inter max-w-xl mx-auto text-sm">
            Have a project in mind? Let's create something amazing together.
          </p>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <div className="section-reveal">
              <h3 className="font-orbitron text-xl font-bold text-white mb-2">Let's Talk</h3>
              <p className="text-white/50 leading-relaxed">
                I'm always open to discussing design projects, creative ideas, or opportunities
                to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className="section-reveal space-y-4">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 glass-card rounded-2xl p-4 border border-purple-500/15 group"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30`, color: item.color }}
                  >
                    {item.icon}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-rajdhani text-white/30 tracking-wider uppercase">{item.label}</p>
                    <p className="text-sm font-rajdhani font-semibold text-white/80 truncate group-hover:text-white transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Status */}
            <div className="section-reveal glass-card rounded-2xl p-6 border border-green-500/20">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="font-orbitron text-sm font-bold text-green-400">Available for Work</span>
              </div>
              <p className="text-white/50 text-sm">
                Currently open to freelance design projects, full-time roles, and creative collaborations.
                Response time: <span className="text-green-400">within 24 hours</span>
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="section-reveal">
            <div className="glass-card rounded-3xl p-8 border border-purple-500/20 animate-border-glow">
              <h3 className="font-orbitron text-lg font-bold text-white mb-6">Send a Message</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle size={48} className="text-green-400 mb-4 animate-bounce" />
                  <h4 className="font-orbitron text-xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="text-white/50">I'll get back to you shortly. Thank you!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-rajdhani text-white/40 tracking-wider uppercase mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full glass rounded-xl border border-purple-500/20 px-4 py-3 text-white placeholder-white/20 font-inter text-sm focus:outline-none focus:border-purple-400/60 transition-colors bg-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-rajdhani text-white/40 tracking-wider uppercase mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full glass rounded-xl border border-purple-500/20 px-4 py-3 text-white placeholder-white/20 font-inter text-sm focus:outline-none focus:border-purple-400/60 transition-colors bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-rajdhani text-white/40 tracking-wider uppercase mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Design Project Inquiry"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full glass rounded-xl border border-purple-500/20 px-4 py-3 text-white placeholder-white/20 font-inter text-sm focus:outline-none focus:border-purple-400/60 transition-colors bg-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-rajdhani text-white/40 tracking-wider uppercase mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full glass rounded-xl border border-purple-500/20 px-4 py-3 text-white placeholder-white/20 font-inter text-sm focus:outline-none focus:border-purple-400/60 transition-colors bg-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-orbitron text-sm font-bold tracking-wider hover:opacity-90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
                    style={{ boxShadow: '0 0 20px rgba(168,85,247,0.3)' }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
