import React from "react";
import axios from "axios";

import {
  TableContainer,
  StyledP,
  TableName,
  TablePrice,
  TableTimeChange,
  TableVolume,
  TableSparkline,
} from "./Table.styles";

export default class Table extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
  };

  getCoinData = async () => {
    try {
      this.setState({ isLoading: false });

      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
      );

      console.log(data[0]);
    } catch (error) {
      console.log("🚀 Table ~ getCoinData= ~ error:", error);
    }
  };

  componentDidMount() {
    // this.getCoinData();
  }

  render() {
    return (
      <>
        <StyledP>Your Overview</StyledP>
        <TableContainer>
          <TableName>Name</TableName>
          <TablePrice>Price</TablePrice>
          <TableTimeChange>1h%</TableTimeChange>
          <TableTimeChange>24h%</TableTimeChange>
          <TableTimeChange>7h%</TableTimeChange>
          <TableVolume>24h Volume/Market Cap</TableVolume>
          <TableVolume>Circulating/Total Supply</TableVolume>
          <TableSparkline>Last 7d</TableSparkline>
        </TableContainer>
      </>
    );
  }
}
