import React, { useState } from "react";
import { Routes, Route, Link, useLocation, NavLink } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DarkTheme } from "./utils/DarkTheme";

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
        <Route path="/" element={<h1>COINLIST</h1>} />
        <Route path="/coinPage" element={<h1>COINPAGE</h1>} />
        <Route path="/portfolio" element={<h1>PORTFOLIO</h1>} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </ThemeProvider>
  );
}
