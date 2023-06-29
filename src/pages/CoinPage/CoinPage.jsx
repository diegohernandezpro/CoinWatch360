import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "@/contexts";
import { ErrorAPICallPage } from "../ErrorPage";
import { CoinSummary, CoinFooter } from "@/components";
import { LoadingCircle } from "@/utils";
import { Container, Wrapper, PageContainer } from "./CoinPage.styles";

export const CoinPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPrice, setIsLoadingPrice] = useState(false);
  const [hasCoinError, setCoinError] = useState(false);
  const [hasPriceError, setPriceError] = useState(false);
  const [coinData, setData] = useState(null);
  const [duration, setDuration] = useState(1);
  const [option, setOption] = useState("1d");
  const [coinPricePoints, setPricePoints] = useState(null);
  const [coinLabels, setCoinLabels] = useState(null);
  const {
    coin,
    currency: { type, currencySymbol },
  } = useContext(GlobalContext);

  const getDuration = (value) => {
    setOption(value);
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
    } catch (err) {
      setCoinError(true);
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
      setIsLoadingPrice(true);
      const {
        data: { prices },
      } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=${currency}&days=${duration}&interval=${getInterval(
          duration
        )}`
      );
      setIsLoadingPrice(false);

      const pricePoints = prices.map((el) => el[1]);
      const labels = prices.map((el) => {
        return new Date(el[0]).getDate();
      });
      setPricePoints(pricePoints);
      setCoinLabels(labels);
    } catch (err) {
      setPriceError(true);
    }
  };

  useEffect(() => {
    getCoin(coin.type);
    getPrice(coin.type, type, duration);
  }, [coin]);

  useEffect(() => {
    getPrice(coin.type, type, duration);
  }, [duration]);

  return (
    <>
      {!hasCoinError ? (
        <>
          {isLoading ? (
            <Container>
              <LoadingCircle width="4rem" />
            </Container>
          ) : (
            <PageContainer>
              <Container>
                <Wrapper>
                  {coinData && (
                    <CoinSummary
                      coin={coinData}
                      currency={type}
                      currencySymbol={currencySymbol}
                    />
                  )}
                </Wrapper>
              </Container>
              {!hasPriceError ? (
                <>
                  {!isLoadingPrice ? (
                    <CoinFooter
                      getDuration={getDuration}
                      option={option}
                      coinPricePoints={coinPricePoints}
                      coinLabels={coinLabels}
                    />
                  ) : (
                    <Container>
                      <LoadingCircle width="2rem" />
                    </Container>
                  )}
                </>
              ) : (
                <Container></Container>
              )}
            </PageContainer>
          )}
        </>
      ) : (
        <ErrorAPICallPage />
      )}
    </>
  );
};
