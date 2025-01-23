import React, { useState } from "react";
import axios from "axios";
import StyleSheet from "reactjs-stylesheet";
import { useNavigate } from "react-router-dom";

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
        formData
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
    <div style={styles.signupPage}>
      <div style={styles.leftContainer}>
        <h1 style={styles.heading}>Welcome to Code Arena HQ!</h1>
        <p style={styles.subheading}>Where practice makes perfect</p>
      </div>
      <div style={styles.rightContainer}>
        <h2 style={styles.formHeading}>Create Account</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            style={styles.input}
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            style={styles.input}
            value={formData.password}
            onChange={handleChange}
          />
          <button type="submit" style={styles.signupButton}>
            Sign Up
          </button>
        </form>
        <p style={styles.loginLink}>
          Already have an account?{" "}
          <a href="/login" style={styles.link}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;

const styles = StyleSheet.create({
  signupPage: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#f0f4f8",
  },
  leftContainer: {
    flex: 1,
    background: "linear-gradient(135deg, #e52d27 0%, #b31217 100%)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "0 40px",
  },
  heading: {
    fontSize: "3rem",
    margin: 0,
    textAlign: "left",
  },
  subheading: {
    fontSize: "1.2rem",
    marginTop: "10px",
    textAlign: "left",
  },
  rightContainer: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "40px 60px",
  },
  formHeading: {
    fontSize: "2rem",
    marginBottom: "20px",
    textAlign: "left",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  input: {
    marginBottom: "20px",
    padding: "15px",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "5px",
    width: "100%",
  },
  signupButton: {
    padding: "15px",
    fontSize: "1.1rem",
    backgroundColor: "#e52d27",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
  },
  loginLink: {
    marginTop: "20px",
    textAlign: "center",
  },
  link: {
    color: "#e52d27",
    textDecoration: "none",
  },
});
