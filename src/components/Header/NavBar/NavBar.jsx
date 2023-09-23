import { useSelector } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import { getMobileSelector } from "@/modernStore";
import {
  SearchBar,
  CurrencySelector,
  ThemeSelector,
  Infographic,
} from "@/components/Header";
import {
  Navigation,
  RightNav,
  LeftNav,
  StyledNavLink,
  StyledDiv,
  MobileContainer,
  Container,
  StyledP,
} from "./NavBar.styles";

export function NavBar() {
  const { isMobile } = useSelector(getMobileSelector);

  const Wrapper = isMobile ? MobileContainer : Container;
  let content = "";

  switch (isMobile) {
    case false:
      content = (
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
      );
      break;
    case true:
      content = <StyledP>Overview:</StyledP>;
      break;
  }

  return (
    <Wrapper>
      {content}
      <StyledDiv>
        <Infographic />
      </StyledDiv>
    </Wrapper>
  );
}
