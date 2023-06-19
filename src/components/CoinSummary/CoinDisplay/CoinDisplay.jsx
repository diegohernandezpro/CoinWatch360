import {
  CoinDisplayWrapper,
  CoinDiv,
  CoinLinkDiv,
  IconWrapper,
  CoinName,
  Icon,
  StyledLink,
} from "./CoinDisplay.styles";

export const CoinDisplay = ({ coinData }) => {
  return (
    <CoinDisplayWrapper>
      <CoinDiv>
        <IconWrapper>
          <Icon src={coinData.image} width="4rem" />
        </IconWrapper>
        <CoinName>{coinData.name}</CoinName>
      </CoinDiv>
      <CoinLinkDiv>
        <Icon src="../icons/link.svg" width="1rem" invert={true} />
        <StyledLink to={coinData.link}>{coinData.link}</StyledLink>
      </CoinLinkDiv>
    </CoinDisplayWrapper>
  );
};
