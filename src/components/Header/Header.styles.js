import styled from "styled-components";

export const Wrapper = styled.header`
  color: ${({ theme }) => theme.color};
  width: 100%;
  height: Calc(97px + 55px);
  display: flex;
  flex-direction: column;
  border-color: orange;
  border-width: 1px;
  border-style: dashed;
`;

export const Navigation = styled.div`
  height: 97px;
  width: 100%;
  background: ${({ theme }) => theme.nested.background};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const RightNav = styled.div`
  display: flex;
  margin-left: 90px;
`;

export const LeftNav = styled.div`
  display: flex;
  margin-right: 28px;
  align-items: center;
  gap: 27px;
`;

export const NavLinkWrapper = styled.div`
  padding: 10px 40px;

  :hover {
    cursor: pointer;
  }
`;
