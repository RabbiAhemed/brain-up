import React from "react";
import { Tooltip } from "recharts";
import { useEffect, useState } from "react";
import "./Statistics.css";

import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from "recharts";
import MyLineChart from "../MyLineChart/MyLineChart";
const Statistics = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  return (
    <div className="chart-container">
      <BarChart
        width={310}
        height={320}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="total" />

        <Legend />
        <Bar dataKey="total" fill="#82ca9d" />
        <Bar dataKey="name" fill="#8884d8" />

        <Tooltip />
      </BarChart>
      <MyLineChart></MyLineChart>
    </div>
  );
};

export default Statistics;
