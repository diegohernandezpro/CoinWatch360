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
import { barChart, lineChart, backgroundChartOptions } from "../ChartOptions";
import { Wrapper, StyledDiv } from "./Chart.styles";
import { useTheme } from "styled-components";
import beTarask from "date-fns/esm/locale/be-tarask/index.js";
import { faBreadSlice } from "@fortawesome/free-solid-svg-icons";

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
          } else if (type === "bar") {
            return theme.chart.barColor;
          } else if (type === "backgroundLine") {
            return theme.nested.active;
          }
        },
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 350);
          if (type === "line") {
            gradient.addColorStop(0, theme.chart.gradientLineFrom);
            gradient.addColorStop(1, theme.chart.gradientLineTo);
          } else if (type === "bar") {
            gradient.addColorStop(0, theme.chart.gradientBarFrom);
            gradient.addColorStop(1, theme.chart.gradientBarTo);
          } else if (type === "backgroundLine") {
            gradient.addColorStop(0, theme.chart.gradientBackgroundLineFrom);
            gradient.addColorStop(1, theme.chart.gradientBackgroundLineTo);
          }
          return gradient;
        },
        pointRadius: 0,
        borderWidth: 3,
        fill: true,
      },
    ],
  };

  let content = "";

  switch (type) {
    case "line":
      content = (
        <Line
          data={dataPoints}
          options={lineChart}
          width={"415"}
          height={"250"}
        />
      );
      break;
    case "bar":
      content = (
        <Bar
          data={dataPoints}
          options={barChart}
          width={"415"}
          height={"250"}
        />
      );
      break;
    case "backgroundLine":
      content = (
        <Line
          data={dataPoints}
          options={backgroundChartOptions}
          width={"415"}
          height={"150"}
        />
      );
      break;
    default:
      content = <></>;
      break;
  }

  return (
    <>
      <StyledDiv>{rest.children}</StyledDiv>
      <Wrapper>{content}</Wrapper>
    </>
  );
};
