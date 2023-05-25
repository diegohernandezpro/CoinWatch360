import React, { useState } from "react";
import { Routes, Route, Link, useLocation, NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { CoinList, CoinPage, Portfolio } from "@/pages";
import { Header } from "@/components";
import { theme } from "./styles/Theme";
import { GlobalStyle } from "./styles/GlobalStyles";
import styled from "styled-components";

class App extends React.Component {
  state = {
    theme: theme.dark,
  };

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <GlobalStyle />
        <StyledDiv>
          <Header />
          <Routes>
            <Route path="/" element={<CoinList />} />
            <Route path="/coinPage" element={<CoinPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="*" element={<h1>NOT FOUND</h1>} />
          </Routes>
        </StyledDiv>
      </ThemeProvider>
    );
  }
}

export default App;

const StyledDiv = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;
