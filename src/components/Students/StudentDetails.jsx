import React, { useState, useEffect } from "react";
import StudentTable from "./StudentTable";
import "./StudentDetails.css";
import { useNavigate } from "react-router-dom"; // 1. Already imported

const StudentDetails = () => {
  const [students, setStudents] = useState([]);
  const [isTableView, setIsTableView] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate(); // 2. ADD THIS LINE HERE

  useEffect(() => {
    fetch("http://localhost:8080/api/student")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  const filteredStudents = students.filter((s) =>
    s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.reg.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.course.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="view-container">
      <div className="view-header">
        <h1 className="title">Student Management</h1>

        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search name, reg no, or course..."
            className="student-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* 3. Wrap buttons in a div to keep them aligned in your Netflix theme */}
        <div className="header-buttons">
            <button className="toggle-btn" onClick={() => setIsTableView(!isTableView)}>
                {isTableView ? "Show Cards" : "Show Table"}
            </button>
            <button className="add-btn" onClick={() => navigate("/studentadd")}>
                Add Student
            </button>
</div>
      </div>

      {isTableView ? (
        <StudentTable data={filteredStudents} />
      ) : (
        <div className="card-grid">
          {filteredStudents.map((s) => (
            <div className="nf-card" key={s._id}>
              <div className="card-top">
                <h3>{s.name}</h3>
                <span className="roll-badge">Roll: {s.roll}</span>
              </div>
              <div className="nf-divider"></div>
              <div className="card-body">
                <p>
                  <span>Reg No</span>
                  <b>{s.reg}</b>
                </p>
                <p>
                  <span>Course</span>
                  <b>{s.course}</b>
                </p>
                <p>
                  <span>CGPA</span>
                  <b className="red-accent">{s.cgpa}</b>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StudentDetails;