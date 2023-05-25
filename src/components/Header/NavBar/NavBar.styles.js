import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.header`
  color: ${({ theme }) => theme.color};
  width: 100%;
  height: 9.4rem;
  display: flex;
  flex-direction: column;
  border-color: orange;
  border-width: 1px;
  border-style: dashed;
`;

export const Navigation = styled.div`
  height: 6rem;
  width: 100%;
  background: ${({ theme }) => theme.nested.background};
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: 1px solid red;
`;

export const RightNav = styled.div`
  display: flex;
  margin-right: 1.75rem;
  justify-content: space-between;
  gap: 1.5rem;
  border: 1px solid blue; /////////////
`;

export const LeftNav = styled.div`
  display: flex;
  margin-left: 5.625rem;
  align-items: center;
  gap: 1.75rem;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 0.625rem 2.5rem;
  border-radius: 10px;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: inherit;
  text-decoration: none;
  background-color: transparent;
  color: inherit;

  &.active {
    background-color: ${({ theme }) => theme.nested.active};
  }
`;
