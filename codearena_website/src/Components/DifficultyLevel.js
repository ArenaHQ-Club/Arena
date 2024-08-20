import React from "react";
import Stylesheet from "reactjs-stylesheet";
import { colors } from "../Assets/Colors";

export default function DifficultyLevel({ img, text, color }) {
  return (
    <div style={{ ...styles.container, backgroundColor: color }}>
      <img src={img} style={styles.image} />
      <span style={styles.text}>{text}</span>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    height: 100,
    width: 400,
    cursor: "pointer",
    borderRadius: 30,
    display: "flex",
    // justifyContent: "center",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)", // Adding shadow
    alignItems: "center",
  },

  image: {
    height: 100,
    width: 100,

    marginLeft: 30, // Adding some space between the image and the text
  },

  text: {
    color: "white",
    fontWeight: "bolder",
    fontSize: 22,
    marginLeft: 30,
  },
});
