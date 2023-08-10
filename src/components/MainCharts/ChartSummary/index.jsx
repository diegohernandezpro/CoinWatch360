import { Container } from "./ChartSummary.styles";

export const ChartSummary = ({ heading, price, symbol, date }) => {
  return (
    <Container>
      <div>{heading}</div>
      <h2>{`${symbol}${price}`}</h2>
      <div>{date}</div>
    </Container>
  );
};
