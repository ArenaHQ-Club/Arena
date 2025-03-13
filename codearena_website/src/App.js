import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar"; // Make sure this path is correct
import StyleSheet from "reactjs-stylesheet";
import HomePage from "./Screens/HomePage"; // Make sure these paths are correct
import LearningPage from "./Screens/LearningPage";
import QuestionPage from "./Screens/QuestionScreen";
import SignupPage from "./Screens/SignupPage";
import Profile from "./Screens/Profile";
import LoginPage from "./Screens/LoginPage";
import LoadingPage from "./Screens/LoadingPage";
import QuizCode from "./Screens/QuizCode";
import QuizPage from "./Screens/QuizPage";

function NavbarWrapper() {
  const location = useLocation();
  const navbarRoutes = [
    "/home",
    "/topics",
    "/profile",
    "/topics/:name",
    "/quiz",
    "/quiz/:code",
  ];
  const showNavbar =
    navbarRoutes.includes(location.pathname) ||
    location.pathname.startsWith("/topics/");

  return showNavbar ? <Navbar /> : null;
}

function App() {
  return (
    <Router>
      <div className="App" style={styles.app}>
        <NavbarWrapper />
        <Routes>
          <Route path="/" element={<LoadingPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/topics" element={<LearningPage />} />
          <Route path="/topics/:name" element={<QuestionPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/quiz" element={<QuizCode />} />
          <Route path="/quiz/:code" element={<QuizPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

const styles = StyleSheet.create({
  app: {
    maxWidth: "100vw",
    height: "100vh",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
});
