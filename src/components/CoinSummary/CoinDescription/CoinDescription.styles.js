import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 23.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 3rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 19.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.6rem;
  padding-top: 1rem;
  border: 2px solid yellow;
`;

export const StyledDiv = styled.div`
  margin: 2rem 0;
  width: 95%;
  overflow: auto;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.infographic.base};
  text-decoration: none;
`;
