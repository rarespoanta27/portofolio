// src/components/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <h1>Filip Csibi</h1>
        <p>Full Stack Developer passionate about creating elegant solutions to complex problems. Specialized in React/React-Native, Firebase, and Typescript.</p>
        <div className="social-links">
          <a href="#" target="_blank" rel="noopener noreferrer"> {/* Pune link-ul tau de GitHub */}
            {/* SVG Icon for GitHub */}
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer"> {/* Pune link-ul tau de LinkedIn */}
            {/* SVG Icon for LinkedIn */}
          </a>
        </div>
      </div>
      <a href="#projects" className="scroll-indicator">
        <div className="mouse"></div>
      </a>
    </section>
  );
};

export default Hero;