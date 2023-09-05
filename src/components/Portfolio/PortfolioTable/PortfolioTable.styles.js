import styled from "styled-components";

export const StatisticsDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1rem;
  border: 2px solid orange;
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
  border: 2px solid yellow;
  height: Calc(100% - 2 * 0.6rem);
  width: Calc(12rem - 2rem);
  padding: 0.6rem 1rem;
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.5rem;
`;

export const CoinInfoDiv = styled.div`
  // border: 2px solid green;
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

export const RowDiv = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.5rem;
`;

export const RowItemDiv = styled.div`
  border: 2px solid goldenrod;
  height: 100%;
  width: Calc(100% / 4);
`;
