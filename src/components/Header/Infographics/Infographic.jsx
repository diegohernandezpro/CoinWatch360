import React from "react";
import axios from "axios";
import { Container, CoinWrapper, MarketCap } from "./Infographic.styles";
import { TextNSlider } from "./TextNSlider";
import { UpArrowGreen, DownArrowGreen } from "../../../styles/Arrows";
export default class Infographic extends React.Component {
  state = { isLoading: false, hasError: true };

  async getCoinInfo() {
    try {
      this.setState({ isLoading: true });
      const {
        data: { data },
      } = await axios.get("https://api.coingecko.com/api/v3/global");

      this.setState({
        isLoading: false,
        hasError: false,
        numCoins: data.active_cryptocurrencies,
        numExchange: data.markets,
        marketCap: data.total_market_cap.usd, //change from usd to currentCoin
        marketCapChange: data.market_cap_change_percentage_24h_usd,
        volume: data.total_volume.usd, //change from usd to currentCoin
        bitCap: data.market_cap_percentage.btc,
        ethCap: data.market_cap_percentage.eth,
      });
    } catch (err) {
      this.setState({ isLoading: false, hasError: true });
      console.log("Eror in GetCoinInfo ~ Infographics.jsx", err);
    }
  }

  componentDidMount() {
    this.getCoinInfo();
  }

  render() {
    const marketCap = (this.state.marketCap / 1.0e12).toFixed(2);
    const volume = (this.state.volume / 1.0e9).toFixed(2);
    const bitCap = Math.round(this.state.bitCap);
    const ethCap = Math.round(this.state.ethCap);
    const volumeVsMarketCap = (
      (this.state.volume / this.state.marketCap) *
      100
    ).toFixed(2);
    const { numCoins, numExchange } = this.state;

    return (
      <Container>
        <CoinWrapper>Coins {numCoins}</CoinWrapper>
        <CoinWrapper>Exchange {numExchange}</CoinWrapper>
        <MarketCap>
          <span>${marketCap}T</span>
          <UpArrowGreen />
        </MarketCap>
        <TextNSlider text={`$${volume}B`} percentage={volumeVsMarketCap} />
        <TextNSlider text={`${bitCap}%`} percentage={bitCap} icon="bitcoin" />
        <TextNSlider text={`${ethCap}%`} percentage={ethCap} icon="ethereum" />
      </Container>
    );
  }
}
