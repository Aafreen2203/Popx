import React from "react";
import "./Profile.css";
import profile from "../assets/profile.png";
import cameraimg from "../assets/cameraimg.svg"; 

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-titlecont">
        <h3 className="profile-title">Account Settings</h3>
      </div>

      <div className="profile-card">
        <div className="profile-image-container">
          <img src={profile} alt="Profile" className="profile-image" />
          <img src={cameraimg} alt="Camera" className="camera-icon" />
        </div>

        <div className="profile-info">
          <h2 className="profile-name">Marry Doe</h2>
          <p className="profile-email">Marry@gmail.com</p>
        </div>
      </div>

      <p className="profile-description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam 
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat, Sed Diam
      </p>
    </div>
  );
};

export default Profile;
