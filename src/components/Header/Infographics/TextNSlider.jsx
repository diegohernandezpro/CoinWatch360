import React from "react";
import { UNSAFE_mapRouteProperties } from "react-router";
import {
  Container,
  CoinWrapper,
  StyledDiv,
  MarketCap,
  SliderWrapper,
  Slider,
} from "./Infographic.styles";

export function TextNSlider(props) {
  const { text } = props;
  return (
    <StyledDiv>
      <span>{text}</span>
      <SliderWrapper>
        <Slider />
      </SliderWrapper>
    </StyledDiv>
  );
}
