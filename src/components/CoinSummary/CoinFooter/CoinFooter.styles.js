import styled from "styled-components";

export const Container = styled.div`
  width: (100% - 1rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  border: 2px solid blue;
  border 0.5rem solid ${({ theme }) => theme.nested.background};
  border-top: none;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    font-size: ${({ theme }) => theme.mobile.font};

  }
`;

export const Wrapper = styled.div`
  height: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: ${({ theme }) => theme.color};
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    font-size: ${({ theme }) => theme.mobile.font};
    background: ${({ theme }) => theme.nested.active};
    width: Calc(100% - 2rem);
    margin: 1rem 0rem;
    gap: 0;
    justify-content: space-between;
    position: relative;
  }
`;

export const StyledInput = styled.input`
  cursor: pointer;
  appearance: none;
  outline: none;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 0.1rem solid ${({ theme }) => theme.chart.lineColor};
  appearance: none;
  transition: background 0.2s, box-shadow 0.2s;

  &:checked {
    background: ${({ theme }) => theme.chart.lineColor};
    box-shadow: inset 0px 0px 0px 0.2rem ${({ theme }) => theme.background};
  }

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    font-size: ${({ theme }) => theme.mobile.font};
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    border-radius: 15%;
    border: none;

    &:checked {
      background: ${({ theme }) => theme.chart.lineColor};
    }
  }
`;

export const StyledDiv = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    width: Calc(100% / 6);
    position: relative;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledLabel = styled.label`
  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    font-size: 1rem;
    color: ${({ theme }) => theme.color};
  }
`;

export const GraphWrapper = styled.div`
  width: 100%;
  height: 15rem;
  display: flex;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    align-items: flex-end;
  }
`;
