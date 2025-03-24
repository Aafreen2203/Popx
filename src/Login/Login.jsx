import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ Get stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      alert("No user found. Please sign up first.");
      return;
    }

    // ✅ Validate credentials
    if (storedUser.email === loginData.email && storedUser.password === loginData.password) {
      alert("Login Successful!");
      navigate("/profile");
    } else {
      alert("Invalid email or password. Try again.");
    }
  };

  return (
    <div className="login-container">
      <h1>Signin to your PopX account</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <form onSubmit={handleLogin}>
        <div className="loginput-group">
          <input type="email" name="email" placeholder=" " required onChange={handleChange} />
          <label>Email Address</label>
        </div>

        <div className="loginput-grouppass">
          <input type="password" name="password" placeholder=" " required onChange={handleChange} />
          <label>Password</label>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
