import styled from "styled-components";

export const SliderWrapper = styled.div`
  width: 12.5rem;
  height: 0.6rem;
  background: ${({ color }) => color};
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    width: 8rem;
    margin: 0;
    font-size: ${({ theme }) => theme.mobile.font};
  }
`;

export const SliderFill = styled.div`
  width: ${({ percentage }) => 12.5 * (percentage / 100)}rem;
  height: 0.6rem;
  background: ${({ color }) => color};
  border-radius: 12px;
`;

export const StyledText = styled.span`
  color: ${({ color }) => color};
`;

export const ValuesSpan = styled.span`
  width: 12.5rem;
  height: 1.1rem;
  margin-bottom: 0.3rem;
  display: flex;
  justify-content: space-around;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    overflow: auto;
    width: 8rem;
  }
`;

export const Values = styled.div`
  width; 100%;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    overflow: auto;
    gap: 0.4rem;
    font-size: ${({ theme }) => theme.mobile.font};
    font-size: 0.6rem;
  }
`;
