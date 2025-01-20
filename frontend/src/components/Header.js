import React from 'react';
import '../styles/Header.css';
function Header() {
    return (
        <section className="header-container">
            <div className="welcome-section">
                <h1 className="name-title">Sebastian Rojas</h1>
                <h2 className="subtitle">Software Engineer</h2>
            </div>
            {/* 
        Add a sidebar or icons for LinkedIn, YouTube, GitHub
        that appear on the left. 
      */}
            <aside className="social-bar">
                <a href="https://linkedin.com/in/..." target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://youtube.com/..." target="_blank" rel="noreferrer">
                    <i className="fab fa-youtube"></i>
                </a>
                <a href="https://github.com/..." target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                </a>
            </aside>
        </section>
    );
}

export default Header;
