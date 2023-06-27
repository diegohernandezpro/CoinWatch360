import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropDownUl = styled.ul`
  width: 12rem;
  height: 15rem;
  border-radius: 0.2rem;
  border: 0.3rem solid ${({ theme }) => theme.nested.active};
  background: ${({ theme }) => theme.nested.active};
  color: ${({ theme }) => theme.color};
  position: absolute;
  top: 3.93rem;
  left: 3rem;
  overflow-y: auto;
`;

export const ResultRowLi = styled.li`
  position: relative;
  width: Calc(100% - 1rem);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem;

  &:hover {
    background: ${({ theme }) => theme.nested.background};
    cursor: pointer;
    border: 0.2rem outset ${({ theme }) => theme.nested.active};
    border-radius: 0.5rem;
  }
`;

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 1.5rem;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  color: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  text-decoration: none;
`;

export const Flex = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
s`;
