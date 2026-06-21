import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection';
import CertificatesSection from '../components/CertificatesSection';
import SocialLinks from '../components/SocialLinks';

const techTags = ['Node.js', 'Express', 'React', 'Python', 'PostgreSQL', 'Machine Learning'];

const Home = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden px-5 sm:px-8">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent-wine/10 blur-3xl animate-pulse-soft pointer-events-none" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-accent-rose/10 blur-3xl animate-pulse-soft pointer-events-none" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-sage/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p className="section-label opacity-0 animate-fade-up">Portfolio</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-semibold mb-6 text-gray-900 dark:text-cream leading-tight opacity-0 animate-fade-up animate-delay-100">
            Hi, I&apos;m{' '}
            <span className="gradient-text italic">Bezawit</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-muted-light dark:text-muted mb-4 max-w-2xl mx-auto opacity-0 animate-fade-up animate-delay-200">
            Backend Engineer &amp; Full Stack Developer
          </p>

          <p className="text-base sm:text-lg text-accent-sage font-medium mb-6 opacity-0 animate-fade-up animate-delay-300">
            Information Systems · Addis Ababa University · Class of 2026
          </p>

          <div className="flex justify-center mb-10 opacity-0 animate-fade-up animate-delay-300">
            <SocialLinks />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14 opacity-0 animate-fade-up animate-delay-400">
            <Link to="/projects" className="btn-primary w-full sm:w-auto">
              Explore Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link to="/contact" className="btn-secondary w-full sm:w-auto">
              Let&apos;s Connect
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 opacity-0 animate-fade-up animate-delay-500">
            {techTags.map((tag) => (
              <span key={tag} className="tag text-[11px] sm:text-xs">{tag}</span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted dark:text-muted/60">
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent-rose/60 to-transparent" />
        </div>
      </section>

      <AboutSection />
      <CertificatesSection />

      <div className="border-y border-black/[0.06] dark:border-white/[0.06] py-6 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <p className="text-xs sm:text-sm text-muted-light dark:text-muted tracking-wide">
            Node.js · Express · MongoDB · PostgreSQL · React · Python · Scikit-learn · Power BI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
