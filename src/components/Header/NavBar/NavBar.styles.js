import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.header`
  color: ${({ theme }) => theme.color};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Navigation = styled.div`
  height: 5rem;
  width: 100%;
  background: ${({ theme }) => theme.nested.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const RightNav = styled.div`
  display: flex;
  margin-right: 1.75rem;
  justify-content: space-between;
  gap: 1.5rem;
`;

export const LeftNav = styled.div`
  display: flex;
  margin-left: 5.625rem;
  align-items: center;
  gap: 1.75rem;
`;

export const StyledNavLink = styled(NavLink)`
  border-radius: 10px;
  height: 3rem;
  width: 7rem;
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

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    height: 2.5rem;
    width: 5rem;
    font-size: 0.875rem;
  }
`;

export const StyledDiv = styled.div`
  width: Calc(100% - 1rem);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5rem solid ${({ theme }) => theme.nested.background};
  border-bottom: 0px solid transparent;
  border-top: 0px solid transparent;
`;

////  MOBILE styles

export const StyledP = styled.p`
  font-size: 2rem;
`;

export const MobileContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.nested.background};
  color: ${({ theme }) => theme.color};
  border: none;
  cursor: pointer;
`;

export const MobileNavHeader = styled.header`
  display: block;
  border: 2px solid yellow;
  background-color: ${({ theme }) => theme.background};
`;

export const MobileNavButton = styled.button`
  display: none;

  display: block;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  border: none;
  // padding: 0.5rem 1rem;
  cursor: pointer;
`;
