import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  flex-direction: column;
  // border: 2px solid blue;

  @media (max-width: 930px) {
    overflow: auto;
    height: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const StyledDiv = styled.div`
  overflow: autor;
  font-size: ${({ font }) => {
    if (font) {
      return "1.8rem";
    }
    return "1.0rem";
  }};
`;
