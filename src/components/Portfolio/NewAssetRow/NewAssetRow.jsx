import { TextNSlider } from "@/components";
import { UpArrowGreen, DownArrowRed } from "@/styles";
import { RowDiv, RowItemDiv, Item } from "./NewAssetRow.styles";

export const MarketPriceRow = ({ coin }) => {
  return (
    <RowDiv>
      <RowItemDiv>
        Current Price:
        <Item value={coin.currentPrice}>{coin.formattedCurrentPrice}</Item>
      </RowItemDiv>

      <RowItemDiv>
        Price Change 24h:
        <Item value={coin.priceChange24h}>{coin.formattedPriceChange24h}</Item>
        {coin.priceChange24h > 0 ? <UpArrowGreen /> : <DownArrowRed />}
      </RowItemDiv>

      <RowItemDiv>
        Market Cap:
        <Item value={coin.marketCap}>{coin.formattedMarketCap}</Item>
        {coin.marketCap > 0 ? <UpArrowGreen /> : <DownArrowRed />}
      </RowItemDiv>

      <RowItemDiv value={coin.circulatingVsTotalSupply}>
        Circ Supply/Max Supply:
        <Item value={coin.circulatingVsTotalSupply}>
          <TextNSlider
            text={coin.formattedCirVsTotPer}
            percentage={coin.circulatingVsTotalSupply}
          />
        </Item>
      </RowItemDiv>
    </RowDiv>
  );
};

export const UserCoinPriceRow = ({ coin }) => {
  return (
    <RowDiv>
      <RowItemDiv>
        Coin Amount: <Item value={coin.amount}>{coin.amount}</Item>
      </RowItemDiv>
      <RowItemDiv value={coin.amountValue}>
        Amount Value:
        <Item value={coin.amountValue}>{coin.formattedAmountValue}</Item>
      </RowItemDiv>
      <RowItemDiv>
        Price change since purchase:
        <Item value={coin.priceChange}>{coin.formattedPriceChange}</Item>
        {coin.priceChange > 0 ? <UpArrowGreen /> : <DownArrowRed />}
      </RowItemDiv>
      <RowItemDiv>
        Purchased Date:
        <Item value={1}>{coin.formattedDateStandard}</Item>
      </RowItemDiv>
    </RowDiv>
  );
};
