import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import "./Quiz.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiz = (quiz) => {
  // console.log(typeof quiz);
  // console.log(quiz.quiz);
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
    // console.log("My Answer:", answer);
    if (answer === correctAnswer) {
      console.log("answer is right");
      showCorrectToast();
    } else {
      showWrongToast();
      console.log("wrong");
    }
  };

  const showAnswer = (answer) => {
    toast("Correct Answer: " + answer);
  };
  return (
    <div>
      <Card className="text-center m-5 bg-info">
        <Card.Body>
          <div className="card-title">
            <Card.Text className="question">{question}</Card.Text>
            <FontAwesomeIcon
              icon={faEye}
              className="eye"
              onClick={() => showAnswer(correctAnswer)}
            />
          </div>
          {options.map((option) => (
            <div
              className="m-2 p-2 bg-warning"
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
