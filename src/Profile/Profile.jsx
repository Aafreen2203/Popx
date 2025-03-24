import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import profile from "../assets/profile.png";
import cameraimg from "../assets/cameraimg.svg";

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // ✅ Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUserData(storedUser);
    } else {
      alert("No user logged in. Redirecting to login...");
      navigate("/login");
    }
  }, [navigate]);

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
          {userData ? (
            <>
              <h2 className="profile-name">{userData.fullName}</h2>
              <p className="profile-email">{userData.email}</p>
            </>
          ) : (
            <p>Loading...</p>
          )}
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
