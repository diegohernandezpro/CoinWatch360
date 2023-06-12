import styled, { css, keyframes } from "styled-components";

export const Wrapper = styled.form`
  width: 31.8rem;
  height: 3.93rem;
  background: ${({ theme }) => theme.nested.active};
  color: ${({ theme }) => theme.color};
  border-radius: 10px;
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
