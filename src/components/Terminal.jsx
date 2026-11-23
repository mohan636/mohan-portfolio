import { useState, useRef, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';
import { SKILLS_DATA, PROJECTS_DATA, EXPERIENCE_DATA, CONTACT_DATA } from '../data/resumeData';
import '../styles/terminal.css';

const SUGGESTED_COMMANDS = ['help', 'whoami', 'skills', 'projects', 'experience', 'contact', 'clear'];

export default function Terminal() {
  const shouldReduceMotion = useReducedMotion();
  const [history, setHistory] = useState([
    {
      command: 'welcome',
      isSystem: true,
      output: (
        <div className="terminal-welcome">
          <div className="terminal-welcome-title">
            K. Mohan Reddy — Interactive Developer Console [v1.0.0]
          </div>
          <div>Type <span className="output-accent">help</span> or click any suggested command to explore.</div>
        </div>
      ),
    },
  ]);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const inputRef = useRef(null);
  const screenEndRef = useRef(null);

  // Auto scroll to bottom when history updates
  useEffect(() => {
    if (screenEndRef.current) {
      screenEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history]);

  // Focus input on clicking anywhere in terminal
  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const executeCommand = (rawCommand) => {
    const trimmed = rawCommand.trim();
    if (!trimmed) return;

    const cmd = trimmed.toLowerCase();

    // Add to up/down command history
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    if (cmd === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let outputElement = null;

    switch (cmd) {
      case 'help':
        outputElement = (
          <div className="terminal-output-block">
            <div style={{ marginBottom: '0.4rem', color: '#F4EFE5' }}>Available Commands:</div>
            <div className="output-table">
              <span className="output-table-key">whoami</span>
              <span className="output-table-val">Display developer identity and title</span>

              <span className="output-table-key">skills</span>
              <span className="output-table-val">Display technical skills grouped by category</span>

              <span className="output-table-key">projects</span>
              <span className="output-table-val">List portfolio projects with demo & repository links</span>

              <span className="output-table-key">experience</span>
              <span className="output-table-val">Display work history and current internship</span>

              <span className="output-table-key">contact</span>
              <span className="output-table-val">View professional contact channels & resume link</span>

              <span className="output-table-key">clear</span>
              <span className="output-table-val">Clear terminal console screen</span>

              <span className="output-table-key">help</span>
              <span className="output-table-val">Show this list of available commands</span>
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputElement = (
          <div className="terminal-output-block">
            <span className="output-highlight">
              {HERO_DATA.name} – {HERO_DATA.role}.
            </span>
            <div style={{ marginTop: '0.25rem', color: '#C8C2B5' }}>
              Full-Stack engineer focused on modern React, Node.js, and scalable web architectures.
            </div>
          </div>
        );
        break;

      case 'skills':
        outputElement = (
          <div className="terminal-output-block">
            <div style={{ marginBottom: '0.4rem', color: '#F4EFE5', fontWeight: 600 }}>
              Technical Stack Overview:
            </div>
            <div className="output-table">
              {SKILLS_DATA.map((group) => (
                <div key={group.category} style={{ display: 'contents' }}>
                  <span className="output-table-key">{group.category}</span>
                  <span className="output-table-val">{group.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'projects':
        outputElement = (
          <div className="terminal-output-block">
            <div style={{ marginBottom: '0.5rem', color: '#F4EFE5', fontWeight: 600 }}>
              Featured Portfolio Projects:
            </div>
            {PROJECTS_DATA.map((proj, idx) => (
              <div key={proj.id} style={{ marginBottom: '0.75rem' }}>
                <div style={{ color: '#F4EFE5', fontWeight: 600 }}>
                  {idx + 1}. {proj.title}
                </div>
                <div style={{ color: '#8E887D', fontSize: '0.82rem' }}>
                  Stack: {proj.technologies.join(' • ')}
                </div>
                <div style={{ marginTop: '0.2rem' }}>
                  {proj.liveUrl && (
                    <span style={{ marginRight: '1rem' }}>
                      Live:{' '}
                      <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="output-link">
                        {proj.liveUrl}
                      </a>
                    </span>
                  )}
                  {proj.githubUrl && (
                    <span>
                      GitHub:{' '}
                      <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="output-link">
                        {proj.githubUrl}
                      </a>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        outputElement = (
          <div className="terminal-output-block">
            {EXPERIENCE_DATA.map((item) => (
              <div key={item.company}>
                <span className="output-highlight">
                  {item.company} – {item.position}
                </span>{' '}
                <span style={{ color: '#86967D' }}>({item.duration})</span>
                <div style={{ marginTop: '0.4rem' }}>
                  {item.responsibilities.map((r, i) => (
                    <div key={i} style={{ color: '#C8C2B5', marginBottom: '0.25rem' }}>
                      • {r}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        outputElement = (
          <div className="terminal-output-block">
            <div style={{ marginBottom: '0.35rem', color: '#F4EFE5', fontWeight: 600 }}>
              Professional Channels & Direct Contact:
            </div>
            <div className="output-table">
              <span className="output-table-key">Email:</span>
              <a href={`mailto:${CONTACT_DATA.email}`} className="output-link">
                {CONTACT_DATA.email}
              </a>

              <span className="output-table-key">Phone:</span>
              <a href={`tel:${CONTACT_DATA.phoneRaw}`} className="output-link">
                {CONTACT_DATA.phone}
              </a>

              <span className="output-table-key">GitHub:</span>
              <a href={CONTACT_DATA.github} target="_blank" rel="noopener noreferrer" className="output-link">
                {CONTACT_DATA.github}
              </a>

              <span className="output-table-key">LinkedIn:</span>
              <a href={CONTACT_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="output-link">
                {CONTACT_DATA.linkedin}
              </a>

              <span className="output-table-key">Resume:</span>
              <a href={CONTACT_DATA.resumeUrl} download="K_Mohan_Reddy_Resume.pdf" className="output-link">
                Download PDF ({CONTACT_DATA.resumeUrl})
              </a>
            </div>
          </div>
        );
        break;

      default:
        outputElement = (
          <div className="terminal-output-block" style={{ color: '#D65A4B' }}>
            command not found: &quot;{trimmed}&quot;. Type <span className="output-accent">&quot;help&quot;</span> to see available commands.
          </div>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        command: trimmed,
        isSystem: false,
        output: outputElement,
      },
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      executeCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInputVal(commandHistory[nextIndex] || '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      if (historyIndex >= commandHistory.length - 1 || historyIndex === -1) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex] || '');
      }
    }
  };

  return (
    <section id="terminal" className="terminal-section" aria-label="Interactive Developer Terminal">
      <div className="container">
        <div className="section-header">
          <span className="section-category">
            <TerminalIcon size={14} />
            Console // Interactive Shell
          </span>
          <h2 className="section-title">Developer Terminal</h2>
          <p className="section-subtitle">
            An interactive command-line interface to inspect my architecture, stack, experience, and projects.
          </p>
        </div>

        <motion.div
          className="terminal-card-container"
          onClick={handleTerminalClick}
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Terminal Window Header Bar */}
          <div className="terminal-window-header">
            <div className="terminal-window-controls" aria-hidden="true">
              <span className="terminal-control-dot control-close" />
              <span className="terminal-control-dot control-minimize" />
              <span className="terminal-control-dot control-maximize" />
            </div>

            <div className="terminal-window-title">
              <TerminalIcon size={13} color="var(--accent-rust)" />
              <span>mohan@retro-dev: ~ (zsh)</span>
            </div>

            <span className="terminal-window-status">ONLINE</span>
          </div>

          {/* Quick Suggestion Pills */}
          <div className="terminal-suggestions-bar" aria-label="Quick Terminal Commands">
            <span className="suggestions-label">
              <Sparkles size={12} color="var(--accent-rust)" />
              Suggested:
            </span>
            {SUGGESTED_COMMANDS.map((cmd) => (
              <button
                key={cmd}
                type="button"
                className="suggestion-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  executeCommand(cmd);
                }}
                title={`Run ${cmd}`}
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Content Screen */}
          <div className="terminal-screen" role="region" aria-live="polite">
            {history.map((item, index) => (
              <div key={index} className="terminal-log-entry">
                {!item.isSystem && (
                  <div className="terminal-prompt-line">
                    <span className="terminal-prompt-user">guest@mohan</span>
                    <span style={{ color: '#747C76' }}>:</span>
                    <span className="terminal-prompt-path">~</span>
                    <span style={{ color: '#747C76' }}>$</span>
                    <span className="terminal-command-text">{item.command}</span>
                  </div>
                )}
                {item.output}
              </div>
            ))}

            {/* Active Prompt Input Line */}
            <div className="terminal-active-line">
              <div className="terminal-prompt-line" aria-hidden="true">
                <span className="terminal-prompt-user">guest@mohan</span>
                <span style={{ color: '#747C76' }}>:</span>
                <span className="terminal-prompt-path">~</span>
                <span style={{ color: '#747C76' }}>$</span>
              </div>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-input-field"
                aria-label="Terminal command prompt input"
                autoComplete="off"
                spellCheck="false"
                placeholder="type a command (e.g. whoami, skills)..."
              />
              <CornerDownLeft size={13} color="#747C76" aria-hidden="true" />
            </div>

            <div ref={screenEndRef} />
          </div>

          {/* Window Footer Note */}
          <div className="terminal-footer-hint">
            <span>Tip: Use ↑ / ↓ arrow keys for command history</span>
            <span>Simulation Environment • No OS Access</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
