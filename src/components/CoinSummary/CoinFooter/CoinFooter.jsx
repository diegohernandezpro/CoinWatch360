import {
  Container,
  LinkWrapper,
  StyledLink,
  IconWrapper,
} from "./CoinFooter.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCoins } from "@fortawesome/free-solid-svg-icons";

export const CoinFooter = ({ links }) => {
  return (
    <Container>
      <LinkWrapper>
        <IconWrapper>
          <FontAwesomeIcon icon={faLink} />
        </IconWrapper>
        <StyledLink to={links.blockChain}>{links.blockChain}</StyledLink>
        <IconWrapper>
          <FontAwesomeIcon icon={faCoins} />
        </IconWrapper>
      </LinkWrapper>
      <LinkWrapper>
        <IconWrapper>
          <FontAwesomeIcon icon={faLink} />
        </IconWrapper>
        <StyledLink to={links.forum}>{links.forum}</StyledLink>
        <IconWrapper>
          <FontAwesomeIcon icon={faCoins} />
        </IconWrapper>
      </LinkWrapper>
      <LinkWrapper>
        <IconWrapper>
          <FontAwesomeIcon icon={faLink} />
        </IconWrapper>
        <StyledLink to={links.repos}>{links.repos}</StyledLink>
        <IconWrapper>
          <FontAwesomeIcon icon={faCoins} />
        </IconWrapper>
      </LinkWrapper>
    </Container>
  );
};
