import { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import axios from 'axios';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('backend');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  const githubUsername = 'Beza-Oriyon';

  const ML_LANGUAGES = ['python', 'jupyter notebook'];

  const isMlRepo = (repo) => {
    const lang = repo.language?.toLowerCase();
    return ML_LANGUAGES.includes(lang);
  };

  const repoToProject = (repo) => ({
    title: repo.name,
    description: repo.description || 'No description provided.',
    link: repo.html_url,
    tech: [repo.language || 'Code'].filter(Boolean),
    fromGithub: true,
  });

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await axios.get(
          `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=30`
        );
        setRepos(res.data);
      } catch (error) {
        console.error('GitHub API error', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const backendProjects = [
    {
      title: 'Portfolio Backend API',
      description: 'RESTful API with Node.js, Express, validation, and contact form handling.',
      link: '#',
      tech: ['Node.js', 'Express', 'MongoDB'],
    },
  ];

  const dataScienceProjects = [
    {
      title: 'Customer Churn Prediction',
      description: 'Machine Learning model to predict customer churn using Python, Scikit-learn, and Pandas.',
      link: '#',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    },
    {
      title: 'Sales Dashboard & Analysis',
      description: 'End-to-end data analysis and interactive dashboard using Power BI / Python.',
      link: '#',
      tech: ['Python', 'Power BI', 'SQL'],
    },
  ];

  const displayedProjects = activeTab === 'backend' ? backendProjects : dataScienceProjects;

  const backendRepos = repos.filter((repo) => !isMlRepo(repo));
  const mlRepos = repos.filter(isMlRepo);

  const githubProjectsForTab =
    activeTab === 'backend'
      ? backendRepos.map(repoToProject)
      : mlRepos.map(repoToProject);

  const allProjectsForTab = [...displayedProjects, ...(!loading ? githubProjectsForTab : [])];

  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
      <div className="text-center mb-12 sm:mb-16">
        <p className="section-label">Portfolio</p>
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle mx-auto">Backend engineering &amp; data science work</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex glass-card p-1.5 gap-1 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('backend')}
            className={`flex-1 sm:flex-none px-5 sm:px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeTab === 'backend'
                ? 'bg-gradient-accent text-white shadow-glow-wine'
                : 'text-muted-light dark:text-muted hover:text-gray-900 dark:hover:text-cream'
            }`}
          >
            Backend &amp; Full Stack
          </button>
          <button
            onClick={() => setActiveTab('datascience')}
            className={`flex-1 sm:flex-none px-5 sm:px-8 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
              activeTab === 'datascience'
                ? 'bg-gradient-sage text-white shadow-glow-rose'
                : 'text-muted-light dark:text-muted hover:text-gray-900 dark:hover:text-cream'
            }`}
          >
            Data Science &amp; ML
          </button>
        </div>
      </div>

      {loading && (
        <p className="text-center text-muted-light dark:text-muted mb-8 text-sm">Loading GitHub repos…</p>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {allProjectsForTab.map((project, index) => (
          <ProjectCard key={project.link + project.title + index} {...project} />
        ))}

        {!loading && allProjectsForTab.length === 0 && (
          <p className="col-span-full text-center text-muted-light dark:text-muted text-sm">
            No projects in this category yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Projects;
