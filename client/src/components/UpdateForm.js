import {  useState } from "react";
import Axios from "axios";
import "./Form.css";
import { useNavigate, useParams } from "react-router-dom";

const UpdateForm = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);
  let navigate = useNavigate();
  
  let eid = useParams().eid;


/*
    Axios.get(`http://localhost:3001/employees/${eid}`).then((res) => {
      setEmployeeData(res.data);
      console.log(employeeData);
})
*/

  const updateEmployee = (eid) => {
    Axios.patch(`http://localhost:3001/employees/${eid}`, {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(navigate("/"));
  };
  return (
    <div className="information">
      <label>Name : </label>
      <input
        type="text"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <label>Age : </label>
      <input
        type="number"
        onChange={(event) => {
          setAge(event.target.value);
        }}
      />
      <label>Country : </label>
      <input
        type="text"
        onChange={(event) => {
          setCountry(event.target.value);
        }}
      />
      <label>Position : </label>
      <input
        type="text"
        onChange={(event) => {
          setPosition(event.target.value);
        }}
      />
      <label>Wage(year) : </label>
      <input
        type="number"
        onChange={(event) => {
          setWage(event.target.value);
        }}
      />
      <button className="form-button" type="submit" onClick={()=> {updateEmployee(eid)}}>
        Update Employee
      </button>
      <button className="form-button" onClick={() => {navigate("/")}} >Employees List</button>

    </div>
  );
};

export default UpdateForm;
