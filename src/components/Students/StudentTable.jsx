import React from "react";
import "./StudentTable.css";

const StudentTable = ({ data }) => {
  return (
    <div className="table-wrapper">
      <table className="nf-table">
        <thead>
          <tr>
            <th>Reg No</th>
            <th>Name</th>
            <th>Roll</th>
            <th>Course</th>
            <th>CGPA</th>
          </tr>
        </thead>
        <tbody>
          {data.map((s) => (
            <tr key={s._id}>
              <td>{s.reg}</td>
              <td className="white-bold">{s.name}</td>
              <td>{s.roll}</td>
              <td>{s.course}</td>
              <td className="red-bold">{s.cgpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;