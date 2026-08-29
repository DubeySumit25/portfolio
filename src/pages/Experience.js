import React from 'react';

const responsibilities = [
  'Developed authentication functionality for authorised users.',
  'Implemented a Forgot Password workflow using email-based verification.',
  'Worked with Spring Security for authentication and authorization.',
  'Developed backend functionality using Java and Spring Boot.',
  'Gained hands-on experience working on a practical backend application.',
];

const technologies = [
  'Java',
  'Spring Boot',
  'Spring Security',
  'Authentication',
  'Authorization',
  'Email Verification',
];

export default function Experience() {
  return (
    <section className="section experience-section">
      <div className="grid-bg" />

      <div className="section-inner">

        <div className="section-label">
          // 04 — CAREER_LOG
        </div>

        <h1 className="section-title">
          EXPERIENCE<span className="title-accent">.</span>
        </h1>

        <div className="section-divider" />

        <div className="cyber-card experience-card">

          <div className="experience-header">
            <div>
              <span className="experience-status">
                <span className="status-dot" />
                COMPLETED INTERNSHIP
              </span>

              <h2>ENGINEERS INDIA LIMITED</h2>

              <div className="experience-meta">
                <span>ITS DIVISION</span>
                <span className="meta-separator">///</span>
                <span>BACKEND DEVELOPMENT INTERN</span>
              </div>
            </div>

            <div className="experience-date">
              <span>JUN</span>
              <strong>11</strong>
              <span>—</span>
              <strong>JUL 10</strong>
              <span>2026</span>
            </div>
          </div>

          <div className="experience-line" />

          <div className="experience-project">
            <div className="experience-label">
              <span>PROJECT</span>
              <span className="label-line" />
            </div>

            <h3>
              AUTHENTICATION OF AUTHORISED USER
            </h3>

            <p>
              Worked on a backend authentication project focused on
              secure user authentication and authorization using
              Java Spring Boot.
            </p>
          </div>

          <div className="experience-content">

            <div className="experience-column">
              <div className="experience-label">
                <span>01</span>
                <span>CONTRIBUTIONS</span>
              </div>

              <ul className="experience-list">
                {responsibilities.map((item, index) => (
                  <li key={index}>
                    <span className="list-index">
                      0{index + 1}
                    </span>

                    <span className="list-arrow">›</span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="experience-column">
              <div className="experience-label">
                <span>02</span>
                <span>TECH STACK</span>
              </div>

              <div className="experience-tech">
                {technologies.map((technology) => (
                  <span
                    className="experience-tech-tag"
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

          </div>

          <div className="experience-footer">
            <span>SYS.STATUS :: COMPLETED</span>
            <span>EIL // ITS</span>
          </div>

        </div>
      </div>
    </section>
  );
}

