import numeral from "numeral";

export const formatPrice = (price) => {
  if (price.toString().length < 4) {
    return numeral(price).format("($ 0.00)");
  } else {
    return "$ " + price;
  }
};

export const formatPercentage = (percentage) => {
  return numeral(Math.abs(percentage)).format("0.0") + "%";
};

export const formatNum = (price) => numeral(price).format("($0.00 a)"); //shortenAndDecimal

export const formatLargeNum = (num) => numeral(num).format("(0.00 a)");

export const addCommasNoDec = (num) => numeral(num).format("0,0"); //not added to index.js

export const fiveSigFigs = (num) => numeral(num).format("0.0000"); //not added to index.js
