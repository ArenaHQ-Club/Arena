  <div className="container-fluid vh-100 d-flex align-items-center justify-content-center ">
      <div className="row w-100">
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center text-center ">
        {/* <img src="images/Logo.jpg" alt="Logo" height="400" width="400" /> */}
          <img
            src="images/signupimage.webp"
            alt="login/signupimg"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center p-5">
          <h2 className="">Welcome to <span className="text-colour-red">Code Arena HQ!</span></h2>
          <h2 className="mb-4">Create <span>Account</span></h2>
          {/* <p className="fs-5">Where practice makes perfect</p> */}
          <form onSubmit={handleSubmit} className="w-75">
            <div className="mb-3">
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                className="form-control p-3"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control p-3"
                value={formData.password}
                onChange={handleChange}
              />
             
            </div>
            <button
              type="submit"
              className="btn fs-5  site-main-colour w-100 text-light p-3"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-3 fs-5">
            Already have an account?{" "}
            <a href="/signin" className="text-primary">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>


// LOGIN PAGE
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
//HOMEPAGE
import React from "react";
import Stylesheet from "reactjs-stylesheet";
import logo from "../Assets/Images/Logo.jpg";
import { colors } from "../Assets/Colors";
import { useNavigate } from "react-router-dom";
import Typewriter from 'typewriter-effect';

