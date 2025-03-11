import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const SignupPage = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/signup",
        formData,
        { withCredentials: true }
      );

      if (response.status === 200) {
        alert("User created successfully");
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

  const navigate = useNavigate();

  const goToAbout = (link) => {
    navigate(link);
  };

  return (
    <>
      <div className="signup-page d-flex flex-column justify-content-center">
        <div className="row align-items-center justify-content-center p-4 m-2 ">
          {/* Image Div - left */}
          <div className="col-md-6  d-none d-md-flex flex-column align-items-center justify-content-center">
            <img
              src="images/my-code.svg"
              alt="Logo"
              className="img-fluid p-5"
              // style={{ maxHeight: "550px", maxWidth: "550px" }}
            />
            {/* <h4 className=" text-muted">Where practice makes perfect</h4> */}
          </div>

          {/* Content Div - right */}
          <div className="contentbox col-md-6 d-flex  flex-column align-items-start justify-content-center p-4  shadow  bg-body rounded-top rounded-bottom  ">
            <div className="start p-2">
              <h2 className="main-title">
                <span className="text-muted">Welcome to </span>
                <span className="text-colour-red">Code Arena HQ</span>
              </h2>

              <p className=" main-subtitle mb-3">
                <h4>
                  <span className="text-muted">where</span>
                  <span className="text-colour-red"> practice</span>
                  <span className="text-muted"> makes </span>
                  <span className="text-colour-red"> perfect</span>
                </h4>
              </p>

              <img
                src="images/my-code.svg"
                alt="Logo"
                className="d-md-none img-fluid p-2"
              />
            </div>
            <div className="credentials w-100">
              <form onSubmit={handleSubmit}>
                <div className="email p-2 w-100">
                  <label
                    htmlFor="email"
                    className="form-label mb-2 fw-semibold"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control p-2 mb-2"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="password p-2 w-100">
                  <label
                    htmlFor="password"
                    className="form-label mb-2 fw-semibold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="form-control p-2 mb-2"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="btn-group1 d-flex flex-column p-2 w-100">
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      className="form-check-input"
                    />
                    <label htmlFor="rememberMe" className="form-check-label">
                      Remember me
                    </label>
                  </div>
                  <button className="btn site-main-colour text-light fs-5 w-100 mb-2">
                    Signup
                  </button>
                  <p className="text-center mt-2">
                    {" "}
                    Already have an account?{" "}
                    <a
                      href="/signin"
                      className="text-primary text-decoration-none"
                    >
                      Login
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
