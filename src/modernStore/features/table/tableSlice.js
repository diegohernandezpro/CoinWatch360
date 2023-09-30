import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/utils";
import { getCurrencySelector } from "../currency/currencySlice";
import { FETCHING_STATE } from "../fetchingStates.js";

const initialState = {
  data: [],
  status: FETCHING_STATE.IDLE,
  errorMsg: "",
};

export const getCoinList = createAsyncThunk(
  "table/getCoinList",
  async (_, { getState }) => {
    let { type } = getCurrencySelector(getState());
    type = type.toLowerCase();

    const { data } = await api(
      "/coins/markets",
      `?vs_currency=${type}&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );
    return data;
  }
);

const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    clearErrorMsg: (state) => {
      state.errorMsg = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoinList.pending, (state) => {
        state.status = FETCHING_STATE.PENDING;
        state.errorMsg = "";
      })
      .addCase(getCoinList.fulfilled, (state, action) => {
        state.status = FETCHING_STATE.SUCCESS;
        state.data = action.payload;
      })
      .addCase(getCoinList.rejected, (state) => {
        state.status = FETCHING_STATE.ERROR;
        state.errorMsg = "Error Retrieving Table Data. Please Try Again Later.";
      });
  },
});

export const { clearErrorMsg } = tableSlice.actions;

export const getTableDataSelector = (state) => state.table;

export default tableSlice.reducer;
