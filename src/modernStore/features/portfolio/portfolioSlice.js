import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  api,
  formatPercentage,
  formatAssetPrice,
  formatDateStandard,
  formatDate,
} from "@/utils";

import { FETCHING_STATE } from "../fetchingStates";

const initialState = {
  popup: false,
  coin: "",
  purchasedAmount: "",
  numericAmount: "",
  date: "",
  status: FETCHING_STATE.IDLE,
  errorMsg: "",
  results: [],
  isVisible: false,
  assets: [],
};

export const getCoins = createAsyncThunk(
  "portfolio/getCoins",
  async ({ coinName }) => {
    const { data } = await api("/search", `?query=${coinName}`);
    return { results: data.coins, coin: coinName };
  }
);

export const addAsset = createAsyncThunk(
  "portfolio/addAsset",
  async ({ coinData }, { getState }) => {
    const { portfolio, currency } = getState();
    const newArr = [...portfolio.assets, coinData];
    const newAsset = await getData(newArr, currency);
    const assetsArr = [];
    return newAsset;
  }
);

const getData = async (assets, currency) => {
  const currencyType = currency.type.toLowerCase();
  const currencySymbol = currency.symbol;

  await Promise.all(
    assets.map(async (key) => {
      const { data } = await api(`/coins/${key.id.toLowerCase()}`);

      key.previousPrice = data.market_data.current_price[currencyType];
      key.circulatingSupply = data.market_data.circulating_supply;
      key.totalSupply = data.market_data.total_supply;
      key.marketCap = data.market_data.market_cap[currencyType];
      key.priceChange24h = data.market_data.price_change_24h;
      key.image = data.image.large;
    })
  );

  const newAssetsArr = await Promise.all(
    assets.map(async (coin) => {
      console.log("🚀 ~ file: portfolioSlice.js:64 ~ assets.map ~ coin:", coin);
      const formattedDate = formatDate(coin.date);

      const { data } = await api(
        `/coins/${coin.id.toLowerCase()}/history`,
        `?date=${formattedDate}`
      );

      const circulatingVsTotalSupply = (
        (coin.circulatingSupply / coin.totalSupply) *
        100
      ).toFixed(2);

      const formattedCirVsTotPer = formatPercentage(
        circulatingVsTotalSupply,
        true
      );

      const currentPrice = data.market_data.current_price[currencyType];
      const amountValue = coin.amount * coin.previousPrice;

      const formattedAmountValue = formatAssetPrice(
        amountValue,
        currencySymbol
      );
      const formattedCurrentPrice = formatAssetPrice(
        currentPrice,
        currencySymbol
      );

      const formattedPriceChange24h = formatAssetPrice(
        coin.priceChange24h,
        currencySymbol
      );

      const priceChange = currentPrice - coin.previousPrice;

      const formattedPriceChange = formatAssetPrice(
        priceChange,
        currencySymbol
      );

      const formattedDateStandard = formatDateStandard(coin.date);

      return {
        ...coin,
        formattedDateStandard,
        currentPrice,
        formattedCurrentPrice,
        formattedPriceChange24h,
        amountValue,
        formattedAmountValue,
        priceChange,
        formattedPriceChange,
        circulatingVsTotalSupply,
        formattedCirVsTotPer,
      };
    })
  );

  return newAssetsArr;
};

const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    togglePopUpOn: (state) => {
      state.popup = true;
      state.purchasedAmount = "";
      state.date = "";
      state.coin = "";
    },
    togglePopUpOff: (state) => {
      state.popup = false;
      state.isVisible = false;
    },
    setCoin: (state, action) => {
      state.coin = action.payload;
    },
    selectCoin: (state, action) => {
      state.popup = true;
      state.isVisible = false;
      state.coin = action.payload;
    },
    setAmount: (state, action) => {
      state.purchasedAmount = action.payload.amount;
      state.numericAmount = action.payload.numericAmount;
    },
    removeAsset: (state, action) => {
      state.assets = state.assets.filter((el) => el.key !== action.payload);
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoins.pending, (state, action) => {
        state.popup = true;
        state.status = FETCHING_STATE.PENDING;
        // state.coin = action.meta.arg;
      })
      .addCase(getCoins.fulfilled, (state, action) => {
        state.popup = true;
        state.status = FETCHING_STATE.SUCCESS;
        state.isVisible = true;
        state.results = action.payload.results;
        state.coin = action.payload.coin;
      })
      .addCase(getCoins.rejected, (state) => {
        state.popup = true;
        state.status = FETCHING_STATE.ERROR;
        state.isVisible = true;
        state.coin = "";
        state.errorMsg = "Error retrieving coins.";
      })

      .addCase(addAsset.fulfilled, (state, action) => {
        state.popup = false;
        state.assets = action.payload;
        state.results = [];
        state.purchasedAmount = "";
        state.date = "";
        state.coin = "";
      })
      .addCase(addAsset.rejected, (state, action) => {
        state.popup = false;
        state.errorMsg = `Error retrieving coins, ${action.payload}`; //change later
        state.results = [];
        state.purchasedAmount = "";
        state.date = "";
        state.coin = "";
      });
  },
});

export const {
  togglePopUpOn,
  togglePopUpOff,
  setCoin,
  selectCoin,
  setAmount,
  removeAsset,
  setDate,
} = portfolioSlice.actions;

export const getPortfolioSelector = (state) => state.portfolio;

export default portfolioSlice.reducer;
