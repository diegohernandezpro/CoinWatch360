import React from "react";
import axios from "axios";
import {
  Container,
  CoinWrapper,
  StyledDiv,
  MarketCap,
  SliderWrapper,
  Slider,
} from "./Infographic.styles";
import { TextNSlider } from "./TextNSlider";
import { UpArrowGreen, DownArrowGreen } from "../../../styles/Arrows";
export default class Infographic extends React.Component {
  state = {};

  getInfo() {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <Container>
        <CoinWrapper>Coins 7884</CoinWrapper>
        <CoinWrapper>Exchange 662</CoinWrapper>
        <MarketCap>
          <span>$1.69T</span>
          <UpArrowGreen />
        </MarketCap>
        <TextNSlider text="$124.458" />
        <TextNSlider text="44%" />
        <TextNSlider text="21%" />
      </Container>
    );
  }
}
