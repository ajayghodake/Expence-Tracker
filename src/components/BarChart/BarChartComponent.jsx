// import styles from "./BarChart.module.css";
import React from "react";
import styles from "./BarChart.module.css"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";



export default function BarChartComponent({data}) {
  return (
    <div className={styles.categoryChart}>
      <h2>Top Expenses</h2>
      <div className={styles.barchartWrapper}>
      {data?.length ? (
        <ResponsiveContainer width="100%" height={280}>
        <BarChart layout="vertical" data={data}>
          <XAxis type="number" axisLine={false} display="none" />
          <YAxis type="category" width={100} dataKey="name" axisLine={false} />
          <Bar dataKey="value" fill="#8884d8" barSize={25} background={{ fill: "#eee" }} />
        </BarChart>
      </ResponsiveContainer>
      ) : (
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "280px",
        }}>
          No Transactions.
        </div>
      )}
      </div>
    </div>
  );
}