import styled from "styled-components";

export const Container = styled.header`
  height: 10vh;
  width: Calc(100%);
  border-radius:  0  0 1rem 1rem;
  background: ${({ theme }) => theme.nested.active};
  };
`;
