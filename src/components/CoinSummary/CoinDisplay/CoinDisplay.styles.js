import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-left: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
  overflow: auto;
  text-align: center;

  &:nth-child(2) {
    margin-right: 1rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
  }
`;

export const CoinDisplayWrapper = styled.div`
  width: 16.5rem;
  height: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 0.5rem;
`;

export const CoinDiv = styled.div`
  height: 15rem;
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.6rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
`;

export const IconWrapper = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 0.6rem;
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
  }
`;

export const Icon = styled.img`
  height: ${({ width }) => width};
  width: ${({ width }) => width};
  ${(props) => props.invert && "filter: invert(100%);"}
`;

export const CoinName = styled.div`
  text-align: center;
  max-width: 15rem;
  border-radius: 0.6rem;
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  overflow: auto;
  padding: 0.5rem 1rem;
`;

export const CoinLinkDiv = styled.div`
  height: 3.2rem;
  border-radius: 0.6rem;
  background: ${({ theme }) => theme.nested.background};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  text-align: center;
`;
