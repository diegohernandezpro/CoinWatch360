import React from "react";
import axios from "axios";

import {
  Container,
  Wrapper,
  ChartsContainer,
  ChartWrapper,
  TableContainer,
  StyledP,
  TableName,
  TablePrice,
  TableTimeChange,
  TableVolume,
  TableSparkline,
} from "./CoinList.styles";

export default class CoinList extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <ChartsContainer>
            <ChartWrapper>chart1</ChartWrapper>
            <ChartWrapper>chart2</ChartWrapper>
          </ChartsContainer>
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
        </Wrapper>
      </Container>
    );
  }
}
