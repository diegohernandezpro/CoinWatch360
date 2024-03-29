import { useSelector, useDispatch } from "react-redux";
import { PortfolioTable, AssetPopUp } from "@/components";
import {
  getPortfolioSelector,
  togglePopUpOn,
} from "@/modernStore/features/portfolio/portfolioSlice";
import { Container } from "./Portfolio.styles";
import { StyledButton } from "@/components/Portfolio/AssetPopUp/AssetPopUp.styles";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const portfolio = useSelector(getPortfolioSelector);

  const handleClick = () => dispatch(togglePopUpOn());

  return (
    <Container>
      <StyledButton onClick={handleClick}>Add Asset</StyledButton>
      {portfolio.popup ? <AssetPopUp /> : <PortfolioTable />}
    </Container>
  );
};
