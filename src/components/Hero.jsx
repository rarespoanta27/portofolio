import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const Hero = () => {
    const [textIndex, setTextIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const { ref, inView } = useInView({ 
        triggerOnce: true, 
        threshold: 0.1 
    });

    // Rotating titles for typewriter effect
    const titles = [
        'Problem Solver',
        'Tech Enthusiast',
        'Full-Stack Developer',
        'AI Practitioner',
        'Cloud Explorer',
        'Lifelong Learner',
        'Data Architect in Training',
        'Web Developer'
    ];

    // Typewriter effect
    useEffect(() => {
        const currentTitle = titles[textIndex];
        const typeSpeed = isDeleting ? 50 : 100;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < currentTitle.length) {
                    setDisplayText(currentTitle.slice(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(currentTitle.slice(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % titles.length);
                }
            }
        }, typeSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, textIndex, titles]);

    // Scroll to section handler
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section 
            id="hero" 
            ref={ref}
            className={`hero-section ${inView ? 'fade-in-visible' : 'fade-in'}`}
        >
            <div className="container hero-container">
                <div className="hero-content">
                    {/* Animated greeting */}
                    <div className="greeting-wrapper">
                        <span className="greeting">Hello, I'm</span>
                    </div>
                    
                    {/* Main title */}
                    <h1 className="hero-title">
                        <span className="name-highlight">Poanta Rareș</span>
                    </h1>
                    
                    {/* Typewriter subtitle */}
                    <div className="hero-subtitle">
                        <span className="typed-text">
                            {displayText}
                            <span className="cursor">|</span>
                        </span>
                    </div>
                    
                    {/* Description */}
<p className="hero-description">
    I build scalable, <span className="highlight">full-stack applications</span> at the intersection of <span className="highlight">AI and cloud technology</span>. My portfolio demonstrates a focus on creating data-driven solutions with real-world impact. I am now deepening my expertise in data architecture and processing.
</p>

                    {/* CTA Buttons */}
                    <div className="hero-cta">
                        <button 
                            onClick={() => scrollToSection('projects')}
                            className="glass-button primary large"
                            aria-label="View my projects"
                        >
                            <span>View My Work</span>
                            <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                        
                        <a 
    href="mailto:rarespoanta10@gmail.com"
    className="glass-button secondary large"
    aria-label="Get in touch via email"
>
    <span>Get In Touch</span>
    <svg className="icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
</a>
                    </div>
                    
                    {/* Social Links have been moved out of here */}
                </div>
                
                {/* Animated background elements */}
                <div className="hero-background">
                    <div className="floating-element element-1"></div>
                    <div className="floating-element element-2"></div>
                    <div className="floating-element element-3"></div>
                </div>
                
                {/* --- CORECȚIE AICI: Am grupat iconițele și săgeata într-un container "footer" --- */}
                <div className="hero-footer">
                    {/* 1. Iconițele sociale apar primele */}
                    <div className="hero-social">
                        <a 
                            href="https://github.com/rarespoanta27" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="GitHub Profile"
                        >
                            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        
                        <a 
                            href="http://www.linkedin.com/in/rares-poanta-b3970b309" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="LinkedIn Profile"
                        >
                            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>
                        
                        <a 
                            href="https://www.instagram.com/rares.poanta/" 
                            className="social-link"
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Instagram Profile"
                        >
                            <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85s.012-3.585.07-4.85c.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                    </div>
                    {/* 2. Săgeata de scroll apare a doua */}
                    <div className="scroll-arrow-wrapper">
                        <a 
                            href="#projects"
                            className="scroll-arrow"
                            aria-label="Scroll to next section"
                            onClick={(e) => {
                                e.preventDefault(); 
                                scrollToSection('projects');
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;