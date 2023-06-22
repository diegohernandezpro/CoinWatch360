import { useState, useEffect } from "react";
import axios from "axios";
import jsonData from "./jsonData.json";
import { CoinSummary, CoinFooter } from "@/components";
import { Container, Wrapper } from "./CoinPage.styles";

export const CoinPage = ({ coin, currency, currencySymbol }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [coinData, setData] = useState(null);
  const [duration, setDuration] = useState(1);
  const [coinPricePoints, setPricePoints] = useState(null);
  const [coinLabels, setCoinLabels] = useState(null);

  const handleDuration = (value) => {
    if (value === "Max") {
      setDuration(value.toLowerCase());
    } else if (value === "1y") {
      setDuration(365);
    } else if (value.toString().length > 1) {
      value = value.slice(0, -1);
      setDuration(value);
    }
  };

  const getCoin = async (coinName) => {
    try {
      setIsLoading(true);
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coinName}?localization=false`
      );
      setIsLoading(false);
      setData(data);
      // setData(jsonData);
    } catch (err) {
      console.error();
    }
  };

  const getPrice = async (coinName, currency, duration) => {
    let getInterval = (duration) => {
      if (duration == 1 || duration == 7) {
        return "hourly";
      }
      return "daily";
    };

    try {
      setIsLoading(true);
      const {
        data: { prices },
      } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=${currency}&days=${duration}&interval=${getInterval(
          duration
        )}`
      );
      setIsLoading(false);
      // console.log("inside getPice() prices:", { prices });
      const pricePoints = prices.map((el) => el[1]);
      const labels = prices.map((el) => {
        return new Date(el[0]).getDate();
      });
      // console.log({ pricePoints, labels });
      setPricePoints(pricePoints);
      setCoinLabels(labels);
    } catch (err) {
      console.error();
    }
  };

  useEffect(() => {
    getCoin(coin.type);
    getPrice(coin.type, currency, duration);
  }, [coin]);

  useEffect(() => {
    getPrice(coin.type, currency, duration);
  }, [duration]);

  return (
    <>
      <Container>
        <Wrapper>
          {coinData && (
            <CoinSummary
              coin={coinData}
              currency={currency}
              currencySymbol={currencySymbol}
            />
          )}
        </Wrapper>
      </Container>
      <CoinFooter
        handleDuration={handleDuration}
        coinPricePoints={coinPricePoints}
        coinLabels={coinLabels}
      />
    </>
  );
};
