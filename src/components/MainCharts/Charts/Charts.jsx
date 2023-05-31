import React, { useState } from "react";
import axios from "axios";
import chartTest from "../chartTest.json";
import { Chart } from "../Chart";
import { ChartWrapper, ChartsContainer } from "./Charts.styles";
import { ChartSummary } from "../ChartSummary";
export default class Charts extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    chartData: [],
  };

  getData = async () => {
    try {
      this.setState({ isLoading: true });

      // const { data } = await axios(
      //   `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily`
      // );

      const data = chartTest;
      // console.log("🚀 ~ file: Charts.jsx:23 ~ Charts ~ getData= ~ data:", data);

      const market = data.prices.map((el) => el[1]);
      const label = data.prices.map((el) => {
        return new Date(el[0]).getDate();
      });

      const marketBar = data.total_volumes.map((el) => el[1]);
      const labelBar = data.total_volumes.map((el) => {
        return new Date(el[0]).getDate();
      });

      this.setState({ isLoading: false, chartData: data });
      this.setState({
        chartMarketLine: market,
        chartLabelLine: label,
        chartMarketBar: marketBar,
        chartLabelBar: labelBar,
      });
    } catch (err) {
      console.log("Error in getData ", err);
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <ChartsContainer>
        <ChartWrapper>
          <Chart
            label={this.state.chartLabelLine}
            data={this.state.chartMarketLine}
            type="line"
          >
            <ChartSummary />
          </Chart>
        </ChartWrapper>
        <ChartWrapper>
          <Chart
            label={this.state.chartLabelBar}
            data={this.state.chartMarketBar}
            type="bar"
          >
            <ChartSummary />
          </Chart>
        </ChartWrapper>
      </ChartsContainer>
    );
  }
}
