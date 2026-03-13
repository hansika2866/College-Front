import React from "react";
import { Link } from "react-router-dom";
import "./home.css"; 

export default function Home() {
  return (
    <div className="home-wrapper">
      
      <div className="home-header">
        <h1>HK</h1>
        <p>Institutional Management Dashboard</p>
      </div>

      <div className="dashboard-grid">
        
        <Link to="/students" className="card">
          <span className="card-icon">🎓</span>
          <h2>Students</h2>
          <p>Access and manage academic records and enrollment.</p>
        </Link>

        <Link to="/staff" className="card">
          <span className="card-icon">💼</span>
          <h2>Faculty</h2>
          <p>View staff directory and department assignments.</p>
        </Link>

        <Link to="/about" className="card">
          <span className="card-icon">🏛️</span>
          <h2>About</h2>
          <p>Learn about the institution's history and mission.</p>
        </Link>

        <Link to="/contact" className="card">
          <span className="card-icon">🎧</span>
          <h2>Support</h2>
          <p>Get help or provide feedback on system performance.</p>
        </Link>

      </div>
    </div>
  );
}