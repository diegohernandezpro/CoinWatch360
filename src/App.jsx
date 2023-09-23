import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from "@/contexts";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { CoinList, CoinPage, Portfolio, ErrorAPICallPage } from "@/pages";
import { Header, MobileHeader } from "@/components";
import { GlobalStyle, Wrapper } from "@/styles";
import { setMobile } from "@/modernStore/features/mobile/mobileSlice";

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 930);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 930);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  switch (isMobile) {
    case true:
      dispatch(setMobile(true));
      break;
    case false:
      dispatch(setMobile(false));
      break;
  }

  return (
    <GlobalProvider>
      <GlobalStyle />
      <Wrapper isMobile={isMobile}>
        <Header />
        <Routes>
          <Route exact="true" path="/" element={<CoinList />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route exact="true" path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<ErrorAPICallPage />} />
        </Routes>
      </Wrapper>
      {isMobile && <MobileHeader />}
    </GlobalProvider>
  );
};

export default App;
