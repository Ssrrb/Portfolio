import React from 'react';
import '../styles/About.css';
function About() {
    return (
        <section className="about-container">
            <h1 className="about-title">ABOUT ME</h1>
            <p className="whoami">~: whoami</p>
            <p className="description">
                Hola! Mi nombre es <span className="highlight">Sebastian</span>,
                Construyo APIs, programas con IA, Bases de datos, pipelines, ademas estoy certificado por Google.
                Tengo 2 años de experiencia desarrollando software y 1 año en IA.
            </p>
            <p className="description">
                Tranaje en diferente posiciones, a lo largo de este tiempo pero mi objetivo siempre ha sido el mismo:
                to bridge the gap between <span className="highlight">algoritmos</span> &
                <span className="highlight"> personas</span>.
            </p>
            <button className="contact-button">Contact me!</button>
        </section>
    );
}

export default About;
