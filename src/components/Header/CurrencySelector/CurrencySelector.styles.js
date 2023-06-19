import styled from "styled-components";

export const Container = styled.div`
  height: 2.8rem;
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

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover {
    cursor: pointer;
  }
`;

export const StyledSelect = styled.select`
  width: 3.5rem;
  height: 2rem;
  border: none;
  background: transparent;
  color: inherit;
  font-size: 1rem;
  outline: none;
`;
