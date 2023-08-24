import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "@/utils";
import { useGlobalContext } from "@/contexts";
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
  const [duration, setDuration] = useState(30);
  const [option, setOption] = useState("30d");
  const [coinPricePoints, setPricePoints] = useState(null);
  const [coinLabels, setCoinLabels] = useState(null);
  const { currency } = useGlobalContext();
  const { id } = useParams();

  const getDuration = (value) => {
    setOption(value);
    if (value === "Max") {
      setDuration(value.toLowerCase());
    } else if (value === "1y") {
      setDuration(365);
    } else {
      value = value.slice(0, -1);
      setDuration(value);
    }
  };

  const getCoin = async (coinName) => {
    try {
      setIsLoading(true);

      const { data } = await api(`/coins/${coinName}`, `?localization=false`);

      setIsLoading(false);
      setData(data);
    } catch (err) {
      setCoinError(true);
    }
  };

  const getPrice = async (coinName, currencyType, duration) => {
    try {
      setIsLoadingPrice(true);

      const {
        data: { prices },
      } = await api(
        `/coins/${coinName}/market_chart`,
        `?vs_currency=${currencyType}&days=${duration}&interval=daily`
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
    getCoin(id);
    getPrice(id, currency.type, duration);
  }, [id]);

  useEffect(() => {
    getPrice(id, currency.type, duration);
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
                      currency={currency.type}
                      currencySymbol={currency.symbol}
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
