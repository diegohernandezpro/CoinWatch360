import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  width: 50rem;
  height: 22rem;
  background: ${({ theme }) => theme.nested.active};
  border-radius: 0.6rem;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

export const ClosingButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  outline: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.money.green};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.money.red};
  }
`;

export const StyledP = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color};
`;

export const CoinWrapper = styled.div`
  width: Calc(100% - 5rem);
  height: 13.5rem;
  display: flex;
  gap: 1rem;
`;

export const SelectorsDiv = styled.div`
  width: Calc(100% - 12rem);
  padding: 0rem 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

export const StyledInput = styled.input`
  background: ${({ theme }) => theme.nested.background};
  color: ${({ theme }) => theme.color};
  width: Calc(100% - 1rem);
  border-radius: 0.5rem;
  height: 3.5rem;
  border: none;
  outline: none;
  padding: 0 0.5rem;
  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.color};
    font-size: 1rem;
  }

  &:hover::placeholder {
    opacity: 0.6;
  }
`;

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.background};
  background: ${({ theme }) => theme.money.green};
  width: Calc(100% / 3);
  height: 3rem;
  border-radius: 1rem;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
  justify-content: center;
  align-items: center;
`;
