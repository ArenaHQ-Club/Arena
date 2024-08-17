import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "./Components/Navbar";
import StyleSheet from "reactjs-stylesheet";
import HomePage from "./Screens/HomePage";

function App() {
  return (
    <div className="App" style={styles.app}>
      <Navbar isHomePage={false} />
      <HomePage />
    </div>
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
