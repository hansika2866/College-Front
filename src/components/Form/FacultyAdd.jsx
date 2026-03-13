import { useState } from "react";
import "./FacultyAdd.css";

export default function StaffRegForm() {
  const [formData, setFormData] = useState({
    staffId: "",
    name: "",
    dept: "",
    designation: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "name" && value.length >= 25) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:8080/api/staff", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log("Staff saved:", data);
        alert("Staff added successfully!");
        setFormData({
          staffId: "",
          name: "",
          dept: "",
          designation: ""
        });
      })
      .catch(err => console.error(err));
  }

  return (
    <div className="form-page-container">
      <div className="form-header">
        <h1 className="title">Staff Registration</h1>
        <p className="subtitle">Add new members to the HK directory</p>
      </div>

      <div className="nf-form-card">
        <form onSubmit={handleFormSubmit} className="staff-form">
          <div className="input-group">
            <label>Staff Identification</label>
            <input
              type="text"
              name="staffId"
              placeholder="e.g. STF-101"
              onChange={handleChange}
              value={formData.staffId}
              required
            />
          </div>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              onChange={handleChange}
              value={formData.name}
              required
            />
          </div>

          <div className="input-group">
            <label>Department</label>
            <input
              type="text"
              name="dept"
              placeholder="e.g. Computer Science"
              onChange={handleChange}
              value={formData.dept}
              required
            />
          </div>

          <div className="input-group">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              placeholder="e.g. Senior Professor"
              onChange={handleChange}
              value={formData.designation}
              required
            />
          </div>

          <button type="submit" className="nf-submit-btn">
            Register Staff member
          </button>
        </form>
      </div>
    </div>
  );
}