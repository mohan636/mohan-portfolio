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
            Interested in collaborating or discussing full-stack opportunities? Feel free to connect or view my profiles.
          </p>
        </div>

        <motion.div
          className="contact-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h3 className="contact-headline">
            Available for MERN Stack Developer roles & engineering challenges.
          </h3>
          <p className="contact-desc">
            Feel free to contact me directly via email or phone, explore my source code on GitHub, or connect on LinkedIn.
          </p>

          {/* Recruiter & Professional Contact Details Grid */}
          <div className="contact-info-grid" aria-label="Direct Contact Channels">
            {/* Direct Email */}
            <a
              href={`mailto:${CONTACT_DATA.email}`}
              className="contact-info-item"
              title={`Send email to ${CONTACT_DATA.email}`}
            >
              <div className="contact-info-icon-box" aria-hidden="true">
                <Mail size={18} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Email Address</span>
                <span className="contact-info-link">{CONTACT_DATA.email}</span>
              </div>
            </a>

            {/* Direct Phone */}
            <a
              href={`tel:${CONTACT_DATA.phoneRaw}`}
              className="contact-info-item"
              title={`Call ${CONTACT_DATA.phone}`}
            >
              <div className="contact-info-icon-box" aria-hidden="true">
                <Phone size={18} />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">Direct Phone</span>
                <span className="contact-info-link">{CONTACT_DATA.phone}</span>
              </div>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="contact-actions">
            {/* GitHub Profile */}
            <a
              href={CONTACT_DATA.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem' }}
              title="Open GitHub Profile in new tab"
            >
              <GithubIcon size={18} />
              <span>GitHub Profile</span>
              <ArrowUpRight size={15} />
            </a>

            {/* LinkedIn Profile */}
            <a
              href={CONTACT_DATA.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem' }}
              title="Open LinkedIn Profile in new tab"
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
              <ArrowUpRight size={15} />
            </a>

            {/* Download Resume */}
            <a
              href={CONTACT_DATA.resumeUrl}
              download="K_Mohan_Reddy_Resume.pdf"
              className="btn-secondary"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.65rem' }}
              title="Download Resume PDF"
            >
              <Download size={18} />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
