import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section" style={{ paddingBottom: '6rem' }}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Interested in placement workshops, coding bootcamps, or data consulting? Drop a message!</p>
        </div>

        <div className="glass-panel" style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '2.5rem',
          border: '1px solid var(--glass-border)',
          background: 'rgba(28, 37, 65, 0.3)'
        }}>
          {submitted ? (
            <div style={{
              textAlign: 'center',
              padding: '2rem 0',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              animation: 'fadeIn 0.5s ease-out'
            }}>
              <CheckCircle size={48} style={{ color: 'var(--color-primary)' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700 }}>
                Message Sent Successfully!
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Thank you, Ramkumar will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={inputGroupStyle}>
                <label style={labelStyle}>Your Name</label>
                <input 
                  type="text" 
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={inputStyle} 
                  placeholder="John Doe" 
                />
              </div>

              <div style={inputGroupStyle}>
                <label style={labelStyle}>Email Address</label>
                <input 
                  type="email" 
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={inputStyle} 
                  placeholder="john@example.com" 
                />
              </div>

              <div style={inputGroupStyle}>
                <label style={labelStyle}>Your Message</label>
                <textarea 
                  rows="4" 
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }} 
                  placeholder="Hi Ramkumar, we would love to have you conduct a workshop..."
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{
                justifyContent: 'center',
                padding: '0.85rem',
                borderRadius: '12px',
                marginTop: '0.5rem'
              }}>
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.4rem'
};

const labelStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: '0.85rem',
  fontWeight: 600,
  color: 'var(--text-secondary)'
};

const inputStyle = {
  background: 'rgba(15, 23, 42, 0.45)',
  border: '1px solid var(--glass-border)',
  borderRadius: '10px',
  color: '#ffffff',
  padding: '0.75rem 1rem',
  fontSize: '0.9rem',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'all 0.3s ease'
};
