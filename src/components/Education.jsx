import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';
import { EDUCATION_DATA } from '../data/resumeData';

export default function Education() {
  return (
    <div className="edu-stack" aria-label="Academic History">
      {EDUCATION_DATA.map((item, index) => (
        <motion.div
          key={item.institution}
          className="edu-card"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
        >
          <div className="edu-top-row">
            <h4 className="edu-institution" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap size={18} color="var(--accent-rust)" />
              {item.institution}
            </h4>
            <span className="edu-duration">{item.duration}</span>
          </div>

          <p className="edu-degree">{item.qualification}</p>

          <div className="edu-meta-row">
            <span className="edu-metric-badge">{item.metric}</span>
            <span className="edu-location" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={13} />
              {item.location}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
