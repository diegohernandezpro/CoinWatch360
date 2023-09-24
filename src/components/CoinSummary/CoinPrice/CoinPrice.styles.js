import styled from "styled-components";

export const CoinPriceWrapper = styled.div`
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.6rem;
  width: 25.3rem;
  height: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    font-size: ${({ theme }) => theme.mobile.font};
    width: 16.5rem;
  }
`;

export const PriceFactsDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 0.6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  div:nth-child(1) {
    font-size: 2.2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export const PriceDisplay = styled.div`
  font-size: 2.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  div:nth-child(2) {
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const StyledDiv = styled.div`
  width: 80%;
  height: 8rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  

  span {
    height: 100%
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0.2rem;

    span:nth-child(1){
      font-size: 1.2rem;
      text-decoration: underline;
    }

    span {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;
      gap: 0.5rem;
    }

  }
`;
