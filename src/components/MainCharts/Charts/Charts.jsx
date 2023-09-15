import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Chart, ChartSummary } from "@/components/MainCharts";
import { LoadingCircle } from "@/utils";
import { ErrorP } from "@/pages";
import { ChartWrapper, ChartsContainer, Flex } from "./Charts.styles";
import { getCurrencySelector } from "../../../modernStore/features/currency/currencySlice";
import {
  getChartsDataSelector,
  getChartData,
} from "../../../modernStore/features/charts/chartsSlice";
import { FETCHING_STATE } from "../../../modernStore/features/fetchingStates";

export const Charts = () => {
  const dispatch = useDispatch();
  const currency = useSelector(getCurrencySelector);
  const charts = useSelector(getChartsDataSelector);

  const { status, data, errorMsg } = charts;

  let content = "";

  switch (status) {
    case FETCHING_STATE.PENDING:
      content = (
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
      );
      break;

    case FETCHING_STATE.SUCCESS:
      content = (
        <ChartsContainer>
          <ChartWrapper>
            <Chart
              label={data.chartLabelLine}
              data={data.chartMarketLine}
              type="line"
            >
              <ChartSummary
                heading="Bitcoin"
                price={data.avgLine}
                symbol={currency.symbol}
                date={data.today}
              />
            </Chart>
          </ChartWrapper>
          <ChartWrapper>
            <Chart
              label={data.chartLabelBar}
              data={data.chartMarketBar}
              type="bar"
            >
              <ChartSummary
                heading="Volume 24h"
                price={data.avgBar}
                symbol={currency.symbol}
                date={data.today}
              />
            </Chart>
          </ChartWrapper>
        </ChartsContainer>
      );
      break;

    case FETCHING_STATE.ERROR:
      content = <ErrorP msg={errorMsg}>{errorMsg}</ErrorP>;
      break;

    default:
      content = <></>;
      break;
  }

  useEffect(() => {
    if (status === FETCHING_STATE.IDLE) {
      dispatch(getChartData());
    }
  }, [status, dispatch]);

  useEffect(() => {
    dispatch(getChartData());
  }, [currency.type]);

  return <>{content}</>;
};
