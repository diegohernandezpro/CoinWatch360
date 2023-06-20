import numeral from "numeral";

export const formatPrice = (price, currencySymbol) => {
  if (price !== null && price.toString().length < 3) {
    price = `${price}.00`;
  } else {
    price = `${numeral(price).format("0,0.00")}`;
  }

  return `${currencySymbol} ${price}`;
};

export const formatCoinPrice = (price, currencySymbol) => {
  if (currencySymbol && currencySymbol.toString().length > 1) {
    return `${numeral(price).format("0,0.0 ")} ${currencySymbol.toUpperCase()}`;
  }
  return `${currencySymbol}${numeral(price).format("0,0.0 ")}`;
};

export const formatPercentage = (percentage) => {
  return numeral(Math.abs(percentage)).format("0.00") + "%";
};

export const formatNum = (price, currencySymbol) => {
  if (currencySymbol) {
    return `${currencySymbol} ${numeral(price)
      .format("0[.]00 a")
      .toUpperCase()}`;
  }
  return `${numeral(price).format("0[.]00 a").toUpperCase()}`;
};
