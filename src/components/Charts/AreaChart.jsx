import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import { phaseA } from "../../data/phase_current/PhaseA";

const AreaChart = () => {
  return (
    <div>
      <LineChart
        width={500}
        height={300}
        data={phaseA}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="phaseA"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="phaseA" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default AreaChart;
