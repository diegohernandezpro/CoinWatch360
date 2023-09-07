export const TOOGLE_POPUP_ON = "TOOGLE_POPUP_ON";
export const TOOGLE_POPUP_OFF = "TOOGLE_POPUP_OFF";
export const GET_PORTFOLIO_COIN_PENDING = "GET_PORTFOLIO_COIN_PENDING";
export const GET_PORTFOLIO_COIN_SUCCESS = "GET_PORTFOLIO_COIN_SUCCESS";
export const GET_PORTFOLIO_COIN_ERROR = "GET_PORTFOLIO_COIN_ERROR";
export const GET_PORTFOLIO_COIN_ERROR_DISAPPEAR =
  "GET_PORTFOLIO_COIN_ERROR_DISAPPEAR";
export const RENAME_PORTFOLIO_COIN = "RENAME_PORTFOLIO_COIN";
export const SELECT_PORTFOLIO_COIN = "SELECT_PORTFOLIO_COIN";
export const SELECT_PORTFOLIO_COIN_AMOUNT = "SELECT_PORTFOLIO_COIN_AMOUNT";
export const SELECT_PORTFOLIO_COIN_DATE = "SELECT_PORTFOLIO_COIN_DATE";
export const GET_PORTFOLIO_COIN_DATA = "GET_PORTFOLIO_COIN_DATA";
export const REMOVE_ASSET = "REMOVE_ASSET";

const intitialState = {
  popup: false,
  coin: "",
  purchasedAmount: "",
  numericAmount: "",
  date: "",
  isLoading: false,
  hasError: false,
  results: [],
  isVisible: false,
  assets: [],
};

const portfolioReducer = (state = intitialState, actions) => {
  switch (actions.type) {
    case TOOGLE_POPUP_ON:
      return {
        ...state,
        popup: true,
        purchasedAmount: "",
        date: "",
        coin: "",
      };
    case TOOGLE_POPUP_OFF:
      return {
        ...state,
        popup: false,
      };
    case GET_PORTFOLIO_COIN_PENDING:
      return {
        ...state,
        popup: true,
        isLoading: true,
        coin: actions.payload.coin,
      };

    case GET_PORTFOLIO_COIN_SUCCESS:
      return {
        ...state,
        popup: true,
        isLoading: false,
        isVisible: true,
        results: actions.payload.results,
        coin: actions.payload.coin,
      };
    case GET_PORTFOLIO_COIN_ERROR:
      return {
        ...state,
        popup: true,
        isLoading: false,
        isVisible: true,
        hasError: true,
        coin: "",
      };
    case GET_PORTFOLIO_COIN_ERROR_DISAPPEAR:
      return {
        ...state,
        popup: true,
        isLoading: false,
        isVisible: false,
        hasError: true,
        coin: "",
      };
    case RENAME_PORTFOLIO_COIN:
      return {
        ...state,
        coin: actions.payload,
      };
    case SELECT_PORTFOLIO_COIN:
      return {
        ...state,
        popup: true,
        isVisible: false,
        coin: actions.payload,
      };
    case SELECT_PORTFOLIO_COIN_AMOUNT:
      return {
        ...state,
        purchasedAmount: actions.payload.amount,
        numericAmount: actions.payload.numericAmount,
      };
    case SELECT_PORTFOLIO_COIN_DATE:
      return {
        ...state,
        date: actions.payload,
      };
    case GET_PORTFOLIO_COIN_DATA:
      return {
        ...state,
        popup: false,
        assets: actions.payload,
        results: [],
        purchasedAmount: "",
        date: "",
        coin: "",
      };
    case REMOVE_ASSET:
      return {
        ...state,
        assets: actions.payload,
      };
    default:
      return state;
  }
};

export default portfolioReducer;

export const getPortfolioSelector = (state) => state.portfolio;
