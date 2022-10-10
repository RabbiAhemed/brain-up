import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "./Quiz/Quiz";

const TopicQuiz = () => {
  const quizes = useLoaderData().data.questions;

  return (
    <div>
      {quizes.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz}></Quiz>
      ))}
    </div>
  );
};

export default TopicQuiz;
