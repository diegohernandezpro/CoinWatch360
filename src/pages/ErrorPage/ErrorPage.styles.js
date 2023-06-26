import styled from "styled-components";

export const Container = styled.div`
  color: ${({ theme }) => theme.color};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