export default function HomePage() {
  const navigate = useNavigate();

  const goToAbout = (link) => {
    navigate(link);
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <div style={styles.left}>
          <div style={styles.header}>
            <Typewriter
              options={{
                strings: ['Hey,Level up your <span style="color: ' + colors.main + '">Coding</span> Game !'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div style={styles.subtext}>
            We've crafted a clear, step-by-step roadmap to help you conquer Data
            Structures and Algorithms.
          </div>
          <div style={styles.btn} onClick={() => goToAbout("/topics")}>
            Get started
          </div>
        </div>
        <div style={styles.right}>
          <img src={logo} style={styles.image} alt="Logo" />
        </div>
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },

  contentContainer: {
    display: "flex",
    justifyContent: "space-around",
    alignContent: "center",
    width: "100%",
    marginBottom: 20,
  },

  image: {
    height: 600,
    width: 600,
  },
  left: {
    height: "100%",
    width: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginLeft: 80,
  },

  right: {
    width: "40%",
    display: "flex",
    alignItems: "center",
  },
  header: {
    fontSize: 70,
    wordSpacing: 10,
    fontWeight: "bolder",
    marginBottom: 20,
  },
  subtext: {
    fontSize: 22,
    fontWeight: 600,
  },

  btn: {
    width: "100%",
    backgroundColor: colors.main,
    marginTop: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    color: "white",
    fontSize: 18,
    fontWeight: "bolder",
    cursor: "pointer",
  },
});
//navbar
import React, { useState } from "react";
import Hamburger from "hamburger-react";
import StyleSheet from "reactjs-stylesheet";
import { colors } from "../Assets/Colors";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useNavigate } from "react-router-dom";
export default function Navbar({ isHomePage }) {
  const [isOpen, setOpen] = useState(false);

  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  const navigate = useNavigate();

  const goToAbout = (link) => {
    navigate(link);
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        {/* hamburger menu  */}
        {/* <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="white"
          size={22}
          disabled={isHomePage ? true : false}
        /> */}
        <div style={styles.logo} onClick={() => goToAbout("/home")}>
          ArenaHQ
        </div>
      </div>

      <div style={styles.right}>
        <li style={styles.menuOptions}>
          <ul onClick={() => goToAbout("/home")}>Home</ul>
          <ul onClick={() => goToAbout("/topics")}>Learning</ul>
          <ul onClick={() => goToAbout("/quiz")}>Quiz</ul>
          <ul onClick={() => goToAbout("/profile")}>Profile</ul>
        </li>
        {/* //darkmode toggle switch */}
        {/* <DarkModeSwitch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={30}
          sunColor="white"
        /> */}
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "10vh",
    background: "linear-gradient(135deg, #e52d27 0%, #b31217 100%)",
    display: "flex", // Use Flexbox
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    marginLeft: 50,
    width: 200,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menuOptions: {
    display: "flex",
    color: "white",
    fontWeight: 600,
    fontSize: 18,
    cursor: "pointer",
  },
  right: {
    marginRight: 50,

    display: "flex",
    alignItems: "center",
    width: 500,
    justifyContent: "space-around",
  },

  logo: {
    color: "white",
    fontWeight: "bolder",
    fontSize: 22,
    cursor: "pointer",
  },
});

//login page
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
//learning
import React, { useState } from "react";
import axios from "axios";
import Stylesheet from "reactjs-stylesheet";
import DifficultyLevel from "../Components/DifficultyLevel";
import Egg from "../Assets/Images/egg.png";
import Viking from "../Assets/Images/viking.png";
import Veteran from "../Assets/Images/veteran.png";
import new1 from "../Assets/Images/new1.jpg";
import new2 from "../Assets/Images/new2.jpg";
import new3 from "../Assets/Images/new3.jpg";
import Business from "../Assets/Images/businessman.png";
import { colors } from "../Assets/Colors";
import { difficultyID } from "../Assets/DifficultyID";
import Topics from "../Components/Topics";

export default function LearningPage() {
  const [topics, setTopics] = useState([]);
  const [color, setColor] = useState("");

  const fetchDifficultyData = async (difficulty, selectedColor) => {
    try {
      const response = await axios.get(
        `http://localhost:8080/difficulty/${difficulty}`,
        { withCredentials: true } // Ensure the authentication cookie is sent
      );
      setTopics(response.data);
      setColor(selectedColor);
    } catch (error) {
      console.error("Error fetching difficulty data:", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.difficultyOptions}>
        <DifficultyLevel
          img={Egg}
          text="Rookie Rumble"
          color={colors.rookie}
          onClick={() =>
            fetchDifficultyData(difficultyID.rookie_rumble, colors.rookie)
          }
        />
        <DifficultyLevel
          img={Viking}
          text="Warrior's Way"
          color={colors.warrior}
          onClick={() =>
            fetchDifficultyData(difficultyID.warriors_way, colors.warrior)
          }
        />
        <DifficultyLevel
          img={Veteran}
          text="Veteran's Vault"
          color={colors.veteran}
          onClick={() =>
            fetchDifficultyData(difficultyID.veterans_vault, colors.veteran)
          }
        />
        {/* <DifficultyLevel
          img={Viking}
          text="Founders forge"
          color={colors.warrior}
          onClick={() =>
            fetchDifficultyData(difficultyID.warriors_way, colors.warrior)
          }
        /> */}
        {/* <DifficultyLevel
          img={Business}
          text="Training Grounds"
          color={colors.training}
          onClick={() =>
            fetchDifficultyData("Training Grounds", colors.training)
          }
        /> */}
      </div>

      <div style={styles.topicsContainer}>
        {topics.length > 0 ? (
          topics.map((topic) => (
            <Topics
              id={topic.id}
              key={topic.topicName}
              topicName={topic.topicName}
              topicInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
              topicPoints={20}
              topicHours="3.5 hours"
              color={color} // Pass the color prop to the Topics component
            />
          ))
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    paddingTop: 20,
  },
 
  difficultyOptions: {
    marginTop: 20,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-around",
    paddingTop: 30,
    paddingRight: 60,
  },
  topicsContainer: {
    marginTop: 60,
    padding: "0 60px",
    display: "flex",
    flexWrap: "wrap", // Allows the components to wrap to the next line
    gap: "20px", // Adds space between the components
    justifyContent: "center", // Aligns items to the start of the container
  },
});

//dificultyleve
import React from "react";
import Stylesheet from "reactjs-stylesheet";
import { colors } from "../Assets/Colors";
import { NavLink } from "react-router-dom";
export default function DifficultyLevel({ img, text, color, onClick }) {
  return (
    //  <div style={styles.container}>
    //   <img src={img} style={styles.image} />
    //   <span style={styles.text}>{text}</span>
    //   <button style={styles.tryButton} onClick={onClick}>
    //     Try
    //   </button>
    // </div> 

<div className="card" style="width: 18rem;">
<img src={img} className="card-img-top" alt="..."/>
<div className="card-body">
  <h5 className="card-title">{text}</h5>
  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" className="btn btn-primary">Go somewhere</a>
</div>
</div> 

  );
}

const styles = Stylesheet.create({
  container: {
    height: 400,
    width: 500,
    cursor: "pointer",
    borderRadius: 30,
    display: "flex",
    flexDirection: "column", // Column layout
    alignItems: "center",
    justifyContent: "center", // Center content vertically
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)", // Adding shadow
    padding: "20px", // Added padding for spacing
  },

  image: {
    height: 150, // Increased image size
    width: 150,
    marginBottom: 20, // Space between image and title
  },

  text: {
    color: "black",
    fontWeight: "bolder",
    fontSize: 22,
    marginBottom: 20, // Space between title and button
  },

  tryButton: {
    height: 40,
    width: 120,
    backgroundColor: "red",
    color: "white",
    fontWeight: "bold",
    borderRadius: 20, // 20px border radius
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
});
//questionspage
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Question from "../Components/Question";

function QuestionPage() {
  const location = useLocation();
  const { id } = location.state || {}; // Use a default empty object in case `state` is undefined

  const [questions, setQuestions] = useState([]); // Initialize with an empty array

  const fetchQuestionData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/topics/${id}`, {
        withCredentials: true,
      });
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching difficulty data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchQuestionData();
    }
  }, [id]); // Fetch data whenever `id` changes

  return (
    <div style={styles.pageContainer}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>PROBLEM</th>
            <th style={styles.tableHeader}>ARTICLE</th>
            <th style={styles.tableHeader}>PRACTICE</th>
            <th style={styles.tableHeader}>DIFFICULTY</th>
          </tr>
        </thead>
        <tbody>
          {questions.length > 0 ? (
            questions.map((question, index) => (
              <tr key={index} style={styles.tableRow}>
                {/* <td style={styles.tableCell}>
                  <input type="checkbox" />
                </td> */}
                <td style={styles.tableCellQuestion}>{question.question}</td>
                <td style={styles.tableCell}>
                  <a style={styles.link}>Link</a>
                </td>
                <td style={styles.tableCell}>
                  <button
                    style={styles.button}
                    onClick={() => window.open(question.questionLink, "_blank")}
                  >
                    Practice
                  </button>
                </td>
                <td style={styles.tableCell}>{question.difficulty}</td>
                {/* <td style={styles.tableCell}>
                  <input type="checkbox" />
                </td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={styles.noDataCell}>
                No questions available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

// Styles for the page and table
const styles = {
  pageContainer: {
    marginTop: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  table: {
    width: "100%", // Adjust width to prevent full stretching
    borderCollapse: "collapse",

    border: "0.5px solid #ddd", // Add border around the table
    borderRadius: 10,
  },
  tableRow: {
    borderBottom: "1px solid #ddd",
  },
  tableCell: {
    padding: "12px",
    fontWeight: 600,
    borderRight: "1px solid #ddd",
    fontSize: 16,
    textAlign: "center",
  },
  tableCellQuestion: {
    padding: "12px",
    fontWeight: 600,
    borderRight: "1px solid #ddd",
    fontSize: 16,
    textAlign: "left",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#ff3131",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    fontSize: 14,
    fontWeight: "bold",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "14px",
  },
  noDataCell: {
    textAlign: "center",
    padding: "20px",
    color: "#888",
    fontStyle: "italic",
    borderBottom: "1px solid #ddd",
    fontSize: "14px",
  },
  tableHeader: {
    backgroundColor: "#f8f8f8",
    fontWeight: "bold",
    borderBottom: "3px solid #ddd", // Separate header from rows
    fontSize: "18px",
    padding: "12px",
  },
};

export default QuestionPage;

// quiz page
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
