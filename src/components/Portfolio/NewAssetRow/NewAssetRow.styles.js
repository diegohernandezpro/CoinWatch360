import styled from "styled-components";

export const RowDiv = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.5rem;
`;

export const RowItemDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  gap: 0.6rem;
`;

export const Item = styled.span`
  color: ${(props) => {
    if (props.value > 0) {
      return props.theme.money.green;
    }
    return props.theme.money.red;
  }};
`;
