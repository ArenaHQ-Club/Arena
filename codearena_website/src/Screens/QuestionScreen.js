import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Question from "../Components/Question";

function QuestionPage() {
  const location = useLocation();
  const { id } = location.state || {}; // Use a default empty object in case `state` is undefined

  const [questions, setQuestions] = useState([]); // Initialize with an empty array

  const fetchQuestionData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/topics/${id}`);
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching difficulty data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchQuestionData();
    }
  }, [id]); // Fetch data whenever `id` changes

  return (
    <div style={styles.pageContainer}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>STATUS</th>
            <th>PROBLEM</th>
            <th>ARTICLE</th>
            <th>PRACTICE</th>
            <th>DIFFICULTY</th>
            <th>REVISION</th>
          </tr>
        </thead>
        <tbody>
          {questions.length > 0 ? (
            questions.map((question, index) => (
              <tr key={index} style={styles.tableRow}>
                <td style={styles.tableCell}>
                  <input type="checkbox" />
                </td>
                <td style={styles.tableCell}>{question.question}</td>
                <td style={styles.tableCell}>
                  <a style={styles.link}>Link</a>
                </td>
                <td style={styles.tableCell}>
                  <button
                    style={styles.button}
                    onClick={() => window.open(question.questionLink, "_blank")}
                  >
                    Practice
                  </button>
                </td>
                <td style={styles.tableCell}>{question.difficulty}</td>
                <td style={styles.tableCell}>
                  <input type="checkbox" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={styles.noDataCell}>
                No questions available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

// Styles for the page and table
const styles = {
  pageContainer: {
    marginTop: 20,
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  headingContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    fontWeight: "bold",
    fontSize: "16px", // Adjusted font size
    borderBottom: "1px solid #ddd",
    marginBottom: "20px",
    backgroundColor: "#f8f8f8",
  },
  headingItem: {
    width: "16.5%", // Adjusted to distribute space evenly for 6 items
    textAlign: "center",
    padding: "10px",
    fontWeight: "bold", // Increased font weight for better emphasis
    fontSize: "14px", // Slightly larger font size for clarity
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  tableRow: {
    borderBottom: "1px solid #ddd",
  },
  tableCell: {
    padding: "12px", // Increased padding for better readability
    fontWeight: 600,
    borderRight: "1px solid #ddd",
    fontSize: "14px", // Better font size for table content
  },
  inputField: {
    padding: "5px",
    width: "100%",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "14px",
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    cursor: "pointer",
    fontSize: "14px",
  },
  noDataCell: {
    textAlign: "center",
    padding: "20px",
    color: "#888",
    fontStyle: "italic",
    borderBottom: "1px solid #ddd",
    colspan: "6",
    fontSize: "14px",
  },
};

export default QuestionPage;
