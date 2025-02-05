import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/Images/Logo.jpg";

export default function QuizCode() {
  const [quizCode, setQuizCode] = useState("");
  const [quizData, setQuizData] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error before request
    setQuizData(null); // Reset previous quiz data

    try {
      const response = await axios.get(
        `http://localhost:8080/quiz/${quizCode}`
      );
      setQuizData(response.data); // Store quiz data
      navigate(`/quiz/${quizCode}`, { state: { quiz: response.data } });
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("❌ Quiz not found.");
      } else {
        setError("⚠️ Server error. Please try again.");
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <img src={logo} style={styles.image} alt="Logo" />
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Quiz Code"
            value={quizCode}
            onChange={(e) => setQuizCode(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
        {error && <p style={styles.error}>{error}</p>}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vw",
    backgroundImage: `url('https://source.unsplash.com/random/1920x1080?technology')`, // Replace with your actual image URL
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },

  box: {
    padding: "2rem",
    borderRadius: "1rem",

    width: "30vw",
    minWidth: "20rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },

  input: {
    height: 40,
    width: "70%",
    padding: "0.75rem",
    border: "2px solid #ccc",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    outline: "none",
    marginBottom: "1rem",
    textAlign: "center",
    fontWeight: "bolder",
  },

  button: {
    height: 60,
    width: "70%",
    backgroundColor: "#d32f2f",
    color: "white",
    padding: "0.75rem",
    border: "none",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
    fontWeight: "bolder",
  },

  image: {
    marginBottom: 70,
    height: 150,
    width: 150,
  },

  error: {
    color: "red",
    fontWeight: "bold",
    marginTop: "1rem",
  },
};
