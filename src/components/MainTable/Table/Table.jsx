import { useGlobalContext } from "@/contexts";
import { LoadingCircle } from "@/utils";
import { ErrorP } from "@/pages";
import { Heading } from "../Heading/Heading";
import { NewRow } from "../NewRow/NewRow";
import { TableContainer, StyledP, TableWrapper, Flex } from "./Table.styles";

export const Table = ({ table }) => {
  const { isLoading, hasError, errorMsg, coinList } = table;
  const { currency } = useGlobalContext();

  return (
    <>
      {!hasError ? (
        <>
          {!isLoading ? (
            <>
              <StyledP>Your Overview</StyledP>
              <TableContainer>
                <Heading />
                <TableWrapper>
                  {coinList.map((coin) => {
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
          ) : (
            <TableContainer>
              <Flex>
                <LoadingCircle width="5rem" />
              </Flex>
            </TableContainer>
          )}
        </>
      ) : (
        <>
          <ErrorP msg={errorMsg}>{errorMsg}</ErrorP>
        </>
      )}
    </>
  );
};
