// src/components/Certificates.jsx

import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Certificates.css';

// Date extrase din CV-ul tău
const certificatesData = [
    {
        id: 1,
        name: 'Learn SQL Course',
        provider: 'Codecademy',
        date: 'November 2024',
        url: 'https://www.codecademy.com/profiles/rarespoanta/certificates/042a4e5884e3eb6ea1f2a12be6abb851' // Adaugă aici link-ul de la "Display the credential"
    },
    {
        id: 2,
        name: 'SAP S/4HANA Essential Training',
        provider: 'LinkedIn',
        date: 'November 2024',
        url: 'https://www.linkedin.com/learning/certificates/0decf084d9c18f56db4f8417133f65e259faae7266059f9898533507baf3c3e2?trk=share_certificate' // Adaugă aici link-ul de la "Display the credential"
    },
    {
        id: 3,
        name: 'Learning SAP Human Capital Management',
        provider: 'LinkedIn',
        date: 'November 2024',
        url: 'https://www.linkedin.com/learning/certificates/ae56fc37321309fbdfbe18f268fca2ca110931a5641bc910fe7b395e0b76fc2b' // Adaugă aici link-ul de la "Display the credential"
    }
];

const Certificates = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="certificates" ref={ref} className={`container ${inView ? 'fade-in-visible' : 'fade-in'}`}>
            <div className="section-header">
                <h2 className="section-title glow-text">Certificates</h2>
            </div>

            <div className="certificates-wrapper glass-card">
                <div className="certificates-list">
                    {certificatesData.map((cert) => (
                        <div key={cert.id} className="certificate-item">
                            <div className="certificate-details">
                                <h3 className="certificate-name">{cert.name}</h3>
                                <p className="certificate-provider">{cert.provider} - {cert.date}</p>
                            </div>
                            <a 
                                href={cert.url} 
                                className="certificate-link glass-button" 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                Show Credential
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;