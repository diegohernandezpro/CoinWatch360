import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2.5rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
`;

export const StyledP = styled.p``;
