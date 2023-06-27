import { formatPercentage } from "@/utils";
import { UpArrowGreen, DownArrowRed } from "@/styles";

import {
  PriceFactsDiv,
  PriceDisplay,
  StyledDiv,
  CoinPriceWrapper,
} from "./CoinPrice.styles";

export const CoinPrice = ({ priceData }) => {
  const getPercentage = (percentage) => {
    if (percentage > 0) {
      return (
        <>
          {formatPercentage(percentage)} <UpArrowGreen />
        </>
      );
    }
    return (
      <>
        {formatPercentage(percentage)} <DownArrowRed />
      </>
    );
  };

  return (
    <CoinPriceWrapper>
      <PriceFactsDiv>
        <PriceDisplay>
          <div>{priceData.price}</div>
          <div>Last 24h: {getPercentage(priceData.coin_percentage)}</div>
        </PriceDisplay>
        <StyledDiv>
          <span>
            <span>ATH:</span>
            <span>{priceData.ath}</span>
            <span>{getPercentage(priceData.ath_percentage)}</span>
            <span>{priceData.ath_date}</span>
          </span>
          <span>
            <span>ATL:</span>
            <span>{priceData.atl}</span>
            <span>{getPercentage(priceData.atl_percentage)}</span>
            <span>{priceData.atl_date}</span>
          </span>
        </StyledDiv>
      </PriceFactsDiv>
    </CoinPriceWrapper>
  );
};
