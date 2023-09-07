import { useDispatch, useSelector } from "react-redux";
import { getPortfolioSelector } from "@/store/Portfolio";
import { IconWrapper, Icon } from "@/components";
import { MarketPriceRow, UserCoinPriceRow } from "../NewAssetRow/NewAssetRow";
import {
  StatisticsDiv,
  NewCoinDiv,
  CoinDisplayDiv,
  CoinInfoDiv,
  SytyledP,
  CoinDisplay,
  NameDiv,
} from "./PortfolioTable.styles";

export const PortfolioTable = () => {
  const dispatch = useDispatch();
  const { assets } = useSelector(getPortfolioSelector);

  return (
    <>
      <StatisticsDiv>
        {assets.length > 0 && <p>Your Statistics:</p>}
        {assets.map((coin) => (
          <NewCoinDiv key={coin.key}>
            <CoinDisplayDiv>
              <CoinDisplay>
                <IconWrapper>
                  {coin.image && <Icon src={coin.image} width="4rem" />}
                </IconWrapper>
                <NameDiv>{coin.id}</NameDiv>
              </CoinDisplay>
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
