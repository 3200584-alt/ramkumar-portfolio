import React from 'react';
import { GraduationCap, BookOpen, Calendar, MapPin, Star } from 'lucide-react';

export default function Education({ selectedCollege, onHighlightSkill }) {
  const education = [
    {
      school: "Dhanalakshmi Srinivasan Engineering College (Autonomous)",
      location: "Perambalur, TN",
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      period: "08/2020 – 04/2024",
      grade: "CGPA: 8.0/10",
      description: "Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), DBMS, Operating Systems, Computer Networks, Software Engineering.",
      image: "/images/ds_college.png"
    },
    {
      school: "Government Higher Secondary School",
      location: "Salem, TN",
      degree: "HSC (Bio-Maths) & SSLC",
      period: "06/2012 – 03/2020",
      grade: "HSC – 61% | SSLC – 84%",
      description: "Foundational secondary and higher secondary schooling in Salem with biology and mathematics specialization.",
      image: "/images/govt_school.png"
    },
    {
      school: "Covered Training Campus Hub",
      location: "Multiple Institutions, TN",
      degree: "Corporate Technical Trainer & Placement Advisor",
      period: "08/2024 – Present",
      grade: "10+ Engineering Colleges",
      description: "Delivering computational complexity workshops, DSA training, Python, Power BI modeling, and mock interviews to thousands of engineering undergraduates.",
      image: "/images/training_hub.png"
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Education & Campus Footprint</h2>
          <p className="section-subtitle">Academic background and my active footprints in schools and universities across Tamil Nadu.</p>
        </div>

        <div className="grid-3">
          {education.map((edu, idx) => {
            const isHighlighted = selectedCollege && edu.school.toLowerCase().includes(selectedCollege.toLowerCase());

            return (
              <div 
                key={idx} 
                className="glass-panel" 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  padding: 0,
                  border: isHighlighted ? '2px solid var(--color-primary)' : '1px solid var(--glass-border)',
                  boxShadow: isHighlighted ? '0 0 25px rgba(56, 189, 248, 0.4)' : 'none',
                  transform: isHighlighted ? 'scale(1.03)' : 'none',
                  transition: 'all 0.4s ease'
                }}
              >
                <div style={{ height: '180px', position: 'relative', width: '100%', overflow: 'hidden' }}>
                  <img 
                    src={edu.image} 
                    alt={edu.school} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(11, 19, 41, 0.2) 50%, rgba(11, 19, 41, 0.95) 100%)'
                  }} />
                </div>

                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '0.5rem', lineHeight: '1.3' }}>
                    {edu.school}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '0.75rem' }}>
                    {edu.degree}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    <MapPin size={14} />
                    <span>{edu.location}</span>
                    <span style={{ color: 'rgba(186, 230, 253, 0.2)' }}>|</span>
                    <Star size={12} style={{ color: 'var(--color-primary)' }} />
                    <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{edu.grade}</span>
                  </div>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5', textAlign: 'justify', marginTop: 'auto' }}>
                    {edu.description}
                  </p>

                  {idx === 0 && (
                    <div style={{ marginTop: '1rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      {["Data Structures", "OOP", "DBMS"].map(tag => (
                        <button 
                          key={tag}
                          onClick={() => {
                            onHighlightSkill(tag);
                            const skSection = document.getElementById('skills');
                            if (skSection) skSection.scrollIntoView({ behavior: 'smooth' });
                          }}
                          style={{
                            background: 'rgba(56, 189, 248, 0.08)',
                            border: '1px solid rgba(56, 189, 248, 0.15)',
                            borderRadius: '4px',
                            color: 'var(--color-primary)',
                            fontSize: '0.7rem',
                            padding: '0.2rem 0.4rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s'
                          }}
                          className="glow-on-hover"
                        >
                          Highlight {tag}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
