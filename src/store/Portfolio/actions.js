import { api } from "@/utils";
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
} from "./index";

export const tooglePopUpOn = () => {
  return {
    type: TOOGLE_POPUP_ON,
  };
};

export const tooglePopUpOff = () => ({
  type: TOOGLE_POPUP_OFF,
});

export const getSelectedCoin = (coinData) => (dispatch, getState) => {
  dispatch({
    type: GET_PORTFOLIO_COIN_DATA,
    payload: coinData,
  });
};

export const getCoins = (coinName) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_PORTFOLIO_COIN_PENDING,
      payload: {
        coin: coinName,
      },
    });

    const { data } = await api("/search", `?query=${coinName}`);

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

export const handleDate = (date) => ({
  type: SELECT_PORTFOLIO_COIN_DATE,
  payload: date,
});
