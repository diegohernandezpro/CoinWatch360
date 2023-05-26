import styled from "styled-components";

export const Container = styled.div`
  width: 56.6rem;
  height: 3.4rem;
  background: ${({ theme }) => theme.nested.background};
  border-radius: 12px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const CoinWrapper = styled.div`
  width: 7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MarketCap = styled.div`
  display: flex;
  width: 7rem;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Icon = styled.img`
  margin-left: 1.25rem;
  height: 1rem;
  width: 1rem;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const SliderWrapper = styled.div`
  width: 3.4rem;
  height: 0.8rem;
  background: #2172e5;
  border-radius: 12px;
  overflow: hidden;
`;

export const Slider = styled.div`
  width: ${({ percentage }) => 3.4 * (percentage / 100)}rem;
  height: 0.8rem;
  background: #ffffff;
  border-radius: 12px;
`;
