import { Container } from "./ChartSummary.styles";

export const ChartSummary = ({ heading, price, currency, date }) => {
  return (
    <Container>
      <div>{heading}</div>
      <h2>{`${currency}${price}`}</h2>
      <div>{date}</div>
    </Container>
  );
};
