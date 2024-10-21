import React, { useState, useEffect } from "react";
import Stylesheet from "reactjs-stylesheet";
import Checkbox from "@mui/material/Checkbox";
import { colors } from "../Assets/Colors";
import logo from "../Assets/Images/Logo.jpg";

export default function Question({ questionName, questionLink, rank }) {
  const [isChecked, setIsChecked] = useState(false);
  const [platform, setPlatform] = useState(null);
  const [report, setReported] = useState("black");
  return (
    <div style={styles.container}>
      <Checkbox
        size="large"
        checked={isChecked}
        onChange={(event) => setIsChecked(event.target.checked)} // Update the state on change
        sx={{
          color: colors.main,
          "&.Mui-checked": {
            color: colors.main,
          },
        }}
      />
      <span
        style={styles.questionName}
        onClick={() => window.open(questionLink, "_blank")}
      >
        {questionName}
      </span>
      <img src={logo} style={styles.image} />
      <div
        style={{
          ...styles.rank,
          backgroundColor:
            rank === "Easy"
              ? "#306844"
              : rank === "Medium"
              ? "#bda800"
              : rank === "Hard"
              ? colors.main
              : "transparent",
        }}
      >
        {rank}
      </div>
      <span
        className="material-symbols-outlined"
        onClick={() =>
          report === "black" ? setReported("red") : setReported("black")
        }
        style={{
          marginLeft: 40,
          fontSize: "48px",
          color: report,
          cursor: "pointer",
        }}
      ></span>
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    display: "flex",
    width: "100%",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  questionName: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 1000,
    fontWeight: 600,
    marginLeft: 20,
  },

  image: {
    width: 50,
    height: 50,
  },

  rank: {
    marginLeft: 60,
    borderRadius: 20,
    height: 50,
    width: 90,

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bolder",
    color: "white",
  },
});
