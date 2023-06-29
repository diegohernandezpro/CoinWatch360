import localForage from "localforage";
import { ThemeProvider } from "styled-components";
import { createContext, useState, useEffect } from "react";
import { theme } from "@/styles";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [currency, setCurrency] = useState({
    type: "",
    currencySymbol: "",
  });
  const [dark, setDark] = useState(true);
  const [coin, setCoin] = useState({ type: "bitcoin" });

  const handleCurrency = (type, currencySymbol) => {
    setCurrency({ type, currencySymbol });
    localForage.setItem("currencyType", type);
    localForage.setItem("currencySymbol", currencySymbol);
  };

  const toggleTheme = () => {
    const isDark = !dark;
    setDark(isDark);
    localForage.setItem("darkTheme", isDark);
  };

  const selectCoin = (coin) => {
    setCoin({ type: coin.toLowerCase() });
  };

  useEffect(() => {
    localForage.getItem("darkTheme").then((isDark) => {
      setDark(isDark);
    });
  }, []);

  return (
    <GlobalContext.Provider
      value={{ currency, coin, handleCurrency, toggleTheme, selectCoin }}
    >
      <ThemeProvider theme={dark ? theme.dark : theme.light}>
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};
