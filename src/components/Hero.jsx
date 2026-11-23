import { motion } from 'framer-motion';
import { ArrowRight, Download, ArrowUpRight } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';
import { CONTACT_DATA } from '../data/resumeData';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import '../styles/hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero-section" aria-label="Introduction and Overview">
      <div className="container hero-grid">
        {/* Left Column: Intro & Call to Actions */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Availability Badge */}
          <div className="hero-meta-pill">
            <span className="badge-mono">
              <span className="pulse-dot" aria-hidden="true" />
              {HERO_DATA.availability}
            </span>
          </div>

          {/* Heading & Role */}
          <div className="hero-heading-group">
            <span className="hero-greeting">Hello, my name is</span>
            <h1 className="hero-title">{HERO_DATA.name}</h1>
            <div className="hero-role-wrapper">
              <span className="hero-role-title">{HERO_DATA.role}</span>
            </div>
          </div>

          {/* Short Professional Introduction */}
          <p className="hero-description">
            {HERO_DATA.tagline}
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group">
            <a href="#projects" className="btn-primary">
              <span>View Projects</span>
              <ArrowRight size={17} />
            </a>
            <a
              href="/resume.pdf"
              download="K_Mohan_Reddy_Resume.pdf"
              className="btn-secondary"
              title="Download Resume PDF"
            >
              <Download size={17} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Quick Recruiter Access Links */}
          <div className="hero-recruiter-bar" aria-label="Quick Professional Links">
            <span className="recruiter-bar-label">Profiles:</span>
            <a
              href={CONTACT_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-profile-pill"
              title="View GitHub Profile in new tab"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
              <ArrowUpRight size={12} color="var(--accent-rust)" />
            </a>
            <a
              href={CONTACT_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-profile-pill"
              title="View LinkedIn Profile in new tab"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
              <ArrowUpRight size={12} color="var(--accent-rust)" />
            </a>
          </div>

          {/* Technical Stack Pills */}
          <div className="hero-tech-strip">
            <span className="tech-strip-label">Core Architecture Stack</span>
            <div className="hero-tech-pills">
              {HERO_DATA.techStack.map((tech) => (
                <span key={tech} className="tech-pill">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Editorial Architecture Spec Card */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="editorial-card-wrapper">
            {/* Retro Corner Registration Marks */}
            <div className="corner-mark corner-tl" aria-hidden="true" />
            <div className="corner-mark corner-tr" aria-hidden="true" />
            <div className="corner-mark corner-bl" aria-hidden="true" />
            <div className="corner-mark corner-br" aria-hidden="true" />

            {/* Header bar */}
            <div className="card-header-bar">
              <span className="editorial-stamp">SPEC // NO. 01 — MERN</span>
              <div className="editorial-dot-group" aria-hidden="true">
                <span className="editorial-dot" />
                <span className="editorial-dot" />
                <span className="editorial-dot" />
              </div>
            </div>

            {/* Profile Insignia */}
            <div className="card-profile-header">
              <div className="card-insignia">
                <span>{HERO_DATA.initials}</span>
              </div>
              <div className="card-profile-text">
                <span className="card-dev-name">{HERO_DATA.name}</span>
                <span className="card-dev-role">Engineering Dossier</span>
              </div>
            </div>

            {/* Architecture Specs */}
            <div className="card-specs-list">
              <div className="spec-item">
                <span className="spec-label">Runtime / Backend</span>
                <span className="spec-value">Node.js • Express</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">User Interface</span>
                <span className="spec-value">React.js • Modern SPA</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Data Persistence</span>
                <span className="spec-value">MongoDB • Mongoose</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Architecture</span>
                <span className="spec-value">RESTful APIs • Modular</span>
              </div>
            </div>

            {/* Card Footer */}
            <div className="card-footer-bar">
              <span className="status-indicator">
                <span className="status-dot-sm" />
                Ready to collaborate
              </span>
              <span>EST. 2026</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
