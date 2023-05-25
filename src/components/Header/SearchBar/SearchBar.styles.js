import styled from "styled-components";

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
`;

export const Input = styled.input`
  font-size: 1rem;
  color: ${({ theme }) => theme.color};
  background: none;
  border: none;
  font-weight: bold;

  ::placeholder {
    color: ${({ theme }) => theme.color};
  }
`;
