import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingCircle = styled.div`
  border: 4px solid ${({ theme }) => theme.nested.active};
  border-top: 4px solid ${({ theme }) => theme.money.green};
  border-radius: 50%;
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  animation: ${spin} 1s linear infinite;
`;
