import { useState, useEffect } from "react";
import axios from "axios";
import jsonData from "./jsonData.json";
import { CoinSummary } from "@/components";
import { Container, Wrapper } from "./CoinPage.styles";

export const CoinPage = ({ coin, currency, currencySymbol }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [coinData, setData] = useState(null);

  const getCoin = async (coinName) => {
    setIsLoading(true);
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/${coinName}?localization=false`
    );
    setIsLoading(false);
    setData(data);
    // setData(jsonData);
  };

  useEffect(() => {
    getCoin(coin.type);
  }, []);

  useEffect(() => {
    getCoin(coin.type);
  }, [coin]);

  return (
    <Container>
      <Wrapper>
        <CoinSummary
          coin={coinData}
          currency={currency}
          currencySymbol={currencySymbol}
        />
      </Wrapper>
    </Container>
  );
};
