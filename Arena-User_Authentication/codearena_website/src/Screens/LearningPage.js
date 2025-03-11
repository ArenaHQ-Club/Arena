import React, { useState } from "react";
import axios from "axios";
import Stylesheet from "reactjs-stylesheet";
import DifficultyLevel from "../Components/DifficultyLevel";
import Egg from "../Assets/Images/egg.png";
import Viking from "../Assets/Images/viking.png";
import Veteran from "../Assets/Images/veteran.png";
import rookie from "../Assets/Images/rookie.svg"
import warrior from "../Assets/Images/warrior.svg"
import done from "../Assets/Images/done.svg"
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
        `http://localhost:8080/difficulty/${difficulty}`,
        { withCredentials: true } // Ensure the authentication cookie is sent
      );
      setTopics(response.data);
      console.log(response.data)
      setColor(selectedColor);
    } catch (error) {
      console.error("Error fetching difficulty data:", error);
    }
  };

  return (
    <div className="styles.container learnings-cards">
      <div className="styles.difficultyOptions parent-gap  d-flex flex-row flex-wrap align-items-center py-4 justify-content-around">
        <DifficultyLevel
          img={rookie}
          text="Rookie Rumble"
          desc="Every great coder starts somewhere! Take your first step into the world of DSA build the foundation."
          color={colors.rookie}
          onClick={() =>
            fetchDifficultyData(difficultyID.rookie_rumble, colors.rookie)
          }
        />
        <DifficultyLevel
          img={warrior}
          text="Warrior's Way"
          desc="The battle intensifies! Push your limits, and level up your skills to become a true warrior of DSA."
          color={colors.warrior}
          onClick={() =>
            fetchDifficultyData(difficultyID.warriors_way, colors.warrior)
          }
        />
        <DifficultyLevel
          img={done}
          text="Veteran's Vault"
          desc=" Only the elite make it here! Master the art of problem-solving to stand among the legends of coding."
          color={colors.veteran}
          onClick={() =>
            fetchDifficultyData(difficultyID.veterans_vault, colors.veteran)
          }
        />
        {/* <DifficultyLevel
          img={Viking}
          text="Founders forge"
          color={colors.warrior}
          onClick={() =>
            fetchDifficultyData(difficultyID.warriors_way, colors.warrior)
          }
        /> */}
        {/* <DifficultyLevel
          img={Business}
          text="Training Grounds"
          color={colors.training}
          onClick={() =>
            fetchDifficultyData("Training Grounds", colors.training)
          }
        /> */}
      </div>

      <div className="styles.topicsContainer">
        {topics.length > 0 ? (
          topics.map((topic) => (
            <Topics
              id={topic.id}
              key={topic.topicName}
              topicName={topic.topicName}
              topicInfo="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore"
              topicPoints={20}
              topicHours="3.5 hours"
              color={color} 
            />
          ))
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}

