import React from "react";
import { Container } from "./Sparkline.styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Sparkline = ({ dataPoints }) => {
  console.log(
    "🚀 ~ file: Sparkline.jsx:26 ~ Sparkline ~ dataPoints:",
    dataPoints
  );

  const labels = ["2017", "2018", "2019", "2020", "2021", "2022"];

  const getLabels = (array) => array.map((_, index) => index);

  const lineData = () => {
    // let borderColor = "";
    // if (dataPoints[0] > dataPoints[dataPoints.length - 1]) {
    //   borderColor = "rgba(254, 16, 64, 1)";
    // } else {
    //   borderColor = "rgba(0, 255, 95, 1)";
    // }

    return {
      labels: getLabels(["2017", "2018", "2019", "2020", "2021", "2022"]),
      datasets: [
        {
          //   label: "React",
          data: [32, 41, 51, 60, 51, 95],
          tension: 0.3,
          borderColor: "pink",
          fill: false,
        },
      ],
    };
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 2,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: true,
        },
        ticks: {
          display: false,
          beginAtZero: false,
          maxTicksLimit: 5,
        },
      },
      y: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
          beginAtZero: true,
          maxTicksLimit: 5,
        },
      },
    },
  };

  //   const options = {
  //     plugins: {
  //       legend: {
  //         position: "none",
  //       },
  //     },
  //   };

  //   const data = {
  //     labels,
  //     datasets: [
  //       {
  //         label: "React",
  //         data: [32, 41, 51, 60, 51, 95],
  //         backgroundColor: "red",
  //         borderColor: "pink",
  //       },
  //     ],
  //   };

  return (
    <Container>
      <Line data={lineData()} options={options} width={"115"} height={"70"} />
    </Container>
  );
};
