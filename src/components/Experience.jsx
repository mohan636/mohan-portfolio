import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/resumeData';

const EXPERIENCE_DOMAIN_TAGS = [
  'Frontend Architecture',
  'State Management & UI',
  'RESTful APIs & Database',
  'JWT Auth & Click Tracking',
];

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper" aria-label="Professional Experience">
      <div className="container">
        <div className="section-header">
          <span className="section-category">
            <Briefcase size={14} />
            Career // 04
          </span>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Hands-on professional experience building real-world frontend interfaces, backend services, and modular database architectures.
          </p>
        </div>

        <div className="experience-timeline">
          {EXPERIENCE_DATA.map((item, index) => (
            <motion.div
              key={item.company}
              className="experience-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
            >
              {/* Perfectly Centered Timeline Node Dot */}
              <span className="experience-timeline-dot" aria-hidden="true" />

              <div className="experience-header-grid">
                <div className="experience-title-group">
                  <h3 className="experience-company-title">{item.company}</h3>
                  <div className="experience-role-subline">
                    <span className="experience-role-pill">{item.position}</span>
                    <span className="badge-mono experience-status-badge">
                      <span className="pulse-dot" style={{ width: '6px', height: '6px' }} aria-hidden="true" />
                      Active Role
                    </span>
                  </div>
                </div>

                <div className="experience-date-badge">
                  <Calendar size={13} color="var(--accent-rust)" aria-hidden="true" />
                  <span>{item.duration}</span>
                </div>
              </div>

              <ul className="experience-bullet-list">
                {item.responsibilities.map((resp, idx) => (
                  <li key={idx} className="experience-bullet-item">
                    {EXPERIENCE_DOMAIN_TAGS[idx] && (
                      <span className="bullet-domain-tag">{EXPERIENCE_DOMAIN_TAGS[idx]}</span>
                    )}
                    <span className="experience-bullet-text">{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
