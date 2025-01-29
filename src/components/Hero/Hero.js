import React from 'react';

const Hero = () => {
  return (
    <section className="slider" id="hero">
      <div className="slides">
        <img src="C:\\Users\\bests\\OneDrive\\Desktop\\School\\Janamasthmi 2024\\SELECTED\\IMG-20240826-WA0093.jpg" alt="Campus Photo 1" loading="lazy" />
        <img src="C:\\Users\\bests\\OneDrive\\Desktop\\School\\Janamasthmi 2024\\SELECTED\\IMG-20240826-WA0021.jpg" alt="Campus Photo 2" loading="lazy" />
        <img src="C:\\Users\\bests\\OneDrive\\Desktop\\Prospectus\\P1250366.JPG" alt="Campus Photo 3" loading="lazy" />
      </div>
      <div className="hero-overlay">
        <h1>Empowering Futures, Inspiring Minds</h1>
        <p>Your child’s bright future begins here. Discover a nurturing environment for academic excellence, creativity, and personal growth.</p>
        <a href="#admissions">Enroll Now</a>
      </div>
    </section>
  );
};

export default Hero;