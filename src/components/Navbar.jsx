import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, HERO_DATA } from '../data/portfolioData';
import { useActiveSection } from '../hooks/useActiveSection';
import '../styles/navbar.css';

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

export default function Navbar({ theme, toggleTheme, isDark }) {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS, 140);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Brand / Monogram */}
        <a href="#home" className="navbar-brand" aria-label="K. Mohan Reddy Portfolio Home">
          <div className="monogram-badge">
            <span className="monogram-text">{HERO_DATA.initials}</span>
          </div>
          <div className="brand-meta">
            <span className="brand-name">{HERO_DATA.name}</span>
            <span className="brand-label">Portfolio</span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav aria-label="Main Navigation">
          <ul className="desktop-nav-links">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Action Controls */}
        <div className="navbar-actions">
          {/* Theme Mode Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isDark ? <Sun size={19} /> : <Moon size={19} />}
            </motion.div>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="mobile-nav-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              className="mobile-nav-drawer"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <ul className="mobile-nav-links">
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                        onClick={handleLinkClick}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight size={16} color="var(--accent-rust)" />
                      </a>
                    </li>
                  );
                })}
              </ul>

              <div className="mobile-nav-footer">
                <span className="mobile-theme-label">
                  Appearance: {isDark ? 'Dark Mode' : 'Light Mode'}
                </span>
                <button
                  type="button"
                  className="theme-toggle-btn"
                  onClick={toggleTheme}
                  aria-label="Toggle theme in mobile menu"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
