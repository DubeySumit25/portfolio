import React, { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'BOOKMYEVENT',
    subtitle: 'Event Management & Booking Platform',
    description:
      'Built a full-stack event management platform with event creation, booking, role-based access, and secure JWT authentication, featuring a responsive React interface and Spring Boot backend.',
    tech: ['React', 'Spring Boot', 'MySQL', 'JWT', 'Railway', 'Render', 'Vercel'],
    tag: 'FULL STACK',
    color: 'var(--neon-green)',
    status: 'LIVE',
    demo: 'https://bookmyevent25.vercel.app',
    source: 'https://github.com/DubeySumit25/bookmyevent-backend',
  },

  {
    id: 2,
    title: 'CITYFIX',
    subtitle: 'Civic Complaint Management Platform',
    description:
      'Built a full-stack civic complaint platform with image uploads, complaint tracking, role-based access, admin management, search and filtering, and analytics for monitoring urban issues.',
    tech: [
      'React',
      'Vite',
      'Tailwind CSS',
      'Spring Boot',
      'Java',
      'PostgreSQL',
      'Supabase',
      'JWT',
      'Docker',
      'Render',
      'Vercel',
    ],
    tag: 'FULL STACK',
    color: 'var(--neon-green)',
    status: 'LIVE',
    demo: 'https://city-fixsumit.vercel.app/',
    source: 'https://github.com/DubeySumit25/CityFix-Backend',
  },

  {
  id: 3,
  title: 'INTEL IMAGE CLASSIFICATION',
  subtitle: 'Scene Recognition with LoRA Fine-Tuning',
  description:
    'Built a scene classification pipeline using LoRA fine-tuning on ResNet18, with data augmentation, early stopping, GPU-accelerated training, and comprehensive model evaluation.',
  tech: [
    'Python',
    'PyTorch',
    'Torchvision',
    'ResNet18',
    'LoRA',
    'Fine-Tuning',
    'CNN',
    'Kaggle GPU'
  ],
  tag: 'AI',
  color: 'var(--neon-green)',
  status: 'LIVE',
  demo: 'https://intel-image-classifier-y7my.onrender.com/',
  source: 'https://github.com/DubeySumit25/intel-image-classifier',
},
];

const FILTERS = ['ALL', 'FULL STACK', 'AI'];

