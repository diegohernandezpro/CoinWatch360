import { useState, useEffect } from "react";
import axios from "axios";
import { Chart, ChartSummary } from "@/components/MainCharts";
import { formatNum, LoadingCircle } from "@/utils";
import { ErrorP } from "@/pages";
import { ChartWrapper, ChartsContainer, Flex } from "./Charts.styles";

export const Charts = ({ currency, currencySymbol }) => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [chartData, setChartData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const getData = async (currency, currencySymbol) => {
    try {
      setLoading(true);

      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=30&interval=daily`
      );
<<<<<<< HEAD

      // const data = chartTest; //change to api call later.
=======
      setLoading(false);
>>>>>>> Coin-Page

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
      setErrorMsg("Error Retrieving Chart Data. Please Try Again Later.");
      setTimeout(() => {
        setErrorMsg("");
      }, 9000);
    }
  };

  useEffect(() => {
    getData(currency, currencySymbol);
  }, [currency]);

  return (
    <>
      {!hasError ? (
        <>
          {!isLoading ? (
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
          ) : (
            <ChartsContainer>
              <ChartWrapper>
                <Flex>
                  <LoadingCircle width="3rem" />
                </Flex>
              </ChartWrapper>
              <ChartWrapper>
                <Flex>
                  <LoadingCircle width="3rem" />
                </Flex>
              </ChartWrapper>
            </ChartsContainer>
          )}
        </>
      ) : (
        <ErrorP msg={errorMsg}>{errorMsg}</ErrorP>
      )}
    </>
  );
};
