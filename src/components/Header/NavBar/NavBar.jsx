import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
  MobileNavButton, // New Button for mobile nav
} from "./NavBar.styles"; // Using the mobile-optimized styles

export function NavBar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        {isMobile ? ( // Conditional Rendering
          <MobileNavButton>
            <FontAwesomeIcon icon={faBars} />
          </MobileNavButton> // Mobile-specific button
        ) : (
          <RightNav>
            <SearchBar />
            <CurrencySelector />
            <ThemeSelector />
          </RightNav>
        )}
      </Navigation>
      <StyledDiv>
        <Infographic />
      </StyledDiv>
    </Wrapper>
  );
}
