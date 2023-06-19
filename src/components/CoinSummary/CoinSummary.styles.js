import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  //   border: 2px solid goldenrod;
  height: 23.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Wrapper = styled.div`
  width: 100%;
  //   border: 2px solid red;
  height: 19.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledP = styled.p`
  //   border: 2px solid yellow;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-left: 1rem;

  &:hover {
    opacity: 0.5;
  }
`;

export const CoinDisplay = styled.div`
  width: 16.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CoinDiv = styled.div`
  height: 15rem;
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.6rem;
  width: 100%;
  // border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
`;

export const IconWrapper = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 0.6rem;
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  height: ${({ width }) => width};
  width: ${({ width }) => width};
  ${(props) => props.invert && "filter: invert(100%);"}
`;

export const CoinName = styled.div`
  height: 2rem;
  width: 9.2rem;
  border-radius: 0.6rem;
  background: ${({ theme }) => theme.background};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  overflow: auto;
`;

export const CoinLinkDiv = styled.div`
  height: 3.2rem;
  border-radius: 0.6rem;
  background: ${({ theme }) => theme.nested.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoinPrice = styled.div`
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.6rem;
  width: 25.3rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PriceFactsDiv = styled.div`
  width: 100%;
  height: 90%;
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

export const CoinDescription = styled.div`
  //   border: 2px solid green;
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.6rem;
  width: 33.8rem;
  height: 100%;
`;
