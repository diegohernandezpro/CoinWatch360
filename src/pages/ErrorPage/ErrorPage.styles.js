import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ErrorP = styled.p`
  margin-top: 2rem;
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
