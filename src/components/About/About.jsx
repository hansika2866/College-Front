import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="info-container">
      <h1 className="title">About HK</h1><br></br>
      <div className="info-card">
        <h2>Our Hell</h2>
        <p>HK stands for Excellence in College Management. We provide a seamless interface between students, faculty, and administration.</p>
        <div className="nf-divider"></div>
        <div className="stats-grid">
          <div className="stat"><h3>50+</h3><p>Faculty</p></div>
          <div className="stat"><h3>2000+</h3><p>Students</p></div>
          <div className="stat"><h3>A+</h3><p>NAAC Grade</p></div>
        </div>
      </div>
    </div>
  );
};

export default About;