import React, { useState } from "react";
import { Routes, Route, Link, useLocation, NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { CoinList, CoinPage, Portfolio } from "@/pages";
import { Header } from "@/components";
import { theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/GlobalStyles";

class App extends React.Component {
  state = {
    theme: theme.dark,
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<CoinList />} />
          <Route path="/coinPage" element={<CoinPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </ThemeProvider>
    );
  }
}

export default App;
