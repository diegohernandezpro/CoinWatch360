import styled from "styled-components";

export const Container = styled.div`
  border 0.5rem solid ${({ theme }) => theme.nested.background};
  border-top: none;
  background: ${({ theme }) => theme.background};
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.color};
`;

export const Wrapper = styled.div`
  width: 100%;
  // border: 2px solid red;
`;
<<<<<<< HEAD
=======

export const ChartsContainer = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  border: 2px solid blue;
  height: 21rem;
  overflow: visible;
`;

export const ChartWrapper = styled.div`
  border: 1px solid yellowgreen;
  width: 100%;
`;
>>>>>>> Landing-Page-Table
