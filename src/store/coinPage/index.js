export const GET_COIN_DATA_PENDING = "GET_COIN_DATA_PENDING";
export const GET_COIN_DATA_SUCCESS = "GET_COIN_DATA_SUCCESS";
export const GET_COIN_DATA_ERROR = "GET_COIN_DATA_ERROR";
export const GET_PRICE_DATA_PENDING = "GET_PRICE_DATA_PENDING";
export const GET_PRICE_DATA_SUCCESS = "GET_PRICE_DATA_SUCCESS";
export const GET_PRICE_DATA_ERROR = "GET_PRICE_DATA_ERROR";

const initialState = {
  isLoading: false,
  isLoadingPrice: false,
  hasCoinError: false,
  hasPriceError: false,
  coinData: null,
  duration: 30,
  option: "30d",
  coinPricePoints: null,
  coinLabels: null,
};

const coinPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COIN_DATA_PENDING:
      return {
        ...state,
        isLoading: true,
        hasCoinError: false,
      };
    case GET_COIN_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasCoinError: false,
        coinData: action.payload,
      };
    case GET_COIN_DATA_ERROR:
      return {
        ...state,
        isLoading: false,
        hasCoinError: true,
      };
    case GET_PRICE_DATA_PENDING:
      return {
        ...state,
        isLoadingPrice: true,
        hasPriceError: false,
      };
    case GET_PRICE_DATA_SUCCESS:
      return {
        ...state,
        isLoadingPrice: false,
        hasPriceError: false,
        coinPricePoints: action.payload.pricePoints,
        coinLabels: action.payload.labels,
      };
    case GET_PRICE_DATA_ERROR:
      return {
        ...state,
        isLoadingPrice: false,
        hasPriceError: true,
      };
    default:
      return state;
  }
};

export default coinPageReducer;

export const getCoinPageSelector = (state) => state.coinPage;
