import React from "react";
import { Table } from "@/components";
import { Charts } from "@/components";

import { Container, Wrapper } from "./CoinList.styles";

export default class CoinList extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Charts />
          <Table />
        </Wrapper>
      </Container>
    );
  }
}
