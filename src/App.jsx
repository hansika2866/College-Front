import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import StudentDetails from "./components/Students/StudentDetails";
import StaffDetails from "./components/Staff/StaffDetails";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import StudentAdd from "./components/Form/StudentAdd";
import FacultyAdd from "./components/Form/FacultyAdd";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="dashboard-wrapper">
        <aside className="sidebar">
          <div className="logo">HK</div>
          <nav className="side-nav">
            <Link to="/" className="nav-item">Dashboard</Link>
            <Link to="/students" className="nav-item">Student Records</Link>
            <Link to="/staff" className="nav-item">Staff Directory</Link>
            <Link to="/about" className="nav-item secondary">About HK</Link>
            <Link to="/contact" className="nav-item secondary">Contact Support</Link>
            <Link to="/studentadd" className="nav-item secondary">Add Students</Link>
            <Link to="/facultyadd" className="nav-item secondary">Add Staff</Link>
          </nav>
        </aside>

        <div className="main-viewport">
          <header className="sticky-header">
            <div className="header-left">
              <span className="system-tag">HK Portal / Management</span>
            </div>
            <div className="header-right">
              <div className="user-profile">
                <span>Admin</span>
                <div className="avatar">A</div>
              </div>
            </div>
          </header>

          <main className="main-content">
            <div className="centered-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/students" element={<StudentDetails />} />
                <Route path="/staff" element={<StaffDetails />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/studentadd" element={<StudentAdd />} />
                <Route path="/facultyadd" element={<FacultyAdd />} />
                
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;