import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID  = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY  = process.env.REACT_APP_PUBLIC_KEY;

const SOCIALS = [
  { label: 'GITHUB',   href: 'https://github.com/DubeySumit25',                    icon: '⌥' },
  { label: 'LINKEDIN', href: 'https://www.linkedin.com/in/sumit-dubey-9a0226322/', icon: '⊞' },
];

function Field({ label, name, type = 'text', textarea, value, onChange, error }) {
  const [focused, setFocused] = useState(false);
  const shared = {
    fontFamily: 'Rajdhani, sans-serif',
    fontSize: '1rem',
    color: 'var(--text-primary)',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    width: '100%',
    resize: 'none',
    cursor: 'none',
  };
  return (
    <div style={{ marginBottom: '1.5rem' }}>
      <label style={{
        display: 'block',
        fontFamily: 'Share Tech Mono, monospace',
        fontSize: '0.6rem',
        letterSpacing: '0.2em',
        color: focused ? 'var(--neon-cyan)' : 'var(--text-ghost)',
        marginBottom: '0.5rem',
        transition: 'color 0.2s',
      }}>
        {label}
      </label>
      <div style={{
        border: `1px solid ${error ? 'var(--neon-pink)' : focused ? 'var(--neon-cyan)' : 'var(--border-dim)'}`,
        background: focused ? 'rgba(0,245,255,0.02)' : 'var(--bg-card)',
        padding: '0.75rem 1rem',
        transition: 'border-color 0.2s, background 0.2s, box-shadow 0.2s',
        boxShadow: focused ? (error ? 'var(--glow-pink)' : '0 0 15px rgba(0,245,255,0.1)') : 'none',
        clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
      }}>
        {textarea
          ? <textarea name={name} rows={5} value={value} onChange={onChange}
              onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
              style={shared} />
          : <input name={name} type={type} value={value} onChange={onChange}
              onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
              style={shared} />
        }
      </div>
      {error && (
        <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.6rem', color: 'var(--neon-pink)', marginTop: '0.3rem', letterSpacing: '0.1em' }}>
          ⚠ {error}
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  const [form,    setForm]    = useState({ name: '', email: '', subject: '', message: '' });
  const [errors,  setErrors]  = useState({});
  const [status,  setStatus]  = useState('idle');
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const validate = () => {
    const e = {};
    if (!form.name.trim())    e.name    = 'NAME REQUIRED';
    if (!form.email.trim())   e.email   = 'EMAIL REQUIRED';
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'INVALID EMAIL FORMAT';
    if (!form.subject.trim()) e.subject = 'SUBJECT REQUIRED';
    if (!form.message.trim()) e.message = 'MESSAGE REQUIRED';
    return e;
  };

  const onChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(err => ({ ...err, [e.target.name]: '' }));
  };

  const onSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }

    setLoading(true);
    setStatus('sending');

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject,
          message:    form.message,
        },
        PUBLIC_KEY
      );
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="grid-bg" />
      <div className="section-inner" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="section-label">// REACH OUT</div>
        <h2 className="section-title">CONTACT</h2>
        <div className="section-divider" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem' }}>

          {/* Left: info */}
          <div>
            <p style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '1.05rem', color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Have a project in mind or want to discuss opportunities?
              I'm always open to interesting conversations and new challenges.
              Drop a message and I'll get back to you within 24 hours.
            </p>

            {/* Contact details */}
            <div style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'LOCATION', value: 'Delhi, India' },
                { label: 'EMAIL',    value: 'sumit25dubey@gmail.com' },
                { label: 'STATUS',   value: 'Open to opportunities', highlight: true },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '1rem' }}>
                  <span style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.6rem', color: 'var(--text-ghost)', letterSpacing: '0.15em', minWidth: '80px', paddingTop: '2px' }}>
                    {item.label}
                  </span>
                  <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: '1rem', color: item.highlight ? 'var(--neon-green)' : 'var(--text-primary)' }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  style={{
                    fontFamily: 'Share Tech Mono, monospace',
                    fontSize: '0.6rem',
                    color: 'var(--text-dim)',
                    textDecoration: 'none',
                    padding: '0.5rem 0.9rem',
                    border: '1px solid var(--border-dim)',
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    transition: 'all 0.2s',
                    letterSpacing: '0.1em',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = 'var(--neon-cyan)';
                    e.currentTarget.style.borderColor = 'var(--neon-cyan)';
                    e.currentTarget.style.boxShadow = 'var(--glow-cyan)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'var(--text-dim)';
                    e.currentTarget.style.borderColor = 'var(--border-dim)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span>{s.icon}</span> {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="cyber-card" style={{ padding: '2rem' }}>
            {status === 'success' ? (
              <div style={{ textAlign: 'center', padding: '3rem 2rem' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                <div style={{ fontFamily: 'Orbitron, monospace', fontSize: '1rem', color: 'var(--neon-green)', marginBottom: '0.75rem', letterSpacing: '0.15em' }}>
                  MESSAGE SENT
                </div>
                <p style={{ fontFamily: 'Rajdhani, sans-serif', color: 'var(--text-dim)', fontSize: '1rem' }}>
                  Transmission received. I'll be in touch shortly.
                </p>
                <button className="btn-neon" style={{ marginTop: '2rem' }} onClick={() => setStatus('idle')}>
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 1.5rem' }}>
                  <Field label="NAME"   name="name"  value={form.name}    onChange={onChange} error={errors.name} />
                  <Field label="EMAIL"  name="email" type="email" value={form.email}   onChange={onChange} error={errors.email} />
                </div>
                <Field label="SUBJECT"  name="subject" value={form.subject} onChange={onChange} error={errors.subject} />
                <Field label="MESSAGE"  name="message" textarea value={form.message} onChange={onChange} error={errors.message} />

                {status === 'error' && (
                  <div style={{ fontFamily: 'Share Tech Mono, monospace', fontSize: '0.65rem', color: 'var(--neon-pink)', marginBottom: '1rem', padding: '0.75rem', border: '1px solid rgba(255,0,110,0.3)', background: 'rgba(255,0,110,0.05)' }}>
                    ⚠ TRANSMISSION FAILED — PLEASE TRY AGAIN
                  </div>
                )}

                <button
                  className="btn-neon"
                  onClick={onSubmit}
                  disabled={loading}
                  style={{ width: '100%', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: loading ? 0.7 : 1 }}
                >
                  {loading ? (
                    <>
                      <span style={{ display: 'inline-block', width: 14, height: 14, border: '1.5px solid var(--neon-cyan)', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin-slow 0.7s linear infinite' }} />
                      TRANSMITTING...
                    </>
                  ) : 'SEND MESSAGE'}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .section-inner > div > div:first-child { display: none !important; }
          .section-inner > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}