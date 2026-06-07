import { useState, useEffect } from 'react';
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
  const [isMuted, setIsMuted] = useState(true);
  const isMobile = window.innerWidth <= 768;

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showIntro]);

  return (
    <>
      {/* The main app loads in the background normally so there is zero delay when video ends */}
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

      {/* The intro video sits securely on top of everything using fixed positioning and z-index */}
      {showIntro && (
        <div className="intro-video-container">
          <video 
            key={isMobile ? 'mobile' : 'desktop'}
            className="intro-video" 
            autoPlay 
            muted={isMuted}
            playsInline 
            onEnded={() => setShowIntro(false)}
          >
            <source src={isMobile ? mobileVideo : introVideo} type="video/mp4" />
          </video>
          <button 
            className="skip-btn" 
            style={{ bottom: isMobile ? '70px' : '100px', backgroundColor: isMuted ? 'rgba(255, 60, 60, 0.4)' : 'rgba(60, 255, 60, 0.4)' }} 
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? '🔇 Unmute' : '🔊 Muted'}
          </button>
          <button className="skip-btn" onClick={() => setShowIntro(false)}>Skip</button>
        </div>
      )}
    </>
  );
}

export default App;
