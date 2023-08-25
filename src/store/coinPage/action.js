import { api } from "@/utils";
import {
  GET_COIN_DATA_PENDING,
  GET_COIN_DATA_SUCCESS,
  GET_COIN_DATA_ERROR,
  GET_PRICE_DATA_PENDING,
  GET_PRICE_DATA_SUCCESS,
  GET_PRICE_DATA_ERROR,
} from "./index";

export const getCoin = (coinName) => async (dispatch, getState) => {
  console.log("Running, getCoin");
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
  (coinName, currencyType, duration) => async (dispatch, getState) => {
    console.log("Running, getPrice");

    try {
      dispatch({
        type: GET_PRICE_DATA_PENDING,
      });

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

      const data = { pricePoints, labels };

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
