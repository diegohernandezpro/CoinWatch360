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



  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    font-size; ${({ theme }) => theme.mobile.font};
    height: 12rem;
  }
`;

export const NameDiv = styled.div`
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.nested.active};
  color: ${({ theme }) => theme.color};
  text-align: center;
  padding: 0.3rem 0.6rem;
`;
