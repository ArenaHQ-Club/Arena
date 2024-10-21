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
        `http://localhost:8080/difficulty/${difficulty}`
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
          img={new1}
          text="Rookie Rumble"
          color={colors.rookie}
          onClick={() =>
            fetchDifficultyData(difficultyID.rookie_rumble, colors.rookie)
          }
        />
        <DifficultyLevel
          img={new2}
          text="Warrior's Way"
          color={colors.warrior}
          onClick={() =>
            fetchDifficultyData(difficultyID.warriors_way, colors.warrior)
          }
        />
        <DifficultyLevel
          img={new3}
          text="Veteran's Vault"
          color={colors.veteran}
          onClick={() =>
            fetchDifficultyData(difficultyID.veterans_vault, colors.veteran)
          }
        />
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
