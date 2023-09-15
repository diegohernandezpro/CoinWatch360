import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/utils";
import { FETCHING_STATE } from "../fetchingStates";

const initialState = {
  coinStatus: FETCHING_STATE.IDLE,
  priceStatus: FETCHING_STATE.IDLE,
  option: "30d",
  data: [],
  coinPricePoints: [],
  coinLabels: [],
};

const coinPageSlice = createSlice({
  name: "coinPage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoin.pending, (state) => {
        state.coinStatus = FETCHING_STATE.PENDING;
      })
      .addCase(getCoin.fulfilled, (state, action) => {
        state.coinStatus = FETCHING_STATE.SUCCESS;
        state.data = action.payload;
      })
      .addCase(getCoin.rejected, (state) => {
        state.coinStatus = FETCHING_STATE.ERROR;
      })
      .addCase(getPrice.pending, (state) => {
        state.priceStatus = FETCHING_STATE.PENDING;
      })
      .addCase(getPrice.fulfilled, (state, action) => {
        state.priceStatus = FETCHING_STATE.SUCCESS;
        state.coinPricePoints = action.payload.pricePoints;
        state.coinLabels = action.payload.labels;
        state.option = action.payload.option;
      })
      .addCase(getPrice.rejected, (state) => {
        state.priceStatus = FETCHING_STATE.ERROR;
      });
  },
});

export const getCoin = createAsyncThunk(
  "coinPage/fetchCoin",
  async (coinName) => {
    const { data } = await api(`/coins/${coinName}`, `?localization=false`);
    return data;
  }
);

export const getPrice = createAsyncThunk(
  "coinPage/fetchCoinPrice",
  async ({ coinName, currencyType, option }) => {
    const duration = getDuration(option);
    const {
      data: { prices },
    } = await api(
      `/coins/${coinName}/market_chart`,
      `?vs_currency=${currencyType}&days=${duration}&interval=daily`
    );

    const pricePoints = getPricePoints(prices);
    const labels = getLabelPoints(prices);

    return { pricePoints, labels, duration, option };
  }
);

const DURATION_MAPPING = {
  Max: "max",
  "1y": 365,
  "90d": 90,
  "30d": 30,
  "7d": 7,
  "1d": 1,
};

const getDuration = (option) => {
  return DURATION_MAPPING[option] || 30;
};

const getPricePoints = (arr) => {
  return arr.map((el) => el[1]);
};
const getLabelPoints = (arr) => {
  return arr.map((el) => new Date(el[0]).getDate());
};

export const getCoinPageSelector = (state) => state.coinPage;

export default coinPageSlice.reducer;
