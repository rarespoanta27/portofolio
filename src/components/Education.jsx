// src/components/Education.jsx

import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Education.css';

const Education = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="education" ref={ref} className={`container ${inView ? 'fade-in-visible' : 'fade-in'}`}>
            <h2 className="section-title glow-text">Education</h2>
            
            <div className="education-wrapper glass-card">
                <div className="education-list">
                    <div className="education-item">
                        <div className="education-details">
                            <h3>West University of Timisoara</h3>
                            <p className="education-degree">Bachelor's degree: Computer science </p>
                        </div>
                        <div className="education-year">2022 - 2025 </div>
                    </div>
                    <div className="education-item">
                        <div className="education-details">
                            <h3>"Regina Maria" National College</h3>
                            <p className="education-degree">High School Diploma: mathematics and computer science </p>
                        </div>
                        <div className="education-year">2018 - 2022 </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;