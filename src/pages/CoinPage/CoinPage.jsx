import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrencySelector } from "@/modernStore/features/currency/currencySlice";
import { CoinSummary, CoinFooter } from "@/components";
import { LoadingCircle } from "@/utils";
import {
  getCoinPageSelector,
  getPrice,
  getCoin,
} from "@/modernStore/features/coinPage/coinPageSlice";
import { ErrorAPICallPage } from "../ErrorPage";
import { Container, Wrapper, PageContainer } from "./CoinPage.styles";
import { FETCHING_STATE } from "@/modernStore/features/fetchingStates";

export const CoinPage = () => {
  const dispatch = useDispatch();
  const coinState = useSelector(getCoinPageSelector);
  const currency = useSelector(getCurrencySelector);

  const { id: coinName } = useParams();

  let graphFooter = "";

  switch (coinState.priceStatus) {
    case FETCHING_STATE.PENDING:
      graphFooter = (
        <Container>
          <LoadingCircle width="2rem" />
        </Container>
      );
      break;
    case FETCHING_STATE.SUCCESS:
      graphFooter = (
        <CoinFooter
          coinName={coinName}
          currency={currency.type}
          coinState={coinState}
        />
      );
      break;
    case FETCHING_STATE.ERROR:
      graphFooter = <Container></Container>;
      break;
    default:
      graphFooter = <></>;
      break;
  }

  let content = "";

  switch (coinState.coinStatus) {
    case FETCHING_STATE.PENDING:
      content = (
        <Container>
          <LoadingCircle width="4rem" />
        </Container>
      );
      break;
    case FETCHING_STATE.SUCCESS:
      content = (
        <PageContainer>
          <Container>
            <Wrapper>
              {coinState.data && (
                <CoinSummary
                  coin={coinState.data}
                  currency={currency.type}
                  currencySymbol={currency.symbol}
                />
              )}
            </Wrapper>
          </Container>
          {graphFooter}
        </PageContainer>
      );
      break;
    case FETCHING_STATE.ERROR:
      content = <ErrorAPICallPage />;
      break;
    default:
      content = <></>;
      break;
  }

  useEffect(() => {
    if (coinState.coinStatus === FETCHING_STATE.IDLE) {
      dispatch(getCoin(coinName));
    }
  }, [coinState.coinStatus]);

  useEffect(() => {
    if (coinState.priceStatus === FETCHING_STATE.IDLE) {
      dispatch(
        getPrice({
          coinName,
          currencyType: currency.type,
          option: coinState.option,
        })
      );
    }
  }, [coinState.priceStatus]);

  useEffect(() => {
    dispatch(getCoin(coinName));
    dispatch(
      getPrice({
        coinName,
        currencyType: currency.type,
        option: coinState.option,
      })
    );
  }, [currency.type]);

  return <>{content}</>;
};
