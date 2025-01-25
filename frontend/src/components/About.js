import React from 'react';
import '../styles/About.css';
function About() {
    const handleContact = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: 'Test User',
                    email: 'test@example.com',
                    message: 'Test message'
                })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <section className="about-container">
            <h1 className="about-title">ABOUT ME</h1>
            <p className="description">
                Hola! Mi nombre es <span className="highlight">Sebastian</span>,
                Construyo APIs, programas con IA, Bases de datos, pipelines, ademas estoy certificado por Google.
                Tengo 2 años de experiencia desarrollando software y 1 año en IA.
            </p>
            <p className="description">
                Trabaje en diferente posiciones a lo largo de este tiempo pero mi objetivo siempre ha sido el mismo:
                Establecer la intersección entre <span className="highlight">algoritmos</span> y
                <span className="highlight"> personas</span>.
            </p>
            <a
                href="mailto:sirsebastianrojas@gmail.com?subject=Contacto desde el Portfolio &body=Hola Sebastian!"
                className="contact-button"
            >
                Contáctame
            </a>
        </section>
    );
}

export default About;
