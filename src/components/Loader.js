import React, { useState, useEffect } from 'react';

const BOOT_LINES = [
  '> INITIALIZING NEURAL INTERFACE...',
  '> LOADING PORTFOLIO MODULES...',
  '> ESTABLISHING CONNECTION...',
  '> DECRYPTING SKILL MATRIX...',
  '> SYSTEM READY',
];

export default function Loader({ onDone }) {
  const [progress,    setProgress]    = useState(0);
  const [lineIndex,   setLineIndex]   = useState(0);
  const [exiting,     setExiting]     = useState(false);

  useEffect(() => {
    // Progress bar
    const prog = setInterval(() => {
      setProgress(p => {
        if (p >= 100) { clearInterval(prog); return 100; }
        return p + Math.random() * 4 + 1;
      });
    }, 60);

    // Boot lines
    const lineTimer = setInterval(() => {
      setLineIndex(i => {
        if (i >= BOOT_LINES.length - 1) { clearInterval(lineTimer); return i; }
        return i + 1;
      });
    }, 400);

    // Exit
    const exit = setTimeout(() => {
      setExiting(true);
      setTimeout(onDone, 600);
    }, 2800);

    return () => { clearInterval(prog); clearInterval(lineTimer); clearTimeout(exit); };
  }, [onDone]);

  return (
    <div className="loader-overlay" style={{
      opacity: exiting ? 0 : 1,
      transition: 'opacity 0.6s ease',
    }}>
      {/* Grid BG */}
      <div className="grid-bg" />

      {/* Spinning rings */}
      <div className="loader-rings">
        <div className="loader-ring-outer" />
        <div className="loader-ring-mid"   />
        <div className="loader-ring-inner" />
        <div className="loader-core"       />
      </div>

      {/* Logo text */}
      <div className="loader-text" style={{ marginTop: '2.5rem', fontSize: '1.2rem', fontFamily: 'Orbitron, monospace', color: 'var(--neon-cyan)', letterSpacing: '0.2em' }}>
        PORTFOLIO.SYS
      </div>

      {/* Boot lines */}
      <div style={{
        marginTop: '1.5rem',
        fontFamily: 'Share Tech Mono, monospace',
        fontSize: '0.65rem',
        color: 'var(--text-dim)',
        letterSpacing: '0.05em',
        minHeight: '7rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.35rem',
        width: '260px',
      }}>
        {BOOT_LINES.slice(0, lineIndex + 1).map((line, i) => (
          <div key={i} style={{
            color: i === lineIndex ? 'var(--neon-cyan)' : 'var(--text-ghost)',
            animation: i === lineIndex ? 'none' : undefined,
          }}>
            {line}
            {i === lineIndex && (
              <span style={{ animation: 'blink 0.8s infinite', marginLeft: '2px' }}>█</span>
            )}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div className="loader-bar-track">
        <div className="loader-bar-fill" style={{ width: `${Math.min(progress, 100)}%` }} />
      </div>
      <div style={{
        marginTop: '0.5rem',
        fontFamily: 'Share Tech Mono, monospace',
        fontSize: '0.6rem',
        color: 'var(--neon-cyan)',
        letterSpacing: '0.1em',
        opacity: 0.7,
      }}>
        {Math.min(Math.floor(progress), 100)}%
      </div>
    </div>
  );
}
