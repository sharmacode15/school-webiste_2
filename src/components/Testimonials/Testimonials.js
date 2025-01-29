import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>What Parents Say</h2>
      <p>Our commitment to excellence resonates in the positive feedback we receive from our students and parents.</p>

      <div className="testimonial-cards">
        <div className="testimonial">
          <FaUserGraduate />
          <p>“S.H.J. Modern School has been a wonderful experience for our son. He’s more confident and academically driven. The teachers truly care!”</p>
          <div className="author">– Rahul Sharma, Parent</div>
        </div>

        <div className="testimonial">
          <FaUserGraduate />
          <p>“Amazing school with top-notch facilities. My daughter loves the interactive classroom sessions and the extracurricular programs.”</p>
          <div className="author">– Anita Gupta, Parent</div>
        </div>

        <div className="testimonial">
          <FaUserGraduate />
          <p>“A place where every child is encouraged to pursue their passions. The focus on holistic development is truly commendable!”</p>
          <div className="author">– Sunil Verma, Parent</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;