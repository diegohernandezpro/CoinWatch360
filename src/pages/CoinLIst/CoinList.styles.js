import styled from "styled-components";

export const Container = styled.div`
  border 0.5rem solid ${({ theme }) => theme.nested.background};
  border-top: none;
  background: ${({ theme }) => theme.background};
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.color};

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    padding: 1rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  // border: 2px solid lightgreen;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
