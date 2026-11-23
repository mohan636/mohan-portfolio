import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Terminal from './components/Terminal';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import { useTheme } from './hooks/useTheme';
import { HERO_DATA } from './data/portfolioData';
import { GraduationCap } from 'lucide-react';

function App() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <div className="portfolio-app">
      {/* Skip to Main Content Link for Keyboard and Screen Reader Accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>

      {/* Sticky Navigation Header with Active Link Highlighting */}
      <Navbar theme={theme} toggleTheme={toggleTheme} isDark={isDark} />

      {/* Main Content Area */}
      <main id="main-content">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About Section */}
        <About />

        {/* 3. Technical Skills Section */}
        <Skills />

        {/* 4. Featured Projects Section */}
        <Projects />

        {/* 5. Work Experience Section */}
        <Experience />

        {/* 6. Education & Certifications Section */}
        <section id="education" className="section-wrapper" aria-label="Education and Certifications">
          <div className="container">
            <div className="section-header">
              <span className="section-category">
                <GraduationCap size={14} />
                Academia & Credentials // 05
              </span>
              <h2 className="section-title">Education & Certifications</h2>
              <p className="section-subtitle">
                Academic foundation in Computer Science alongside professional full-stack training.
              </p>
            </div>

            <div className="education-cert-grid">
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    marginBottom: '1.25rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  Education History
                </h3>
                <Education />
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.35rem',
                    marginBottom: '1.25rem',
                    color: 'var(--text-primary)',
                  }}
                >
                  Certifications
                </h3>
                <Certifications />
              </div>
            </div>
          </div>
        </section>

        {/* 7. Interactive Developer Terminal */}
        <Terminal />

        {/* 8. Contact Section */}
        <Contact />
      </main>

      {/* Floating Back to Top Button */}
      <BackToTop />

      {/* Editorial Footer */}
      <footer
        style={{
          marginTop: '4rem',
          borderTop: '1px solid var(--border-subtle)',
          padding: '2.5rem 0 3rem',
          backgroundColor: 'var(--bg-secondary)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: 'var(--text-primary)',
              }}
            >
              {HERO_DATA.initials}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
              }}
            >
              © {new Date().getFullYear()} {HERO_DATA.name}. All rights reserved.
            </span>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
            }}
          >
            <span>Retro-Modern Editorial</span>
            <span>•</span>
            <span>MERN Stack</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
