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
  const { id: coinName } = useParams();

  useEffect(() => {
    dispatch(getCoin(coinName));
    dispatch(getPrice(coinName, currency.type, coinState.option));
  }, [coinName]);

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
                      coinName={coinName}
                      currency={currency.type}
                      coinState={coinState}
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
