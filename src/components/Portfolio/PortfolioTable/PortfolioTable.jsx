import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { api } from "@/utils";
import { getPortfolioSelector } from "@/store/Portfolio";

import {
  StatisticsDiv,
  NewCoinDiv,
  CoinDisplayDiv,
  CoinInfoDiv,
  SytyledP,
  RowDiv,
  RowItemDiv,
} from "./PortfolioTable.styles";

export const PortfolioTable = ({ asset }) => {
  const [portfolio, setPortfolio] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  return (
    <>
      <StatisticsDiv>
        Your Statistics:
        <NewCoinDiv>
          <CoinDisplayDiv>Bitcoin</CoinDisplayDiv>
          <CoinInfoDiv>
            <SytyledP>Market Price:</SytyledP>
            <RowDiv>
              <RowItemDiv></RowItemDiv>
              <RowItemDiv></RowItemDiv>
              <RowItemDiv></RowItemDiv>
              <RowItemDiv></RowItemDiv>
            </RowDiv>
            <SytyledP>Your Coin:</SytyledP>
            <RowDiv>
              <RowItemDiv></RowItemDiv>
              <RowItemDiv></RowItemDiv>
              <RowItemDiv></RowItemDiv>
              <RowItemDiv></RowItemDiv>
            </RowDiv>
          </CoinInfoDiv>
        </NewCoinDiv>
      </StatisticsDiv>
    </>
  );
};
