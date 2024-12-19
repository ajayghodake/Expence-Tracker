// import styles from "./BarChart.module.css";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Entertainment",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Food",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Travel",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

export default function BarChartComponent() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart layout="vertical" data={data} barSize={20}>
        <XAxis type="number" axisLine={false} display="none" />
        <YAxis type="category" width={100} dataKey="name" axisLine={false} />
        <Bar dataKey="pv" fill="#8884d8" background={{ fill: "#eee" }} />
      </BarChart>
    </ResponsiveContainer>
  );
}