import React, { useState, useEffect } from "react";
import StaffTable from "./StaffTable";
import "./StaffDetails.css";

const StaffDetails = () => {
  const [staff, setStaff] = useState([]);
  const [isTableView, setIsTableView] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/staff")
      .then((res) => res.json())
      .then((data) => setStaff(data))
      .catch((err) => console.error("Error fetching staff:", err));
  }, []);

  const filteredStaff = staff.filter((st) =>
    st.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    st.staffId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    st.dept.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="view-container">
      <div className="view-header">
        <h1 className="title">Staff Directory</h1>
        
        <div className="search-container">
          <span className="search-icon">🔍  </span>
          <input
            type="text"
            placeholder="Search name, ID or department..."
            className="staff-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button className="toggle-btn" onClick={() => setIsTableView(!isTableView)}>
          {isTableView ? "Show Cards" : "Show Table"}
        </button>
      </div>

      {isTableView ? (
        <StaffTable data={filteredStaff} />
      ) : (
        <div className="card-grid">
          {filteredStaff.map((st) => (
            <div className="nf-card" key={st._id}>
              <div className="card-top">
                <h3>{st.name}</h3>
                <span className="id-badge">{st.staffId}</span>
              </div>
              <div className="nf-divider"></div>
              <div className="card-body">
                <p>
                  <span>Department</span>
                  <b>{st.dept}</b>
                </p>
                <p>
                  <span>Designation</span>
                  <b className="red-accent">{st.designation}</b>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default StaffDetails;