import "./App.css";
import EmployeeList from "./components/EmployeeList";
import Form from "./components/Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateForm from "./components/UpdateForm";
import Login from "./components/login/Login";
import { useEffect, useState, useNavigate } from "react";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<Form />} />
          <Route path="/update/:eid" element={<UpdateForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
