import React, { useState } from "react";
import axios from "axios";
import StyleSheet from "reactjs-stylesheet";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Step 3: Handle Form Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Step 4: Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Step 5: Make the POST request using axios
      const response = await axios.post(
        "http://localhost:8080/signup",
        formData
      );

      // Step 6: Handle the response
      if (response.status === 200) {
        alert("User created successfully");
      }
    } catch (error) {
      // Handle errors
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert("Error: " + error.message);
      }
    }
  };

  return (
    <div style={styles.signupPage}>
      <div style={styles.leftContainer}>
        <h1 style={styles.heading}>Welcome to Code Arena HQ!</h1>
        <p style={styles.subheading}>where practice makes perfect</p>
      </div>
      <div style={styles.rightContainer}>
        <h2 style={styles.formHeading}>Create Account</h2>

        {/* Step 7: Update the form to call handleChange and handleSubmit */}
        <form onSubmit={handleSubmit}>
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
          Already have an account? <a href="/login">Login</a>
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
  signupButton: {
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
  loginLink: {
    fontSize: "1rem",
    color: "#555",
  },
});
