import React from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="contact-info">
        <span><FaPhone /> +91-1234567890</span>
        <span><FaEnvelope /> info@shjmodernschool.com</span>
      </div>
      <div className="tagline">Excellence is a Habit</div>
    </div>
  );
};

export default TopBar;