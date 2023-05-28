import React from "react";
import axios from "axios";
import { Table } from "@/components";

import {
  Container,
  Wrapper,
  ChartsContainer,
  ChartWrapper,
} from "./CoinList.styles";

import { Sparkline } from "@/components/MainTable/SparkLine/Sparkline";

export default class CoinList extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <ChartsContainer>
            <ChartWrapper>
              <Sparkline />
            </ChartWrapper>
            <ChartWrapper>chart2</ChartWrapper>
          </ChartsContainer>
          <Table />
        </Wrapper>
      </Container>
    );
  }
}
