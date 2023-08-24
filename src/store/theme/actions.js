import { TOOGLE_THEME } from "./index";

export const toogleTheme = () => (dispatch, getState) => {
  const state = getState();
  const isDark = state.theme.isDark;
  const toogleDark = !isDark;

  dispatch({
    type: TOOGLE_THEME,
    payload: toogleDark,
  });
};
