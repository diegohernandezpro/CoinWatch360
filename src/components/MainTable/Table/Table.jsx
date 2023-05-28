import React from "react";
import axios from "axios";
// import jsonData from "../testData.json";

import { TableContainer, StyledP, TableWrapper } from "./Table.styles";

import { Heading } from "../Heading/Heading";
import { NewRow } from "../NewRow/NewRow";

export default class Table extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    coinList: [],
  };

  getCoinList = async () => {
    try {
      this.setState({ isLoading: true });

      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
      );
      this.setState({ coinList: data, isLoading: false });

      // this.setState({ isLoading: false, coinList: jsonData });
    } catch (error) {
      this.setState({ isLoading: false, hasError: true });
      console.log("🚀 Table ~ getCoinData= ~ error:", error);
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
            {this.state.coinList.map((coin) => {
              return <NewRow key={coin.id} coin={coin} />;
            })}
          </TableWrapper>
        </TableContainer>
      </>
    );
  }
}
