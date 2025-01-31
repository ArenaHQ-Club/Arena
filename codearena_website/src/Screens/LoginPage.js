import React, { useState } from "react";
import axios from "axios";
import StyleSheet from "reactjs-stylesheet";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate(); // ✅ Moved to the top level of the component

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
    navigate(link); // ✅ Now using navigate correctly
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
        goToAbout("/home"); // ✅ Redirects properly
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
    <div style={styles.loginPage}>
      <div style={styles.leftContainer}>
        <h1 style={styles.heading}>Welcome Back!</h1>
        <p style={styles.subheading}>Log in to continue</p>
      </div>
      <div style={styles.rightContainer}>
        <h2 style={styles.formHeading}>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
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
          <button type="submit" style={styles.loginButton}>
            Log In
          </button>
        </form>
        <p style={styles.signupLink}>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

const styles = StyleSheet.create({
  loginPage: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  leftContainer: {
    flex: 1,
    background: "linear-gradient(135deg, #e52d27 0%, #b31217 100%)",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
  },
  rightContainer: {
    flex: 1,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 40px",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },
  subheading: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  formHeading: {
    fontSize: "1.8rem",
    marginBottom: "20px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "1rem",
  },
  loginButton: {
    width: "100%",
    padding: "10px 0",
    backgroundColor: "#e52d27",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    marginBottom: "20px",
  },
  signupLink: {
    fontSize: "1rem",
    color: "#555",
  },
});
