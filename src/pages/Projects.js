import React, { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'BOOKMYEVENT',
    subtitle: 'Event Management & Booking Platform',
    description: 'Developed a full-stack event management platform enabling event creation, booking, and user role management with secure JWT authentication and responsive UI for seamless user experience.',
    tech: ['React', 'Spring Boot', 'MySQL', 'JWT', 'Railway', 'Render', 'Vercel'],
    tag: 'FULL STACK',
    color: 'var(--neon-green)',
    status: 'LIVE',
    demo: 'https://bookmyevent25.vercel.app',
    source: 'https://github.com/DubeySumit25/bookmyevent-backend',
  }
];

const FILTERS = ['ALL', 'FULL STACK'];

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
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              style={{
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: '0.6rem',
                letterSpacing: '0.15em',
                padding: '0.4rem 1rem',
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className="cyber-card"
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                padding: '1.75rem',
                opacity: 0,
                animation: `fadeIn 0.5s ease ${i * 0.08}s forwards`,
              }}
            >
              {/* Top row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{
                  fontFamily: 'Share Tech Mono, monospace',
                  fontSize: '0.55rem',
                  letterSpacing: '0.2em',
                  color: p.color,
                  padding: '0.2rem 0.6rem',
                  border: `1px solid ${p.color}`,
                  opacity: 0.8,
                }}>
                  {p.tag}
                </span>
                <span style={{
                  fontFamily: 'Share Tech Mono, monospace',
                  fontSize: '0.55rem',
                  letterSpacing: '0.15em',
                  color: p.status === 'LIVE' ? 'var(--neon-green)' : 'var(--neon-pink)',
                  display: 'flex', alignItems: 'center', gap: '0.3rem',
                }}>
                  <span style={{
                    width: 6, height: 6, borderRadius: '50%',
                    background: p.status === 'LIVE' ? 'var(--neon-green)' : 'var(--neon-pink)',
                    boxShadow: `0 0 8px ${p.status === 'LIVE' ? 'var(--neon-green)' : 'var(--neon-pink)'}`,
                    animation: 'pulse-glow 2s infinite',
                  }} />
                  {p.status}
                </span>
              </div>

              {/* Project number */}
              <div style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: '0.6rem',
                color: 'var(--text-ghost)',
                letterSpacing: '0.15em',
                marginBottom: '0.25rem',
              }}>
                PROJECT_{String(p.id).padStart(2, '0')}
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: '1.1rem',
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
                fontSize: '0.85rem',
                color: 'var(--text-ghost)',
                marginBottom: '1rem',
                letterSpacing: '0.05em',
              }}>
                {p.subtitle}
              </div>

              {/* Description */}
              <p style={{
                fontFamily: 'Rajdhani, sans-serif',
                fontSize: '0.95rem',
                color: 'var(--text-dim)',
                lineHeight: 1.7,
                marginBottom: '1.25rem',
              }}>
                {p.description}
              </p>

              {/* Tech stack */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {p.tech.map(t => (
                  <span key={t} style={{
                    fontFamily: 'Share Tech Mono, monospace',
                    fontSize: '0.6rem',
                    color: 'var(--text-ghost)',
                    padding: '0.2rem 0.6rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border-dim)',
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <button
                  className="btn-neon"
                  style={{ fontSize: '0.6rem', padding: '0.5rem 1rem' }}
                  onClick={() => window.open(p.demo, '_blank')}
                >
                  LIVE DEMO
                </button>

                <button
                  className="btn-neon btn-neon-pink"
                  style={{ fontSize: '0.6rem', padding: '0.5rem 1rem' }}
                  onClick={() => window.open(p.source, '_blank')}
                >
                  SOURCE
                </button>
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
      `}</style>
    </section>
  );
}