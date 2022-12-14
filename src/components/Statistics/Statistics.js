import React, { useEffect, useState } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const Statistics = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);
  return (
    <ResponsiveContainer width="98%" height={400}>
      <LineChart
        width={310}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <Line dataKey={"total"} stroke="#8884d8" activeDot={{ r: 8 }}></Line>
        <XAxis dataKey={"name"} stroke="#82ca9d"></XAxis>
        <YAxis></YAxis>
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Statistics;
