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
  MobileContainer,
  CoinWrapper,
  MarketCap,
  Icon,
  Flex,
} from "./Infographic.styles";
import { FETCHING_STATE } from "@/modernStore/features/fetchingStates";
import { getMobileSelector } from "@/modernStore";
import { theme } from "@/styles";

export const Infographic = () => {
  const dispatch = useDispatch();
  const [showError, setShowError] = useState(false);
  const infographic = useSelector(getInfographicSelector);
  const { isMobile } = useSelector(getMobileSelector);

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

  const Wrapper = isMobile ? MobileContainer : Container;

  if (showError) {
    content = <p>{infographic.errorMsg}</p>;
  } else {
    switch (infographic.status) {
      case FETCHING_STATE.PENDING:
        content = (
          <Wrapper>
            <Flex>
              <LoadingCircle width="1rem" />
            </Flex>
          </Wrapper>
        );
        break;
      case FETCHING_STATE.SUCCESS:
        content = (
          <Wrapper>
            <CoinWrapper isMobile={isMobile}>Coins {numCoins}</CoinWrapper>
            <CoinWrapper isMobile={isMobile}>
              Exchange {numExchange}
            </CoinWrapper>
            <MarketCap isMobile={isMobile}>
              <NeutralDot color={"#ffffff"} />
              <span>{formattedMarketCap}</span>
              <UpArrowGreen />
            </MarketCap>
            <TextNSlider
              text={formattedCoinVolume}
              percentage={volumeVsMarketCap}
            >
              {!isMobile && <NeutralDot color={"#2172e5"} />}
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
          </Wrapper>
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

  // useEffect(() => {
  //   if (infographic.status === FETCHING_STATE.SUCCESS) {
  //     dispatch(getCoinInfo());
  //   }
  // }, [currency.type]);

  return <>{content}</>;
};
