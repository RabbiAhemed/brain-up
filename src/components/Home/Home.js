import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Topic from "../Topic/Topic";
import Topics from "../Topics/Topics";

const Home = () => {
  const topics = useLoaderData().data;
  return (
    <div>
      <Header></Header>
      <div className="topics">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
