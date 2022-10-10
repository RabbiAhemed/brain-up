import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import "./Topics.css";
const Topics = () => {
  const Topics = useLoaderData().data;
  // console.log(Topics);
  return (
    <div className="topics">
      {Topics.map((topic) => (
        <Topic key={topic.id} topic={topic}></Topic>
      ))}
    </div>
  );
};

export default Topics;
