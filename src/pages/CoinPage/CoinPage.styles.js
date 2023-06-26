import styled from "styled-components";

export const Container = styled.div`
  border 0.5rem solid ${({ theme }) => theme.nested.background};
  border-top: none;
  border-bottom: none;
  background: ${({ theme }) => theme.background};
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.color};
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const PageContainer = styled.div``;
