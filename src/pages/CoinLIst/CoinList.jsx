import React from "react";
import { Table } from "@/components";
import { Charts } from "@/components";

import { Container, Wrapper } from "./CoinList.styles";

export const CoinList = ({ currency, currencySymbol, selectCoin }) => {
  return (
    <Container>
      <Wrapper>
        <Charts currency={currency} currencySymbol={currencySymbol} />
        <Table
          currency={currency}
          currencySymbol={currencySymbol}
          selectCoin={selectCoin}
        />
      </Wrapper>
    </Container>
  );
};
