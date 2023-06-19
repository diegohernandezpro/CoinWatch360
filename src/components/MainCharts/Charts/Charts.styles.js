import styled from "styled-components";

export const ChartsContainer = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  height: 23rem;
  margin-top: 2rem;
`;

export const ChartWrapper = styled.div`
  background: ${({ theme }) => theme.nested.background};
  border-radius: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 2rem;
  overflow: hidden;
`;
