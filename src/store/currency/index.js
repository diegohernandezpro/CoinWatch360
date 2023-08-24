export const GET_CURRENCY = "GET_CURRENCY";

const intitialState = {
  type: "USD",
  symbol: "$",
};

const currencyReducer = (state = intitialState, action) => {
  switch (action.type) {
    case GET_CURRENCY:
      return {
        ...state,
        type: action.payload[0],
        symbol: action.payload[1],
      };
    default:
      return state;
  }
};

export default currencyReducer;

export const getCurrencySelector = (state) => state.currency;
