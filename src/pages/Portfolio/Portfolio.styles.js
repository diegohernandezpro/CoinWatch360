import styled from "styled-components";

export const Container = styled.div`
  border 0.5rem solid ${({ theme }) => theme.nested.background};
  border-top: none;
  background: ${({ theme }) => theme.background};
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.color};
`;

export const Wrapper = styled.div`
  border: 4px solid lightgreen;
  width: 100%;
  height: 100%;
`;
