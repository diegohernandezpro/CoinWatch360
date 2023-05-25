import React from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import {
  Wrapper,
  Navigation,
  RightNav,
  LeftNav,
  StyledNavLink,
} from "./NavBar.styles";
import Searchbar from "../SearchBar/SearchBar";

import { NavLinkText } from "@/styles/Fonts";

export function NavBar() {
  const { pathname } = useLocation();
  console.log(
    "🚀 ~ file: NavBar.jsx:16 ~ NavBar ~ pathname:",
    pathname.slice(1)
  );

  return (
    <Wrapper>
      <Navigation>
        <LeftNav>
          <StyledNavLink exact to="/" activeClassName="active">
            Coins
          </StyledNavLink>

          <StyledNavLink exact to="/portfolio" activeClassName="active">
            Portfolio
          </StyledNavLink>
        </LeftNav>

        <RightNav>{/* <Searchbar /> */} SearchBar</RightNav>
      </Navigation>
    </Wrapper>
  );
}

{
  /* <nav>
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
        </nav> */
}
