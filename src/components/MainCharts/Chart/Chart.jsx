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
import { useTheme } from "styled-components";

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

export const Chart = ({ label, data, type, ...rest }) => {
  const theme = useTheme();

  const dataPoints = {
    labels: label,
    datasets: [
      {
        label: "BTC",
        data: data,
        borderColor: () => {
          if (type === "line") {
            return theme.chart.lineColor;
          }
          return theme.chart.barColor;
        },
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          if (type === "line") {
            gradient.addColorStop(0, theme.chart.gradientLineFrom);
            gradient.addColorStop(1, theme.chart.gradientLineTo);
          } else {
            gradient.addColorStop(0, theme.chart.gradientBarFrom);
            gradient.addColorStop(1, theme.chart.gradientBarTo);
          }
          return gradient;
        },
        pointRadius: 0,
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
