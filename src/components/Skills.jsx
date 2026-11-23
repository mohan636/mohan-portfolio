import { motion } from 'framer-motion';
import { Code2, Layout, Server, Database, ShieldCheck, Wrench } from 'lucide-react';
import { SKILLS_DATA } from '../data/resumeData';

const ICON_MAP = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Database: Database,
  ShieldCheck: ShieldCheck,
  Wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="section-wrapper" aria-label="Technical Skills">
      <div className="container">
        <div className="section-header">
          <span className="section-category">
            <Code2 size={14} />
            Competencies // 02
          </span>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Curated toolkit of modern technologies, libraries, and frameworks I leverage to construct resilient web applications.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS_DATA.map((group, index) => {
            const IconComponent = ICON_MAP[group.iconName] || Code2;
            return (
              <motion.div
                key={group.category}
                className="skill-category-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
              >
                <div className="skill-card-header">
                  <div className="skill-icon-wrapper">
                    <IconComponent size={20} />
                  </div>
                  <h3 className="skill-category-title">{group.category}</h3>
                  <span className="skill-count-badge">{group.skills.length} skills</span>
                </div>

                <div className="skill-tags-wrapper">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
