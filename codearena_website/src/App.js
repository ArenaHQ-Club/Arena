import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import StyleSheet from "reactjs-stylesheet";
import HomePage from "./Screens/HomePage";
import LearningPage from "./Screens/LearningPage";
import QuestionPage from "./Screens/QuestionScreen";
import SignupPage from "./Screens/SignupPage";
import Profile from "./Screens/Profile";
function App() {
  return (
    <Router>
      <div className="App" style={styles.app}>
        <Navbar isHomePage={false} />
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/"
            element={
              <div>
                <HomePage />
                <LearningPage />
              </div>
            }
          />
          <Route path="/topics" element={<LearningPage />} />
          <Route path="/topics/:name" element={<QuestionPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {/* <HomePage /> */}
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
