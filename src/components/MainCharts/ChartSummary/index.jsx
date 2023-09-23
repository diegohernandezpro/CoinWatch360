import { useSelector } from "react-redux";
import { getMobileSelector } from "@/modernStore";
import { Container, StyledDiv } from "./ChartSummary.styles";

export const ChartSummary = ({ heading, price, symbol, date }) => {
  const { isMobile } = useSelector(getMobileSelector);
  const newDate = date.replace(/^(\w{3})\w+/, "$1");

  let content = "";
  if (!isMobile) {
    content = (
      <>
        <StyledDiv>{heading}</StyledDiv>
        <StyledDiv font={true}>{`${symbol}${price}`}</StyledDiv>
        <StyledDiv>{date}</StyledDiv>
      </>
    );
  } else {
    content = (
      <>
        <StyledDiv>{heading}</StyledDiv>
        <StyledDiv>{`${symbol}${price}`}</StyledDiv>
        <StyledDiv>{newDate}</StyledDiv>
      </>
    );
  }

  return <Container>{content}</Container>;
};
