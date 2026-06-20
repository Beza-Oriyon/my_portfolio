const SkillCard = ({ skill, level, variant = 'wine' }) => {
  const gradientClass =
    variant === 'sage' ? 'bg-gradient-sage' : 'bg-gradient-accent';

  return (
    <div className="glass-card-hover p-5 sm:p-6">
      <div className="flex justify-between items-center mb-3">
        <h4 className="font-medium text-gray-900 dark:text-cream">{skill}</h4>
        <span className="text-sm font-semibold text-accent-rose">{level}%</span>
      </div>

      <div className="h-2 bg-black/[0.06] dark:bg-white/[0.08] rounded-full overflow-hidden">
        <div
          className={`h-full ${gradientClass} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
};

export default SkillCard;
