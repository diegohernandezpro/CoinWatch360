import { useState, useEffect } from "react";
import axios from "axios";
import { TextNSlider } from "./TextNSlider";
import { UpArrowGreen, DownArrowGreen, NeutralDot } from "@/styles";
import { formatNum, LoadingCircle } from "@/utils";
import {
  Container,
  CoinWrapper,
  MarketCap,
  Icon,
  Flex,
} from "./Infographic.styles";

export const Infographic = ({ currency: { type, currencySymbol } }) => {
  const [isLoading, setLoading] = useState(true);
  const [hasError, setError] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");
  const [coinsData, setCoinsData] = useState([]);
  const [icons, setIcons] = useState({ bitIcon: "", ethIcon: "" });

  const getCoinInfo = async () => {
    try {
      setLoading(true);
      const {
        data: { data },
      } = await axios.get("https://api.coingecko.com/api/v3/global");

      const {
        active_cryptocurrencies: activeCrypto,
        markets,
        total_market_cap: totalMarketCap,
        total_volume: totalVolume,
        market_cap_percentage: marketCapPercent,
      } = data;

      setCoinsData((prevState) => {
        return {
          ...prevState,
          numCoins: activeCrypto,
          numExchange: markets,
          marketCap: totalMarketCap[type.toLowerCase()],
          volume: totalVolume[type.toLowerCase()],
          bitCap: marketCapPercent.btc,
          ethCap: marketCapPercent.eth,
        };
      });

      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(true);
      setErrorMsg(
        "Error Retrieving the Infographic's Data. Please Try Again Later"
      );
      setTimeout(() => {
        setErrorMsg("");
      }, 5000);
    }
  };

  const getIcon = (icon) => {
    if (icon === "bitcoin") {
      return "/icons/bitcoin.svg";
    }
    return "/icons/ethereum.svg";
  };

  const { numCoins, numExchange, volume, marketCap, bitCap, ethCap } =
    coinsData;
  const coinMarketCap = formatNum(marketCap, currencySymbol);
  const coinVolume = formatNum(volume, currencySymbol);
  const coinBitCap = Math.round(bitCap);
  const coinEthCap = Math.round(ethCap);
  const volumeVsMarketCap = ((volume / marketCap) * 100).toFixed(2);

  useEffect(() => {
    getCoinInfo();
  }, [type]);

  return (
    <>
      {!hasError ? (
        <>
          {!isLoading ? (
            <>
              {
                <Container>
                  <CoinWrapper>Coins {numCoins}</CoinWrapper>
                  <CoinWrapper>Exchange {numExchange}</CoinWrapper>
                  <MarketCap>
                    <NeutralDot color={({ theme }) => theme.infographic.base} />
                    <span>{coinMarketCap}</span>
                    <UpArrowGreen />
                  </MarketCap>
                  <TextNSlider text={coinVolume} percentage={volumeVsMarketCap}>
                    <NeutralDot
                      color={({ theme }) => theme.infographic.filler}
                    />
                  </TextNSlider>
                  <TextNSlider
                    text={`${coinBitCap}%`}
                    percentage={coinBitCap}
                    icon="bitcoin"
                  >
                    <Icon src={getIcon("bitcoin")} />
                  </TextNSlider>
                  <TextNSlider
                    text={`${coinEthCap}%`}
                    percentage={coinEthCap}
                    icon="ethereum"
                  >
                    <Icon src={getIcon("etherum")} />
                  </TextNSlider>
                </Container>
              }
            </>
          ) : (
            <Container>
              <Flex>
                <LoadingCircle width="1rem" />
              </Flex>
            </Container>
          )}
        </>
      ) : (
        <>
          <p>{ErrorMsg}</p>
        </>
      )}
    </>
  );
};
