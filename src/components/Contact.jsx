import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Contact.css';

const Contact = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return (
        <section id="contact">
            <div ref={ref} className={`container ${inView ? 'fade-in-visible' : 'fade-in'}`}>
                <h2>Contactează-mă</h2>
                <p>
                    Sunt deschis la noi colaborări și oportunități. Dacă aveți o întrebare sau doriți doar să salutați, nu ezitați să-mi scrieți.
                </p>
                <a href="mailto:emailul.tau@exemplu.com" className="contact-email">emailul.tau@exemplu.com</a>
            </div>
        </section>
    );
};

export default Contact;