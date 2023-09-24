import styled from "styled-components";
import { Link } from "react-router-dom";

export const TableRow = styled.div`
  height: 3.2rem;
  max-width: 100wh;
  min-width: ${({ theme }) => theme.mobile.width};
  margin-bottom: 0.5rem;

  display: flex;
  justify-content: space-evenly;

  &:nth-child(1) {
    position: sticky;
    top: 0;
    background: ${({ theme }) => theme.nested.background};
    z-index: 1000;
  }
`;

export const TableNum = styled.div`
  max-width: 1.5rem;
  min-width: 1rem;

  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0.5rem;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    width: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: ${({ theme }) => theme.mobile.font};
  }
`;

export const TableName = styled.div`
  width: 16rem;
  height: 100%;

  padding-left: 0.5rem;
  border-radius: 1rem;
  cursor: pointer;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.nested.active};
    border: 0.2rem outset ${({ theme }) => theme.nested.background};
  }

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    width: 12rem;
    overflow: auto;
    font-size: ${({ theme }) => theme.mobile.font};
  }
`;

export const TablePrice = styled.div`
  width: 8rem;
  height: 100%;
  padding-left: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    font-size: ${({ theme }) => theme.mobile.font};
    width: 6rem;
  }
`;

export const TableTimeChange = styled.div`
  width: 5rem;
  height: 100%;
  padding-left: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    overflow: auto;
    font-size: ${({ theme }) => theme.mobile.font};
    width: 4rem;
  }
`;

export const TableSparkline = styled.div`
  width: 10rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    width: 8rem;
    font-size: ${({ theme }) => theme.mobile.font};
  }
`;

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
  }
`;

export const PercentDiv = styled.span`
  margin-left: 0.5rem;
  color: ${({ color, theme }) =>
    color === "green" ? theme.money.green : theme.money.red};
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const TableVolume = styled.div`
  display: flex;
  flex-direction: column;
  width: 12.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    width: 8rem;
    padding: 0;
    font-size: ${({ theme }) => theme.mobile.font};
  }
`;

//mobible styles

export const NameDivWrappper = styled.div`
  display: flex;
  flex-direction: column;
`;
