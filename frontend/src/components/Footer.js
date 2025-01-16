import React from "react";
import '../styles/Footer.css';
function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-social-icons">
                {/* LinkedIn */}
                <a
                    href="https://www.linkedin.com/in/your-profile"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-icon"
                >
                    <i className="fab fa-linkedin"></i>
                </a>
                {/* YouTube */}
                <a
                    href="https://www.youtube.com/channel/your-channel"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-icon"
                >
                    <i className="fab fa-youtube"></i>
                </a>
                {/* GitHub */}
                <a
                    href="https://github.com/your-username"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-icon"
                >
                    <i className="fab fa-github"></i>
                </a>
            </div>
            <div className="footer-toggle">
                {/* Toggle between dark/light modes */}
                <button className="toggle-btn">
                    <i className="fas fa-moon"></i>
                </button>
            </div>
        </footer>
    );
}

export default Footer;
