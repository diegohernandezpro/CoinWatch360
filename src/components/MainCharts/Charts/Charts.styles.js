import styled from "styled-components";

export const ChartWrapper = styled.div`
  background: ${({ theme }) => theme.nested.background};
  border-radius: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 2px dashed lightblue;
  padding: 0.5rem;
`;

export const ChartsContainer = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  height: 21rem;
  margin-top: 2rem;
  // border: 2px dashed pink;
`;
