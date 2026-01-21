import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      title: 'Amazon Business 3WayMatch',
      description:
        'Developed a comprehensive invoice matching system for B2B customers that automates the three-way matching process between purchase orders, receipts, and invoices, ensuring accurate payment processing.',
      image: null,
      tags: ['Java', 'React', 'AWS', 'DynamoDB'],
      liveUrl: null,
      githubUrl: null,
      featured: true,
    },
    {
      title: 'Amazon Tax Exemption Program',
      description:
        'Built and maintained the tax exemption management system enabling businesses to manage their tax-exempt purchases efficiently, handling complex tax rules across different jurisdictions.',
      image: null,
      tags: ['Java', 'Spring', 'AWS Lambda', 'S3'],
      liveUrl: null,
      githubUrl: null,
      featured: true,
    },
    {
      title: 'Budget Management System',
      description:
        'Designed and implemented a budget management solution for Amazon Business customers to set spending limits, track expenses, and manage procurement budgets across their organization.',
      image: null,
      tags: ['React', 'Java', 'CloudWatch', 'SNS'],
      liveUrl: null,
      githubUrl: null,
      featured: true,
    },
    {
      title: 'CI/CD Pipeline Implementation',
      description:
        'Implemented end-to-end CI/CD processes to streamline development workflows and ensure rapid delivery of high-quality solutions, reducing deployment time and improving code quality.',
      image: null,
      tags: ['AWS', 'StepFunctions', 'CloudWatch', 'DevOps'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
    },
    {
      title: 'Power Usage Analytics',
      description:
        'Built a web-based power usage analysis system at Meltek Inc. that tracks and visualizes energy consumption patterns, helping customers optimize their energy usage and reduce costs.',
      image: null,
      tags: ['Python', 'JavaScript', 'Data Analytics'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
    },
    {
      title: 'Payment Processing System',
      description:
        'Developed end-to-end payment processing workflows at Meltek Inc., enhancing customer satisfaction through reliable transaction handling and optimized operational efficiency.',
      image: null,
      tags: ['Java', 'SQL', 'REST APIs', 'Spring'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
    },
  ];

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some of my recent work</p>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${styles.projectCard} ${project.featured ? styles.featured : ''}`}
            >
              <div className={styles.projectImage}>
                <div className={styles.imagePlaceholder}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                </div>
                {(project.liveUrl || project.githubUrl) && (
                  <div className={styles.projectOverlay}>
                    <div className={styles.overlayLinks}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.overlayLink}
                          aria-label="View live site"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                          </svg>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.overlayLink}
                          aria-label="View code on GitHub"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
