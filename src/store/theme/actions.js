import { TOOGLE_THEME, getThemeSelector } from "./index";

export const toogleTheme = () => (dispatch, getState) => {
  const state = getState();
  const isDark = getThemeSelector(state).isDark;
  const toogleDark = !isDark;

  dispatch({
    type: TOOGLE_THEME,
    payload: toogleDark,
  });
};
