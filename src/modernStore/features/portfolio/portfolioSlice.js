import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  api,
  formatPercentage,
  formatAssetPrice,
  formatDateStandard,
  formatDate,
  formatNum,
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

// Async Thunk
export const getCoins = createAsyncThunk(
  "portfolio/getCoins",
  async (coinName) => {
    const { data } = await api("/search", `?query=${coinName}`);
    return { results: data.coins, coin: coinName };
  }
);

export const getSelectedCoin = createAsyncThunk(
  "portfolio/getSelectedCoin",
  async (coinData, { getState }) => {
    const { portfolio, currency } = getState();
    const newArr = [...portfolio.assets, coinData];

    return await getData(newArr, currency);
  }
);

// Helper function
const getData = async (assets, currency) => {
  const currencyType = currency.type.toLowerCase();
  const currencySymbol = currency.symbol;
  const pricedCoinObject = await Promise.all(
    assets.map(async (key) => {
      const { data } = await api(`/coins/${key.id.toLowerCase()}`);

      key.previousPrice = data.market_data.current_price[currencyType];
      key.circulatingSupply = data.market_data.circulating_supply;
      key.totalSupply = data.market_data.total_supply;
      key.marketCap = data.market_data.market_cap[currencyType];
      key.totalVolume = data.market_data.total_volume[currencyType];
      key.priceChange24h = data.market_data.price_change_24h;
      key.image = data.image.large;
    })
  );

  const newAssetsArr = await Promise.all(
    assets.map(async (coin) => {
      const formattedDate = formatDate(coin.date);

      const { data } = await api(
        `/coins/${coin.id.toLowerCase()}/history`,
        `?date=${formattedDate}`
      );

      const marketCapVsVolume = (
        Math.abs(coin.marketCap / coin.totalVolume) * 100
      ).toFixed(2);

      const formattedMarketCap = formatNum(coin.marketCap, currencySymbol);

      const circulatingVsTotalSupply = (
        (coin.circulatingSupply / coin.totalSupply) *
        100
      ).toFixed(2);

      const formattedMarVsVolPer = formatPercentage(marketCapVsVolume, true);

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
        formattedMarketCap,
        currentPrice,
        formattedCurrentPrice,
        formattedPriceChange24h,
        id: data.name,
        amountValue,
        formattedAmountValue,
        priceInSelectedDate: data.market_data.current_price[currencyType],
        priceChange,
        formattedPriceChange,
        marketCapVsVolume,
        formattedMarVsVolPer,
        circulatingVsTotalSupply,
        formattedCirVsTotPer,
        isBigger:
          data.market_data.current_price[currencyType] > coin.currentPrice,
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
    handlePortfolioCoin: (state, action) => {
      state.coin = action.payload;
    },
    handleSelectPortfolioCoin: (state, action) => {
      state.popup = true;
      state.isVisible = false;
      state.coin = action.payload;
    },
    handlePurchasedAmount: (state, action) => {
      state.purchasedAmount = action.payload.amount;
      state.numericAmount = action.payload.numericAmount;
    },
    handleRemoveAsset: (state, action) => {
      state.assets = state.assets.filter((el) => el.key !== action.payload);
    },
    handleDate: (state, action) => {
      state.date = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoins.pending, (state, action) => {
        state.popup = true;
        state.status = FETCHING_STATE.PENDING;
        state.coin = action.meta.arg;
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
      .addCase(getSelectedCoin.fulfilled, (state, action) => {
        state.popup = false;
        state.assets = action.payload;
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
  handlePortfolioCoin,
  handleSelectPortfolioCoin,
  handlePurchasedAmount,
  handleRemoveAsset,
  handleDate,
} = portfolioSlice.actions;

export const getPortfolioSelector = (state) => state.portfolio;

export default portfolioSlice.reducer;
