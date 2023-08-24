import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGlobalContext } from "@/contexts";
import { formatNum, LoadingCircle } from "@/utils";
import { getCoinInfo } from "@/store/infographic/actions";
import { getInfographicSelector } from "@/store/infographic";
import { TextNSlider } from "./TextNSlider";
import { UpArrowGreen, NeutralDot } from "@/styles";
import {
  Container,
  CoinWrapper,
  MarketCap,
  Icon,
  Flex,
} from "./Infographic.styles";

export const Infographic = () => {
  const dispatch = useDispatch();
  const infographic = useSelector((state) => getInfographicSelector(state));
  const { currency } = useGlobalContext();

  const getIcon = (icon) => {
    if (icon === "bitcoin") {
      return "/icons/bitcoin.svg";
    }
    return "/icons/ethereum.svg";
  };

  const { numCoins, numExchange, volume, marketCap, bitCap, ethCap } =
    infographic.coinsData;
  const coinMarketCap = formatNum(marketCap, currency.symbol);
  const coinVolume = formatNum(volume, currency.symbol);
  const coinBitCap = Math.round(bitCap);
  const coinEthCap = Math.round(ethCap);
  const volumeVsMarketCap = ((volume / marketCap) * 100).toFixed(2);

  useEffect(() => {
    dispatch(getCoinInfo());
  }, [currency.type]);

  return (
    <>
      {!infographic.hasError ? (
        <>
          {!infographic.isLoading ? (
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
          <p>{infographic.errorMsg}</p>
        </>
      )}
    </>
  );
};
