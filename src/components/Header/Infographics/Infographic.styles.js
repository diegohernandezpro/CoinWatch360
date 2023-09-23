import styled from "styled-components";

export const Container = styled.div`
  width: 45rem;
  height: 3rem;
  background: ${({ theme }) => theme.nested.background};
  border-radius: 12px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 0.9rem;
`;

export const MobileContainer = styled(Container)`
  width: 100%; // Use the full width for mobile
  flex-direction: row; // Stack the items vertically
  height: auto; // Auto-adjust the height based on content
  padding: 1rem; // Add padding to avoid content sticking to the edges
  font-size: 0.8rem; // Slightly reduce the font size
  background: ${({ theme }) => theme.nested.active};
  display: flex;
  flex-wrap: wrap;
`;

export const CoinWrapper = styled.div`
  display: ${({ isMobile }) => {
    if (isMobile) {
      return "none";
    }
    return "flex";
  }};
  align-items: center;
  justify-content: center;
`;

export const MarketCap = styled.div`
  display: ${({ isMobile }) => {
    if (isMobile) {
      return "none";
    }
    return "flex";
  }};
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
`;

export const Icon = styled.img`
  height: 1rem;
  width: 1rem;
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
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

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
