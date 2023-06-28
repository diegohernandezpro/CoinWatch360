import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import localForage from "localforage";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { CoinList, CoinPage, Portfolio } from "@/pages";
import { Header } from "@/components";
import { theme, GlobalStyle } from "@/styles";

export const App = () => {
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
    localForage.getItem("darkTheme").then((bool) => {
      setDark(bool);
    });
  }, []);

  return (
    <ThemeProvider theme={dark ? theme.dark : theme.light}>
      <GlobalStyle />
      <StyledDiv>
        <Header
          handleCurrency={handleCurrency}
          currency={currency}
          toggleTheme={toggleTheme}
        />
        <Routes>
          <Route
            exact="true"
            path="/"
            element={
              <CoinList
                currency={currency.type}
                currencySymbol={currency.currencySymbol}
                selectCoin={selectCoin}
              />
            }
          />
          <Route
            path="/coin/:id"
            element={
              <CoinPage
                coin={coin}
                currency={currency.type}
                currencySymbol={currency.currencySymbol}
              />
            }
          />
          <Route exact="true" path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </StyledDiv>
    </ThemeProvider>
  );
};

const StyledDiv = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;
