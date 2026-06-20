import SkillCard from '../components/SkillCard';

const Skills = () => {
  const backendSkills = [
    { skill: 'Node.js & Express', level: 90 },
    { skill: 'RESTful APIs', level: 85 },
    { skill: 'MongoDB / PostgreSQL', level: 80 },
    { skill: 'Authentication & Security', level: 75 },
  ];

  const dataScienceSkills = [
    { skill: 'Python', level: 85 },
    { skill: 'Machine Learning', level: 75 },
    { skill: 'Pandas & NumPy', level: 80 },
    { skill: 'Data Visualization', level: 70 },
    { skill: 'SQL', level: 85 },
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <div className="text-center mb-12 sm:mb-16">
        <p className="section-label">Expertise</p>
        <h2 className="section-title">Skills &amp; Expertise</h2>
        <p className="section-subtitle mx-auto">
          Technical skills across backend engineering and data science
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-gradient-accent" />
            <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-cream">
              Backend &amp; Full Stack
            </h3>
          </div>
          <div className="space-y-4">
            {backendSkills.map((item, index) => (
              <SkillCard key={index} {...item} variant="wine" />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 rounded-full bg-gradient-sage" />
            <h3 className="text-2xl font-display font-semibold text-gray-900 dark:text-cream">
              Data Science &amp; ML
            </h3>
          </div>
          <div className="space-y-4">
            {dataScienceSkills.map((item, index) => (
              <SkillCard key={index} {...item} variant="sage" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
