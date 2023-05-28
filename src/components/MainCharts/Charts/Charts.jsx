import React from "react";
import { ChartWrapper, ChartsContainer } from "./Charts.styles";

export default class Charts extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    chartInfo: [],
  };

  render() {
    return (
      <ChartsContainer>
        <ChartWrapper>chart1</ChartWrapper>
        <ChartWrapper>chart2</ChartWrapper>
      </ChartsContainer>
    );
  }
}
