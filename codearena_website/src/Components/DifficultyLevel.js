import React from "react";
import Stylesheet from "reactjs-stylesheet";

export default function DifficultyLevel({ img, text, color, onClick }) {
  return (
    <div style={styles.container}>
      <img src={img} style={styles.image} />
      <span style={styles.text}>{text}</span>
      <button style={styles.tryButton} onClick={onClick}>
        Try
      </button>
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
