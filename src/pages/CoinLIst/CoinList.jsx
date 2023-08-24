import { Table } from "@/components";
import { Charts } from "@/components";

import { Container, Wrapper } from "./CoinList.styles";

export const CoinList = ({ charts, table }) => {
  return (
    <Container>
      <Wrapper>
        <Charts charts={charts} />
        <Table table={table} />
      </Wrapper>
    </Container>
  );
};
