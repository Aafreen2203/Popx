import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    // Basic validation ensured required feilds are filled
    if (!formData.fullName || !formData.phoneNumber || !formData.email || !formData.password) {
      alert("Please fill out all required fields.");
      return;
    }

    console.log("User Registered:", formData); // form submission
    navigate("/profile"); // Redirect to profile after form submission
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Create your PopX account</h2>
        <form onSubmit={handleSubmit}>
          {["fullName", "phoneNumber", "email", "password"].map((field, index) => (
            <div className="input-group" key={index}>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder=" "
                required
              />
              <label className="required">{field.replace(/([A-Z])/g, " $1")}</label>
            </div>
          ))}
          <div className="input-group">
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder=" "
            />
            <label>Company name </label>
          </div>

          {/* Radio Buttons for Agency Selection */}
          <div className="radio-group">
            <label>Are you an Agency?</label>
            <div className="radio-options">
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={handleChange}
                  className="no-radiobtn"
                />
                No
              </label>
            </div>
          </div>

          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
