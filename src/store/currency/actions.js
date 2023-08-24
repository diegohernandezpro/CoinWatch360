import { GET_CURRENCY } from "./index";

export const getCurrency = (currencyType) => {
  const currencySymbol = getSymbol(currencyType);

  return {
    type: GET_CURRENCY,
    payload: [currencyType, currencySymbol],
  };
};

const getSymbol = (currencyType) => {
  switch (currencyType) {
    case "USD":
      return "$";
    case "GBP":
      return "£";
    case "EUR":
      return "€";
    case "BTC":
      return "₿";
    case "ETH":
      return "Ξ";
  }
};
