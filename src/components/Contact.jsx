import { motion } from 'framer-motion';
import { Mail, Phone, Download, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { LinkedinIcon } from './LinkedinIcon';
import { CONTACT_DATA } from '../data/resumeData';

export default function Contact() {
  return (
    <section id="contact" className="section-wrapper" aria-label="Contact Information">
      <div className="container">
        <div className="section-header">
          <span className="section-category">
            <Mail size={14} />
            Transmission // 06
          </span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Interested in collaborating or discussing full-stack opportunities? Reach out directly or explore my work.
          </p>
        </div>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          {/* Availability Message as Primary Heading */}
          <h3 className="contact-headline">
            Available for MERN Stack Developer roles & engineering challenges.
          </h3>

          <p className="contact-desc">
            Feel free to connect directly via email or phone, or explore my projects on GitHub and professional network on LinkedIn.
          </p>

          {/* Compact Professional Contact Details */}
          <div className="contact-compact-bar" aria-label="Direct Contact Channels">
            <a
              href={`mailto:${CONTACT_DATA.email}`}
              className="contact-compact-badge"
              title={`Send email to ${CONTACT_DATA.email}`}
            >
              <Mail size={15} color="var(--accent-rust)" aria-hidden="true" />
              <span className="compact-badge-label">EMAIL:</span>
              <span className="compact-badge-val">{CONTACT_DATA.email}</span>
            </a>

            <span className="contact-compact-divider" aria-hidden="true">•</span>

            <a
              href={`tel:${CONTACT_DATA.phoneRaw}`}
              className="contact-compact-badge"
              title={`Call ${CONTACT_DATA.phone}`}
            >
              <Phone size={15} color="var(--accent-rust)" aria-hidden="true" />
              <span className="compact-badge-label">PHONE:</span>
              <span className="compact-badge-val">{CONTACT_DATA.phone}</span>
            </a>
          </div>

          {/* Three Consistent Action Buttons */}
          <div className="contact-actions-bar">
            {/* Primary Action: Download Resume */}
            <a
              href={CONTACT_DATA.resumeUrl}
              download="K_Mohan_Reddy_Resume.pdf"
              className="btn-primary"
              title="Download Resume PDF"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>

            {/* Secondary: GitHub Profile */}
            <a
              href={CONTACT_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              title="Open GitHub Profile in new tab"
            >
              <GithubIcon size={16} />
              <span>GitHub Profile</span>
              <ArrowUpRight size={14} />
            </a>

            {/* Secondary: LinkedIn Profile */}
            <a
              href={CONTACT_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              title="Open LinkedIn Profile in new tab"
            >
              <LinkedinIcon size={16} />
              <span>LinkedIn</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
