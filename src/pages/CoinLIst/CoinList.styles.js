import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 1920px;
  height: 1848px;

  border-color: ${({ theme }) => theme.nested.background};
  border-width: 10px;
  border-style: solid;
  background: ${({ theme }) => theme.background};
`;
