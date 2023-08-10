import { createContext, useState, useEffect, useContext } from "react";
import localForage from "localforage";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [currency, setCurrency] = useState({
    currencyType: "",
    currencySymbol: "",
  });
  const [dark, setDark] = useState(true);

  const handleCurrency = (currencyType, currencySymbol) => {
    setCurrency({ currencyType, currencySymbol });
    localForage.setItem("currencyType", currencyType);
    localForage.setItem("currencySymbol", currencySymbol);
  };

  const toggleTheme = () => {
    const isDark = !dark;
    setDark(isDark);
    localForage.setItem("darkTheme", isDark);
  };

  useEffect(() => {
    localForage.getItem("darkTheme").then((isDark) => {
      setDark(isDark);
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ currency, handleCurrency, toggleTheme }}>
      <ThemeProvider theme={dark ? theme.dark : theme.light}>
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};
