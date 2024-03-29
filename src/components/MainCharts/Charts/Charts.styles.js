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

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    padding: 1rem;
    margin: 0;
    padding: 0;
    height: 100%;
  }
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

export const MobileContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 30vh;
  width: 100%;
  overflow: auto;
  position: relative;
`;

export const NextPageButton = styled.button`
  height: 2rem;
  border: none;
  font-size: 1rem;
  width: 3rem;
  border-radius: 25%;
  background: transparent;
  color: ${({ theme }) => theme.color};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.money.green};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  top: 3rem;
  right: 0;
`;

export const ButtonOutline = styled.div`
  border-radius: 5rem;
`;
