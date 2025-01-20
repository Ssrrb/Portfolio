import React from 'react';
import '../styles/Experience.css';

const experienceData = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'Softshop S.A.',
    date: 'Junio 2024 - Presente',
    responsibilities: [
      'Diseño e implementación de arquitecturas basadas en IA para el análisis de imágenes y documentos para empresas grandes',
      'Desarrollo de APIs RESTful y microservicios utilizando Flask, FastAPI y Django, mejorando la integración de sistemas externos.',
      'Gestión avanzada de GCP, con despliegues a través de Docker y Kubernetes (GKE), reduciendo costos en un 25%.',
    ],
  },
  {
    id: 2,
    title: 'Soporte Tecnico TI',
    company: 'Softshop S.A.',
    date: 'Nov 2023 - May 2024',
    responsibilities: [
      'Monitoreo de servidores y equipos mediante Datadog',
      'Migraciones, backups y gestion de bases de datos para instituciones financieras.',
      'Instalación, virtualización y configuración de entornos RHEL.',
    ],
  },
  {
    id: 3,
    title: 'Auxiliar Contable',
    company: 'Mendoza & Asociados',
    date: 'Nov 2021 - Feb 2022',
    responsibilities: [
      'Registro de transacciones en Excel y Access',
      'Manejo de documentación fiscal',
      'Gestión de Análisis y reportes',
    ],
  },
];

function Experience() {
  return (
    <section className="experience-container">
      <div className="experience-header">
        <h1 className="experience-title">
          Work Experience
          <span className="experience-subtitle">(So far)</span>
        </h1>
        <div className="title-decoration"></div>
      </div>

      <div className="experience-timeline">
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

