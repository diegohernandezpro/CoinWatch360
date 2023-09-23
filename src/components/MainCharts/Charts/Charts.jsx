import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Chart, ChartSummary } from "@/components/MainCharts";
import { LoadingCircle } from "@/utils";
import { ErrorP } from "@/pages";
import {
  ChartWrapper,
  ChartsContainer,
  Flex,
  MobileContainer,
  ButtonWrapper,
  NextPageButton,
  ButtonOutline,
} from "./Charts.styles";
import { getCurrencySelector } from "@/modernStore/features/currency/currencySlice";
import {
  getChartsDataSelector,
  getChartData,
} from "@/modernStore/features/charts/chartsSlice";
import { FETCHING_STATE } from "@/modernStore/features/fetchingStates";
import { getMobileSelector } from "@/modernStore";

export const Charts = () => {
  const dispatch = useDispatch();
  const currency = useSelector(getCurrencySelector);
  const charts = useSelector(getChartsDataSelector);
  const { isMobile } = useSelector(getMobileSelector);
  const [graph, setGraph] = useState("main");

  const { status, data, errorMsg } = charts;

  let content = "";
  let graphContent = "";

  if (graph === "main") {
    graphContent = (
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
    );
  } else {
    graphContent = (
      <Chart label={data.chartLabelBar} data={data.chartMarketBar} type="bar">
        <ChartSummary
          heading="Volume 24h"
          price={data.avgBar}
          symbol={currency.symbol}
          date={data.today}
        />
      </Chart>
    );
  }

  const handleClick = (text) => {
    setGraph(text);
  };

  switch (status) {
    case FETCHING_STATE.PENDING:
      if (isMobile) {
        content = (
          <MobileContainer>
            <ChartWrapper>
              <Flex>
                <LoadingCircle width="3rem" />
              </Flex>
            </ChartWrapper>
          </MobileContainer>
        );
      } else {
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
      }

      break;

    case FETCHING_STATE.SUCCESS:
      if (isMobile) {
        content = (
          <>
            <MobileContainer>
              <ChartWrapper>{graphContent}</ChartWrapper>
            </MobileContainer>
            <ButtonWrapper>
              <ButtonOutline>
                <NextPageButton onClick={() => handleClick("main")}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </NextPageButton>
                <NextPageButton onClick={() => handleClick("secondary")}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </NextPageButton>
              </ButtonOutline>
            </ButtonWrapper>
          </>
        );
      } else {
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
      }

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
