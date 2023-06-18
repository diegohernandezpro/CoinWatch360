import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { CoinList, CoinPage, Portfolio } from "@/pages";
import { Header } from "@/components";
import { theme, GlobalStyle } from "@/styles";

export default class App extends React.Component {
  state = {
    themeType: true,
    currency: "USD",
    currencySymbol: "$",
  };

  handleCurrency = (currency, currencySymbol) => {
    this.setState({ currency, currencySymbol });
  };

  toogleTheme = () => {
    this.setState({ themeType: !this.state.themeType });
  };

  render() {
    return (
      <ThemeProvider theme={this.state.themeType ? theme.dark : theme.light}>
        <GlobalStyle />
        <StyledDiv>
          <Header
            handleCurrency={this.handleCurrency}
            theme={this.state.themeType ? theme.dark : theme.light}
            toogleTheme={this.toogleTheme}
          />
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

const StyledDiv = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;
