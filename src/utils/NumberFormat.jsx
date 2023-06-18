import numeral from "numeral";

export const formatPrice = (price, currencySymbol) => {
  if (price !== null && price.toString().length < 3) {
    price = `${price}.00`;
  }

  return `${currencySymbol} ${price}`;
};

export const formatPercentage = (percentage) => {
  return numeral(Math.abs(percentage)).format("0.0") + "%";
};

export const formatNum = (price, currencySymbol) => {
  if (currencySymbol) {
    return `${currencySymbol} ${numeral(price)
      .format("0[.]00 a")
      .toUpperCase()}`;
  }
  return `${numeral(price).format("0[.]00 a").toUpperCase()}`;
};
