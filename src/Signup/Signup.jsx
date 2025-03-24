import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
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

  return (
    <div className="container">
      <div className="form-box">
        <h2>Create your PopX account</h2>
        <form>
          {/* Floating Label Inputs */}
          {["fullName", "phoneNumber", "email", "password", "companyName"].map((field, index) => (
            <div className="input-group" key={index}>
              <input
                type={field === "password" ? "password" : "text"}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder=" " // Necessary for floating labels to work
                required
              />
              <label>{field === "companyName" ? "Company name" : `${field.replace(/([A-Z])/g, " $1")}*`}</label>
            </div>
          ))}

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


          {/* Submit Button */}
          <button type="submit">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
