import React, { useEffect, useRef } from 'react';

export default function DataStreams() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');
    let W = canvas.width  = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノ∑∆∞Ωβ';
    const cols  = Math.floor(W / 18);
    const drops = Array.from({ length: cols }, () => Math.random() * -H);

    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    let raf;
    let last = 0;
    const draw = (ts) => {
      if (ts - last < 80) { raf = requestAnimationFrame(draw); return; }
      last = ts;

      ctx.fillStyle = 'rgba(3,6,16,0.06)';
      ctx.fillRect(0, 0, W, H);

      ctx.font = '13px "Share Tech Mono", monospace';
      drops.forEach((y, i) => {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const x  = i * 18;
        ctx.fillStyle = `rgba(0,245,255,${Math.random() * 0.5 + 0.3})`;
        ctx.fillText(ch, x, y);
        ctx.fillStyle = `rgba(0,245,255,0.06)`;
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], x, y - 18);
        drops[i] += 18;
        if (drops[i] > H + 50) drops[i] = Math.random() * -200;
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.18,
      }}
    />
  );
}
