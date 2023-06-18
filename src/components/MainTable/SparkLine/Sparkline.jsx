import { Wrapper } from "./Sparkline.styles";
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
import { theme } from "@/styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const Sparkline = ({ pricePoints }) => {
  if (!Array.isArray(pricePoints)) {
    return;
  }

  const getLabels = (array) => array.map((_, index) => index + 1);

  const lineData = () => {
    return {
      labels: getLabels(pricePoints),
      datasets: [
        {
          data: pricePoints,
          borderColor:
            pricePoints[0] > pricePoints[pricePoints.length - 1]
              ? theme.dark.money.red
              : theme.dark.money.green,
          tension: 0.5,
          borderWidth: 3,
          fill: false,
        },
      ],
    };
  };

  const options = {
    responsive: true, // Make the chart responsive to the container size
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  return (
    <Wrapper>
      <Line data={lineData()} options={options} width={"115"} height={"110"} />
    </Wrapper>
  );
};
