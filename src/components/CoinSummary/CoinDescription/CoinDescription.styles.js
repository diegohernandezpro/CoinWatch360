import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 3rem;
  gap: 2.5rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.6rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const StyledDiv = styled.div`
  margin: 2rem 0 1rem;
  width: 95%;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.infographic.base};
  text-decoration: none;
  margin: none;
  padding: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledButton = styled.button`
  border: none;
  outline: none;
  background: none;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.infographic.base};
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
