import React from "react";
import "./Profile.css";
import profile from "../assets/profile.png"

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="account-settings">
        <img src={profile} alt="Profile" />
        <div>
          <h2>Marry Doe</h2>
          <p>Marry@gmail.com</p>
        </div>
      </div>
      <p>
        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Diam Nonummy 
        Ermod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam
      </p>
    </div>
  );
};

export default Profile;
