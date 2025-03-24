import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Welcome to PopX</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <button className="create-account">Create Account</button>
        <button className="login-button">Already Registered? Login</button>
      </div>
    </div>
  );
};

export default LandingPage;
