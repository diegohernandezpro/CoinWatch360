import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import chartReducer from "./features/charts/chartsSlice";
import currencyReducer from "./features/currency/currencySlice";
import themeReducer from "./features/theme/themeSlice";
import coinPageReducer from "./features/coinPage/coinPageSlice";
import infographicsReducer from "./features/infographic/infographicSlice";
import tableReducer from "./features/table/tableSlice";
import portfolioReducer from "./features/portfolio/portfolioSlice";

export default configureStore({
  reducer: {
    currency: currencyReducer,
    charts: chartReducer,
    theme: themeReducer,
    coinPage: coinPageReducer,
    infographic: infographicsReducer,
    table: tableReducer,
    portfolio: portfolioReducer,
  },
});
