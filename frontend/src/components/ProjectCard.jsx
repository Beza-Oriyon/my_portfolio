import { useState } from 'react';

const ProjectCard = ({ title, description, link, tech, fromGithub = false }) => {
  const [likes, setLikes] = useState(0);

  return (
    <article className="glass-card-hover group overflow-hidden flex flex-col h-full">
      <div className="h-44 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-wine/80 via-accent-rose/60 to-accent-sage/40" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,white_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl opacity-80 group-hover:scale-110 transition-transform duration-500">⚡</span>
        </div>
        {fromGithub && (
          <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-black/30 text-white backdrop-blur-sm">
            GitHub
          </span>
        )}
      </div>

      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <h3 className="text-xl font-display font-semibold mb-2 text-gray-900 dark:text-cream group-hover:text-accent-rose transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-light dark:text-muted mb-5 line-clamp-3 flex-1 leading-relaxed">
          {description}
        </p>

        {tech && (
          <div className="flex flex-wrap gap-2 mb-5">
            {tech.map((t, i) => (
              <span key={i} className="tag text-[11px]">{t}</span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-accent-wine dark:text-accent-rose hover:underline flex items-center gap-1.5 transition-colors"
          >
            View Project
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <button
            onClick={() => setLikes(likes + 1)}
            aria-label="Like project"
            className="flex items-center gap-1.5 text-sm text-muted-light dark:text-muted hover:text-accent-coral transition-colors"
          >
            <span>{likes > 0 ? '❤️' : '🤍'}</span>
            <span>{likes}</span>
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
