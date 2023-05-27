import {
  TableName,
  TablePrice,
  TableTimeChange,
  TableVolume,
  TableSparkline,
  TableRow,
  TableNum,
} from "../Table/Table.styles";

export const Heading = () => {
  return (
    <TableRow>
      <TableNum>#</TableNum>
      <TableName>Name</TableName>
      <TablePrice>Price</TablePrice>
      <TableTimeChange>1h%</TableTimeChange>
      <TableTimeChange>24h%</TableTimeChange>
      <TableTimeChange>7d%</TableTimeChange>
      <TableVolume>24h Volume/Market Cap</TableVolume>
      <TableVolume>Circulating/Total Supply</TableVolume>
      <TableSparkline>Last 7d</TableSparkline>
    </TableRow>
  );
};
