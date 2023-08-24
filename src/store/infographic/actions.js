import { api } from "@/utils";
import { getCurrencySelector } from "../currency";

import {
  GET_INFOGRAPHIC_PENDING,
  GET_INFOGRAPHIC_SUCCESS,
  GET_INFOGRAPHIC_ERROR,
  GET_INFOGRAPHIC_ERROR_DISAPPEAR,
} from "./index";

export const getCoinInfo = () => async (dispatch, getState) => {
  const state = getState();
  const currency = getCurrencySelector(state);

  try {
    dispatch({
      type: GET_INFOGRAPHIC_PENDING,
    });

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

    dispatch({
      type: GET_INFOGRAPHIC_SUCCESS,
      payload: coinsData,
    });
  } catch (err) {
    dispatch({
      type: GET_INFOGRAPHIC_ERROR,
    });

    setTimeout(() => {
      dispatch({ type: GET_INFOGRAPHIC_ERROR_DISAPPEAR });
    }, 5000);
  }
};
