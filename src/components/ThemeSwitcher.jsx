import { useState, useEffect, useRef } from 'react';
import './ThemeSwitcher.css';

const themes = [
  { id: 'theme-light', label: 'Light', bg: '#fafaf9', accent: '#4f46e5' },
  { id: 'theme-dark', label: 'Dark', bg: '#0b0f17', accent: '#6366f1' },
  { id: 'theme-neon', label: 'Neon Cyber', bg: '#05070a', accent: '#00ff88' },
  { id: 'theme-paper', label: 'Warm Paper', bg: '#f5f0e8', accent: '#8b5a2b' },
  { id: 'theme-ocean', label: 'Ocean Deep', bg: '#040d16', accent: '#00d4b8' },
  { id: 'theme-candy', label: 'Sweet Candy', bg: '#fff0f7', accent: '#ec4899' },
  { id: 'theme-solar', label: 'Solarized', bg: '#fdf6e3', accent: '#268bd2' },
  { id: 'theme-volcanic', label: 'Volcanic', bg: '#0a0503', accent: '#ff5500' },
];

function ThemeSwitcher() {
  const [active, setActive] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'theme-light';
  });
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Synchronize document body class when active theme state changes
  useEffect(() => {
    document.body.className = active;
  }, [active]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectTheme = (themeId) => {
    setActive(themeId);
    localStorage.setItem('portfolio-theme', themeId);
    setIsOpen(false);
  };

  const activeThemeObj = themes.find(t => t.id === active) || themes[0];

  return (
    <div className="theme-switcher" ref={containerRef}>
      <button
        className="theme-switcher__toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme selection menu"
        title="Customize Theme"
      >
        <svg
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          height="16"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: 'var(--accent)' }}
        >
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19C5.35249 19.5028 5.48512 20.2443 5.17646 20.8787L5.03457 21.1705C4.78912 21.6748 4.22557 21.9426 3.68412 21.7857C3.12596 21.6239 2.5 21 2 20.5" />
          <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" />
          <circle cx="11.5" cy="7.5" r="1.5" fill="currentColor" />
          <circle cx="16.5" cy="9.5" r="1.5" fill="currentColor" />
          <circle cx="15.5" cy="14.5" r="1.5" fill="currentColor" />
        </svg>
        <span className="theme-switcher__label">{activeThemeObj.label}</span>
      </button>

      {isOpen && (
        <div className="theme-switcher__panel">
          <p className="theme-switcher__heading">Select Theme</p>
          <div className="theme-switcher__grid">
            {themes.map((theme) => (
              <button
                key={theme.id}
                className={`theme-option ${active === theme.id ? 'theme-option--active' : ''}`}
                onClick={() => selectTheme(theme.id)}
                style={{
                  backgroundColor: 'var(--bg-muted)',
                  border: active === theme.id ? '1.5px solid var(--accent)' : '1.5px solid transparent'
                }}
              >
                <div
                  className="theme-option__dot"
                  style={{
                    backgroundColor: theme.accent,
                    boxShadow: `0 0 8px ${theme.accent}40`
                  }}
                />
                <span className="theme-option__name" style={{ color: 'var(--text)' }}>
                  {theme.label}
                </span>
                {active === theme.id && (
                  <span className="theme-option__check" style={{ color: 'var(--accent)' }}>✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeSwitcher;
