import styled, { css, keyframes } from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const Form = styled.form`
  width: 20rem;
  height: 2.8rem;
  background: ${({ theme }) => theme.nested.active};
  color: ${({ theme }) => theme.color};
  border-radius: 0.8rem;
  display: flex;
  gap: 1.25rem;
  align-items: center;

  :hover {
    cursor: text;
  }
`;

export const Icon = styled.img`
  margin-left: 1.25rem;
  height: 1.5rem;
  width: 1.5rem;
  filter: ${(props) => props.theme.icon};

  :hover {
    cursor: pointer;
  }
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.color};
  background: none;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;

  &:placeholder {
    color: ${({ theme }) => theme.color};
  }
`;
