import styled from "styled-components";

export const Wrapper = styled.div`
  width: 4.1rem;
  height: 3.93rem;
  border-radius: 12px;
  background: ${({ theme }) => theme.nested.active};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  filter: ${(props) => props.theme.icon};
`;
