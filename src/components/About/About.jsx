import styles from './About.module.css';

const About = () => {
  const highlights = [
    { number: '5+', label: 'Years Experience' },
    { number: '3+', label: 'Years at Amazon' },
    { number: 'MS', label: 'Data Science, SUNY' },
  ];

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>

        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <div className={styles.imageContainer}>
              <div className={styles.imagePlaceholder}>
                <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
            </div>
            <div className={styles.experienceBadge}>
              <span className={styles.badgeNumber}>5+</span>
              <span className={styles.badgeText}>Years of Experience</span>
            </div>
          </div>

          <div className={styles.aboutText}>
            <h3 className={styles.aboutHeading}>
              A software professional who enjoys connecting the dots
            </h3>
            <p className={styles.aboutDescription}>
              I'm a Software Development Engineer at Amazon Business, specializing in
              building high-end web applications and AI solutions. With expertise in
              Java, React, and AWS, I craft dynamic and efficient digital solutions
              that meet the unique needs of B2B customers, from conceptualization to deployment.
            </p>
            <p className={styles.aboutDescription}>
              My passion lies in solving business problems with tailored data and algorithms
              and communicating complex ideas to non-technical stakeholders. I hold a
              Master's degree in Data Science from University at Albany, SUNY, and a
              Bachelor's in Computer Science from MLR Institute of Technology.
            </p>

            <div className={styles.highlights}>
              {highlights.map((item, index) => (
                <div key={index} className={styles.highlightItem}>
                  <span className={styles.highlightNumber}>{item.number}</span>
                  <span className={styles.highlightLabel}>{item.label}</span>
                </div>
              ))}
            </div>

            <div className={styles.aboutCta}>
              <a href="/resume.pdf" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Download Resume
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
