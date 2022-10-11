import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./Quiz.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiz = (quiz) => {
  const { options, question, correctAnswer } = quiz.quiz;
  //
  const showCorrectToast = () => {
    toast(" Correct Answer! ");
  };
  const showWrongToast = () => {
    toast(" Wrong Answer,Try Again!!");
  };
  //
  const answerCheck = (answer) => {
    if (answer === correctAnswer) {
      showCorrectToast();
    } else {
      showWrongToast();
    }
  };

  const showAnswer = (answer) => {
    toast("Correct Answer is : " + answer);
  };
  return (
    <div>
      <Card className="text-center m-5 quiz-card">
        <Card.Body>
          <div className="card-title">
            <Card.Text className="question text-dark">{question}</Card.Text>
            <FontAwesomeIcon
              icon={faEye}
              className="eye"
              onClick={() => showAnswer(correctAnswer)}
            />
          </div>
          {options.map((option) => (
            <div
              className="m-2 p-2 options text-muted"
              onClick={() => answerCheck(option)}
            >
              {option}
            </div>
          ))}
        </Card.Body>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default Quiz;
