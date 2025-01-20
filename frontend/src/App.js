import React from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Experience from './components/Experience.js';
import Projects from './components/Projects.js';
import Footer from './components/Footer.js';
import Sidebar from './components/Sidebar.js';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
