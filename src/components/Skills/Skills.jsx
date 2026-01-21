import styles from './Skills.module.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      ),
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'Angular', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'TypeScript', level: 82 },
      ],
    },
    {
      title: 'Backend',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      skills: [
        { name: 'Java', level: 92 },
        { name: 'Spring', level: 88 },
        { name: 'Python', level: 90 },
        { name: 'SQL', level: 85 },
        { name: 'Oracle DB', level: 80 },
      ],
    },
    {
      title: 'AWS & Cloud',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
        </svg>
      ),
      skills: [
        { name: 'DynamoDB', level: 88 },
        { name: 'S3 / EC2', level: 90 },
        { name: 'Lambda', level: 88 },
        { name: 'SQS / SNS', level: 85 },
        { name: 'CloudWatch', level: 82 },
      ],
    },
    {
      title: 'Data Science & ML',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'scikit-learn', level: 88 },
        { name: 'Pandas/NumPy', level: 90 },
        { name: 'Spark/PySpark', level: 78 },
        { name: 'SageMaker', level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies I work with</p>

        <div className={styles.skillsGrid}>
          {skillCategories.map((category, index) => (
            <div key={index} className={styles.skillCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{category.icon}</div>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
              </div>

              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <div className={styles.skillInfo}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillLevel}>{skill.level}%</span>
                    </div>
                    <div className={styles.skillBar}>
                      <div
                        className={styles.skillProgress}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
