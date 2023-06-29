import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { GlobalProvider } from "@/contexts";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { CoinList, CoinPage, Portfolio } from "@/pages";
import { Header } from "@/components";
import { GlobalStyle } from "@/styles";

export const App = () => {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <StyledDiv>
        <Header />
        <Routes>
          <Route exact="true" path="/" element={<CoinList />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route exact="true" path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </StyledDiv>
    </GlobalProvider>
  );
};

const StyledDiv = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`;
