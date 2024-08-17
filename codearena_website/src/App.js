import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import StyleSheet from "reactjs-stylesheet";
import HomePage from "./Screens/HomePage";
import LearningPage from "./Screens/LearningPage";
function App() {
  return (
    <Router>
      <div className="App" style={styles.app}>
        <Navbar isHomePage={false} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<LearningPage />} />
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
