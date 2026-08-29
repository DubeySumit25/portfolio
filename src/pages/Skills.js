import React from 'react';

const SKILL_GROUPS = [
  {
    label: 'FRONTEND',
    color: 'var(--neon-cyan)',
    skills: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
  },

  {
    label: 'BACKEND',
    color: 'var(--neon-pink)',
    skills: ['Java', 'Spring Boot', 'Python', 'Django', 'Flask', 'REST APIs'],
  },

  {
    label: 'DATABASE',
    color: 'var(--neon-purple)',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase'],
  },

  {
    label: 'AI / ML',
    color: 'var(--neon-cyan)',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'PyTorch',
      'CNN',
      'Computer Vision',
      'Fine-Tuning',
      'LoRA / QLoRA',
    ],
  },

  {
    label: 'GEN AI',
    color: 'var(--neon-pink)',
    skills: [
      'LLMs',
      'RAG',
      'LangChain',
      'LangGraph',
      'MCP',
      'Embeddings',
      'Vector Databases',
    ],
  },

  {
    label: 'REAL-TIME',
    color: 'var(--neon-purple)',
    skills: [
      'WebSockets',
      'Real-Time Systems',
      'Event-Driven Architecture',
    ],
  },

  {
    label: 'ENGINEERING',
    color: 'var(--neon-cyan)',
    skills: [
      'DSA',
      'LLD',
      'OOP',
      'Git / GitHub',
      'Docker',
      'REST APIs',
    ],
  },
];
const TOOLS = [
  'Git', 'IntelliJ IDEA', 'VS Code', 'Postman',
  'Python', 'NumPy', 'Pandas', 'Scikit-Learn', 'LeetCode',
];

export default function Skills() {
  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="grid-bg" />
      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="section-label">// CAPABILITIES</div>
        <h2 className="section-title">SKILLS</h2>
        <div className="section-divider" />

        {/* Skill groups */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
          gap: 'clamp(1rem, 3vw, 1.5rem)',
          marginBottom: '3rem',
        }}>
          {SKILL_GROUPS.map((group) => (
            <div key={group.label} className="cyber-card" style={{ padding: 'clamp(1.25rem, 3.5vw, 2rem)' }}>

              {/* Group header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.75rem' }}>
                <div style={{
                  width: 3, height: 24,
                  background: group.color,
                  boxShadow: `0 0 10px ${group.color}`,
                }} />
                <span style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: group.color,
                  letterSpacing: '0.2em',
                }}>
                  {group.label}
                </span>
              </div>

              {/* Skill tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(0.4rem, 2vw, 0.5rem)' }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: 'Share Tech Mono, monospace',
                      fontSize: 'clamp(0.65rem, 1.8vw, 0.7rem)',
                      color: 'var(--text-dim)',
                      padding: 'clamp(0.3rem, 1.5vw, 0.4rem) clamp(0.7rem, 2vw, 0.9rem)',
                      border: '1px solid var(--border-dim)',
                      background: 'rgba(255,255,255,0.02)',
                      letterSpacing: '0.08em',
                      clipPath: 'polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%)',
                      transition: 'all 0.2s',
                      cursor: 'default',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = group.color;
                      e.currentTarget.style.borderColor = group.color;
                      e.currentTarget.style.background = 'rgba(0,245,255,0.05)';
                      e.currentTarget.style.boxShadow = `0 0 12px ${group.color}44`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = 'var(--text-dim)';
                      e.currentTarget.style.borderColor = 'var(--border-dim)';
                      e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div className="cyber-card" style={{ padding: 'clamp(1.25rem, 3.5vw, 2rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
            <div style={{ width: 3, height: 24, background: 'var(--neon-cyan)', boxShadow: 'var(--glow-cyan)' }} />
            <span style={{ fontFamily: 'Orbitron, monospace', fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)', fontWeight: 700, color: 'var(--neon-cyan)', letterSpacing: '0.2em' }}>
              TOOLS & TECHNOLOGIES
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(0.4rem, 2vw, 0.6rem)' }}>
            {TOOLS.map((t, i) => (
              <div key={t} style={{
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: 'clamp(0.65rem, 1.8vw, 0.7rem)',
                color: 'var(--text-dim)',
                padding: 'clamp(0.3rem, 1.5vw, 0.45rem) clamp(0.7rem, 2vw, 0.9rem)',
                border: '1px solid var(--border-dim)',
                background: 'rgba(0,245,255,0.02)',
                letterSpacing: '0.08em',
                cursor: 'default',
                transition: 'all 0.2s',
                clipPath: 'polygon(5px 0, 100% 0, calc(100% - 5px) 100%, 0 100%)',
                animation: `fadeIn 0.4s ease ${i * 0.04}s both`,
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--neon-cyan)';
                  e.currentTarget.style.borderColor = 'var(--neon-cyan)';
                  e.currentTarget.style.background = 'rgba(0,245,255,0.06)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(0,245,255,0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text-dim)';
                  e.currentTarget.style.borderColor = 'var(--border-dim)';
                  e.currentTarget.style.background = 'rgba(0,245,255,0.02)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
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