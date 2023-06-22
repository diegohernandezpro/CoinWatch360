import styled from "styled-components";

export const Container = styled.div`
  width: (100% - 1rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border: 2px solid blue;
  border 0.5rem solid ${({ theme }) => theme.nested.background};
  border-top: none;
`;

export const Wrapper = styled.div`
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: ${({ theme }) => theme.color};
`;

export const StyledInput = styled.input`
  cursor: pointer;
  appearance: none;
  outline: none;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0.1rem solid ${({ theme }) => theme.money.green};
  appearance: none;
  transition: background 0.2s, box-shadow 0.2s;

  &:checked {
    background: ${({ theme }) => theme.money.green};
    box-shadow: inset 0px 0px 0px 0.2rem ${({ theme }) => theme.background};
  }
`;

export const StyledLabel = styled.label``;

export const GraphWrapper = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  align-items: flex-start;
`;
