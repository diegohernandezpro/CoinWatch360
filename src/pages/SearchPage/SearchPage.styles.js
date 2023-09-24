import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
border 0.5rem solid ${({ theme }) => theme.nested.background};
border-top: none;
background: ${({ theme }) => theme.background};
display: flex;
flex: 1;
justify-content: flex-start;
flex-direction: column;
align-items: flex-start;
gap: 1.5rem;
padding: 1rem 2rem;
color: ${({ theme }) => theme.color};
overflow: auto;
`;

export const StyledP = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  opacity: 0.6;
  color: ${({ theme }) => theme.color};
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  font-size: 1.2rem;
  font-weight: 900;
  color: ${({ theme }) => theme.money.green};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.money.red};
  }
`;
