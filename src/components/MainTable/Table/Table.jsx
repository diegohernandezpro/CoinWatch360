import { useEffect } from "react";
import { LoadingCircle } from "@/utils";
import { useDispatch, useSelector } from "react-redux";
import { ErrorP } from "@/pages";
import { Heading } from "../Heading/Heading";
import { NewRow } from "../NewRow/NewRow";
import { TableContainer, StyledP, TableWrapper, Flex } from "./Table.styles";
import { getCurrencySelector } from "@/modernStore/features/currency/currencySlice";
import {
  getTableDataSelector,
  getCoinList,
} from "@/modernStore/features/table/tableSlice";
import { getMobileSelector } from "@/modernStore";

import { FETCHING_STATE } from "@/modernStore/features/fetchingStates";

export const Table = () => {
  const dispatch = useDispatch();
  const currency = useSelector(getCurrencySelector);
  const { isMobile } = useSelector(getMobileSelector);
  const { status, errorMsg, data } = useSelector(getTableDataSelector);
  let content = "";
  let tableContent = "";

  if (!isMobile) {
    tableContent = (
      <>
        <StyledP>Your Overview</StyledP>
        <TableContainer>
          <TableWrapper>
            <Heading />
            {data.map((coin) => {
              return (
                <NewRow
                  key={coin.id}
                  coin={coin}
                  currencySymbol={currency.symbol}
                />
              );
            })}
          </TableWrapper>
        </TableContainer>
      </>
    );
  } else {
    tableContent = (
      <TableContainer>
        <TableWrapper>
          <Heading />
          {data.map((coin) => {
            return (
              <NewRow
                key={coin.id}
                coin={coin}
                currencySymbol={currency.symbol}
              />
            );
          })}
        </TableWrapper>
      </TableContainer>
    );
  }

  switch (status) {
    case FETCHING_STATE.PENDING:
      content = (
        <TableContainer>
          <Flex>
            <LoadingCircle width="5rem" />
          </Flex>
        </TableContainer>
      );
      break;
    case FETCHING_STATE.SUCCESS:
      content = tableContent;
      break;
    case FETCHING_STATE.ERROR:
      content = <ErrorP msg={errorMsg}>{errorMsg}</ErrorP>;
      break;
    default:
      content = <></>;
      break;
  }

  useEffect(() => {
    if (status === FETCHING_STATE.IDLE) {
      dispatch(getCoinList());
    }
  }, [status, dispatch]);

  useEffect(() => {
    dispatch(getCoinList());
  }, [currency.type]);

  return <>{content}</>;
};
