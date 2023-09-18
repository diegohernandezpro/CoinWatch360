import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from "@/contexts";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { CoinList, CoinPage, Portfolio, ErrorAPICallPage } from "@/pages";
import { Header } from "@/components";
import { GlobalStyle, StyledDiv } from "@/styles";

const App = () => {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <StyledDiv>
        <Header />
        <Routes>
          <Route exact="true" path="/" element={<CoinList />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route exact="true" path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<ErrorAPICallPage />} />
        </Routes>
      </StyledDiv>
    </GlobalProvider>
  );
};

export default App;
