const AboutSection = () => {
  const highlights = [
    { label: 'Backend', value: 'APIs & Architecture', colorClass: 'text-accent-wine' },
    { label: 'Full Stack', value: 'End-to-end Systems', colorClass: 'text-accent-rose' },
    { label: 'Data Science', value: 'ML & Analytics', colorClass: 'text-accent-sage' },
  ];

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Photo */}
        <div className="flex justify-center lg:justify-end order-2 lg:order-1">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-accent opacity-20 blur-2xl" />
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border border-white/10 shadow-glass-lg bg-gradient-to-br from-accent-wine/40 via-accent-rose/30 to-accent-sage/40 flex items-center justify-center">
              <span className="font-display text-6xl sm:text-7xl font-semibold text-white/90 select-none">
                BL
              </span>
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2 text-sm font-medium text-accent-rose">
              Backend · DS
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <p className="section-label">About Me</p>
          <h2 className="section-title">Building systems that scale &amp; insights that matter</h2>

          <p className="text-muted-light dark:text-muted leading-relaxed mb-5">
            I&apos;m a passionate Backend Engineer with strong expertise in Node.js, Express, and building
            scalable APIs. I also bring solid experience in Data Science and Machine Learning to every project.
          </p>

          <p className="text-muted-light dark:text-muted leading-relaxed mb-10">
            My goal is to deliver high-quality, maintainable solutions that combine robust backend systems
            with intelligent, data-driven features.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {highlights.map(({ label, value, colorClass }) => (
              <div key={label} className="glass-card p-4 text-center sm:text-left">
                <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${colorClass}`}>
                  {label}
                </p>
                <p className="text-sm text-gray-800 dark:text-cream/90">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
