import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
];

const Header = ({ toggleTheme, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className="sticky top-0 z-50 border-b border-black/[0.06] dark:border-white/[0.06] bg-surface-light/80 dark:bg-obsidian/80 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-gray-900 dark:text-cream"
          onClick={() => setMenuOpen(false)}
        >
          Bezawit<span className="gradient-text">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${isActive(to) ? 'nav-link-active' : ''}`}
            >
              {label}
              {isActive(to) && (
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-accent rounded-full" />
              )}
            </Link>
          ))}

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-full border border-black/10 dark:border-white/10
                       bg-white/50 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10
                       transition-all duration-300 text-lg"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full border border-black/10 dark:border-white/10 text-base"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="p-2.5 rounded-xl border border-black/10 dark:border-white/10
                       bg-white/50 dark:bg-white/5 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-800 dark:text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-black/[0.06] dark:border-white/[0.06] bg-surface-light/95 dark:bg-obsidian/95 backdrop-blur-xl">
          <div className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors
                  ${isActive(to)
                    ? 'bg-accent-wine/10 text-accent-wine dark:text-accent-rose'
                    : 'text-gray-600 dark:text-muted hover:bg-black/5 dark:hover:bg-white/5'
                  }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
