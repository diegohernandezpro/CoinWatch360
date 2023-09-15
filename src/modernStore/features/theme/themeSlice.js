import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: true,
  },
  reducers: {
    toogleTheme(state) {
      state.isDark = !state.isDark;
    },
  },
});

export const getThemeSelector = (state) => state.theme;

export const { toogleTheme } = themeSlice.actions;

export default themeSlice.reducer;
