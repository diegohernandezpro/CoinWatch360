import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { Wrapper } from "./BarChart.styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export const BarChart = ({ label, data }) => {
  const barData = () => {
    return {
      labels: label,
      datasets: [
        {
          label: "BTC",
          data: data,
          backgroundColor: (context) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, 350);
            gradient.addColorStop(0, "rgb(33,114,229, 1)");
            gradient.addColorStop(1, "rgb(33,114,400, 0.3)");
            return gradient;
          },
        },
      ],
    };
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
      },
      x: {
        display: true,
      },
    },
  };

  return (
    <Wrapper>
      <Bar data={barData()} options={options} width={"415"} height={"250"} />
    </Wrapper>
  );
};
