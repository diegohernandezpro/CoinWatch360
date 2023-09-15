import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/utils";
import { getCurrencySelector } from "../currency/currencySlice";
import { FETCHING_STATE } from "../fetchingStates";

// Async Action Creator
export const getCoinInfo = createAsyncThunk(
  "infographic/getCoinInfo",
  async (_, { getState }) => {
    const currency = getCurrencySelector(getState());

    const { data } = await api("/global");

    const {
      active_cryptocurrencies: numCoins,
      markets: numExchange,
      total_market_cap: totalMarketCap,
      total_volume: totalVolume,
      market_cap_percentage: marketCapPercent,
    } = data;

    const coinsData = {
      numCoins,
      numExchange,
      marketCap: totalMarketCap[currency.type?.toLowerCase()],
      volume: totalVolume[currency.type?.toLowerCase()],
      bitCap: marketCapPercent.btc,
      ethCap: marketCapPercent.eth,
    };

    return coinsData;
  }
);

const infographicSlice = createSlice({
  name: "infographic",
  initialState: {
    status: FETCHING_STATE.IDLE,
    errorMsg: "",
    coinsData: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCoinInfo.pending, (state) => {
        state.status = FETCHING_STATE.PENDING;
      })
      .addCase(getCoinInfo.fulfilled, (state, action) => {
        state.status = FETCHING_STATE.SUCCESS;
        state.coinsData = action.payload;
      })
      .addCase(getCoinInfo.rejected, (state) => {
        state.status = FETCHING_STATE.ERROR;
        state.errorMsg =
          "Error Retrieving Infographic's Data. Please Try Again Later";
      });
  },
});

export const getInfographicSelector = (state) => state.infographic;

export default infographicSlice.reducer;
