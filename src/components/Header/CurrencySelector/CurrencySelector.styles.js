import styled from "styled-components";

export const Container = styled.div`
  height: 3rem;
  width: 8.4rem;
  font-size: 1rem;
  border-radius: 12px;
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.nested.active};
  color: ${({ theme }) => theme.color};
`;

export const Icon = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.money.background};
  color: ${({ theme }) => theme.money.green};
  font-size: 1rem;
`;

export const StyledSelect = styled.select`
  width: 3.5rem;
  height: 2rem;
  border: none;
  background: transparent;
  color: inherit;
  font-size: 1rem;
  outline: none;
  text-align: center;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    background: ${({ theme }) => theme.chart.color};
    padding: 0.5rem;
    color: ${({ theme }) => theme.color};
    border-radius: 6rem;
    width: 100%;
    height: 100%;
  }
`;
