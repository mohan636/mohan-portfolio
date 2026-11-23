import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Star } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { PROJECTS_DATA } from '../data/resumeData';

const PROJECT_BULLET_TAGS = {
  teamtasks: [
    'Full-Stack Board Architecture',
    'RESTful APIs & MongoDB Atlas',
    'RBAC & Drag-Drop UI',
  ],
  gourmetflow: [
    'Ordering System & Workflow',
    'RESTful Endpoints & Auth',
    'Database CRUD Operations',
  ],
};

export default function Projects() {
  return (
    <section id="projects" className="section-wrapper" aria-label="Featured Software Projects">
      <div className="container">
        <div className="section-header">
          <span className="section-category">
            <FolderGit2 size={14} />
            Works // 03
          </span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Selected full-stack software applications featuring responsive frontend interfaces, RESTful architectures, and secure data storage.
          </p>
        </div>

        <div className="projects-container">
          {PROJECTS_DATA.map((project, index) => {
            const domainTags = PROJECT_BULLET_TAGS[project.id] || [];
            return (
              <motion.div
                key={project.id}
                className={`project-card ${project.featured ? 'project-featured' : ''}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
              >
                {/* Visual Watermark Number */}
                <span className="project-watermark-num" aria-hidden="true">
                  0{index + 1}
                </span>

                {/* Header row */}
                <div className="project-header-row">
                  <div>
                    <div className="project-badge-row">
                      {project.featured && (
                        <span className="featured-pill">
                          <Star size={11} style={{ display: 'inline', marginRight: '4px' }} />
                          Featured Project
                        </span>
                      )}
                      <span className="project-index-stamp">ARCHIVE // 0{index + 1}</span>
                      {project.liveUrl && (
                        <span className="project-live-indicator" title="Live Production Application">
                          <span className="pulse-dot" style={{ width: '6px', height: '6px' }} aria-hidden="true" />
                          Live Production
                        </span>
                      )}
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                  </div>

                  {/* Project Links */}
                  <div className="project-actions">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-link-action btn-link-primary"
                        title="View Live Demo in new tab"
                      >
                        <ExternalLink size={15} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-link-action"
                        title="View Source Code on GitHub in new tab"
                      >
                        <GithubIcon size={15} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Responsibilities / Highlights with domain tags */}
                <ul className="project-bullets">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="project-bullet-item">
                      {domainTags[idx] && (
                        <span className="bullet-domain-tag">{domainTags[idx]}</span>
                      )}
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies strip */}
                <div className="project-tech-pills">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="project-tech-pill">
                      {tech}
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
