import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <button className="create-account" onClick={() => navigate("/signup")}>Create Account</button>
        <button className="login-button" onClick={() => navigate("/login")}>Already Registered? Login</button>
      </div>
    </div>
  );
};

export default LandingPage;
