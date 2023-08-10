import { useGlobalContext } from "@/contexts";
import { formatCoinPrice, formatPercentage } from "@/utils";
import {
  Container,
  Wrapper,
  StyledP,
  CoinDisplay,
  CoinDescription,
  CoinPrice,
  CoinDiv,
  CoinLinkDiv,
  IconWrapper,
  CoinName,
  PriceFactsDiv,
  Icon,
  StyledDiv,
  PriceDisplay,
  StyledLink,
} from "./CoinSummary.styles";
import { UpArrowGreen, DownArrowRed } from "@/styles";

export const CoinSummary = ({ coin }) => {
  const {
    currency: { currencyType, currencySymbol },
  } = useGlobalContext();

  currencyType = currencyType?.toLowerCase();

  const link = coin?.links?.homepage?.[0];
  const price = formatCoinPrice(
    coin?.market_data?.current_price?.[currencyType],
    currencySymbol
  );
  const ath = formatCoinPrice(
    coin?.market_data.ath?.[currencyType],
    currencySymbol
  );
  const ath_percentage =
    coin?.market_data?.ath_change_percentage?.[currencyType];
  const ath_date = coin?.market_data?.ath_date?.[currencyType].slice(0, 10);
  const atl = formatCoinPrice(
    coin?.market_data.atl?.[currencyType],
    currencySymbol
  );
  const atl_percentage =
    coin?.market_data?.atl_change_percentage?.[currencyType];
  const atl_date = coin?.market_data?.atl_date?.[currencyType].slice(0, 10);
  const coin_percentage =
    coin?.market_data?.market_cap_change_percentage_24h_in_currency?.[
      currencyType
    ];

  const getPercentage = (percentage) => {
    if (percentage > 0) {
      return (
        <>
          {formatPercentage(percentage)} <UpArrowGreen />
        </>
      );
    }
    return (
      <>
        {formatPercentage(percentage)} <DownArrowRed />
      </>
    );
  };

  return (
    <Container>
      <StyledP>Your Summary:</StyledP>
      {coin && (
        <Wrapper>
          <CoinDisplay>
            <CoinDiv>
              <IconWrapper>
                <Icon src={coin.image.large} width="4rem" />
              </IconWrapper>
              <CoinName>{coin.name}</CoinName>
            </CoinDiv>
            <CoinLinkDiv>
              <Icon src="../icons/link.svg" width="1rem" invert={true} />
              <StyledLink to={link}>{link}</StyledLink>
            </CoinLinkDiv>
          </CoinDisplay>
          <CoinPrice>
            <PriceFactsDiv>
              <PriceDisplay>
                <div>{price}</div>
                <div>Last 24h: {getPercentage(coin_percentage)}</div>
              </PriceDisplay>
              <StyledDiv>
                <span>
                  <span>ATH:</span>
                  <span>{ath}</span>
                  <span>{getPercentage(ath_percentage)}</span>
                  <span>{ath_date}</span>
                </span>
                <span>
                  <span>ATL:</span>
                  <span>{atl}</span>
                  <span>{getPercentage(atl_percentage)}</span>
                  <span>{atl_date}</span>
                </span>
              </StyledDiv>
            </PriceFactsDiv>
          </CoinPrice>
          <CoinDescription></CoinDescription>
        </Wrapper>
      )}
    </Container>
  );
};
