import React from "react";
import StyleSheet from "reactjs-stylesheet";

export default function Navbar() {
  return (
    <div style={styles.container}>
      <div style={styles.logo}>Your Logo</div>
      <div style={styles.menuOptions}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div style={styles.actions}>
        <button>Login</button>
        <button>Signup</button>
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "8vh",
    width: "100%",
    backgroundColor: "#FF474D",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    marginLeft: "20px",
  },
  menuOptions: {
    display: "flex",
    gap: "20px",
  },
  actions: {
    marginRight: "20px",
    display: "flex",
    gap: "10px",
  },
});
