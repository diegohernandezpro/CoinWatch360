import React from "react";
import { Table } from "@/components";
import { Charts } from "@/components";

import { Container, Wrapper } from "./CoinList.styles";

export default class CoinList extends React.Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Charts
            currency={this.props.currency}
            currencySymbol={this.props.currencySymbol}
          />
          <Table
            currency={this.props.currency}
            currencySymbol={this.props.currencySymbol}
          />
        </Wrapper>
      </Container>
    );
  }
}
