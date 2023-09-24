import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    overflow: auto;
    height: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: Calc(100% - 1rem);
    padding: 0rem 0.5rem;
  }
`;

export const StyledDiv = styled.div`
  overflow: auto;
  font-size: ${({ font }) => {
    if (font) {
      return "1.8rem";
    }
    return "1.0rem";
  }};
`;
