import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

// --- Lista de proiecte actualizată cu toate proiectele din CV ---
const projectsData = [
    {
        id: 1,
        title: 'DeadliQ',
        description: 'Developed a full-stack Saas platform to automate the extraction and management of deadlines from documents, reducing operational risk and financial penalties for businesses. ',
        tags: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Google Cloud Vision', 'Stripe', 'Nodemailer','React', 'React Router', 'Axios', 'Chart.js', 'React Toastify' ],
        liveUrl: 'https://www.deadliq.com',
        githubUrl: '#'
    },
    {
        id: 2,
        title: 'TuniQ - No-Code AI Platform',
        description: 'TuniQ is a full-stack web application (MERN + Python) I designed and developed to simplify access to machine learning. The platform empowers users of all technical levels to run, visualize, compare, and optimize hyperparameters for deep learning models through an intuitive graphical interface, entirely without writing code.',
        tags: ['React', 'Python', 'TensorFlow', 'Optuna', 'Stripe', 'OAuth'],
        tags: ['Currently in private beta'],
        githubUrl: '#'
    },
    {
        id: 3,
        title: 'EasyCars - Car Rental Application',
        description: 'EasyCars is a comprehensive car rental application designed to provide users with a seamless and user-friendly experience when browsing and renting cars. This platform allows users to view a wide range of available cars, add desired vehicles to their cart, and place rental orders with ease.',
        tags: ['React', 'Node.js','RESTful API','MySQL','JWT','ChakraUI', 'E-commerce'],
        liveUrl: '#',
        githubUrl: 'https://github.com/rarespoanta27/EasyCars'
    },
    {
        id: 4,
        title: 'Invoice-Generator',
        description: 'This web application creates and manages invoices with secure authentication, dynamic PDF generation, and automated email delivery. ',
        tags: ['JavaScript', 'PDF Generation', 'Authentication'],
        liveUrl: '#',
        githubUrl: 'https://github.com/rarespoanta27/Invoice-Generator'
    },
        {
        id: 5,
        title: 'Projectile Simulator',
        description: 'This mobile application simulates a projectile\'s trajectory based on user-provided input. ',
        tags: ['Android Studio', 'Java', 'Mobile App', 'Simulation'],
        liveUrl: '#',
        githubUrl: 'https://github.com/rarespoanta27/ProjectileSimulator'
    },
    {
        id: 6,
        title: 'Rock-paper-scissors game',
        description: 'This project is an interactive Rock, Paper, Scissors game built with React, featuring themes, confetti effects, and a custom cursor for an engaging user experience. ',
        tags: ['React','Java Script','CSS'],
        liveUrl: '#',
        githubUrl: 'https://github.com/rarespoanta27/Rock-paper-scissors-game'
    },
    {
        id: 7,
        title: 'Simple inventory management',
        description: 'A simple, interactive Inventory Management System built with TypeScript, featuring a modern design, item management and an in-memory data store.',
        tags: ['TypeScript', 'CSS', 'HTML', 'Vite'],
        liveUrl: '#',
        githubUrl: 'https://github.com/rarespoanta27/Simple-Inventory-Management-System'
    },
    {
        id: 8,
        title: 'X Sentiment Analysis',
        description: 'This UiPath project is designed to classify text sentiment (positive, negative, neutral) in order to analyze opinions and trends.',
        tags: ['UiPath', 'RPA', 'Sentiment Analysis'],
        liveUrl: '#',
        githubUrl: 'https://github.com/rarespoanta27/X-Sentiment-Analysis'
    },
    {
        id: 9,
        title: 'ClotheStore',
        description: 'ClotheStore is a full-stack web application designed to provide a seamless online shopping experience. Users can browse, search, and view products, while administrators can manage products and users effortlessly.',
        tags: ['Full-Stack', 'E-commerce'],
        liveUrl: '#',
        githubUrl: 'https://github.com/rarespoanta27/ClotheStore'
    }
];

const Projects = () => {
    const { ref: sectionRef, inView: sectionInView } = useInView({ 
        triggerOnce: true, 
        threshold: 0.05 
    });

    return (
        <section 
            id="projects" 
            ref={sectionRef}
            className={`container projects-section ${sectionInView ? 'fade-in-visible' : 'fade-in'}`}
        >
            <div className="section-header">
                <h2 className="section-title glow-text">Featured Projects</h2>
                <p className="section-subtitle">
                    A selection of my work in web development, artificial intelligence, and cloud technologies.
                </p>
            </div>
            
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <ProjectCard 
                        key={project.id} 
                        project={project} 
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    const { ref, inView } = useInView({ 
        triggerOnce: true, 
        threshold: 0.1,
    });

    return (
        <div 
            ref={ref} 
            className={`project-card glass-card ${inView ? 'fade-in-visible' : 'fade-in'}`}
            style={{ transitionDelay: `${index * 0.1}s` }}
        >
            <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                    {project.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                    ))}
                </div>
                
                <div className="project-links">
                    {project.liveUrl && project.liveUrl !== '#' && (
                        <a href={project.liveUrl} className="glass-button" target="_blank" rel="noopener noreferrer">
                            <span>View Live</span>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    )}
                    {project.githubUrl && project.githubUrl !== '#' && (
                        <a href={project.githubUrl} className="glass-button" target="_blank" rel="noopener noreferrer">
                            <span>Source Code</span>
                            <svg className="icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Projects;