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
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime]         = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    const tick = () => setTime(new Date().toLocaleTimeString('en-US', { hour12: false }));
    tick();
    const t = setInterval(tick, 1000);
    return () => { window.removeEventListener('scroll', onScroll); clearInterval(t); };
  }, []);

  return (
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
      <ul className="nav-links">
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

      {/* Live clock */}
      <div style={{
        fontFamily: 'Share Tech Mono, monospace',
        fontSize: '0.65rem',
        color: 'var(--text-ghost)',
        letterSpacing: '0.1em',
      }}>
        {time}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
