export const TOOGLE_THEME = "TOOGLE_THEME";

const initialState = {
  isDark: true,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_THEME:
      return {
        ...state,
        isDark: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;

export const getThemeSelector = (state) => state.theme;
