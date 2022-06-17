import Axios from "axios";
import "./Form.css";
import React, { useState, useEffect } from "react";
import "./EmployeeList.css";

const EmployeeList = () => {
  const [employees, setEmployees] = useState();

  useEffect(() => {
    Axios.get("http://localhost:3001/employees/").then((res) => {
      setEmployees(res.data);
    });
  }, [employees]);

  return (
    <div>
      <table className="zui-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
            <th>Position</th>
            <th>Wage</th>
          </tr>
        </thead>
        {(employees || []).map((val, key) => {
          return (
            <tbody>
              <tr>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.country}</td>
                <td>{val.position}</td>
                <td>{val.wage}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default EmployeeList;
