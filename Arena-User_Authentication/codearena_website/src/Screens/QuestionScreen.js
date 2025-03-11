import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Question from "../Components/Question";
import 'bootstrap/dist/css/bootstrap.min.css'; 
function QuestionPage() {
  const location = useLocation();
  const { id } = location.state || {};

  const [questions, setQuestions] = useState([]);

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
  }, [id]);

  return (
    <div className="container mt-4 ">
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">PROBLEM</th>
              <th scope="col">ARTICLE</th>
              <th scope="col">PRACTICE</th>
              <th scope="col">DIFFICULTY</th>
            </tr>
          </thead>
          <tbody>
            {questions.length > 0 ? (
              questions.map((question, index) => (
                <tr key={index}>
                  <td className="text-left">{question.question}</td>
                  <td>
                    <a href="#" className="text-primary">Link</a>
                  </td>
                  <td>
                    <button
                      className="btn  btn-outline-success"
                      onClick={() => window.open(question.questionLink, "_blank")}
                    >
                      Practice 
                    </button>
                  </td>
                  <td className="btn">{question.difficulty}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-muted py-4">
                  No questions available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default QuestionPage;