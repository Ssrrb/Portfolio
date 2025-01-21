import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';
import '../styles/Projects.css';

const projectsData = [
  {
    id: 1,
    title: "Data Engineering1",
    description: "A comprehensive financial dashboard for real-time market analysis.",
    technologies: "React TypeScript Node.js",
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "Raw data to PostgresSQL",
    description: "A scalable e-commerce solution with integrated payment processing.",
    technologies: "Next.js GraphQL Stripe",
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Generala",
    description: "Juego de Generala local escrito puramente en C",
    technologies: "C",
    github: "#",
    demo: "#"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio showcasing skills and projects.",
    technologies: "React CSS Vite",
    github: "#",
    demo: "#"
  },
  {
    id: 6,
    title: "Google Certification",
    description: "Google Certified Professional - Cloud Architect ",
    technologies: "GCP",
    github: "#",
    demo: "#",
    isCertification: true,
    certificationUrl: "https://www.credly.com/badges/481045c7-3588-4e12-906f-e24610f71981/public_url"
  }
];

function Projects() {
  return (
    <section className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title">SOME PROJECTS</h1>
        <p className="projects-subtitle">that I have been working on</p>
      </div>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className={`project-card ${project.isCertification ? 'certification-card' : ''}`}>
            <div className="card-icons">
              {project.isCertification ? (
                <a
                  href={project.certificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Google Cloud Certification"
                >
                  <FaCertificate className="icon certification-icon" />
                </a>
              ) : (
                <>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub className="icon" />
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt className="icon" />
                  </a>
                </>
              )}
            </div>
            <h2 className="card-title">{project.title}</h2>
            <p className="card-description">{project.description}</p>
            <p className="card-technologies">{project.technologies}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
