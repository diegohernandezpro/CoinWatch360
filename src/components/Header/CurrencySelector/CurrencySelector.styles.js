import styled from "styled-components";

export const Wrapper = styled.div`
  height: 3.93rem;
  width: 8.4rem;
  font-size: 1rem;
  border-radius: 12px;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.nested.active};
  color: ${({ theme }) => theme.color};
`;

export const Icon = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.money.background};
  color: ${({ theme }) => theme.money.green};
  font-size: 1rem;
`;

export const Dropdown = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;

  :hover {
    cursor: pointer;
  }
`;
