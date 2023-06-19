import styled, { keyframes } from "styled-components";
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
  //   border: 2px solid red;

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
  //   border: 2px solid yellow;
  width: 100%;
  color: inherit;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  text-decoration: none;
`;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingWheel = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: ${rotation} 1s linear infinite;
`;
