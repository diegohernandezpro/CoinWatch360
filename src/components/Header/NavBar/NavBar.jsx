import {
  SearchBar,
  CurrencySelector,
  ThemeSelector,
  Infographic,
} from "@/components/Header";

import {
  Wrapper,
  Navigation,
  RightNav,
  LeftNav,
  StyledNavLink,
  StyledDiv,
} from "./NavBar.styles";

export function NavBar(props) {
  return (
    <Wrapper>
      <Navigation>
        <LeftNav>
          <StyledNavLink exact="true" to="/">
            Coins
          </StyledNavLink>

          <StyledNavLink exact="true" to="/portfolio">
            Portfolio
          </StyledNavLink>
        </LeftNav>

        <RightNav>
          <SearchBar />
          <CurrencySelector handleCurrency={props.handleCurrency} />
          <ThemeSelector />
        </RightNav>
      </Navigation>
      <StyledDiv>
        <Infographic />
      </StyledDiv>
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
