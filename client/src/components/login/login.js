import React, { useState } from "react";
import Axios from "axios";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((res) => {
      if (res.data.error) {
        alert(res.data.error);
      } else {
        sessionStorage.setItem("token", res.data.token);
      }
    });
  };

  return (
    <div className="information">
      <label>Email : </label>
      <input
        type="text"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <label>Password : </label>
      <input
        type="Password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button className="form-button" type="submit" onClick={login}>
        Login
      </button>
    </div>
  );
};

export default Login;
