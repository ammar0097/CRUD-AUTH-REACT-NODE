import { useState , useEffect } from "react";
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

  useEffect(() => {
    Axios.get(`http://localhost:3001/employees/${eid}`)
      .then((res) => {
        setName(res.data.name);
        setCountry(res.data.country);
        setPosition(res.data.position);
        setAge(res.data.age);
        setWage(res.data.wage);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
 

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
        value={name}
      />
      <label>Age : </label>
      <input
        type="number"
        onChange={(event) => {
          setAge(event.target.value);
        }}
        value={age}
      />
      <label>Country : </label>
      <input
        type="text"
        onChange={(event) => {
          setCountry(event.target.value);
        }}
        value={country}
      />
      <label>Position : </label>
      <input
        type="text"
        onChange={(event) => {
          setPosition(event.target.value);
        }}
        value={position}
      />
      <label>Wage(year) : </label>
      <input
        type="number"
        onChange={(event) => {
          setWage(event.target.value);
        }}
        value={wage}
      />
      <button
        className="form-button"
        type="submit"
        onClick={() => {
          updateEmployee(eid);
        }}
      >
        Update Employee
      </button>
      <button
        className="form-button"
        onClick={() => {
          navigate("/");
        }}
      >
        Employees List
      </button>
    </div>
  );
};

export default UpdateForm;
