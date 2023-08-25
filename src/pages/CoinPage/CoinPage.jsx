import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGlobalContext } from "@/contexts";
import { ErrorAPICallPage } from "../ErrorPage";
import { CoinSummary, CoinFooter } from "@/components";
import { LoadingCircle } from "@/utils";
import { Container, Wrapper, PageContainer } from "./CoinPage.styles";
import { getCoinPageSelector } from "@/store/coinPage";
import { getCoin, getPrice } from "@/store/coinPage/action";

export const CoinPage = () => {
  const dispatch = useDispatch();
  const coinState = useSelector((state) => getCoinPageSelector(state));
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

  useEffect(() => {
    dispatch(getCoin(id));
    dispatch(getPrice(id, currency.type, coinState.duration));
  }, [id]);

  return (
    <>
      {!coinState.hasCoinError ? (
        <>
          {coinState.isLoading ? (
            <Container>
              <LoadingCircle width="4rem" />
            </Container>
          ) : (
            <PageContainer>
              <Container>
                <Wrapper>
                  {coinState.coinData && (
                    <CoinSummary
                      coin={coinState.coinData}
                      currency={currency.type}
                      currencySymbol={currency.symbol}
                    />
                  )}
                </Wrapper>
              </Container>
              {!coinState.hasPriceError ? (
                <>
                  {!coinState.isLoadingPrice ? (
                    <CoinFooter
                      getDuration={getDuration}
                      option={coinState.option}
                      coinPricePoints={coinState.coinPricePoints}
                      coinLabels={coinState.coinLabels}
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
