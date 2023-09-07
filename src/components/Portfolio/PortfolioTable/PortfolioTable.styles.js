import styled from "styled-components";

export const StatisticsDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
`;

export const NewCoinDiv = styled.div`
  width: 100%;
  height: 14rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CoinDisplayDiv = styled.div`
  height: Calc(100% - 2 * 0.6rem);
  width: Calc(12rem - 2rem);
  padding: 0.6rem 1rem;
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.5rem;
  position: relative;
`;

export const CoinInfoDiv = styled.div`
  height: 100%;
  width: Calc(100% - 13rem);
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SytyledP = styled.p`
  width: 100%;
`;

export const CoinDisplay = styled.div`
  background: ${({ theme }) => theme.nested.background};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  position: relative;
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

export const ClosingButton = styled.button`
  position: absolute;
  bottom: 0.5rem;
  left: 5.5rem;
  background: transparent;
  outline: none;
  border: none;
  font-size: 1rem;
  color: ${({ theme }) => theme.money.green};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.money.red};
  }
`;
