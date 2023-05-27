import React from "react";
import axios from "axios";
import styled from "styled-components";

import {
  TableContainer,
  StyledP,
  TableName,
  TablePrice,
  TableTimeChange,
  TableVolume,
  TableSparkline,
  TableRow,
  TableNum,
} from "./Table.styles";

import { Heading } from "../Heading";
import { UpArrowGreen, DownArrowRed } from "@/styles";
import { NewRow } from "../NewRow";

export default class Table extends React.Component {
  state = {
    isLoading: false,
    hasError: false,
    coinList: [],
  };

  truncateNumber = (number) => {
    const truncatedNumber = parseFloat(number).toFixed(7);
    return Number(truncatedNumber);
  };

  getCoinList = async () => {
    try {
      this.setState({ isLoading: false });

      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
      );

      this.setState({ coinList: data, isLoading: false });
    } catch (error) {
      this.setState({ isLoading: false, hasError: true });
      console.log("🚀 Table ~ getCoinData= ~ error:", error);
    }
  };

  componentDidMount() {
    // this.getCoinList();
  }

  render() {
    return (
      <>
        <StyledP>Your Overview</StyledP>
        <TableContainer>
          <Heading />
          {this.state.coinList.map((coin, index) => {
            return (
              <TableRow>
                <TableNum>{coin.market_cap_rank}</TableNum>
                <TableName>{coin.name}</TableName>
                <TablePrice>{coin.current_price}</TablePrice>
                <TableTimeChange>price</TableTimeChange>
                <TableTimeChange>price</TableTimeChange>
                <TableTimeChange>price</TableTimeChange>
                <TableVolume>Sliding bar</TableVolume>
                <TableVolume>Sliding bar</TableVolume>
                <TableSparkline>Sparkline</TableSparkline>
              </TableRow>
            );
          })}
        </TableContainer>
      </>
    );
  }
}
