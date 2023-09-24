import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

export const MobileStyledDiv = styled(StyledDiv)`
  @media (max-width: ${({ theme }) => theme.mobile.width}) {
    flex-direction: row;
    gap: 0.2rem;
  }
`;

export const SliderWrapper = styled.div`
  width: 3.4rem;
  height: 0.8rem;
  background: ${({ theme }) => theme.infographic.base};
  border-radius: 0.8rem;
  overflow: hidden;
`;

export const Slider = styled.div`
  width: ${({ percentage }) => 3.4 * (percentage / 100)}rem;
  height: 0.8rem;
  background: ${({ theme }) => theme.infographic.filler};
  border-radius: 0.8rem;
`;
