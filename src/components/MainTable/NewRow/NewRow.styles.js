import styled from "styled-components";
import { theme } from "@/styles";

export const TableRow = styled.div`
  // border: 3px ridge orange;
  flex-shrink: 0;
  display: flex;
  justify-content: space-evenly;
  height: 3.2rem;
  width; 100%;
  margin-bottom: 0.5rem;
`;

export const TableNum = styled.div`
  // border: 1px dashed red;
  width: 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0.5rem;
`;

export const TableName = styled.div`
  // border: 1px dashed red;
  width: 19rem;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

export const TablePrice = styled.div`
  // border: 1px dashed red;
  width: 8.3rem;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

export const TableTimeChange = styled.div`
  // border: 1px dashed red;
  width: 5rem;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

export const TableSparkline = styled.div`
  width: 10rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0.5rem;
  height: 100%;
  // border: 2px dashed orange;
  overflow: hidden; //change later
`;

export const Icon = styled.img`
  width: 1rem;
  height: 1rem;
`;

export const PercentDiv = styled.span`
  margin-left: 0.5rem;
  color: ${({ color }) =>
    color === "green" ? theme.dark.money.green : theme.dark.money.red};
`;
