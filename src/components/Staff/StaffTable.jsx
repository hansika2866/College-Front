import React from "react";
import "./StaffTable.css";

const StaffTable = ({ data }) => {
  return (
    <div className="table-wrapper">
      <table className="nf-table">
        <thead>
          <tr>
            <th>Staff ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {data.map((st) => (
            <tr key={st._id}>
              <td className="id-cell">{st.staffId}</td>
              <td className="white-bold">{st.name}</td>
              <td>{st.dept}</td>
              <td className="red-bold">{st.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;