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
    const newAsset = await getAsset(coinData, currency);

    const existingAssetIndex = portfolio.assets.findIndex(
      (asset) => asset.key === newAsset.key
    );

    if (existingAssetIndex !== -1) {
      portfolio.assets[existingAssetIndex] = newAsset;
    }

    return [...portfolio.assets, newAsset];
  }
);

const getAsset = async (coinData, currency) => {
  const currencyType = currency.type.toLowerCase();
  const currencySymbol = currency.symbol;

  const data = await getData(coinData, currencyType);

  const historyData = await getHistoryData(
    coinData,
    currencyType,
    currencySymbol
  );

  const assets = Object.assign(data, historyData);
  return assets;
};

const getData = async (coin, currencyType) => {
  try {
    const { data } = await api(`/coins/${coin.id.toLowerCase()}`);

    coin.previousPrice = data.market_data.current_price[currencyType];
    coin.circulatingSupply = data.market_data.circulating_supply;
    coin.totalSupply = data.market_data.total_supply;
    coin.marketCap = data.market_data.market_cap[currencyType];
    coin.priceChange24h = data.market_data.price_change_24h;
    coin.image = data.image.large;
    return coin;
  } catch (error) {
    console.error();
  }
};

const getHistoryData = async (coin, currencyType, currencySymbol) => {
  try {
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
    const formattedCurrentPrice = formatAssetPrice(
      currentPrice,
      currencySymbol
    );

    const amountValue = coin.amount * coin.previousPrice;
    const formattedAmountValue = formatAssetPrice(amountValue, currencySymbol);

    const priceChange = currentPrice - coin.previousPrice;
    const formattedPriceChange = formatAssetPrice(priceChange, currencySymbol);
    const formattedPriceChange24h = formatAssetPrice(
      coin.priceChange24h,
      currencySymbol
    );
    const formattedDateStandard = formatDateStandard(coin.date);
    const formattedMarketCap = formatNum(coin.marketCap, currencySymbol);

    return {
      formattedDateStandard,
      formattedMarketCap,
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
  } catch (error) {
    console.error();
  }
};

const initialState = {
  popup: false,
  coin: "",
  purchasedAmount: "",
  numericAmount: "",
  date: "",
  statusResults: FETCHING_STATE.IDLE,
  statusCoin: FETCHING_STATE.IDLE,
  errorMsg: "",
  results: [],
  isVisible: false,
  assets: [],
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
      state.statusResults = FETCHING_STATE.IDLE;
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
    disappearResultsError: (state) => {
      state.isVisible = false;
    },
    setStatusToIdle: (state) => {
      state.statusCoin = FETCHING_STATE.IDLE;
    },
    setStatusCoinToSuccess: (state) => {
      state.statusCoin = FETCHING_STATE.SUCCESS;
      state.errorMsg = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoins.pending, (state) => {
        state.popup = true;
        state.statusResults = FETCHING_STATE.PENDING;
      })
      .addCase(getCoins.fulfilled, (state, action) => {
        state.popup = true;
        state.statusResults = FETCHING_STATE.SUCCESS;
        state.isVisible = true;
        state.results = action.payload.results;
        state.coin = action.payload.coin;
      })
      .addCase(getCoins.rejected, (state) => {
        state.popup = true;
        state.statusResults = FETCHING_STATE.ERROR;
        state.isVisible = true;
        state.coin = "";
        state.errorMsg = "Error retrieving coins.";
      })
      .addCase(addAsset.pending, (state) => {
        state.popup = false;
        state.statusCoin = FETCHING_STATE.PENDING;
      })
      .addCase(addAsset.fulfilled, (state, action) => {
        state.popup = false;
        state.statusCoin = FETCHING_STATE.SUCCESS;
        state.assets = action.payload;
        state.results = [];
        state.purchasedAmount = "";
        state.numericAmount = "";
        state.errorMsg = "";
        state.date = "";
        state.coin = "";
      })
      .addCase(addAsset.rejected, (state) => {
        state.popup = false;
        state.statusCoin = FETCHING_STATE.ERROR;
        state.errorMsg = "Error retreiving coin.";
        state.results = [];
        state.purchasedAmount = "";
        state.numericAmount = "";
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
  disappearResultsError,
  setStatusToIdle,
  setStatusCoinToSuccess,
} = portfolioSlice.actions;

export const getPortfolioSelector = (state) => state.portfolio;

export default portfolioSlice.reducer;
