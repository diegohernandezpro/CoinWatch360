import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatNum, LoadingCircle } from "@/utils";
import {
  getInfographicSelector,
  getCoinInfo,
} from "../../../modernStore/features/infographic/infographicSlice";
import { UpArrowGreen, NeutralDot } from "@/styles";
import { TextNSlider } from "./TextNSlider";
import {
  Container,
  CoinWrapper,
  MarketCap,
  Icon,
  Flex,
} from "./Infographic.styles";

import { getCurrencySelector } from "@/modernStore/features/currency/currencySlice";
import { FETCHING_STATE } from "@/modernStore/features/fetchingStates";

export const Infographic = () => {
  const dispatch = useDispatch();
  const infographic = useSelector(getInfographicSelector);
  const currency = useSelector(getCurrencySelector);

  const getIcon = (icon) =>
    icon === "bitcoin" ? "/icons/bitcoin.svg" : "/icons/ethereum.svg";

  const { numCoins, numExchange, volume, marketCap, bitCap, ethCap } =
    infographic.coinsData;
  const coinMarketCap = formatNum(marketCap, currency.symbol);
  const coinVolume = formatNum(volume, currency.symbol);
  const coinBitCap = Math.round(bitCap);
  const coinEthCap = Math.round(ethCap);
  const volumeVsMarketCap = ((volume / marketCap) * 100).toFixed(2);

  let content = "";

  switch (infographic.status) {
    case FETCHING_STATE.PENDING:
      content = (
        <Container>
          <Flex>
            <LoadingCircle width="1rem" />
          </Flex>
        </Container>
      );
      break;
    case FETCHING_STATE.SUCCESS:
      content = (
        <Container>
          <CoinWrapper>Coins {numCoins}</CoinWrapper>
          <CoinWrapper>Exchange {numExchange}</CoinWrapper>
          <MarketCap>
            <NeutralDot color={({ theme }) => theme.infographic.base} />
            <span>{coinMarketCap}</span>
            <UpArrowGreen />
          </MarketCap>
          <TextNSlider text={coinVolume} percentage={volumeVsMarketCap}>
            <NeutralDot color={({ theme }) => theme.infographic.filler} />
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
      );
      break;

    case FETCHING_STATE.ERROR:
      content = <p>{infographic.errorMsg}</p>;
      break;
    default:
      content = <></>;
      break;
  }

  useEffect(() => {
    if (infographic.status === FETCHING_STATE.IDLE) {
      dispatch(getCoinInfo());
    }
  }, [infographic.status]);

  useEffect(() => {
    dispatch(getCoinInfo());
  }, [currency.type]);

  return <>{content}</>;
};
