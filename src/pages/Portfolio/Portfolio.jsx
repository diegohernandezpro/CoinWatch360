import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { PortfolioTable, AssetPopUp } from "@/components";
import {
  getPortfolioSelector,
  // tooglePopUpOn,
} from "@/modernStore/features/portfolio/portfolioSlice";
import { Container, StyledButton } from "./Portfolio.styles";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const portfolio = useSelector(getPortfolioSelector);

  const handleClick = () => {
    // dispatch(tooglePopUpOn());
  };

  useEffect(() => {
    console.log("componentDidMount Portfolio");
  }, []);

  return (
    <Container>
      <StyledButton onClick={handleClick}>Add Asset</StyledButton>
      {portfolio.popup ? <AssetPopUp /> : <PortfolioTable />}
    </Container>
  );
};
