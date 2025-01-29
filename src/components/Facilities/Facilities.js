import React from 'react';

const Facilities = () => {
  return (
    <section className="facilities" id="facilities">
      <div className="facility">
        <img
          src="https://images.unsplash.com/photo-1596495769322-47b248a5a86a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Modern Classroom Facility"
          loading="lazy"
        />
        <div className="facility-content">
          <h3>Smart Classrooms</h3>
          <p>Experience interactive learning through digital boards, multimedia tools, and teacher-guided activities.</p>
        </div>
      </div>

      <div className="facility">
        <img
          src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Science Lab Facility"
          loading="lazy"
        />
        <div className="facility-content">
          <h3>Science Labs</h3>
          <p>Well-equipped laboratories for students to explore practical experiments in physics, chemistry, and biology.</p>
        </div>
      </div>

      <div className="facility">
        <img
          src="https://images.unsplash.com/photo-1586548732313-79f8c5aea3a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Library with Books"
          loading="lazy"
        />
        <div className="facility-content">
          <h3>Library</h3>
          <p>An extensive collection of books, journals, and digital resources to spark curiosity and encourage research.</p>
        </div>
      </div>

      <div className="facility">
        <img
          src="https://images.unsplash.com/photo-1610484826839-fd647ed1bebe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Outdoor Sports Facility"
          loading="lazy"
        />
        <div className="facility-content">
          <h3>Sports Complex</h3>
          <p>Outdoor and indoor sports facilities promoting physical fitness, teamwork, and sportsmanship.</p>
        </div>
      </div>
    </section>
  );
};

export default Facilities;