export default function Projects() {
  const [active, setActive] = useState('ALL');
  const [hovered, setHovered] = useState(null);

  const filtered = active === 'ALL' ? PROJECTS : PROJECTS.filter(p => p.tag === active);

  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="grid-bg" />
      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="section-label">// PORTFOLIO</div>
        <h2 className="section-title">PROJECTS</h2>
        <div className="section-divider" />

        {/* Filters */}
        <div style={{ display: 'flex', gap: 'clamp(0.4rem, 2vw, 0.5rem)', flexWrap: 'wrap', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: 'clamp(0.55rem, 1.5vw, 0.6rem)',
                letterSpacing: '0.15em',
                padding: 'clamp(0.3rem, 1.2vw, 0.4rem) clamp(0.8rem, 2vw, 1rem)',
                background: active === f ? 'var(--neon-cyan)' : 'transparent',
                color: active === f ? 'var(--bg-void)' : 'var(--text-dim)',
                border: `1px solid ${active === f ? 'var(--neon-cyan)' : 'var(--border-dim)'}`,
                cursor: 'none',
                transition: 'all 0.2s',
                clipPath: 'polygon(6px 0, 100% 0, calc(100% - 6px) 100%, 0 100%)',
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: 'clamp(1rem, 3vw, 1.5rem)',
        }}>
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="cyber-card"
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                opacity: 0,
                animation: `fadeIn 0.5s ease ${i * 0.08}s forwards`,
              }}
            >
              {/* Top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', gap: '0.5rem', flexWrap: 'wrap' }}>
                <span style={{
                  fontFamily: 'Share Tech Mono, monospace',
                  fontSize: 'clamp(0.5rem, 1.5vw, 0.55rem)',
                  letterSpacing: '0.2em',
                  color: p.color,
                  padding: 'clamp(0.15rem, 0.8vw, 0.2rem) clamp(0.5rem, 1.5vw, 0.6rem)',
                  border: `1px solid ${p.color}`,
                  opacity: 0.8,
                }}>
                  {p.tag}
                </span>
                <span style={{
                  fontFamily: 'Share Tech Mono, monospace',
                  fontSize: 'clamp(0.5rem, 1.5vw, 0.55rem)',
                  letterSpacing: '0.15em',
                  color: p.status === 'LIVE' ? 'var(--neon-green)' : 'var(--neon-pink)',
                  display: 'flex', alignItems: 'center', gap: 'clamp(0.2rem, 1vw, 0.3rem)',
                  whiteSpace: 'nowrap',
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: p.status === 'LIVE' ? 'var(--neon-green)' : 'var(--neon-pink)',
                    boxShadow: `0 0 8px ${p.status === 'LIVE' ? 'var(--neon-green)' : 'var(--neon-pink)'}`,
                    animation: 'pulse-glow 2s infinite',
                    flexShrink: 0,
                  }} />
                  {p.status}
                </span>
              </div>

              {/* Project number */}
              <div style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: 'clamp(0.55rem, 1.5vw, 0.6rem)',
                color: 'var(--text-ghost)',
                letterSpacing: '0.15em',
                marginBottom: '0.25rem',
              }}>
                PROJECT_{String(p.id).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
                fontWeight: 700,
                color: hovered === p.id ? p.color : 'var(--text-primary)',
                marginBottom: '0.25rem',
                transition: 'color 0.3s',
                textShadow: hovered === p.id ? `0 0 20px ${p.color}` : 'none',
              }}>
                {p.title}
              </h3>

              <div style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
                color: 'var(--text-ghost)',
                marginBottom: '1rem',
                letterSpacing: '0.05em',
              }}>
                {p.subtitle}
              </div>

              {/* Description */}
              <p style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: 'clamp(0.8rem, 2.2vw, 0.95rem)',
                color: 'var(--text-dim)',
                lineHeight: 1.7,
                marginBottom: '1.25rem',
              }}>
                {p.description}
              </p>

              {/* Tech stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(0.3rem, 1.5vw, 0.4rem)', marginBottom: '1.25rem' }}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    fontFamily: 'Share Tech Mono, monospace',
                    fontSize: 'clamp(0.55rem, 1.5vw, 0.6rem)',
                    color: 'var(--text-ghost)',
                    padding: 'clamp(0.15rem, 0.8vw, 0.2rem) clamp(0.5rem, 1.5vw, 0.6rem)',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border-dim)',
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: 'clamp(0.5rem, 2vw, 0.75rem)', flexWrap: 'wrap' }}>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon"
                    style={{
                      fontSize: 'clamp(0.55rem, 1.5vw, 0.6rem)',
                      padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.8rem, 2vw, 1rem)',
                      textDecoration: 'none',
                    }}
                  >
                    LIVE DEMO
                  </a>
                )}

                {p.source && (
                  <a
                    href={p.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon btn-neon-pink"
                    style={{
                      fontSize: 'clamp(0.55rem, 1.5vw, 0.6rem)',
                      padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.8rem, 2vw, 1rem)',
                      textDecoration: 'none',
                    }}
                  >
                    SOURCE
                  </a>
                )}
              </div>

              {/* Corner accent */}
              <div style={{
                position: 'absolute', bottom: 0, right: 0,
                width: 40, height: 40,
                borderTop: `1px solid ${p.color}`,
                borderLeft: `1px solid ${p.color}`,
                opacity: hovered === p.id ? 0.6 : 0,
                transition: 'opacity 0.3s',
                transform: 'rotate(180deg)',
              }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        @media (max-width: 768px) {
          .cyber-card {
            padding: clamp(1rem, 3vw, 1.5rem) !important;
          }
        }
      `}</style>
    </section>
  );
}