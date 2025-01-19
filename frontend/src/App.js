import React from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Footer from './components/Footer.js';
import Sidebar from './components/Sidebar.js';


function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Header />
        <About />
        <Footer />
      </main>
    </div>
  );
}

export default App;


