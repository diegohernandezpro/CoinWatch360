import React from "react";
import {
  Wrapper,
  Navigation,
  RightNav,
  LeftNav,
  StyledNavLink,
} from "./NavBar.styles";
import Searchbar from "../SearchBar/SearchBar";
import CurrencySelector from "../CurrencySelector";

export function NavBar() {
  return (
    <Wrapper>
      <Navigation>
        <LeftNav>
          <StyledNavLink exact to="/">
            Coins
          </StyledNavLink>

          <StyledNavLink exact to="/portfolio">
            Portfolio
          </StyledNavLink>
        </LeftNav>

        <RightNav>
          <Searchbar />
          <CurrencySelector />
        </RightNav>
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
