import numeral from "numeral";
import { format } from "date-fns";

export const formatPrice = (price, currencySymbol) => {
  if (price !== null && price.toString().length < 3) {
    price = `${price}.00`;
  } else {
    price = `${numeral(price).format("0,0.00")}`;
  }

  return `${currencySymbol} ${price}`;
};

export const formatAssetPrice = (price, currencySymbol) => {
  return `${currencySymbol} ${numeral(Math.abs(price)).format("0,0.00")}`;
};

export const formatCoinPrice = (price, currencySymbol) => {
  if (currencySymbol && currencySymbol.toString().length > 1) {
    return `${numeral(price).format("0,0.0 ")} ${currencySymbol.toUpperCase()}`;
  }
  return `${currencySymbol}${numeral(price).format("0,0.0 ")}`;
};

export const formatCrypto = (price, type, cryptoSymbol, fiatSymbol) => {
  if (type) {
    return `${fiatSymbol}${numeral(price).format("0,0.0 ")}`;
  }
  return `${numeral(price).format("0,0.00000 ")} ${cryptoSymbol.toUpperCase()}`;
};

export const formatConverterNumber = (price, currencySymbol) => {
  if (currencySymbol && currencySymbol.toString().length > 1) {
    return `${numeral(price).format("0,0")}`;
  }
  return `${currencySymbol.toUpperCase()} ${numeral(price).format("0,0")}`;
};

export const formatPercentage = (percentage, noDecimalPlaces) => {
  if (noDecimalPlaces) {
    return numeral(Math.abs(percentage)).format("0,0") + "%";
  }
  return numeral(Math.abs(percentage)).format("0.00") + "%";
};

export const formatNum = (price, currencySymbol) => {
  if (price === "∞") {
    return "∞";
  } else if (currencySymbol) {
    return `${currencySymbol} ${numeral(price)
      .format("0[.]00 a")
      .toUpperCase()}`;
  }
  return `${numeral(price).format("0[.]00 a").toUpperCase()}`;
};

export const formatDateStandard = (inputDate) => {
  const dateParts = inputDate.split("-");

  if (dateParts.length === 3) {
    const year = dateParts[0];
    const month = dateParts[1];
    const day = dateParts[2];

    const formattedDate = new Date(year, month - 1, day);
    const formattedMonth = String(formattedDate.getMonth() + 1).padStart(
      2,
      "0"
    );
    const formattedDay = String(formattedDate.getDate()).padStart(2, "0");
    const formattedYear = formattedDate.getFullYear();
    return `${formattedMonth}/${formattedDay}/${formattedYear}`;
  } else {
    return "Invalid Date Format";
  }
};

export const formatDate = (dateString) => {
  const timestamp = Date.parse(dateString);
  return format(timestamp, "dd-MM-yyyy");
};
