import { useState } from "react";
import "./StudentAdd.css";

export default function StudentRegForm() {
  const [formData, setFormData] = useState({
    reg: "",
    name: "",
    roll: "",
    course: "",
    cgpa: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "name" && value.length >= 15) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:8080/api/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log("Student saved:", data);
        alert("Student added successfully!");
        setFormData({
          reg: "",
          name: "",
          roll: "",
          course: "",
          cgpa: ""
        });
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="form-page-container">
      <div className="form-header">
        <h1 className="title">Student Enrollment</h1>
        <p className="subtitle">Register a new student to the HK database</p>
      </div>

      <div className="nf-form-card">
        <form onSubmit={handleFormSubmit} className="student-form">
          <div className="form-row">
            <div className="input-group">
              <label>Registration Number</label>
              <input
                type="text"
                name="reg"
                placeholder="e.g. 710724..."
                onChange={handleChange}
                value={formData.reg}
                required
              />
            </div>
            <div className="input-group">
              <label>Roll Number</label>
              <input
                type="text"
                name="roll"
                placeholder="e.g. 22"
                onChange={handleChange}
                value={formData.roll}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label>Student Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>

          <div className="form-row">
            <div className="input-group">
              <label>Course / Branch</label>
              <input
                type="text"
                name="course"
                placeholder="e.g. CSBS"
                onChange={handleChange}
                value={formData.course}
                required
              />
            </div>
            <div className="input-group">
              <label>Current CGPA</label>
              <input
                type="text"
                name="cgpa"
                placeholder="0.00"
                onChange={handleChange}
                value={formData.cgpa}
                required
              />
            </div>
          </div>

          <button type="submit" className="nf-submit-btn">
            Confirm Enrollment
          </button>
        </form>
      </div>
    </div>
  );
}