import React from "react";
import axios from "axios";
// import { REACT_APP_GLOBAL } from "process.env";
import { Container, CoinWrapper, MarketCap } from "./Infographic.styles";
import { TextNSlider } from "./TextNSlider";
import { UpArrowGreen, DownArrowGreen } from "../../../styles/Arrows";
export default class Infographic extends React.Component {
  state = { isLoading: false, hasError: true };

  async getCoinInfo() {
    try {
      const {
        data: { data },
      } = await axios.get("https://api.coingecko.com/api/v3/global");
      console.log(data.total_market_cap.usd);

      this.setState({
        isLoading: false,
        hasError: false,
        numCoins: data.active_cryptocurrencies,
        numExchange: data.markets,
        marketCap: data.total_market_cap.usd,
        marketCapChange: data.market_cap_change_percentage_24h_usd,
        volume: data.total_volume.usd,
        volumePercentage: 0,
        bitCap: data.market_cap_percentage.btc,
        ethCap: data.market_cap_percentage.eth,
      });
    } catch (err) {
      console.log("Eror in GetCoinInfo", err);
    }
  }

  componentDidMount() {
    this.getCoinInfo();
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
        <TextNSlider text="44%" percentage={44} icon="bitcoin" />
        <TextNSlider text="21%" percentage={21} icon="ethereum" />
      </Container>
    );
  }
}
