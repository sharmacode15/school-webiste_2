import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact">
      <div className="social-links">
        <a
          href="https://www.facebook.com/SHJModernSchoolFirozabad"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/shjmodernschool/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.youtube.com/@shjmodernschoolfirozabad2196"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
        >
          <FaYoutube />
        </a>
      </div>
      <p style={{ marginTop: '1rem' }}>Address: S.H.J. Modern School, Firozabad, UP - 283203</p>
      <p>Phone: +91-1234567890 | Email: info@shjmodernschool.com</p>
      <p>&copy; 2025 S.H.J. Modern School. All rights reserved.</p>
    </footer>
  );
};

export default Footer;