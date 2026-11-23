import { motion } from 'framer-motion';
import { Award, Building2, Calendar, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/resumeData';

export default function Certifications() {
  return (
    <div aria-label="Certifications">
      {CERTIFICATIONS_DATA.map((cert, index) => (
        <motion.div
          key={cert.title}
          className="cert-card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
        >
          {/* Header with Prominent Title & Certificate Icon */}
          <div className="cert-header">
            <div className="cert-icon-badge" aria-hidden="true">
              <Award size={24} color="var(--accent-rust)" />
            </div>
            <div>
              <span className="cert-credential-stamp">Professional Credential</span>
              <h4 className="cert-title">{cert.title}</h4>
            </div>
          </div>

          {/* Institution & Completion Year */}
          <div className="cert-meta-row">
            <div className="cert-meta-item">
              <Building2 size={15} color="var(--accent-olive)" />
              <span className="cert-institution">{cert.institution}</span>
            </div>
            <div className="cert-meta-item">
              <Calendar size={14} color="var(--text-muted)" />
              <span className="cert-year-badge">Year of Completion: {cert.year}</span>
            </div>
          </div>

          {/* Description Bullet Points */}
          {cert.description && (
            <ul className="cert-description-list">
              {cert.description.map((point, idx) => (
                <li key={idx} className="cert-description-item">
                  <CheckCircle2 size={16} className="cert-point-icon" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </div>
  );
}
