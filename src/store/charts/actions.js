import { formatNum, api } from "@/utils";
import {
  GET_CHART_DATA_PENDING,
  GET_CHART_DATA_SUCCESS,
  GET_CHART_DATA_ERROR,
  GET_CHART_DATA_ERROR_DISAPPEAR,
} from "./index";

import { getCurrencySelector } from "../currency";

export const getChartData = () => async (dispatch, getState) => {
  const state = getState();
  const currency = getCurrencySelector(state);
  console.log("🚀 ~ file: actions.js:14 ~ getChartData ~ currency:", currency);

  try {
    dispatch({ type: GET_CHART_DATA_PENDING });

    const apiCall = await api(
      "/coins/bitcoin/market_chart",
      `?vs_currency=${currency.type}&days=30&interval=daily`
    ); //change number of days dynamically in api call
    const data = apiCall.data;

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

    const chartData = {
      chartMarketLine: marketLine,
      chartLabelLine: labelLine,
      chartMarketBar: marketBar,
      chartLabelBar: labelBar,
      avgLine: marketAvgLine,
      avgBar: marketAvgBar,
      today,
    };

    dispatch({
      type: GET_CHART_DATA_SUCCESS,
      payload: chartData,
    });
  } catch (err) {
    dispatch({ type: GET_CHART_DATA_ERROR, payload: err });

    setTimeout(() => {
      dispatch({ type: GET_CHART_DATA_ERROR_DISAPPEAR });
    }, 9000);
  }
};
