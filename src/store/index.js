import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import charts from "./charts";
import table from "./table";
import currency from "./currency";
import theme from "./theme";
import infographic from "./infographic";
import coinPage from "./coinPage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["charts", "table", "currency", "infographic", "coinPage"],
};

const currencyPersistConfig = {
  key: "currency",
  storage,
};

const rootReducer = combineReducers({
  charts,
  table,
  currency: persistReducer(currencyPersistConfig, currency),
  theme,
  infographic,
  coinPage,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancer = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(persistedReducer, composedEnhancer);
export const persistor = persistStore(store);