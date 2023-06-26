import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Wrapper = styled.div`
  position: relative;
`;

export const Form = styled.form`
  width: 20rem;
  height: 3rem;
  background: ${({ theme }) => theme.nested.active};
  color: ${({ theme }) => theme.color};
  border-radius: 0.8rem;
  display: flex;
  gap: 1rem;
  align-items: center;

  :hover {
    cursor: text;
  }
`;

export const IconWrapper = styled.div`
  margin-left: 1rem;
  font-size: 1.3rem;
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
