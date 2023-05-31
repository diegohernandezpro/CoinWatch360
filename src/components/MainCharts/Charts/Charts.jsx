import React, { useState } from "react";
import axios from "axios";
import { LineChart } from "../LineChart";
import { BarChart } from "../BarChart/";
import { ChartWrapper, ChartsContainer } from "./Charts.styles";
import chartTest from "../chartTest.json";

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
      //   `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily}`
      // );

      const data = chartTest;
      // console.log("🚀 ~ file: Charts.jsx:23 ~ Charts ~ getData= ~ data:", data);

      const market = data.prices.map((el) => el[1]);
      const label = data.prices.map((el) => {
        return new Date(el[0]).getDate();
      });
      const lastThirtyDays = label.slice(1);
      const priceThirtyDays = market.slice(1);

      const marketBar = data.total_volumes.map((el) => el[1]);
      const labelBar = data.total_volumes.map((el) => {
        return new Date(el[0]).getDate();
      });

      // console.log("🚀 ~ lastThirtyDays:", lastThirtyDays);
      // console.log("🚀 ~ priceThirtyDays:", priceThirtyDays);

      this.setState({ isLoading: false, chartData: data });
      this.setState({
        chartMarket: priceThirtyDays,
        chartLabel: lastThirtyDays,
        chartMarketBar: marketBar.slice(1),
        chartLabelBar: labelBar.slice(1),
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
          <LineChart
            label={this.state.chartLabel}
            data={this.state.chartMarket}
          />
        </ChartWrapper>
        <ChartWrapper>
          <BarChart
            label={this.state.chartLabelBar}
            data={this.state.chartMarketBar}
          />
        </ChartWrapper>
      </ChartsContainer>
    );
  }
}
