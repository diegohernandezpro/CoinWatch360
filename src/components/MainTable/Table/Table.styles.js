import styled from "styled-components";

export const StyledP = styled.p`
  width: 100%;
  font-size: 1rem;
  margin-top: 4rem;
`;

export const TableContainer = styled.div`
  margin: 2rem 0rem 4rem;
  height: 40.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  color: inherit;
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.5rem;
  overflow: auto;
  position: relative;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    height: 20rem;
    margin: 0rem;
  }
`;

export const TableWrapper = styled.div`
  overflow: auto;
`;

export const Flex = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
