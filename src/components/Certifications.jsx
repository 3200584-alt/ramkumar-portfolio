import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const certs = [
    { name: "Data Visualization with Python", issuer: "IBM" },
    { name: "React JS", issuer: "Techpathshala" },
    { name: "Python for Data Science", issuer: "Udemy" },
    { name: "C++ (Advanced)", issuer: "HackerRank" },
    { name: "Data Analysis", issuer: "OpenLearn" },
    { name: "SQL (Advanced)", issuer: "HackerRank" },
    { name: "Big Data Hadoop", issuer: "Professional" },
    { name: "Microsoft AI Skills Challenge", issuer: "Microsoft" },
    { name: "Google Analytics", issuer: "Google" }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications & Accreditations</h2>
          <p className="section-subtitle">Credential verifications verifying analytical knowledge and framework engineering competencies.</p>
        </div>

        <div className="grid-3" style={{ gap: '1.5rem' }}>
          {certs.map((c, idx) => (
            <div 
              key={idx} 
              className="glass-panel glow-on-hover" 
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.25rem 1.5rem',
                border: '1px solid var(--glass-border)',
                background: 'rgba(28, 37, 65, 0.3)'
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(56, 189, 248, 0.12)',
                color: 'var(--color-primary)'
              }}>
                <Award size={18} />
              </div>

              <div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>
                  {c.name}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.2rem' }}>
                  <ShieldCheck size={12} style={{ color: 'var(--color-primary)' }} />
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{c.issuer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
