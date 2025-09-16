import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <p>&copy; {new Date().getFullYear()} [Numele Tău]. Toate drepturile rezervate.</p>
        </div>
    </footer>
  );
};

export default Footer;