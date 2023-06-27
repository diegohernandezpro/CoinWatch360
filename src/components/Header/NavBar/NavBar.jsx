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
          <ThemeSelector toggleTheme={props.toggleTheme} />
        </RightNav>
      </Navigation>
      <StyledDiv>
        <Infographic currency={props.currency} />
      </StyledDiv>
    </Wrapper>
  );
}
