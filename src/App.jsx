import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { CoinList, CoinPage, Portfolio } from "@/pages";
import { Header } from "@/components";
import { theme, GlobalStyle } from "@/styles";

export default class App extends React.Component {
  state = {
    theme: theme.dark,
    currency: "USD",
    currencySymbol: "$",
  };

  handleCurrency = (currency, currencySymbol) => {
    // console.log("IN APP", { currency, currencySymbol });
    this.setState({ currency, currencySymbol });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <GlobalStyle />
        <StyledDiv>
          <Header handleCurrency={this.handleCurrency} />
          <Routes>
            <Route
              exact="true"
              path="/"
              element={
                <CoinList
                  currency={this.state.currency}
                  currencySymbol={this.state.currencySymbol}
                />
              }
            />
            <Route exact="true" path="/coin" element={<CoinPage />} />
            <Route exact="true" path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<h1>NOT FOUND</h1>} />
          </Routes>
        </StyledDiv>
      </ThemeProvider>
    );
  }
}

// const [theme, setTheme] = useState(theme.dark);
// const [currency, setCurrency] = useState("USD");
// const [currencySymbol, setCurrencySymbol] = useState("$");

const StyledDiv = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;
