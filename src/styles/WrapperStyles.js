import styled from "styled-components";

export const Wrapper = styled.div`
  height: ${({ isMobile }) => {
    if (isMobile) {
      return "Calc(100vh - 10vh)";
    }
    return "100vh";
  }};

  position: relative;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;
