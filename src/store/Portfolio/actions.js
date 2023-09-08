import {
  api,
  formatPercentage,
  formatAssetPrice,
  formatDateStandard,
  formatDate,
} from "@/utils";

import {
  TOOGLE_POPUP_ON,
  TOOGLE_POPUP_OFF,
  GET_PORTFOLIO_COIN_PENDING,
  GET_PORTFOLIO_COIN_SUCCESS,
  GET_PORTFOLIO_COIN_ERROR,
  GET_PORTFOLIO_COIN_ERROR_DISAPPEAR,
  RENAME_PORTFOLIO_COIN,
  SELECT_PORTFOLIO_COIN,
  SELECT_PORTFOLIO_COIN_AMOUNT,
  SELECT_PORTFOLIO_COIN_DATE,
  GET_PORTFOLIO_COIN_DATA,
  REMOVE_ASSET,
} from "./index";

export const tooglePopUpOn = () => {
  return {
    type: TOOGLE_POPUP_ON,
  };
};

export const tooglePopUpOff = () => ({
  type: TOOGLE_POPUP_OFF,
});

export const getCoins = (coinName) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PORTFOLIO_COIN_PENDING,
      payload: {
        coin: coinName,
      },
    });

    const { data } = await api("/search", `?query=${coinName}`); // this is just a search query - does not give specific coin info

    dispatch({
      type: GET_PORTFOLIO_COIN_SUCCESS,
      payload: {
        results: data.coins,
        coin: coinName,
      },
    });
  } catch (err) {
    dispatch({
      type: GET_PORTFOLIO_COIN_ERROR,
    });

    setTimeout(() => {
      dispatch({
        type: GET_PORTFOLIO_COIN_ERROR_DISAPPEAR,
      });
    }, 5000);
  }
};

export const handlePortfolioCoin = (searchQuery) => ({
  type: RENAME_PORTFOLIO_COIN,
  payload: searchQuery,
});

export const handleSelectPortfolioCoin = (coinName) => {
  return {
    type: SELECT_PORTFOLIO_COIN,
    payload: coinName,
  };
};

export const handlePurchasedAmount = (amount) => {
  const numericAmount = parseFloat(amount);
  return {
    type: SELECT_PORTFOLIO_COIN_AMOUNT,
    payload: {
      amount: amount,
      numericAmount,
    },
  };
};

export const handleRemoveAsset = (key) => (dispatch, getState) => {
  const {
    portfolio: { assets },
  } = getState();

  const filtedAssets = assets.filter((el) => el.key !== key);
  dispatch({
    type: REMOVE_ASSET,
    payload: filtedAssets,
  });
};

export const handleDate = (date) => {
  return {
    type: SELECT_PORTFOLIO_COIN_DATE,
    payload: date,
  };
};

export const getSelectedCoin = (coinData) => async (dispatch, getState) => {
  const { portfolio, currency } = getState();
  const newArr = [...portfolio.assets, coinData];

  const newAssetsArray = await getData(newArr, currency);

  dispatch({
    type: GET_PORTFOLIO_COIN_DATA,
    payload: newAssetsArray,
  });
};

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
        (coin.marketCap / coin.totalVolume) *
        100
      ).toFixed(2);

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
