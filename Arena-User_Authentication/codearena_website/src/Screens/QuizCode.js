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
    setError("");
    setQuizData(null); 

    try {
      const response = await axios.get(
        `http://localhost:8080/quiz/${quizCode}`
      );
      setQuizData(response.data); 
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
    // <div style={styles.container}>
    //   <div style={styles.box}>
    //     <img src={logo} style={styles.image} alt="Logo" />
    //     <form onSubmit={handleSubmit} style={styles.form}>
    //       <input
    //         type="text"
    //         placeholder="Quiz Code"
    //         value={quizCode}
    //         onChange={(e) => setQuizCode(e.target.value)}
    //         style={styles.input}
    //         required
    //       />
    //       <button type="submit" style={styles.button}>
    //         Submit
    //       </button>
    //     </form>
    //     {error && <p style={styles.error}>{error}</p>}
    //   </div>
    // </div>
    <div className="container-fluid  d-flex justify-content-center align-items-center  mt-4 ">
      <div className="quiz-card card mb-3 shadow p-2 ">
        <div className="row g-0 ">
          <div className="col-md-4">
            <img
              src="images/quizdoodle.svg"
              className="img-fluid rounded-start quiz-doodle m-3"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body ms-4 quiz-body ">
              <h5 className="card-title fs-2 home-colour-third fw-bold ms-1">QUIZ TIME</h5>

              <p class="card-text  fw-bold fs-6 text-muted ms-1">
              Ready to put your DSA skills to the test?Enter the Quiz Code and
                Get Started
              </p>

              <ul class="list-group list-group-flush mb-2">
                <li class="list-group-item">
                  ✔️{" "}
                  <span className="text-muted fw-bold">
                    Handpicked Challenges
                  </span>
                  -Arrays, Graphs, DP & More!
                </li>
                <li class="list-group-item">
                  ✔️{" "}
                  <span className="text-muted fw-bold">
                    Adaptive Difficulty Levels
                  </span>
                  -Beginner to Advanced.
                </li>
                <li class="list-group-item">
                  ✔️{" "}
                  <span className="text-muted fw-bold">
                    Compete & Track Progress
                  </span>
                  -Climb the leaderboard!
                </li>
              </ul>

              <div className="mt-4 ms-2">
                <form onSubmit={handleSubmit} className="quiz-code-form">
                  <input
                    type="text"
                    placeholder="Quiz Code"
                    value={quizCode}
                    onChange={(e) => setQuizCode(e.target.value)}
                    required
                    className="input-group  form-control w-50 quiz-code-input"
                  />
                  <div>
                    <button type="submit" className="btn site-main-colour text-light quiz-button w-50 mt-3">
                      Submit
                    </button>
                  </div>
                </form>
                {error && <p>{error}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

