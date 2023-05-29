import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Routes, Route } from "react-router-dom";
import { CoinList, CoinPage, Portfolio } from "@/pages";
import { Header } from "@/components";
import { theme, GlobalStyle } from "@/styles";

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
