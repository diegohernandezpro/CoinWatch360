import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { IconWrapper, Icon } from "@/components";
import { LoadingCircle } from "@/utils";
import { ErrorP } from "@/pages";
import {
  removeAsset,
  getPortfolioSelector,
  setStatusToIdle,
  setStatusCoinToSuccess,
  addAsset,
} from "@/modernStore/features/portfolio/portfolioSlice";
import { getCurrencySelector } from "@/modernStore/features/currency/currencySlice";
import { FETCHING_STATE } from "@/modernStore/features/fetchingStates";

import { MarketPriceRow, UserCoinPriceRow } from "../NewAssetRow/NewAssetRow";
import {
  StatisticsDiv,
  NewCoinDiv,
  CoinDisplayDiv,
  CoinInfoDiv,
  SytyledP,
  CoinDisplay,
  NameDiv,
  ClosingButton,
  Flex,
  PortfolioTableContainer,
} from "./PortfolioTable.styles";

export const PortfolioTable = () => {
  const dispatch = useDispatch();
  const { assets, statusCoin, errorMsg } = useSelector(getPortfolioSelector);
  const currency = useSelector(getCurrencySelector);
  const [showError, setShowError] = useState(false);
  const [previousAssets, setPreviousAssets] = useState([]);

  const handleClick = (key, coinName) => {
    const isConfirmed = window.confirm(
      `Are you sure you want to remove ${coinName}?`
    );
    if (isConfirmed) {
      dispatch(removeAsset(key));
    }
  };

  const renderAssets = (arr) => {
    return (
      <PortfolioTableContainer>
        <p>Your Statistics:</p>
        {arr.map((coin) => (
          <NewCoinDiv key={coin.key}>
            <CoinDisplayDiv>
              <CoinDisplay>
                <IconWrapper>
                  {coin.image && <Icon src={coin.image} width="4rem" />}
                </IconWrapper>
                <NameDiv>{coin.id}</NameDiv>
              </CoinDisplay>
              <ClosingButton onClick={() => handleClick(coin.key, coin.id)}>
                <FontAwesomeIcon icon={faX} />
              </ClosingButton>
            </CoinDisplayDiv>

            <CoinInfoDiv>
              <SytyledP>Market Price:</SytyledP>
              <MarketPriceRow coin={coin} />

              <SytyledP>Your Coin:</SytyledP>
              <UserCoinPriceRow coin={coin} />
            </CoinInfoDiv>
          </NewCoinDiv>
        ))}
      </PortfolioTableContainer>
    );
  };

  const determineContent = () => {
    if (showError) return <ErrorP msg={errorMsg}>{errorMsg}</ErrorP>;

    if (previousAssets.length > 0) return renderAssets(previousAssets);

    if (statusCoin === FETCHING_STATE.PENDING)
      return (
        <Flex>
          <LoadingCircle width="3rem" />
        </Flex>
      );
  };

  useEffect(() => {
    switch (statusCoin) {
      case FETCHING_STATE.IDLE:
        setPreviousAssets(assets);
        break;
      case FETCHING_STATE.SUCCESS:
        setPreviousAssets(assets);
        dispatch(setStatusToIdle());
        break;
      case FETCHING_STATE.ERROR:
        setShowError(true);
        const timer = setTimeout(() => {
          setShowError(false);
          dispatch(setStatusCoinToSuccess());
        }, 3000);
        return () => clearTimeout(timer);
    }
  }, [statusCoin, assets]);

  return <StatisticsDiv>{determineContent()}</StatisticsDiv>;
};
