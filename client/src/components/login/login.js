import React, { useState } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  let navigate = useNavigate();

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    })
      .then((res) => {
        sessionStorage.setItem("token", res.data.token);
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          setError(error.response.data.message);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the
          // browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
          setError(error.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
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
      { error &&  <h2>
          {error}
        </h2> }
      
    </div>
  );
};

export default Login;
