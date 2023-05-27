import styled from "styled-components";

export const TableVolume = styled.div`
  display: flex;
  flex-direction: column;
  width: 14rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 0.5rem;
`;

export const SliderWrapper = styled.div`
  width: 12.5rem;
  height: 0.6rem;
  background: #2172e5;
  border-radius: 12px;
  overflow: hidden;
`;

export const SliderFill = styled.div`
  width: ${({ percentage }) => 12.5 * (percentage / 100)}rem;
  height: 0.6rem;
  background: #ffffff;
  border-radius: 12px;
`;

export const ValuesSpan = styled.span`
  width: 12.5rem;
  height: 1.1rem;

  line-height: 0.7rem;
  display: flex;
  justify-content: space-between;
  // border: 2px dashed yellow;
`;

export const Values = styled.div`
  width; 100%;

  display: flex;
  justify-content: center;
  gap: 0.4rem;
  // border: 2px solid lightgreen;
`;
