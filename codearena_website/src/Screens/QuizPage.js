import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function QuizPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const quizData = location.state?.quiz;
  const [answers, setAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(null);
  const [error, setError] = useState("");

  if (!quizData) return <h2 style={styles.error}>❌ No quiz data found.</h2>;

  const handleOptionChange = (optionIndex) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion]: optionIndex }));
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const handleSubmit = async () => {
    let totalScore = 0;
    let selectedOptions = [];

    quizData.questions.forEach((question, index) => {
      selectedOptions.push(answers[index] + 1);
      if (answers[index] + 1 === question.answer) {
        totalScore += 1;
      }
    });

    setScore(totalScore);

    const requestBody = {
      quizCode: quizData.code,
      userId: "67323b54aeec0879339827b7",
      options: selectedOptions,
      marks: totalScore,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/quizData",
        requestBody
      );
      console.log("✅ Quiz submitted successfully:", response.data);
    } catch (err) {
      console.error("⚠️ Error submitting quiz:", err);
      setError("⚠️ Server error. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      {score === null ? (
        <div style={styles.quizBox}>
          <h3 style={styles.question}>
            {console.log(quizData.questions[currentQuestion].questions)}
            {/* {currentQuestion + 1}.{" "}
            {quizData.questions[currentQuestion].questions} */}
            {currentQuestion + 1}.{" "}
            {quizData.questions[currentQuestion].type === "img" ? (
              <img
                src={quizData.questions[currentQuestion].questions}
                alt={`Question ${currentQuestion + 1}`}
                style={styles.image}
              />
            ) : (
              quizData.questions[currentQuestion].questions
            )}
          </h3>
          <div style={styles.optionsContainer}>
            {quizData.questions[currentQuestion].option.map((option, idx) => (
              <label key={idx} style={styles.optionLabel}>
                <input
                  type="radio"
                  name={`q${currentQuestion}`}
                  value={idx}
                  checked={answers[currentQuestion] === idx}
                  onChange={() => handleOptionChange(idx)}
                  style={styles.radioButton}
                />
                {option}
              </label>
            ))}
          </div>

          <div style={styles.buttonContainer}>
            {currentQuestion < quizData.questions.length - 1 ? (
              <button onClick={handleNext} style={styles.button}>
                Next
              </button>
            ) : (
              <button onClick={handleSubmit} style={styles.button}>
                Submit
              </button>
            )}
          </div>
        </div>
      ) : (
        <div style={styles.resultBox}>
          <h2 style={styles.score}>
            Your Score: {score} / {quizData.questions.length}
          </h2>
          {error && <p style={styles.error}>{error}</p>}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
    // backgroundColor: "#f4f4f4",
  },
  quizBox: {
    // backgroundColor: "white",
    padding: "2rem",
    // borderRadius: "12px",
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    width: "80%",
    textAlign: "center",
  },
  question: {
    fontSize: 25,
    fontWeight: "bolder",
    marginBottom: "1rem",
  },
  optionsContainer: {
    display: "flex",
    // flexDirection: "column",
    width: "100%",
    height: 100,

    marginTop: 60,
    gap: "0.75rem",
    alignItems: "flex-start",
    marginBottom: 20,
    padding: 10,
  },
  optionLabel: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    fontSize: 20,
    fontWeight: "bolder",
    color: "gray",
    borderRadius: "8px",
    backgroundColor: "#e0e0e0",
    width: "100%",
    cursor: "pointer",
  },
  radioButton: {
    marginRight: "0.5rem",
    height: 20,
    width: 20,
  },
  buttonContainer: {
    marginTop: "1.5rem",
    display: "flex",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#ff3131",
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    fontSize: "1.2rem",
    cursor: "pointer",
    transition: "0.3s",
  },
  buttonHover: {
    backgroundColor: "#cc2525",
  },
  resultBox: {
    textAlign: "center",
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  score: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#333",
  },
  error: {
    color: "red",
    marginTop: "1rem",
  },
  image: {
    maxWidth: 100,
    height: 100,
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};
