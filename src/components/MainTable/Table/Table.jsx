import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "@/contexts";
import { LoadingCircle } from "@/utils";
import { ErrorP } from "@/pages";
import { Heading } from "../Heading/Heading";
import { NewRow } from "../NewRow/NewRow";
import { TableContainer, StyledP, TableWrapper, Flex } from "./Table.styles";
import jsonData from "../testData.json";

export const Table = () => {
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [coinList, setCoinList] = useState([]);
  const {
    currency: { currencyType, currencySymbol },
  } = useContext(GlobalContext);

  const getCoinList = async (currencyType) => {
    try {
      setLoading(true);
      // const { data } = await axios.get(
      //   `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currencyType}&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      // );
      const data = jsonData;
      setLoading(false);
      setCoinList(data);
    } catch (error) {
      setLoading(false);
      setError(true);
      setErrorMsg(
        "Error Retrieving Table Data. Currently Out of API Calls. Please Try Again in a Minute."
      );
      setTimeout(() => {
        setErrorMsg("");
      }, 9000);
    }
  };

  useEffect(() => {
    getCoinList(currencyType);
  }, []);

  useEffect(() => {
    getCoinList(currencyType);
  }, [currencyType]);

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
                        currencySymbol={currencySymbol}
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
