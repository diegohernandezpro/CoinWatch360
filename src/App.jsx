import React, { useState } from "react";
import { Routes, Route, Link, useLocation, NavLink } from "react-router-dom";

import CoinList from "./pages/CoinList";
import CoinPage from "./pages/CoinPage";
import Portfolio from "./pages/Portfolio";

import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./theme/DarkTheme";

export default function App() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <nav>
        <ul>
          <li>
            <Link to="/">CoinList</Link>
          </li>
          <li>
            <Link to="/coinPage">CoinPage</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<CoinList />} />
        <Route path="/coinPage" element={<CoinPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </ThemeProvider>
  );
}
