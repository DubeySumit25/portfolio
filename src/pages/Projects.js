import React, { useState } from 'react';

const PROJECTS = [
  {
    id: 1,
    title: 'NEURAL COMMERCE',
    subtitle: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with AI-powered recommendations, real-time inventory management, and seamless payment integration.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'Redis', 'Docker'],
    tag: 'FULL STACK',
    color: 'var(--neon-cyan)',
    status: 'LIVE',
  },
  {
    id: 2,
    title: 'TASK MATRIX',
    subtitle: 'Project Management Tool',
    description: 'Collaborative task management system with real-time updates via WebSockets, drag-and-drop boards, and team analytics dashboard.',
    tech: ['React', 'Spring Boot', 'WebSocket', 'MongoDB'],
    tag: 'WEB APP',
    color: 'var(--neon-purple)',
    status: 'LIVE',
  },
  {
    id: 3,
    title: 'BOOKMYEVENT',
    subtitle: 'Event Management & Booking Platform',
    description: 'Full-stack event booking platform with JWT authentication, role-based access for organizers & buyers, ticket booking system, and email notifications.',
    tech: ['React', 'Spring Boot', 'MySQL', 'JWT', 'Railway', 'Render', 'Vercel'],
    tag: 'FULL STACK',
    color: 'var(--neon-green)',
    status: 'LIVE',
    demo: 'https://bookmyevent25.vercel.app',
    source: 'https://github.com/DubeySumit25/bookmyevent-backend',
  },
  {
    id: 4,
    title: 'SECURE VAULT',
    subtitle: 'Authentication Microservice',
    description: 'Enterprise-grade authentication and authorization microservice with JWT, OAuth2, and multi-factor authentication support.',
    tech: ['Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL'],
    tag: 'BACKEND',
    color: 'var(--neon-pink)',
    status: 'IN DEV',
  },
  {
    id: 5,
    title: 'DATA PULSE',
    subtitle: 'Real-Time Analytics Engine',
    description: 'High-throughput data pipeline processing millions of events per second with live visualization and anomaly detection.',
    tech: ['Kafka', 'Spring Boot', 'ClickHouse', 'Grafana'],
    tag: 'DATA ENG',
    color: 'var(--neon-cyan)',
    status: 'LIVE',
  },
  {
    id: 6,
    title: 'CHAT NEXUS',
    subtitle: 'Messaging Platform',
    description: 'Scalable real-time chat application supporting group channels, file sharing, and end-to-end encryption.',
    tech: ['React', 'Spring Boot', 'WebSocket', 'Redis', 'S3'],
    tag: 'FULL STACK',
    color: 'var(--neon-purple)',
    status: 'LIVE',
  },
];

const FILTERS = ['ALL', 'FULL STACK', 'BACKEND', 'WEB APP', 'DASHBOARD', 'DATA ENG'];

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
                {p.demo && (
                  <button
                    className="btn-neon"
                    style={{ fontSize: '0.6rem', padding: '0.5rem 1rem' }}
                    onClick={() => window.open(p.demo, '_blank')}
                  >
                    LIVE DEMO
                  </button>
                )}
                {p.source && (
                  <button
                    className="btn-neon btn-neon-pink"
                    style={{ fontSize: '0.6rem', padding: '0.5rem 1rem' }}
                    onClick={() => window.open(p.source, '_blank')}
                  >
                    SOURCE
                  </button>
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
      `}</style>
    </section>
  );
}