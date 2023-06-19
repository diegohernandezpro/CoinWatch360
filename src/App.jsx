import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { CoinList, CoinPage, Portfolio } from "@/pages";
import { Header } from "@/components";
import { theme, GlobalStyle } from "@/styles";

export const App = () => {
  const [currency, setCurrency] = useState({
    type: "USD",
    currencySymbol: "$",
  });
  const [dark, setTheme] = useState(true);
  const [coin, setCoin] = useState({ type: "bitcoin" });

  const handleCurrency = (type, currencySymbol) => {
    setCurrency({ type, currencySymbol });
  };

  const toggleTheme = () => {
    setTheme(!dark);
  };

  const selectCoin = (coin) => {
    // console.log("coin: ", coin);
    setCoin({ type: coin.toLowerCase() });
  };

  return (
    <ThemeProvider theme={dark ? theme.dark : theme.light}>
      <GlobalStyle />
      <StyledDiv>
        <Header handleCurrency={handleCurrency} toggleTheme={toggleTheme} />
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
