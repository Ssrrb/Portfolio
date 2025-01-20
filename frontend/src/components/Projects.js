import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCertificate } from 'react-icons/fa';
import '../styles/Projects.css';

const projectsData = [
  {
    id: 1,
    title: "Fintech Dashboard",
    description: "A comprehensive financial dashboard for real-time market analysis.",
    technologies: "React TypeScript Node.js",
    github: "#",
    demo: "#"
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description: "A scalable e-commerce solution with integrated payment processing.",
    technologies: "Next.js GraphQL Stripe",
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "AI Chatbot",
    description: "An intelligent chatbot for customer support automation.",
    technologies: "Python TensorFlow Flask",
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
    id: 5,
    title: "Task Management App",
    description: "A collaborative task management tool for teams.",
    technologies: "Vue.js Firebase",
    github: "#",
    demo: "#"
  },
  {
    id: 6,
    title: "Data Visualization Tool",
    description: "Interactive data visualization for business analytics.",
    technologies: "D3.js Express MongoDB",
    github: "#",
    demo: "#"
  },
  {
    id: 7,
    title: "Google Cloud Certification",
    description: "Certified in Google Cloud Platform (GCP) with expertise in cloud architecture and services.",
    technologies: "GCP Cloud Architecture Kubernetes",
    github: "#",
    demo: "#",
    isCertification: true
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
                <FaCertificate className="icon certification-icon" />
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
