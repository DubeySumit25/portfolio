import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function GlitchText({ text }) {
  const [glitched, setGlitched] = useState(false);
  useEffect(() => {
    const t = setInterval(() => {
      setGlitched(true);
      setTimeout(() => setGlitched(false), 150);
    }, 3500);
    return () => clearInterval(t);
  }, []);
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{
        animation: glitched ? 'glitch 0.15s steps(2) forwards' : 'none',
        display: 'inline-block',
      }}>
        {text}
      </span>
    </span>
  );
}

const ROLES = ['Full Stack Developer','DSA Enthusiast','AI/ML Enthusiast','Problem Solver'];

export default function About() {
  const [roleIdx, setRoleIdx]   = useState(0);
  const [typed,   setTyped]     = useState('');
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible]   = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  useEffect(() => {
    const role = ROLES[roleIdx];
    let timeout;
    if (!deleting) {
      if (typed.length < role.length) {
        timeout = setTimeout(() => setTyped(role.slice(0, typed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (typed.length > 0) {
        timeout = setTimeout(() => setTyped(typed.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIdx((roleIdx + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [typed, deleting, roleIdx]);

  const stats = [
    { value: '8.5',   label: 'CGPA' },
    { value: '10+', label: 'PROJECTS' },
    { value: '10+', label: 'TECHNOLOGIES' },
    { value: '250+',   label: 'LEETCODE' },
  ];

  return (
    <section className="section" style={{ position: 'relative', display: 'flex', alignItems: 'center', minHeight: '100vh', overflow: 'hidden' }}>
      <div className="grid-bg" />

      {/* Decorative orbs */}
      <div style={{
        position: 'absolute', top: '20%', right: '5%',
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(0,245,255,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '15%', left: '2%',
        width: '250px', height: '250px',
        background: 'radial-gradient(circle, rgba(255,0,110,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse',
        pointerEvents: 'none',
      }} />

      <div className="section-inner" style={{ position: 'relative', zIndex: 1, paddingTop: '6rem' }}>
        {/* Status badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.4rem 1rem',
          border: '1px solid rgba(57,255,20,0.3)',
          marginBottom: '2rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease 0.1s',
        }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--neon-green)', boxShadow: '0 0 10px var(--neon-green)', animation: 'pulse-glow 2s infinite' }} />
          <span style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.65rem', color: 'var(--neon-green)', letterSpacing: '0.2em' }}>AVAILABLE FOR WORK</span>
        </div>

        {/* Name */}
        <div style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s ease 0.2s',
        }}>
          <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.75rem', color: 'var(--neon-cyan)', letterSpacing: '0.3em', marginBottom: '0.75rem', opacity: 0.7 }}>
            // HELLO WORLD
          </div>
          <h1 style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            fontWeight: 900,
            lineHeight: 1,
            marginBottom: '0.5rem',
            letterSpacing: '-0.02em',
          }}>
            <GlitchText text="SUMIT " />
            <br />
            <span style={{
              background: 'linear-gradient(135deg, var(--neon-cyan) 0%, var(--neon-purple) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: 'none',
            }}>
              DUBEY
            </span>
          </h1>
        </div>

        {/* Typewriter role */}
        <div style={{
          fontFamily: 'Orbitron, monospace',
          fontSize: 'clamp(1rem, 3vw, 1.5rem)',
          color: 'var(--text-dim)',
          marginBottom: '2rem',
          minHeight: '2em',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease 0.4s',
        }}>
          <span style={{ color: 'var(--neon-pink)' }}>&gt; </span>
          {typed}
          <span style={{ animation: 'blink 0.8s infinite', color: 'var(--neon-cyan)' }}>|</span>
        </div>

        {/* Bio */}
        <p style={{
          fontFamily: 'Rajdhani, sans-serif',
          fontSize: '1.1rem',
          color: 'var(--text-dim)',
          maxWidth: '560px',
          lineHeight: 1.8,
          marginBottom: '2.5rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease 0.5s',
        }}>
          2nd year IT student and aspiring Full Stack Java Developer, passionate about DSA and AI/ML.
I build end-to-end apps with Java, Spring Boot and React while exploring
the world of Machine Learning. Always learning, always building.
        </p>

        {/* CTA buttons */}
        <div style={{
          display: 'flex', gap: '1rem', flexWrap: 'wrap',
          marginBottom: '4rem',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease 0.6s',
        }}>
          <Link to="/projects" className="btn-neon">VIEW PROJECTS</Link>
          <Link to="/contact"  className="btn-neon btn-neon-pink">GET IN TOUCH</Link>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
          gap: '1px',
          maxWidth: '500px',
          background: 'var(--border-dim)',
          border: '1px solid var(--border-dim)',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease 0.7s',
        }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              background: 'var(--bg-card)',
              padding: '1.25rem',
              textAlign: 'center',
            }}>
              <div style={{ fontFamily: 'Orbitron, monospace', fontSize: '1.6rem', fontWeight: 800, color: 'var(--neon-cyan)', lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.55rem', color: 'var(--text-ghost)', letterSpacing: '0.15em', marginTop: '0.4rem' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        opacity: 0.4,
      }}>
        <span style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.55rem', letterSpacing: '0.2em', color: 'var(--text-ghost)' }}>SCROLL</span>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--neon-cyan), transparent)',
          animation: 'pulse-glow 2s infinite',
        }} />
      </div>
    </section>
  );
}
