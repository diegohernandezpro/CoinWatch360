import { api } from "@/utils";
import {
  GET_COIN_DATA_PENDING,
  GET_COIN_DATA_SUCCESS,
  GET_COIN_DATA_ERROR,
  GET_PRICE_DATA_PENDING,
  GET_PRICE_DATA_SUCCESS,
  GET_PRICE_DATA_ERROR,
  GET_SELECTED_DURATION,
} from "./index";

export const getCoin = (coinName) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_COIN_DATA_PENDING,
    });

    const { data } = await api(`/coins/${coinName}`, `?localization=false`);

    dispatch({
      type: GET_COIN_DATA_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: GET_COIN_DATA_ERROR,
    });
  }
};

export const getPrice =
  (coinName, currencyType, option) => async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_PRICE_DATA_PENDING,
      });
      const duration = getDuration(option);

      const {
        data: { prices },
      } = await api(
        `/coins/${coinName}/market_chart`,
        `?vs_currency=${currencyType}&days=${duration}&interval=daily`
      );

      const pricePoints = prices.map((el) => el[1]);
      const labels = prices.map((el) => {
        return new Date(el[0]).getDate();
      });

      const data = { pricePoints, labels, duration, option };

      dispatch({
        type: GET_PRICE_DATA_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: GET_PRICE_DATA_ERROR,
      });
    }
  };

export const getDuration = (option) => {
  switch (option) {
    case "Max":
      return "max";
    case "1y":
      return 365;
    case "90d":
      return 90;
    case "30d":
      return 30;
    case "7d":
      return 7;
    case "1d":
      return 1;
    default:
      return 30;
  }
};
