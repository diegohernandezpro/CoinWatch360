import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GlobalProvider } from "@/contexts";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { CoinList, CoinPage, Portfolio } from "@/pages";
import { Header } from "@/components";
import { GlobalStyle, StyledDiv } from "@/styles";

import { getChartData } from "./store/charts/actions";
import { getCoinList } from "./store/table/actions";

import { getChartsDataSelector } from "./store/charts";
import { getTableDataSelector } from "./store/table";

const App = () => {
  const dispatch = useDispatch();
  const charts = useSelector((state) => getChartsDataSelector(state));
  const table = useSelector((state) => getTableDataSelector(state));

  useEffect(() => {
    dispatch(getChartData());
    dispatch(getCoinList());
  }, []);

  return (
    <GlobalProvider>
      <GlobalStyle />
      <StyledDiv>
        <Header />
        <Routes>
          <Route
            exact="true"
            path="/"
            element={<CoinList charts={charts} table={table} />}
          />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route exact="true" path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<h1>NOT FOUND</h1>} />
        </Routes>
      </StyledDiv>
    </GlobalProvider>
  );
};

export default App;
