import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GlobalProvider } from "@/contexts";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { CoinList, CoinPage, Portfolio, ErrorAPICallPage } from "@/pages";
import { Header } from "@/components";
import { GlobalStyle, StyledDiv } from "@/styles";

import { getChartData } from "./store/charts/actions";
import { getCoinList } from "./store/table/actions";

import { getChartsDataSelector } from "./store/charts";
import { getTableDataSelector } from "./store/table";
import { getCurrencySelector } from "./store/currency";

const App = () => {
  const dispatch = useDispatch();
  const charts = useSelector(getChartsDataSelector);
  const table = useSelector(getTableDataSelector);
  const currency = useSelector(getCurrencySelector);

  useEffect(() => {
    dispatch(getChartData());
    dispatch(getCoinList());
  }, [currency]);

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
          <Route path="*" element={<ErrorAPICallPage />} />
        </Routes>
      </StyledDiv>
    </GlobalProvider>
  );
};

export default App;
