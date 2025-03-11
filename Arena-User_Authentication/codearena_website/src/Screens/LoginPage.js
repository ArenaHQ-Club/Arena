import React, { useState } from "react";
import axios from "axios";
import StyleSheet from "reactjs-stylesheet";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
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

  const goToAbout = (link) => {
    navigate(link); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/signin",
        formData,
        { withCredentials: true }
      );

      if (response.status === 200) {
        alert("Logged in successfully");
        goToAbout("/home"); 
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert("Error: " + error.message);
      }
    }
  };

  return (
    <div className="loginPage  d-flex flex-column justify-content-center  min-vh-100 ">
      <div className="row align-items-center justify-content-center p-4 m-2">
        <div className="col-md-6 d-md-flex d-none flex-column align-items-center justify-content-center leftContainer">
          <img
            src="images/proud-coder.svg"
            className="img-fluid"
            alt="Login-image"
          />
        </div>

        <div className="contentbox-login col-md-6 d-flex flex-column align-items-start justify-content-center p-4 shadow rounded-top rounded-bottom rightContainer">
          <div className="form-heading m-2">
            <h2 className="main-title-login">
              <span className="">Welcome </span> Back!
            </h2>
            <p className="main-subtitle-login text-muted ms-1  fs-6 fw-semibold">
            Please enter your details
            </p>
            <img
              src="images/proud-coder.svg"
              className="img-fluid d-md-none"
              alt="Login-image"
            />
          </div>
          <div className="login-form w-100">
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-column m-2">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="input form-control p-2 mb-2"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="d-flex flex-column m-2">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input form-control p-2 mb-3"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="form-check mb-3 d-flex flex-row justify-content-between">
                <div className="remember-me">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    className="form-check-input"
                  />
                  <label htmlFor="rememberMe" className="form-check-label">
                    Remember me
                  </label>
                </div>

                <div className="fg-pass-div">
                  <p className="fg-pass mt-1">
                    <a href="/">Forgot Password?</a>
                  </p>
                </div>
              </div>

              <div className="m-2 text-center">
                <button
                  type="submit"
                  className="btn text-light site-main-colour fs-5 w-100 mb-2"
                >
                  Log In
                </button>
                <p className="signupLink mt-2">
                  Don't have an account? <a href="/signup">Sign Up</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
