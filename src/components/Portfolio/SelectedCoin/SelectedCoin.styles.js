import styled from "styled-components";

export const CoinDisplay = styled.div`
  background: ${({ theme }) => theme.nested.background};
  height: 100%;
  width: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const NameDiv = styled.div`
  height: 2rem;
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  background: ${({ theme }) => theme.nested.active};
  color: ${({ theme }) => theme.color};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
