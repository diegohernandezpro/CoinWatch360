import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropDownDiv = styled.div`
  width: Calc(31.8rem - 0.3rem);
  height: 10rem;
  border-radius: 0.8rem;
  border: 0.3rem solid ${({ theme }) => theme.nested.active};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  position: absolute;
  top: 3.93rem;
  left: 0;
  overflow-y: auto;
  //   border: 2px solid hotpink;
`;

export const ResultRow = styled.div`
  //   border: 2px solid red;
  position: relative;
  width: Calc(100% - 1rem);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem;

  &:hover {
    background: ${({ theme }) => theme.nested.active};
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;
`;

export const StyledLink = styled(Link)`
  //   border: 2px solid yellow;
  width: 100%;
  //   color: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  //   text-decoration: none;
`;
