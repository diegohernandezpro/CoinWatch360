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
  width: 19rem;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  // border: 1px dashed red;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background: ${theme.dark.nested.active};
    border: 0.2rem outset ${theme.dark.nested.background};
  }
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
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;
`;

export const PercentDiv = styled.span`
  margin-left: 0.5rem;
  color: ${({ color }) =>
    color === "green" ? theme.dark.money.green : theme.dark.money.red};
`;
