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
      const response = await axios.get(`http://localhost:8080/topics/${id}`, {
        withCredentials: true,
      });
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
            <th style={styles.tableHeader}>PROBLEM</th>
            <th style={styles.tableHeader}>ARTICLE</th>
            <th style={styles.tableHeader}>PRACTICE</th>
            <th style={styles.tableHeader}>DIFFICULTY</th>
          </tr>
        </thead>
        <tbody>
          {questions.length > 0 ? (
            questions.map((question, index) => (
              <tr key={index} style={styles.tableRow}>
                {/* <td style={styles.tableCell}>
                  <input type="checkbox" />
                </td> */}
                <td style={styles.tableCellQuestion}>{question.question}</td>
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
                {/* <td style={styles.tableCell}>
                  <input type="checkbox" />
                </td> */}
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  table: {
    width: "100%", // Adjust width to prevent full stretching
    borderCollapse: "collapse",

    border: "0.5px solid #ddd", // Add border around the table
    borderRadius: 10,
  },
  tableRow: {
    borderBottom: "1px solid #ddd",
  },
  tableCell: {
    padding: "12px",
    fontWeight: 600,
    borderRight: "1px solid #ddd",
    fontSize: 16,
    textAlign: "center",
  },
  tableCellQuestion: {
    padding: "12px",
    fontWeight: 600,
    borderRight: "1px solid #ddd",
    fontSize: 16,
    textAlign: "left",
  },
  button: {
    padding: "8px 16px",
    backgroundColor: "#ff3131",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    fontSize: 14,
    fontWeight: "bold",
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
    fontSize: "14px",
  },
  tableHeader: {
    backgroundColor: "#f8f8f8",
    fontWeight: "bold",
    borderBottom: "3px solid #ddd", // Separate header from rows
    fontSize: "18px",
    padding: "12px",
  },
};

export default QuestionPage;
