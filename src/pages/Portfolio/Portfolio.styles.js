import styled from "styled-components";

export const Container = styled.div`
  border 0.5rem solid ${({ theme }) => theme.nested.background};
  border-top: none;
  background: ${({ theme }) => theme.background};
  display: flex;
  flex: 1;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.color};
`;

export const StyledButton = styled.button`
  background: ${({ theme }) => theme.money.green};
  color: ${({ theme }) => theme.background};
  font-size: 1rem;
  border: none;
  width: 40rem;

  max-width: 23rem;
  height: 3.4rem;
  border-radius: 1rem;

  &:hover {
    cursor: pointer;
  }
`;
