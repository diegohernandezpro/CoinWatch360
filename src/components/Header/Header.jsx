import React from "react";
import {
  Wrapper,
  Navigation,
  RightNav,
  LeftNav,
  NavLinkWrapper,
} from "./Header.styles";
import { NavLinkText } from "@/styles/Fonts";
export default class Header extends React.Component {
  render() {
    return (
      <Wrapper>
        <Navigation>
          <RightNav>
            <NavLinkWrapper>
              <NavLinkText>Coins</NavLinkText>
            </NavLinkWrapper>
            <NavLinkWrapper>
              <NavLinkText>Portfolio</NavLinkText>
            </NavLinkWrapper>
          </RightNav>
          <LeftNav></LeftNav>
        </Navigation>
      </Wrapper>
    );
  }
}
