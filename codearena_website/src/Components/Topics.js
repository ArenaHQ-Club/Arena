import React, { useState } from "react";
import Stylesheet from "reactjs-stylesheet";

import Checkbox from "@mui/material/Checkbox";

export default function Topics() {
  const [isChecked, setIsChecked] = useState(false);

  const handleContainerClick = () => {
    window.open("https://leetcode.com", "_blank"); // Open leetcode.com in a new tab
  };
  return (
    <div
      style={{
        ...styles.container,
        opacity: isChecked ? 0.3 : 1, // Reduce opacity if checked
      }}
    >
      <div style={styles.questionType}>EASY</div>
      <div style={styles.topic} onClick={handleContainerClick}>
        Insertion in arrays
      </div>
      <div style={styles.description} onClick={handleContainerClick}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut.
      </div>
      <div style={styles.line}></div>
      <div style={styles.bottom}>
        <div style={styles.left}>
          <div style={styles.time}>1 hr 30 mins</div>
          <div style={styles.points}>8 pts</div>
        </div>

        <div style={styles.right}>
          <Checkbox
            size="large"
            checked={isChecked}
            onChange={(event) => setIsChecked(event.target.checked)} // Update the state on change
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    height: 250,
    width: 250,
    backgroundColor: "green",
    borderRadius: 10,
    padding: 20,
  },
  line: {
    marginTop: 20,
    borderTop: "0.5px solid #d3d3d3",
  },

  questionType: {
    marginTop: 10,
    color: "#d3d3d3",
    fontWeight: "bold",
    fontSize: 14,
  },

  topic: {
    marginTop: 10,
    color: "white",
    fontWeight: "bolder",
    cursor: "pointer",
  },

  description: {
    cursor: "pointer",
    marginTop: 10,
    color: "#d3d3d3",
    fontWeight: 400,
  },

  time: {
    marginTop: 20,
    fontWeight: 600,
    color: "#d3d3d3",
    fontSize: 14,
  },

  points: {
    color: "white",
    fontWeight: "bolder",
    fontSize: 18,
  },

  btn: {
    height: 40,
    width: 40,
    backgroundColor: "white",
    marginRight: 15,
    borderRadius: 5,
  },

  bottom: {
    display: "flex",

    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  right: {
    marginRight: 10,
  },
});
