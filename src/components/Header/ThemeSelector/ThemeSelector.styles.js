import styled from "styled-components";

export const Wrapper = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.nested.active};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  cursor: pointer;
`;
