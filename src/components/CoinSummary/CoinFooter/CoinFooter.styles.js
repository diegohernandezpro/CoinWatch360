import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
`;

export const LinkWrapper = styled.span`
  width: Calc(100% / 3);
  height: 3.2rem;
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0rem 1rem;
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: auto;
  color: inherit;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }
`;
