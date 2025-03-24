import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <h1>Signin to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className="loginput-group">
        <input type="email" id="email" placeholder=" " required />
        <label htmlFor="email">Email Address</label>
      </div>

      <div className="loginput-grouppass">
        <input type="password" id="password" placeholder=" " required />
        <label htmlFor="password">Password</label>
      </div>

      <button className="loginbtn" onClick={() => navigate("/profile")}>Login</button>
    </div>
  );
};

export default Login;
