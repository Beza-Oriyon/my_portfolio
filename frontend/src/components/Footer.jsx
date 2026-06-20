import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/[0.06] dark:border-white/[0.06] mt-8">
      <div className="divider-gradient mb-0" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <p className="font-display text-xl font-semibold text-gray-900 dark:text-cream mb-2">
              Bezawit Lulekal
            </p>
            <p className="text-sm text-muted-light dark:text-muted leading-relaxed">
              Backend Engineer &amp; Data Scientist crafting scalable systems and intelligent solutions.
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
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-rose mb-4">Focus Areas</p>
            <div className="flex flex-wrap gap-2">
              <span className="tag">Node.js</span>
              <span className="tag tag-sage">Python</span>
              <span className="tag">APIs</span>
              <span className="tag tag-sage">ML</span>
            </div>
          </div>
        </div>

        <div className="divider-gradient mb-6" />

        <p className="text-center text-sm text-muted-light dark:text-muted">
          © {year} Bezawit Lulekal · Built with React, Node.js &amp; Express
        </p>
      </div>
    </footer>
  );
};

export default Footer;
