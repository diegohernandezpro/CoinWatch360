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
  assets: [
    // {
    // amount: 1,
    // amountValue: 25767,
    // circulatingSupply: 19478225,
    // circulatingVsTotalSupply: "92.75",
    // currentPrice: 29146.63627084363,
    // date: "2023-08-04",
    // formattedAmountValue: "$ 25,767.00",
    // formattedCirVsTotPer: "93%",
    // formattedCurrentPrice: "$ 29,146.64",
    // formattedMarVsVolPer: "4,907%",
    // formattedPriceChange: "$ 0.00",
    // formattedPriceChange24h: "$ 10.89",
    // id: "Bitcoin",
    // isBigger: false,
    // key: 0.9574242912903861,
    // marketCap: 502062330997,
    // marketCapVsVolume: "4907.34",
    // previousPrice: 25767,
    // priceChange: NaN,
    // priceChange24h: -10.8865298516,
    // priceInSelectedDate: 29146.63627084363,
    // totalSupply: 21000000,
    // totalVolume: 10230834862,
    // },
  ],
};

const portfolioReducer = (state = intitialState, actions) => {
  switch (actions.type) {
    case TOOGLE_POPUP_ON:
      return {
        ...state,
        popup: true,
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
      };
    default:
      return state;
  }
};

export default portfolioReducer;

export const getPortfolioSelector = (state) => state.portfolio;
