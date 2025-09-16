import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const skillCategories = [
    {
        title: "Programming Languages",
        skills: ["Python", "Java", "JavaScript", "C/C++", "HTML5", "CSS3", "SQL", "Typescript", "Bash", "Powershell", "Solidity"]
    },
    {
        title: "Frameworks & Libraries",
        skills: ["React", "Node.JS", "Express.js", "Django", "TensorFlow/Keras", "Scikit-learn", "Optuna", "Unity"]
    },
    {
        title: "Cloud & DevOps",
        skills: ["AWS", "Google Cloud Platform (GCP)", "Docker/Kubernetes", "Git", "Virtual machines"]
    },
    {
        title: "Databases & Technologies",
        skills: ["MongoDB", "Stripe", "JWT", "OAuth"]
    },
    {
        title: "Tools & Platforms",
        skills: ["SAP S/4Hana", "Human Capital Management", "Microsoft Office", "WordPress", "Latex"]
    }
];

const Skills = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="skills" ref={ref} className={`container ${inView ? 'fade-in-visible' : 'fade-in'}`}>
            {/* 1. Am adăugat clasa 'glow-text' la titlu */}
            <h2 className="section-title glow-text">Technical Skills</h2>

            {/* 2. Am încadrat totul într-un div cu clasa 'glass-card' */}
            <div className="skills-wrapper glass-card">
                <div className="skills-container">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3>{category.title}</h3>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;