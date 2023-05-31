import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { barChart, lineChart } from "../ChartOptions";
import { Wrapper, StyledDiv } from "./Chart.styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
// { label, data, type }, ...rest

export const Chart = ({ label, data, type, ...rest }) => {
  const dataPoints = {
    labels: label,
    datasets: [
      {
        label: "BTC",
        data: data,
        borderColor: () => {
          if (type === "line") {
            return "#0CF864";
          }
          return "rgb(33,114,229)";
        },
        //here is the function for the gradient fill
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          if (type === "line") {
            gradient.addColorStop(0, "rgba(0, 255, 95, 0.5)");
            gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
          } else {
            gradient.addColorStop(0, "rgb(33,114,229, 1)");
            gradient.addColorStop(1, "rgb(33,114,400, 0.5)");
          }
          return gradient;
        },
        pointRadius: 2,
        borderWidth: 3,
        fill: true,
      },
    ],
  };

  return (
    <>
      <StyledDiv>{rest.children}</StyledDiv>
      <Wrapper>
        {type === "line" ? (
          <Line
            data={dataPoints}
            options={lineChart}
            width={"415"}
            height={"250"}
          />
        ) : (
          <Bar
            data={dataPoints}
            options={barChart}
            width={"415"}
            height={"250"}
          />
        )}
      </Wrapper>
    </>
  );
};
