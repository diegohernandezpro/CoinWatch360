import { UpArrowGreen, DownArrowRed } from "@/styles";
import { formatPrice, formatPercentage } from "@/utils";
import { Slider } from "../Slider/Slider";
import { Sparkline } from "../SparkLine/Sparkline";
import {
  TableName,
  TablePrice,
  TableTimeChange,
  TableSparkline,
  TableRow,
  TableNum,
  PercentDiv,
  Icon,
  StyledLink,
} from "./NewRow.styles";

export const NewRow = ({ coin, currencySymbol, selectCoin }) => {
  const rank = coin.market_cap_rank;
  const name = coin.name;
  const symbol = coin.symbol.toUpperCase();
  const price = formatPrice(coin.current_price, currencySymbol);
  const percentage1h = coin.price_change_percentage_1h_in_currency;
  const percentage24h = coin.price_change_percentage_24h_in_currency;
  const percentage7d = coin.price_change_percentage_7d_in_currency;
  const totalVolume = coin.total_volume;
  const marketCap = coin.market_cap;
  const circulatingSupply = coin.circulating_supply;
  const totalSupply = coin.total_supply;
  const SparklineData = coin.sparkline_in_7d.price;
  const icon = coin.image;

  const getPercentage = (percentage) => {
    if (percentage > 0) {
      return (
        <>
          <UpArrowGreen />
          <PercentDiv color="green">{formatPercentage(percentage)}</PercentDiv>
        </>
      );
    }
    return (
      <>
        <DownArrowRed />
        <PercentDiv color="red">{formatPercentage(percentage)}</PercentDiv>
      </>
    );
  };

  const getTenDataPoints = (pricePoints) =>
    pricePoints.filter((_, i) => i % 28 === 0);

  return (
    <TableRow>
      <TableNum>{rank}</TableNum>
      <StyledLink to={`/coin/${coin.id}`} onClick={() => selectCoin(name)}>
        <TableName>
          <Icon src={icon} />
          {name} ({symbol})
        </TableName>
      </StyledLink>
      <TablePrice>{price}</TablePrice>
      <TableTimeChange>{getPercentage(percentage1h)}</TableTimeChange>
      <TableTimeChange>{getPercentage(percentage24h)}</TableTimeChange>
      <TableTimeChange>{getPercentage(percentage7d)}</TableTimeChange>
      <Slider
        base={marketCap}
        fill={totalVolume}
        rank={rank}
        currencySymbol={currencySymbol}
      />
      <Slider
        base={circulatingSupply}
        fill={totalSupply}
        rank={rank}
        currencySymbol={currencySymbol}
      />
      <TableSparkline>
        <Sparkline pricePoints={getTenDataPoints(SparklineData)} />
      </TableSparkline>
    </TableRow>
  );
};
