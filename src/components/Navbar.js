import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const links = [
  { path: '/',         label: 'ABOUT'    },
  { path: '/projects', label: 'PROJECTS' },
  { path: '/skills',   label: 'SKILLS'   },
  { path: '/contact',  label: 'CONTACT'  },
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled,  setScrolled]  = useState(false);
  const [time,      setTime]      = useState('');
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    const tick = () => setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    tick();
    const t = setInterval(tick, 1000);
    return () => { window.removeEventListener('scroll', onScroll); clearInterval(t); };
  }, []);

  // Close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  return (
    <>
      <nav className="nav" style={{
        boxShadow: scrolled ? '0 4px 30px rgba(0,245,255,0.05)' : 'none',
      }}>
        {/* Logo */}
        <Link to="/" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: 'var(--neon-pink)' }}>&lt;</span>
          DEV
          <span style={{ color: 'var(--neon-pink)' }}>/&gt;</span>
        </Link>

        {/* Desktop links */}
        <ul className="nav-links" style={{ display: 'flex' }}>
          {links.map(l => (
            <li key={l.path}>
              <Link
                to={l.path}
                className={location.pathname === l.path ? 'active' : ''}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Clock — desktop only */}
        <div className="nav-clock" style={{
          fontFamily: 'Share Tech Mono, monospace',
          fontSize: '0.65rem',
          color: 'var(--text-ghost)',
          letterSpacing: '0.1em',
        }}>
          {time}
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="hamburger"
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid var(--border-dim)',
            color: menuOpen ? 'var(--neon-pink)' : 'var(--neon-cyan)',
            padding: '0.4rem 0.75rem',
            cursor: 'pointer',
            fontFamily: 'Share Tech Mono, monospace',
            fontSize: '1rem',
            lineHeight: 1,
            transition: 'color 0.2s, border-color 0.2s',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: '60px',
          left: 0, right: 0,
          background: 'rgba(3,6,16,0.98)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border-dim)',
          zIndex: 999,
          padding: '1rem 0',
          display: 'flex',
          flexDirection: 'column',
        }}>
          {links.map(l => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'Share Tech Mono, monospace',
                fontSize: '0.85rem',
                color: location.pathname === l.path ? 'var(--neon-cyan)' : 'var(--text-dim)',
                textDecoration: 'none',
                padding: '0.9rem 2rem',
                letterSpacing: '0.2em',
                borderLeft: location.pathname === l.path ? '2px solid var(--neon-cyan)' : '2px solid transparent',
                transition: 'all 0.2s',
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .nav-clock { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}