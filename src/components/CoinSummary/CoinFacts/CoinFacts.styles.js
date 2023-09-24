import styled from "styled-components";

export const CoinBullets = styled.div`
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.6rem;
  width: 33.8rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  ul {
    li {
      list-style: none;
      margin: 0.3rem;
      margin-left: 3rem;
      display: flex;
      align-items: center;

      div {
        margin-right: 0.5rem;
      }

      div:nth-child(2) {
        font-weight: bold;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    font-size: ${({ theme }) => theme.mobile.font};
    width: 16.5rem;
    margin: 0;

    ul {
      li {
        margin-left: 0rem;
      }
    }
  }
`;

export const FormatBullet = styled.div`
  color: ${({ theme }) => theme.infographic.base};
  font-size: 1.2rem;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    font-size: Calc(${({ theme }) => theme.mobile.font} + 0.2rem);
  }
`;

export const FactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    font-size: ${({ theme }) => theme.mobile.font};
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;
