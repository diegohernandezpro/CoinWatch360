import { useSelector } from "react-redux";
import { getMobileSelector } from "@/modernStore";
import {
  TableRow,
  TableName,
  TablePrice,
  TableTimeChange,
  TableSparkline,
  TableNum,
  TableVolume,
} from "../NewRow/NewRow.styles";

export const Heading = () => {
  const { isMobile } = useSelector(getMobileSelector);
  return (
    <TableRow>
      <TableNum>#</TableNum>
      <TableName>Name</TableName>
      <TablePrice>Price</TablePrice>
      <TableTimeChange>1h%</TableTimeChange>
      <TableTimeChange>24h%</TableTimeChange>
      <TableTimeChange>7d%</TableTimeChange>
      {isMobile ? (
        <TableVolume>24h Vol/Mar Cap</TableVolume>
      ) : (
        <TableVolume>24h Volume/Market Cap</TableVolume>
      )}

      {isMobile ? (
        <TableVolume>Cir/Tot Supply</TableVolume>
      ) : (
        <TableVolume>Circulating/Total Supply</TableVolume>
      )}
      <TableSparkline>Last 7d</TableSparkline>
    </TableRow>
  );
};
