import React from 'react';
import '../styles/Experience.css';

const experienceData = [
  {
    id: 1,
    title: "Software Engineer",
    company: "Koyfin",
    date: "May 2022 - Present",
    responsibilities: [
      "Built innovative functionality for a US Fintech leader",
      "Collaborated with a 10+ member engineering team",
      "Technologies: React, Node.js, TypeScript"
    ]
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Mercado Libre",
    date: "Nov 2019 - May 2022",
    responsibilities: [
      "Developed robust frontend applications in Latin American Fintech",
      "Collaborated with a 15+ member team",
      "Technologies: React, Node.js, GraphQL"
    ]
  },
  {
    id: 3,
    title: "Frontend Lead",
    company: "Buenos Aires City Government",
    date: "Oct 2017 - Nov 2019",
    responsibilities: [
      "Led the frontend area in a government tech project",
      "Worked with interdisciplinary teams",
      "Created fast, user-friendly apps"
    ]
  }
];

function Experience() {
  return (
    <section className="experience-container">
      <h1 className="experience-title">
        WORK EXPERIENCE
        <span className="experience-subtitle">(So far)</span>
      </h1>
      <div className="experience-timeline">
        <div className="timeline-label">EXPERIENCE</div>
        <div className="timeline-line"></div>
        {experienceData.map((exp, index) => (
          <div key={exp.id} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="experience-card">
              <h2 className="card-title">{exp.title}</h2>
              <h3 className="card-company">{exp.company}</h3>
              <p className="card-date">{exp.date}</p>
              <ul className="card-responsibilities">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
