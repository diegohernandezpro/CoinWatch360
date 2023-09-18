import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingCircle } from "@/utils";
import {
  getInfographicSelector,
  getCoinInfo,
  disappearError,
} from "@/modernStore/features/infographic/infographicSlice";
import { getCurrencySelector } from "@/modernStore/features/currency/currencySlice";
import { UpArrowGreen, NeutralDot } from "@/styles";
import { TextNSlider } from "./TextNSlider";
import {
  Container,
  CoinWrapper,
  MarketCap,
  Icon,
  Flex,
} from "./Infographic.styles";

import { FETCHING_STATE } from "@/modernStore/features/fetchingStates";

export const Infographic = () => {
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);
  const infographic = useSelector(getInfographicSelector);
  const currency = useSelector(getCurrencySelector);

  const {
    numCoins,
    numExchange,
    formattedMarketCap,
    formattedCoinVolume,
    formattedBitCap,
    formattedEthCap,
    volumeVsMarketCap,
  } = infographic.coinsData;

  const getIcon = (icon) =>
    icon === "bitcoin" ? "/icons/bitcoin.svg" : "/icons/ethereum.svg";

  let content = "";

  if (showError) {
    content = <p>{infographic.errorMsg}</p>;
  } else {
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
              <span>{formattedMarketCap}</span>
              <UpArrowGreen />
            </MarketCap>
            <TextNSlider
              text={formattedCoinVolume}
              percentage={volumeVsMarketCap}
            >
              <NeutralDot color={({ theme }) => theme.infographic.filler} />
            </TextNSlider>
            <TextNSlider
              text={`${formattedBitCap}%`}
              percentage={formattedBitCap}
              icon="bitcoin"
            >
              <Icon src={getIcon("bitcoin")} />
            </TextNSlider>
            <TextNSlider
              text={`${formattedEthCap}%`}
              percentage={formattedEthCap}
              icon="ethereum"
            >
              <Icon src={getIcon("ethereum")} />
            </TextNSlider>
          </Container>
        );
        break;

      default:
        content = <></>;
        break;
    }
  }

  useEffect(() => {
    let timer;

    switch (infographic.status) {
      case FETCHING_STATE.IDLE:
        dispatch(getCoinInfo());
        break;
      case FETCHING_STATE.ERROR:
        setShowError(true);
        timer = setTimeout(() => {
          setShowError(false);
          dispatch(disappearError());
        }, 5000);
        break;
    }

    return () => clearTimeout(timer);
  }, [infographic.status]);

  useEffect(() => {
    if (infographic.status === FETCHING_STATE.IDLE) {
      dispatch(getCoinInfo());
    }
  }, [currency.type]);

  return <>{content}</>;
};
