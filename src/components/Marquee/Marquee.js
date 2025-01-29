import React from 'react';

const Marquee = () => {
  return (
    <div className="marquee">
      <marquee className="marquee-content" behavior="scroll" direction="left" scrollamount="5">
        Important Announcements: Admissions Open | Scholarship Programs Available | Contact Us For More Info
      </marquee>
    </div>
  );
};

export default Marquee;