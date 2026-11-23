import { motion } from 'framer-motion';
import { User, Sparkles } from 'lucide-react';
import { ABOUT_DATA } from '../data/resumeData';

export default function About() {
  return (
    <section id="about" className="section-wrapper" aria-label="About K. Mohan Reddy">
      <div className="container">
        <div className="section-header">
          <span className="section-category">
            <User size={14} />
            Dossier // 01
          </span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            A background in modern web engineering and full-stack software development.
          </p>
        </div>

        <motion.div
          className="about-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="corner-mark corner-tl" aria-hidden="true" />
          <div className="corner-mark corner-tr" aria-hidden="true" />
          <div className="corner-mark corner-bl" aria-hidden="true" />
          <div className="corner-mark corner-br" aria-hidden="true" />

          <div className="about-grid">
            <div className="about-text-content">
              <p className="about-text-lead">
                <span className="about-lead-highlight">Entry-level MERN Stack Developer</span> with hands-on experience developing web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. Skilled in JavaScript, TypeScript, REST API development, database operations, JWT authentication, and responsive UI development. Experienced in building full-stack projects and contributing to frontend and backend features in a professional development environment.
              </p>
            </div>

            <div className="about-specs">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Sparkles size={16} color="var(--accent-rust)" />
                <span className="section-category" style={{ margin: 0 }}>
                  Profile Snapshot
                </span>
              </div>
              {ABOUT_DATA.highlights.map((item) => (
                <div key={item.label} className="about-spec-row">
                  <span className="about-spec-label">{item.label}</span>
                  <span className="about-spec-val" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    {item.label === 'Status' && (
                      <span className="pulse-dot" style={{ width: '6px', height: '6px', display: 'inline-block' }} aria-hidden="true" />
                    )}
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
