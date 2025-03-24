import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h1>Signin to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <input type="email" placeholder="Enter email address" />
      <input type="password" placeholder="Enter password" />
      <button>Login</button>
    </div>
  );
};

export default Login;
