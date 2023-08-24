import { createContext, useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import localForage from "localforage";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles";
import { getCurrencySelector } from "@/store/currency";

const GlobalContext = createContext();

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const currency = useSelector((state) => getCurrencySelector(state));
  const [dark, setDark] = useState(true);

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
    <GlobalContext.Provider value={{ currency, toggleTheme }}>
      <ThemeProvider theme={dark ? theme.dark : theme.light}>
        {children}
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};
