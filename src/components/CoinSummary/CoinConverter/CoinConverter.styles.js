import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

export const LinkWrapper = styled.span`
  width: Calc(100% / 3);
  height: 3.2rem;
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: auto;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    font-size: ${({ theme }) => theme.mobile.font};
    width: 100%;
  }
`;

export const ConvertIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0rem 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const IconWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0rem 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    font-size: ${({ theme }) => theme.mobile.font};
    width: 1rem;
    margin: 0;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  overflow: auto;
  color: inherit;
  text-decoration: none;

  &:hover {
    opacity: 0.5;
  }
  text-align: center;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    font-size: ${({ theme }) => theme.mobile.font};
    width: 80%;
    margin: 0;
  }
`;

export const StyledLinkIcon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: inherit;
  text-decoration: none;
  text-align: center;
  &:hover {
    opacity: 0.5;
  }
`;

export const ConverterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    font-size: ${({ theme }) => theme.mobile.font};
    flex-wrap: wrap;
  }
`;

export const ConverterWrapper = styled.div`
  width: Calc(100% / 4);
  height: 3.2rem;
  background: ${({ theme }) => theme.nested.background};
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    font-size: ${({ theme }) => theme.mobile.font};
    width: 16rem;
  }
`;

export const CurrencyHolder = styled.div`
  width: 5rem;
  height: 100%;
  background: ${({ theme }) => theme.money.green};
  border-radius: 0.6rem 0 0rem 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  color: black;
`;

export const StyledInput = styled.input`
  width: Calc(100% - 5rem);
  height: 100%;
  background: none;
  border-radius: 0 0.6rem 0.6rem 0;
  border: none;
  color: inherit;
  padding: 0 0 0 1rem;
`;

export const StyledDiv = styled.div`
  width: Calc(100% - 5rem);
  height: 100%;
  border-radius: 0 0.6rem 0.6rem 0;
  color: inherit;
  padding: 0 0 0 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: auto;
  font-size: 0.85rem;
  font-weight: 100;
`;
