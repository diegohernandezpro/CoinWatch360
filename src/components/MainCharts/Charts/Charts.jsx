import React, { useState } from "react";
import axios from "axios";
import chartTest from "../chartTest.json";
import { Chart } from "../Chart";
import { ChartWrapper, ChartsContainer } from "./Charts.styles";
import { ChartSummary } from "../ChartSummary";
import { formatNum } from "@/utils";
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

      const marketLine = data.prices.map((el) => el[1]);
      const labelLine = data.prices.map((el) => {
        return new Date(el[0]).getDate();
      });
      const marketAvgLine = formatNum(
        marketLine.reduce((a, b) => a + b, 0) / marketLine.length
      );

      const marketBar = data.total_volumes.map((el) => el[1]);
      const labelBar = data.total_volumes.map((el) => {
        return new Date(el[0]).getDate();
      });
      const marketAvgBar = formatNum(
        marketBar.reduce((a, b) => a + b, 0) / marketBar.length
      );

      const options = { day: "numeric", month: "long", year: "numeric" };
      const today = new Date().toLocaleDateString(undefined, options);

      this.setState({
        isLoading: false,
        chartMarketLine: marketLine,
        chartLabelLine: labelLine,
        chartMarketBar: marketBar,
        chartLabelBar: labelBar,
        avgLine: marketAvgLine,
        avgBar: marketAvgBar,
        today,
      });
    } catch (err) {
      this.setState({ isLoading: false, hasError: true });
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
            <ChartSummary
              heading="Bitcoin"
              price={this.state.avgLine}
              currency="$"
              date={this.state.today}
            />
          </Chart>
        </ChartWrapper>
        <ChartWrapper>
          <Chart
            label={this.state.chartLabelBar}
            data={this.state.chartMarketBar}
            type="bar"
          >
            <ChartSummary
              heading="Volume 24h"
              price={this.state.avgBar}
              currency="$"
              date={this.state.today}
            />
          </Chart>
        </ChartWrapper>
      </ChartsContainer>
    );
  }
}
