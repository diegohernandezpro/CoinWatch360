import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { formatNum, api } from "@/utils";
import { FETCHING_STATE } from "../fetchingStates";

import { getCurrencySelector } from "../currency/currencySlice";

const initialState = {
  data: [],
  status: FETCHING_STATE.IDLE,
  errorMsg: "",
};

export const getChartData = createAsyncThunk(
  "charts/getChartData",
  async (_, { getState }) => {
    let { type } = getCurrencySelector(getState());
    type = type.toLowerCase();

    const apiCall = await api(
      "/coins/bitcoin/market_chart",
      `?vs_currency=${type}&days=30&interval=daily`
    );

    const data = apiCall.data;

    const marketLine = data.prices.map((el) => el[1]);
    const labelLine = data.prices.map((el) => new Date(el[0]).getDate());
    const marketAvgLine = formatNum(
      marketLine.reduce((a, b) => a + b, 0) / marketLine.length
    );

    const marketBar = data.total_volumes.map((el) => el[1]);
    const labelBar = data.total_volumes.map((el) => new Date(el[0]).getDate());
    const marketAvgBar = formatNum(
      marketBar.reduce((a, b) => a + b, 0) / marketBar.length
    );

    const options = { day: "numeric", month: "long", year: "numeric" };
    const today = new Date().toLocaleDateString(undefined, options);

    return {
      chartMarketLine: marketLine,
      chartLabelLine: labelLine,
      chartMarketBar: marketBar,
      chartLabelBar: labelBar,
      avgLine: marketAvgLine,
      avgBar: marketAvgBar,
      today,
    };
  }
);

const chartsSlice = createSlice({
  name: "charts",
  initialState,
  reducers: {
    clearErrorMsg: (state) => {
      state.errorMsg = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getChartData.pending, (state) => {
        state.status = FETCHING_STATE.PENDING;
        state.errorMsg = "";
      })
      .addCase(getChartData.fulfilled, (state, action) => {
        state.status = FETCHING_STATE.SUCCESS;
        state.data = action.payload;
      })
      .addCase(getChartData.rejected, (state) => {
        state.status = FETCHING_STATE.ERROR;
        state.errorMsg = "Error Retrieving Chart Data. Please Try Again Later.";
      });
  },
});

export const { clearErrorMsg } = chartsSlice.actions;

export const getChartsDataSelector = (state) => state.charts;

export default chartsSlice.reducer;
