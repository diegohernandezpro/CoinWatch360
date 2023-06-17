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

// export const formatPriceAvg = (price) => numeral(price).format("(0.00 a)");

export const formatNum = (price, currencySymbol) => {
  const formattingPattern = `${currencySymbol} 0[.]00a`;
  return numeral(price).format(formattingPattern).toUpperCase();
};

// export const formatLargeNum = (num) => numeral(num).format("(0.00 a)");

// export const addCommasNoDec = (num) => numeral(num).format("0,0"); //not added to index.js

// export const fiveSigFigs = (num) => numeral(num).format("0.0000"); //not added to index.js
