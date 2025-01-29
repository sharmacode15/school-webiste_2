import React from 'react';

const PrincipalSection = () => {
  return (
    <section className="principal-section" id="principal">
      <div className="principal-image">
        <img
          src="https://images.unsplash.com/photo-1509937528030-5ab45c418d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=667&q=80"
          alt="Principal Photo"
          loading="lazy"
        />
      </div>
      <div className="principal-text">
        <h2>From the Principal’s Desk</h2>
        <p>
          "Education is the most powerful weapon which you can use to change the world." At S.H.J. Modern School, our aim is to equip every learner with this empowering tool. We nurture students to become responsible global citizens who exhibit compassion, innovation, and leadership.
        </p>
        <p>
          Join us in our quest to deliver world-class education, foster moral values, and instill a lifelong passion for learning in every child who walks through our doors.
        </p>
      </div>
    </section>
  );
};

export default PrincipalSection;