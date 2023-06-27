import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "@/styles";

export const TableRow = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: space-evenly;
  height: 3.2rem;
  width; 100%;
  margin-bottom: 0.5rem;

`;

export const TableNum = styled.div`
  width: 2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0.5rem;
`;

export const TableName = styled.div`
  width: Calc(19rem - 1.5rem);
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  border-radius: 1rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.nested.active};
    border: 0.2rem outset ${({ theme }) => theme.nested.background};
  }
`;

export const TablePrice = styled.div`
  width: 8.3rem;
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
`;

export const TableTimeChange = styled.div`
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
  color: ${({ color, theme }) =>
    color === "green" ? theme.money.green : theme.money.red};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
