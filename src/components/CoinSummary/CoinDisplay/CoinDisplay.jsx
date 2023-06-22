import {
  CoinDisplayWrapper,
  CoinDiv,
  CoinLinkDiv,
  IconWrapper,
  CoinName,
  Icon,
  StyledLink,
} from "./CoinDisplay.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

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
        <StyledLink>
          <FontAwesomeIcon icon={faLink} />
        </StyledLink>

        <StyledLink to={coinData.link}>{coinData.link}</StyledLink>
      </CoinLinkDiv>
    </CoinDisplayWrapper>
  );
};
