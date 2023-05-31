import { useState, useEffect } from "react";
import axios from "axios";
import { Container, CoinWrapper, MarketCap } from "./Infographic.styles";
import { TextNSlider } from "./TextNSlider";
import { UpArrowGreen, DownArrowGreen } from "../../../styles/Arrows";

export const Infographic = () => {
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [coinsData, setCoinsData] = useState([]);

  const getCoinInfo = async () => {
    try {
      setLoading(true);

      const {
        data: { data },
      } = await axios.get("https://api.coingecko.com/api/v3/global");

      setLoading(false);
      setCoinsData((prevState) => {
        return {
          ...prevState,
          numCoins: data.active_cryptocurrencies,
          numExchange: data.markets,
          marketCap: data.total_market_cap.usd, //change from usd to currentCoin
          marketCapChange: data.market_cap_change_percentage_24h_usd,
          volume: data.total_volume.usd, //change from usd to currentCoin
          bitCap: data.market_cap_percentage.btc,
          ethCap: data.market_cap_percentage.eth,
        };
      });
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getCoinInfo();
  }, []);

  const marketCap = (coinsData.marketCap / 1.0e12).toFixed(2);
  const volume = (coinsData.volume / 1.0e9).toFixed(2);
  const bitCap = Math.round(coinsData.bitCap);
  const ethCap = Math.round(coinsData.ethCap);
  const volumeVsMarketCap = (
    (coinsData.volume / coinsData.marketCap) *
    100
  ).toFixed(2);
  const { numCoins, numExchange } = coinsData;

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
};
