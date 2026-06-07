import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import introVideo from './assets/MicrosoftTeams-video.mp4';
import mobileVideo from './assets/Mobile_video.mp4';
import './App.css';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const isMobile = window.innerWidth <= 768;

  if (showIntro) {
    return (
      <div className="intro-video-container">
        <video 
          className="intro-video" 
          autoPlay 
          playsInline 
          onEnded={() => setShowIntro(false)}
        >
          <source src={isMobile ? mobileVideo : introVideo} type="video/mp4" />
        </video>
        <button className="skip-btn" onClick={() => setShowIntro(false)}>Skip</button>
      </div>
    );
  }

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="footer">
        <p> Imran Maniyar © All Rights Reserved ❤️ {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
