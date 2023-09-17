import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { IconWrapper, Icon } from "@/components";
import { LoadingCircle } from "@/utils";
import { ErrorP } from "@/pages";
import {
  removeAsset,
  getPortfolioSelector,
} from "@/modernStore/features/portfolio/portfolioSlice";
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
} from "./PortfolioTable.styles";

export const PortfolioTable = () => {
  const dispatch = useDispatch();
  const portfolio = useSelector(getPortfolioSelector);
  const [showError, setShowError] = useState(false);

  const handleClick = (key) => dispatch(removeAsset(key));

  useEffect(() => {
    if (portfolio.statusCoin === FETCHING_STATE.ERROR) {
      setShowError(true);

      const timer = setTimeout(() => {
        setShowError(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [portfolio.statusCoin]);

  let content = "";

  if (showError) {
    content = <ErrorP msg={portfolio.errorMsg}>{portfolio.errorMsg}</ErrorP>;
  } else {
    switch (portfolio.statusCoin) {
      case FETCHING_STATE.PENDING:
        content = (
          <Flex>
            <LoadingCircle width="3rem" />
          </Flex>
        );
        break;
      case FETCHING_STATE.SUCCESS:
        content = (
          <>
            {portfolio.assets.length > 0 && <p>Your Statistics:</p>}
            {portfolio.assets.map((coin) => (
              <NewCoinDiv key={coin.key}>
                <CoinDisplayDiv>
                  <CoinDisplay>
                    <IconWrapper>
                      {coin.image && <Icon src={coin.image} width="4rem" />}
                    </IconWrapper>
                    <NameDiv>{coin.id}</NameDiv>
                  </CoinDisplay>
                  <ClosingButton onClick={() => handleClick(coin.key)}>
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
          </>
        );
        break;
      default:
        content = <></>;
    }
  }

  return (
    <>
      <StatisticsDiv>{content}</StatisticsDiv>
    </>
  );
};
