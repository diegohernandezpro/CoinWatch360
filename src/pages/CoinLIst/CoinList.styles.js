import styled from "styled-components";

export const Container = styled.div`
  // border 10px solid ${({ theme }) => theme.nested.background};
  background: ${({ theme }) => theme.background};
  flex: 1;
`;
