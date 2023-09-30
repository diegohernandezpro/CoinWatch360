import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api, formatNum } from "@/utils";
import { getCurrencySelector } from "../currency/currencySlice";
import { FETCHING_STATE } from "../fetchingStates";

export const getCoinInfo = createAsyncThunk(
  "infographic/getCoinInfo",
  async (_, { getState }) => {
    const currency = getCurrencySelector(getState());
    const currencyType = currency.type.toLowerCase();

    const {
      data: {
        active_cryptocurrencies: numCoins,
        markets: numExchange,
        total_market_cap: totalMarketCap,
        total_volume: totalVolume,
        market_cap_percentage: marketCapPercent,
      },
    } = await api("/global");

    const formattedMarketCap = formatNum(
      totalMarketCap[currencyType],
      currency.symbol
    );

    const formattedCoinVolume = formatNum(
      totalVolume[currencyType],
      currency.symbol
    );
    const formattedBitCap = Math.round(marketCapPercent.btc);
    const formattedEthCap = Math.round(marketCapPercent.eth);
    const volumeVsMarketCap = (
      (totalVolume[currencyType] / totalMarketCap[currencyType]) *
      100
    ).toFixed(2);

    const infographicData = {
      numCoins,
      numExchange,
      formattedMarketCap,
      formattedCoinVolume,
      formattedBitCap,
      formattedEthCap,
      volumeVsMarketCap,
    };

    return infographicData;
  }
);

const infographicSlice = createSlice({
  name: "infographic",
  initialState: {
    status: FETCHING_STATE.IDLE,
    errorMsg: "",
    coinsData: [],
  },
  reducers: {
    disappearError: (state) => {
      state.errorMsg = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoinInfo.pending, (state) => {
        state.status = FETCHING_STATE.PENDING;
        state.errorMsg = "";
      })
      .addCase(getCoinInfo.fulfilled, (state, action) => {
        state.status = FETCHING_STATE.SUCCESS;
        state.coinsData = action.payload;
        state.errorMsg = "";
      })
      .addCase(getCoinInfo.rejected, (state) => {
        state.status = FETCHING_STATE.ERROR;
        state.errorMsg =
          "Error Retrieving Infographic's Data. Please Try Again Later";
      });
  },
});

export const { disappearError } = infographicSlice.actions;

export const getInfographicSelector = (state) => state.infographic;

export default infographicSlice.reducer;
