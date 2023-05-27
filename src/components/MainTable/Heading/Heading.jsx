import {
  TableName,
  TablePrice,
  TableTimeChange,
  TableVolume,
  TableSparkline,
  TableNum,
} from "./Heading.styles";

import { HeadingTableRow } from "./Heading.styles";

export const Heading = () => {
  return (
    <HeadingTableRow>
      <TableNum>#</TableNum>
      <TableName>Name</TableName>
      <TablePrice>Price</TablePrice>
      <TableTimeChange>1h%</TableTimeChange>
      <TableTimeChange>24h%</TableTimeChange>
      <TableTimeChange>7d%</TableTimeChange>
      <TableVolume>24h Volume/Market Cap</TableVolume>
      <TableVolume>Circulating/Total Supply</TableVolume>
      <TableSparkline>Last 7d</TableSparkline>
    </HeadingTableRow>
  );
};
