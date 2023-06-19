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
`;

export const TableWrapper = styled.div`
  overflow: auto;
`;
