import Axios from "axios";
import "./Form.css";
import React, { useState, useEffect } from "react";
import "./EmployeeList.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    Axios.get("http://localhost:3001/employees/").then((res) => {
      setEmployees(res.data);
    });
  }, [employees]);


  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/employees/${id}`);
  }

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
                <td><DeleteIcon  className="form-icon" type="delete" onClick={() => deleteEmployee(val.id)}></DeleteIcon></td>
              </tr>
            </tbody>
          );
        })}
      </table>
      <button className="form-button" onClick={() => {navigate("/add")}} >Add employee</button>
    </div>
  );
};

export default EmployeeList;
