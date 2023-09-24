import { useState, useEffect } from "react";
import {
  StyledDiv,
  MobileStyledDiv,
  SliderWrapper,
  Slider,
} from "./TextNSlider.styles";

export function TextNSlider({ text, percentage, ...rest }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Wrapper = isMobile ? MobileStyledDiv : StyledDiv;

  return (
    <Wrapper>
      {rest.children}
      <span>{text}</span>
      <SliderWrapper>
        <Slider percentage={percentage} />
      </SliderWrapper>
    </Wrapper>
  );
}
