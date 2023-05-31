import { StyledDiv, SliderWrapper, Slider } from "./Infographic.styles";

export function TextNSlider({ text, percentage, ...rest }) {
  return (
    <StyledDiv>
      {rest.children}
      <span>{text}</span>
      <SliderWrapper>
        <Slider percentage={percentage} />
      </SliderWrapper>
    </StyledDiv>
  );
}
