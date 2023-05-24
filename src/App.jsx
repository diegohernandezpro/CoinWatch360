import React, { useState } from "react";
import { Routes, Route, Link, useLocation, NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { CoinList, CoinPage, Portfolio } from "@/pages";
import { Themes } from "@/styles";

export default function App() {
  return (
    <ThemeProvider theme={Themes}>
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
