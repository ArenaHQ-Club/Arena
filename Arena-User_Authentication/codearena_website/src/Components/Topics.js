import React from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../Assets/Colors";

export default function Topics({ id, topicName }) {
  const navigate = useNavigate();
  const goToAbout = (link, state) => {
    navigate(link, { state });
  };
  const handleContainerClick = () => {
    goToAbout(`/topics/${topicName}`, { id });
  };

  return (
    <div className="d-flex btn align-items-center justify-content-between p-3 mb-3 bg-light border rounded">
    <span className="h5 mb-0 btn-outline-dark ">{topicName}</span>
    <button className="btn btn-outline-danger  fw-bold" onClick={handleContainerClick}>
      Practice
    </button>
  </div>
  );
}

const styles = {
  topicContainer: {
    width: "100%",
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 20px",
    backgroundColor: "#f5f5f5",
    borderRadius: 20,
    border: "1px solid #ccc",
  },
  topicName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  practiceButton: {
    height: "60%",
    width: 100,
    padding: "5px 10px",
    backgroundColor: colors.main,
    color: "white",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    fontWeight: "bolder",
  },
};
