import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import DataStreams from './components/DataStreams';

function Cursor() {
  const dot  = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    const move = (e) => {
      const x = e.clientX, y = e.clientY;
      dot.current.style.transform  = `translate(${x - 4}px, ${y - 4}px)`;
      ring.current.style.transform = `translate(${x - 16}px, ${y - 16}px)`;
    };
    const over = (e) => {
      if (e.target.closest('a, button, .btn-neon, [role="button"]'))
        ring.current.classList.add('hovering');
      else ring.current.classList.remove('hovering');
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); };
  }, []);

  return (
    <>
      <div className="cursor-dot"  ref={dot}  />
      <div className="cursor-ring" ref={ring} />
    </>
  );
}

function PageTransition({ children }) {
  const location = useLocation();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, [location]);

  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(12px)',
      transition: 'opacity 0.4s ease, transform 0.4s ease'
    }}>
      {children}
    </div>
  );
}

function AppInner() {
  return (
    <>
      <Navbar />
      <DataStreams />
      <PageTransition>
        <Routes>
          <Route path="/"         element={<About />}    />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills"   element={<Skills />}   />
          <Route path="/contact"  element={<Contact />}  />
        </Routes>
      </PageTransition>
    </>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <BrowserRouter>
      <Cursor />
      {loading
        ? <Loader onDone={() => setLoading(false)} />
        : <AppInner />
      }
    </BrowserRouter>
  );
}