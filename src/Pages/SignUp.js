import "./SignUp.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    };
    if (formData.firstName.trim() === "") {
      newErrors.firstName = "First Name is required";
    }
    if (formData.lastName.trim() === "") {
      newErrors.lastName = "Last Name is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const API_ENDPOINT = "http://localhost:4000/api/v1/signup";
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch(API_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        const responseData = await response.json();
        console.log("Response:", responseData);

        if (response.ok) {
          toast.success("Account Created Successfully.");
          navigate("/Login");
          console.log("Signup successful");
        } else {
          toast.error("Signup failed. Please fix errors.");
          console.error("Signup failed");
        }
      } catch (error) {
        toast.error("Signup failed. Please fix errors.");
        console.error("Error:", error);
      }
    } else {
      toast.error("Signup failed. Please fix errors.");
      console.log("Form is invalid. Please fix errors.");
    }
  };

  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/Login");
  };

  return (
    <div className="signup">
      <div className="signup1">
        <p id="welcome">Welcome Back!</p>
        <div className="text">
          <p>To keep connected with us please login with your personal info</p>
        </div>
        <div>
          <button className="btn" onClick={handleSignIn}>
            SIGN IN
          </button>
        </div>
      </div>
      <div className="signup2">
        <p className="text1">Create Account</p>
        <div className="icons" style={{ display: "flex" }}>
          <FaGoogle />
          <FaFacebookF />
          <FaApple />
        </div>
        <p className="text2">or use your email for registration</p>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="First Name"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
            <br />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
            <input
              type="text"
              placeholder="Last Name"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
            <br />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
            <input
              type="text"
              placeholder="Email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <br />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <br />
            {errors.password && <p className="error">{errors.password}</p>}
            <button
              className="btn"
              style={{
                backgroundColor: "#6ACE40",
                border: "none",
                marginLeft: "27%",
              }}
              type="submit"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
