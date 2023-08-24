import { api } from "@/utils";

import {
  GET_TABLE_DATA_PENDING,
  GET_TABLE_DATA_SUCCESS,
  GET_TABLE_DATA_ERROR,
} from "./index";

export const getCoinList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_TABLE_DATA_PENDING });

    const apiCall = await api(
      "/coins/markets",
      `?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
    ); //change the usd to ${currencyType}

    dispatch({
      type: GET_TABLE_DATA_SUCCESS,
      payload: apiCall.data,
    });
  } catch (err) {
    dispatch({ type: GET_TABLE_DATA_ERROR, payload: err });

    // set timeout for error message to disappear after 9 seconds
    // setTimeout(() => {
    //   setErrorMsg("");
    // }, 9000);
  }
};
