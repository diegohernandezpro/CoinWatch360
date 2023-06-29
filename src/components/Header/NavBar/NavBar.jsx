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

export function NavBar() {
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
          <CurrencySelector />
          <ThemeSelector />
        </RightNav>
      </Navigation>
      <StyledDiv>
        <Infographic />
      </StyledDiv>
    </Wrapper>
  );
}
