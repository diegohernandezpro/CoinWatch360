import { useSelector, useDispatch } from "react-redux";
import { PortfolioTable, AssetPopUp } from "@/components";
import { getPortfolioSelector } from "@/store/Portfolio";
import { tooglePopUpOn } from "@/store/Portfolio/actions";
import { Container, StyledButton } from "./Portfolio.styles";

export const Portfolio = () => {
  const dispatch = useDispatch();
  const portfolio = useSelector(getPortfolioSelector);

  const handleClick = () => {
    dispatch(tooglePopUpOn());
  };

  return (
    <Container>
      <StyledButton onClick={handleClick}>Add Asset</StyledButton>
      {portfolio.popup ? <AssetPopUp /> : <PortfolioTable />}
    </Container>
  );
};
