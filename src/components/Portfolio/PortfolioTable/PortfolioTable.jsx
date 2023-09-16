import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { IconWrapper, Icon } from "@/components";
import {
  removeAsset,
  getPortfolioSelector,
} from "@/modernStore/features/portfolio/portfolioSlice";

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
} from "./PortfolioTable.styles";

export const PortfolioTable = () => {
  const dispatch = useDispatch();
  const portfolio = useSelector(getPortfolioSelector);

  const handleClick = (key) => dispatch(removeAsset(key));

  useEffect(() => {
    console.log("componentDidMount PortfolioTable");
  }, []);

  return (
    <>
      <StatisticsDiv>
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
      </StatisticsDiv>
    </>
  );
};
