import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../logo.svg';
import '../styles/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          {/* Replaced Contact with Projects */}
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

      <div className="sidebar-icons">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
