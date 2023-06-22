import { CoinFacts } from "../CoinFacts/CoinFacts";
import { CoinPrice } from "../CoinPrice/CoinPrice";
import { CoinDisplay } from "../CoinDisplay/CoinDisplay";
import { CoinDescription } from "../CoinDescription/CoinDescription";
import { CoinConverter } from "../CoinConverter/CoinConverter";
import { CoinFooter } from "../CoinFooter/CoinFooter";
import { Container, Wrapper, StyledP } from "./CoinSummary.styles";
import { formatCoinPrice, formatPercentage } from "@/utils";

export const CoinSummary = ({ coin, currency, currencySymbol }) => {
  currency = currency.toLowerCase();
  const symbol = coin.symbol;
  const description = coin.description.en;
  const coinData = {
    name: coin.name,
    image: coin.image.large,
    link: coin.links.homepage[0],
  };

  const {
    current_price: currentPrice,
    market_cap_change_percentage_24h_in_currency: marketCapPercentage24h,
    ath,
    ath_change_percentage: athPercentageChange,
    ath_date: athDate,
    atl,
    atl_change_percentage: atlPercentageChange,
    atl_date: atlDate,
    market_cap: marketCap,
    fully_diluted_valuation: fullValuation,
    total_volume: totalVolume,
    circulating_supply: circulatingSupply,
    max_supply: maxSupply,
  } = coin.market_data;

  const priceData = {
    price_unFormatted: currentPrice[currency],
    price: formatCoinPrice(currentPrice[currency], currencySymbol),
    coin_percentage: marketCapPercentage24h[currency],
    ath: formatCoinPrice(ath[currency], currencySymbol),
    ath_percentage: athPercentageChange[currency],
    ath_date: athDate[currency].slice(0, 10),
    atl: formatCoinPrice(atl[currency], currencySymbol),
    atl_percentage: atlPercentageChange[currency],
    atl_date: atlDate[currency].slice(0, 10),
  };

  const coinFacts1 = {
    "Market Cap": formatCoinPrice(marketCap[currency], currencySymbol),
    "Fully Diluted Valuation": formatCoinPrice(
      fullValuation[currency],
      currencySymbol
    ),
    "Price Change 24h": formatPercentage(marketCapPercentage24h[currency]),
    "Volume / Market": formatPercentage(
      totalVolume[currency] / marketCap[currency]
    ),
  };

  const coinFacts2 = {
    "Total Volume": formatCoinPrice(totalVolume[currency], currencySymbol),
    "Circulating Supply": formatCoinPrice(circulatingSupply, symbol),
    "Max Supply": coin?.market_data?.max_supply
      ? formatCoinPrice(maxSupply, symbol)
      : "∞",
  };
  const links = {
    blockChain: coin.links?.blockchain_site[0],
    repos: coin.links?.repos_url.github[0],
    forum: coin.links?.official_forum_url[0],
  };

  return (
    <>
      <Container>
        <StyledP>Your Summary:</StyledP>
        {coin && (
          <Wrapper>
            <CoinDisplay coinData={coinData} />
            <CoinPrice priceData={priceData} />
            <CoinFacts
              coinFacts1={coinFacts1}
              coinFacts2={coinFacts2}
              currencySymbol={currencySymbol}
            />
          </Wrapper>
        )}
      </Container>
      <CoinDescription description={description} />
      <CoinConverter
        links={links}
        currency={currency.toUpperCase()}
        cryptoLetters={symbol.toUpperCase()}
        currencySymbol={currencySymbol}
        price={priceData.price_unFormatted}
      />
    </>
  );
};
