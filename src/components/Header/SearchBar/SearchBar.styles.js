import styled from "styled-components";

export const Wrapper = styled.form`
  width: 510px;
  height: 63px;
  background: ${(props) => props.theme.nested.active};
  border-radius: 10px;
  display: flex;
  gap: 20px;
  align-items: center;

  :hover {
    cursor: text;
  }
`;

export const Icon = styled.img`
  margin-left: 20px;
  height: 24px;
  width: 24px;
  filter: ${(props) => props.theme.icon};
`;

export const Input = styled.input`
  font-size: 17px;
  color: ${(props) => props.theme.color};
  background: none;
  border: none;
  font-weight: bold;

  ::placeholder {
    color: ${(props) => props.theme.color};
  }
`;
