import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  type: "USD",
  symbol: "$",
};

const currencySymbols = {
  USD: "$",
  GBP: "£",
  EUR: "€",
  BTC: "₿",
  ETH: "Ξ",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrency(state, action) {
      state.type = action.payload;
      state.symbol = currencySymbols[action.payload] || "";
    },
  },
});

export const { setCurrency } = currencySlice.actions;

export const getCurrencySelector = (state) => state.currency;

export default currencySlice.reducer;
