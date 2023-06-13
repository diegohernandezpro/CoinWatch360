import { useState, useEffect } from "react";
import axios from "axios";
import jsonData from "../testData.json";
import { ErrorPage } from "@/pages";
import { Heading } from "../Heading/Heading";
import { NewRow } from "../NewRow/NewRow";
import { TableContainer, StyledP, TableWrapper } from "./Table.styles";

export const Table = () => {
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  const [coinList, setCoinList] = useState([]);

  const getCoinList = async () => {
    try {
      setLoading(true);
      // const { data } = await axios.get(
      //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
      // );
      const data = jsonData;
      setLoading(false);
      setCoinList(data); //change to data later.
    } catch (error) {
      setLoading(false);
      setError(true);
      <ErrorPage />;
    }
  };

  useEffect(() => {
    getCoinList();
  }, []);

  return (
    <>
      <StyledP>Your Overview</StyledP>
      <TableContainer>
        <Heading />
        <TableWrapper>
          {hasError && <ErrorPage />}
          {coinList.map((coin) => {
            return <NewRow key={coin.id} coin={coin} />;
          })}
        </TableWrapper>
      </TableContainer>
    </>
  );
};
