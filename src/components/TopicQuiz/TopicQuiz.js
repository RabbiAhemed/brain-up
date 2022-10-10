import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "./Quiz/Quiz";

const TopicQuiz = () => {
  const quizesInfo = useLoaderData().data;
  const quizes = quizesInfo.questions;
  const name = quizesInfo.name;
  console.log(quizesInfo.name);
  return (
    <div>
      <h3>{name} Questions</h3>
      {quizes.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz}></Quiz>
      ))}
    </div>
  );
};

export default TopicQuiz;
