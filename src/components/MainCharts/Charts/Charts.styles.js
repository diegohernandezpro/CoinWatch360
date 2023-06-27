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

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const ErrorP = styled.p`
  background-color: #ffcccc;
  display: flex;
  justify-content: center;
  color: #ff0000;
  padding: ${({ msg }) => {
    if (msg !== "") {
      return "10px";
    }
    return "0px";
  }};
  border-radius: 4px;
  overflow: scroll;
`;
