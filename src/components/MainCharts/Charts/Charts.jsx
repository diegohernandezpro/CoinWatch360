import { useGlobalContext } from "@/contexts";
import { Chart, ChartSummary } from "@/components/MainCharts";
import { LoadingCircle } from "@/utils";
import { ErrorP } from "@/pages";
import { ChartWrapper, ChartsContainer, Flex } from "./Charts.styles";

export const Charts = ({ charts }) => {
  const { isLoading, hasError, chartData, errorMsg } = charts;
  const { currency } = useGlobalContext();

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
                    symbol={currency.symbol}
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
                    symbol={currency.symbol}
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
