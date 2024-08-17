import React from "react";
import Topics from "../Components/Topics";
import Stylesheet from "reactjs-stylesheet";

export default function LearningPage() {
  return (
    <div style={styles.container}>
      <Topics />
    </div>
  );
}

const styles = Stylesheet.create({
  container: {
    paddingTop: 20,
  },
});
