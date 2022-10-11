import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "./Quiz/Quiz";
import "./TopicQuiz.css";

const TopicQuiz = () => {
  const quizesInfo = useLoaderData().data;
  const quizes = quizesInfo.questions;
  const name = quizesInfo.name;
  return (
    <div>
      <h3 className="fw-bold mt-5">
        Answer <span className="topic-name">{quizes.length}</span> simple
        <span className="topic-name"> {name} </span>
        questions
      </h3>
      {quizes.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz}></Quiz>
      ))}
    </div>
  );
};

export default TopicQuiz;
