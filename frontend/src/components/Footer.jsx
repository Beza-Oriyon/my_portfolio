import { Link } from 'react-router-dom';
import { profile } from '../config/profile';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.06] dark:border-white/[0.06] mt-8">
      <div className="divider-gradient mb-0" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div>
            <p className="font-display text-xl font-semibold text-gray-900 dark:text-cream mb-2">
              {profile.name}
            </p>
            <p className="text-sm text-muted-light dark:text-muted leading-relaxed">
              {profile.education.degree}, {profile.education.school}. Backend Engineer &amp; Data Scientist.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-rose mb-4">Navigate</p>
            <div className="flex flex-col gap-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/projects', label: 'Projects' },
                { to: '/skills', label: 'Skills' },
                { to: '/contact', label: 'Contact' },
                { to: '/#certificates', label: 'Certificates' },
              ].map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-sm text-muted-light dark:text-muted hover:text-accent-rose transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-rose mb-4">Contact</p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={`mailto:${profile.email}`} className="text-muted-light dark:text-muted hover:text-accent-rose transition-colors">
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="text-muted-light dark:text-muted hover:text-accent-rose transition-colors">
                {profile.phone}
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-rose mb-4">Connect</p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-muted-light dark:text-muted hover:text-accent-rose transition-colors">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-light dark:text-muted hover:text-accent-rose transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="divider-gradient mb-6" />

        <p className="text-center text-sm text-muted-light dark:text-muted">
          © {year} {profile.name} · Built with React, Node.js &amp; Express
        </p>
      </div>
    </footer>
  );
};

export default Footer;
