import { api } from "@/utils";
import { getCurrencySelector } from "../currency";

import {
  GET_TABLE_DATA_PENDING,
  GET_TABLE_DATA_SUCCESS,
  GET_TABLE_DATA_ERROR,
  GET_TABLE_DATA_ERROR_DISAPPEAR,
} from "./index";

export const getCoinList = () => async (dispatch, getState) => {
  const state = getState();
  const currency = getCurrencySelector(state);
  try {
    dispatch({ type: GET_TABLE_DATA_PENDING });

    const apiCall = await api(
      "/coins/markets",
      `?vs_currency=${currency.type}&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    );

    dispatch({
      type: GET_TABLE_DATA_SUCCESS,
      payload: apiCall.data,
    });
  } catch (err) {
    dispatch({ type: GET_TABLE_DATA_ERROR, payload: err });

    setTimeout(() => {
      dispatch({
        type: GET_TABLE_DATA_ERROR_DISAPPEAR,
      });
    }, 9000);
  }
};
