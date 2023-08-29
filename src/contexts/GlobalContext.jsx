import { createContext, useContext } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles";
import { getCurrencySelector } from "@/store/currency";
import { getThemeSelector } from "@/store/theme";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const currency = useSelector(getCurrencySelector);
  const globalTheme = useSelector(getThemeSelector);

  return (
    <GlobalContext.Provider value={{ currency }}>
      <ThemeProvider theme={globalTheme.isDark ? theme.dark : theme.light}>
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};
