import React from "react";
import "./Contact.css";

const Contact = () => {
  const departments = [
    { id: 1, dept: "Admissions", email: "enroll@hk.edu", icon: "📝" },
    { id: 2, dept: "IT Support", email: "tech.help@hk.edu", icon: "💻" },
    { id: 3, dept: "Finance", email: "accounts@hk.edu", icon: "💰" },
    { id: 4, dept: "Library", email: "resources@hk.edu", icon: "📚" }
  ];

  return (
    <div className="contact-page-wrapper">
      <div className="contact-header">
        <h1>Contact Support</h1>
        <p>Get in touch with the right department for your needs.</p>
      </div>

      <div className="contact-grid">
        {departments.map((item) => (
          <div key={item.id} className="dept-card">
            <span className="dept-icon">{item.icon}</span>
            <h3>{item.dept}</h3>
            <p>{item.email}</p>
            <button className="contact-btn">Send Email</button>
          </div>
        ))}
      </div>

      <div className="emergency-notice">
        <p>Emergency? Call <strong>+1 (800) HK-911</strong></p>
      </div>
    </div>
  );
};

export default Contact;