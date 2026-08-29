import React, { useState } from 'react';

const EXPERIENCES = [
  {
    id: 1,
    company: 'ENGINEERS INDIA LIMITED',
    division: 'ITS DIVISION',
    position: 'BACKEND DEVELOPMENT INTERN',
    type: 'COMPLETED INTERNSHIP',
    startDate: 'JUN 11',
    endDate: 'JUL 10',
    year: '2026',
    duration: '1 Month',
    project: 'AUTHENTICATION OF AUTHORISED USER',
    description:
      'Worked on a backend authentication project focused on secure user authentication and authorization using Java Spring Boot. Implemented enterprise-grade security practices with Spring Security and developed features for handling user sessions and permissions.',
    responsibilities: [
      'Developed authentication functionality for authorised users.',
      'Implemented a Forgot Password workflow using email-based verification.',
      'Worked with Spring Security for authentication and authorization.',
      'Developed backend functionality using Java and Spring Boot.',
      'Gained hands-on experience working on a practical backend application.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Authentication',
      'Authorization',
      'Email Verification',
      'REST APIs',
    ],
    status: 'COMPLETED',
    color: 'var(--neon-cyan)',
  },
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState(null);

  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="grid-bg" />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="section-label">// 04 — CAREER_LOG</div>
        <h1 className="section-title">
          EXPERIENCE<span className="title-accent">.</span>
        </h1>
        <div className="section-divider" />

        {/* Experience Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(1rem, 3vw, 2rem)',
            marginBottom: '3rem',
          }}
        >
          {EXPERIENCES.map((exp, idx) => (
            <div
              key={exp.id}
              className="cyber-card"
              style={{
                padding: 'clamp(1rem, 4vw, 2rem)',
                border: `1px solid ${exp.color}33`,
                borderLeft: `3px solid ${exp.color}`,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                transform: expandedId === exp.id ? 'scale(1.005)' : 'scale(1)',
                overflow: 'hidden',
              }}
              onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderLeftColor = exp.color;
                e.currentTarget.style.boxShadow = `0 0 20px ${exp.color}33, inset 0 0 20px ${exp.color}11`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderLeftColor = exp.color;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.3rem 0.8rem',
                        marginBottom: '0.75rem',
                        border: `1px solid ${exp.color}`,
                        borderRadius: '4px',
                        fontFamily: 'Share Tech Mono, monospace',
                        fontSize: '0.55rem',
                        color: exp.color,
                        letterSpacing: '0.1em',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          background: exp.color,
                          boxShadow: `0 0 8px ${exp.color}`,
                          animation: 'pulse-glow 2s infinite',
                        }}
                      />
                      {exp.type}
                    </span>

                    <h2
                      style={{
                        fontSize: 'clamp(1rem, 4vw, 1.3rem)',
                        fontFamily: 'Orbitron, monospace',
                        marginBottom: '0.5rem',
                        color: exp.color,
                        textShadow: `0 0 10px ${exp.color}33`,
                        wordBreak: 'break-word',
                      }}
                    >
                      {exp.company}
                    </h2>
                  </div>

                  {/* Date - Mobile and Desktop */}
                  <div
                    style={{
                      textAlign: 'right',
                      fontFamily: 'Share Tech Mono, monospace',
                      fontSize: '0.75rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <div style={{ color: exp.color, fontWeight: 'bold', marginBottom: '0.25rem' }}>
                      {exp.startDate}
                    </div>
                    <div style={{ color: 'var(--text-dim)', fontSize: '0.65rem' }}>
                      {exp.endDate} {exp.year}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      fontSize: 'clamp(0.7rem, 2.5vw, 0.85rem)',
                      color: 'var(--text-dim)',
                      fontFamily: 'Share Tech Mono, monospace',
                      flexWrap: 'wrap',
                    }}
                  >
                    <span>{exp.division}</span>
                    <span style={{ color: 'var(--text-ghost)' }}>///</span>
                    <span>{exp.position}</span>
                  </div>

                  <div
                    style={{
                      fontSize: 'clamp(0.7rem, 2vw, 0.8rem)',
                      color: 'var(--text-ghost)',
                      fontFamily: 'Share Tech Mono, monospace',
                    }}
                  >
                    Duration: {exp.duration}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: '1px',
                  background: `linear-gradient(90deg, ${exp.color}33, transparent)`,
                  margin: '1.5rem 0',
                }}
              />

              {/* Project Section */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Share Tech Mono, monospace',
                      fontSize: '0.7rem',
                      color: exp.color,
                      letterSpacing: '0.1em',
                      fontWeight: 'bold',
                    }}
                  >
                    PROJECT
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: '1px',
                      background: `linear-gradient(90deg, ${exp.color}33, transparent)`,
                    }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(0.95rem, 3vw, 1.1rem)',
                    fontFamily: 'Rajdhani, sans-serif',
                    marginBottom: '0.5rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  {exp.project}
                </h3>
                <p style={{ fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)', color: 'var(--text-dim)', lineHeight: 1.6 }}>
                  {exp.description}
                </p>
              </div>

              {/* Expandable Content */}
              {expandedId === exp.id && (
                <div
                  style={{
                    animation: 'fadeInDown 0.3s ease',
                    marginTop: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      height: '1px',
                      background: `linear-gradient(90deg, ${exp.color}33, transparent)`,
                      margin: '1.5rem 0',
                    }}
                  />

                  {/* Contributions */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Share Tech Mono, monospace',
                          fontSize: '0.7rem',
                          color: exp.color,
                          letterSpacing: '0.1em',
                          fontWeight: 'bold',
                        }}
                      >
                        01 — CONTRIBUTIONS
                      </span>
                    </div>
                    <ul
                      style={{
                        listStyle: 'none',
                        display: 'grid',
                        gap: '0.75rem',
                      }}
                    >
                      {exp.responsibilities.map((resp, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            gap: '0.75rem',
                            fontSize: 'clamp(0.75rem, 2vw, 0.9rem)',
                            color: 'var(--text-dim)',
                            alignItems: 'flex-start',
                          }}
                        >
                          <span
                            style={{
                              color: exp.color,
                              fontFamily: 'Share Tech Mono, monospace',
                              fontSize: '0.75rem',
                              fontWeight: 'bold',
                              minWidth: '1.5rem',
                            }}
                          >
                            0{i + 1}
                          </span>
                          <span style={{ color: exp.color, opacity: 0.6 }}>›</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'Share Tech Mono, monospace',
                          fontSize: '0.7rem',
                          color: exp.color,
                          letterSpacing: '0.1em',
                          fontWeight: 'bold',
                        }}
                      >
                        02 — TECH STACK
                      </span>
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                      }}
                    >
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            padding: '0.35rem 0.6rem',
                            border: `1px solid ${exp.color}`,
                            borderRadius: '3px',
                            fontSize: 'clamp(0.6rem, 1.8vw, 0.75rem)',
                            color: exp.color,
                            fontFamily: 'Share Tech Mono, monospace',
                            backgroundColor: `${exp.color}11`,
                            transition: 'all 0.2s ease',
                            cursor: 'default',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Status Footer */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: expandedId === exp.id ? '1.5rem' : '1rem',
                  paddingTop: '1rem',
                  borderTop: `1px solid ${exp.color}22`,
                  fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
                  fontFamily: 'Share Tech Mono, monospace',
                  color: 'var(--text-ghost)',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                }}
              >
                <span>SYS.STATUS :: {exp.status}</span>
                <span>{exp.company.split(' ').slice(-1)[0]} // {exp.division.split(' ')[0]}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          style={{
            padding: 'clamp(1rem, 4vw, 2rem)',
            border: `1px solid var(--neon-green)33`,
            borderRadius: '4px',
            textAlign: 'center',
            backgroundColor: 'var(--neon-green)08',
          }}
        >
          <p style={{ color: 'var(--text-dim)', marginBottom: '1rem', fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)' }}>
            
          </p>
          <p
            style={{
              fontFamily: 'Share Tech Mono, monospace',
              fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
              color: 'var(--text-ghost)',
              letterSpacing: '0.1em',
            }}
          >
           
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}

