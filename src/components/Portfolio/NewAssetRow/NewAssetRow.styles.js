import styled from "styled-components";

export const RowDiv = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.5rem;

  overflow; auto;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: auto;
    gap: 0.5rem;
    margin-bottom: 1rem;
    
  }
`;

export const RowItemDiv = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  gap: 0.6rem;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    font-size: ${({ theme }) => theme.mobile.font};
    width: Calc(100% - 1rem);
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.nested.active};
    padding-left: 1rem;
    justify-content: flex-start;
    height: 3rem;
    text-align: start;
  }
`;

export const Item = styled.span`
  color: ${(props) => {
    if (props.value > 0) {
      return props.theme.money.green;
    }
    return props.theme.money.red;
  }};
  text-align: start;
`;
