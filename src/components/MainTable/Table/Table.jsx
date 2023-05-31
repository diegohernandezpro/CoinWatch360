import React from "react";
import axios from "axios";
import jsonData from "../testData.json";
import { ErrorPage } from "@/pages";
import { Heading } from "../Heading/Heading";
import { NewRow } from "../NewRow/NewRow";
import { TableContainer, StyledP, TableWrapper } from "./Table.styles";

export default class Table extends React.Component {
  //change to functional component
  state = {
    isLoading: false,
    hasError: false,
    coinList: [],
    sparklineData: null,
  };

  getCoinList = async () => {
    try {
      this.setState({ isLoading: true });

      // const { data } = await axios.get(
      //   "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
      // );
      // this.setState({ coinList: data, isLoading: false });

      //NOTES
      // could add context to TableWrapper - in order to pass down the sparkLine info and so forth

      this.setState({ isLoading: false, coinList: jsonData });
    } catch (error) {
      this.setState({ isLoading: false, hasError: true });
      console.log("🚀 Table ~ getCoinData= ~ error:", error);
      <ErrorPage />;
    }
  };

  componentDidMount() {
    this.getCoinList();
  }

  render() {
    return (
      <>
        <StyledP>Your Overview</StyledP>
        <TableContainer>
          <Heading />
          <TableWrapper>
            {this.state.hasError && <ErrorPage />}
            {this.state.coinList.map((coin) => {
              return <NewRow key={coin.id} coin={coin} />;
            })}
          </TableWrapper>
        </TableContainer>
      </>
    );
  }
}
