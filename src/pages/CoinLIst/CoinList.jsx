import { Table } from "@/components";
import { Charts } from "@/components";

import { Container, Wrapper } from "./CoinList.styles";

export const CoinList = () => {
  return (
    <Container>
      <Wrapper>
        <Charts />
        <Table />
      </Wrapper>
    </Container>
  );
};
