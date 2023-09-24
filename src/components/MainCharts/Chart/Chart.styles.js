import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: visible;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    // border: 2px solid red;
    height: 80%;
  }
`;
