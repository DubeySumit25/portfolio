import React from 'react';

const SKILL_GROUPS = [
  {
    label: 'FRONTEND',
    color: 'var(--neon-cyan)',
    skills: ['React / Next.js', 'TypeScript', 'CSS / Tailwind', 'HTML5'],
  },
  {
    label: 'BACKEND',
    color: 'var(--neon-pink)',
    skills: ['Spring Boot', 'Java', 'Node.js', 'REST / GraphQL'],
  },
  {
    label: 'DATABASE',
    color: 'var(--neon-purple)',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL'],
  },
  {
    label: 'DSA',
    color: 'var(--neon-cyan)',
    skills: ['Arrays / Strings', 'Trees / Graphs', 'Dynamic Programming', 'Sorting / Searching'],
  },
  {
    label: 'AI / ML',
    color: 'var(--neon-pink)',
    skills: ['Python', 'NumPy / Pandas', 'Scikit-Learn', 'TensorFlow / Keras'],
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(460px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          {SKILL_GROUPS.map((group) => (
            <div key={group.label} className="cyber-card" style={{ padding: '2rem' }}>

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
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    style={{
                      fontFamily: 'Share Tech Mono, monospace',
                      fontSize: '0.7rem',
                      color: 'var(--text-dim)',
                      padding: '0.4rem 0.9rem',
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
        <div className="cyber-card" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <div style={{ width: 3, height: 24, background: 'var(--neon-cyan)', boxShadow: 'var(--glow-cyan)' }} />
            <span style={{ fontFamily: 'Orbitron, monospace', fontSize: '0.75rem', fontWeight: 700, color: 'var(--neon-cyan)', letterSpacing: '0.2em' }}>
              TOOLS & TECHNOLOGIES
            </span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {TOOLS.map((t, i) => (
              <div key={t} style={{
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: '0.7rem',
                color: 'var(--text-dim)',
                padding: '0.45rem 0.9rem',
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
      `}</style>
    </section>
  );
}