import { useState, useEffect } from "react";
import axios from "axios";
import chartTest from "../chartTest.json";
import { Chart, ChartSummary } from "@/components/MainCharts";
import { formatNum } from "@/utils";
import { ChartWrapper, ChartsContainer } from "./Charts.styles";

export const Charts = ({ currency, currencySymbol, ...rest }) => {
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [chartData, setChartData] = useState([]);

  const getData = async (currency, currencySymbol) => {
    try {
      setLoading(true);

      // const { data } = await axios(
      //   `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=30&interval=daily`
      // );

      const data = chartTest; //change to api call later.

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

      setLoading(false);
      setChartData((prevState) => {
        return {
          ...prevState,
          chartMarketLine: marketLine,
          chartLabelLine: labelLine,
          chartMarketBar: marketBar,
          chartLabelBar: labelBar,
          avgLine: marketAvgLine,
          avgBar: marketAvgBar,
          today,
        };
      });
    } catch (err) {
      setLoading(false);
      setError(true);
      console.log("Error in getData ", err);
    }
  };

  useEffect(() => {
    getData(currency, currencySymbol);
  }, [currency]);

  return (
    <ChartsContainer>
      <ChartWrapper>
        <Chart
          label={chartData.chartLabelLine}
          data={chartData.chartMarketLine}
          type="line"
        >
          <ChartSummary
            heading="Bitcoin"
            price={chartData.avgLine}
            currency={currencySymbol}
            date={chartData.today}
          />
        </Chart>
      </ChartWrapper>
      <ChartWrapper>
        <Chart
          label={chartData.chartLabelBar}
          data={chartData.chartMarketBar}
          type="bar"
        >
          <ChartSummary
            heading="Volume 24h"
            price={chartData.avgBar}
            currency={currencySymbol}
            date={chartData.today}
          />
        </Chart>
      </ChartWrapper>
    </ChartsContainer>
  );
};
