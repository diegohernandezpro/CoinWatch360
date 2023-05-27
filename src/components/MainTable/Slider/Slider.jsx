import {
  TableVolume,
  SliderWrapper,
  SliderFill,
  ValuesSpan,
  Values,
} from "./Slider.styles";
import { NeutralDot } from "@/styles";

export const Slider = () => {
  return (
    <TableVolume>
      <ValuesSpan>
        <Values>
          <NeutralDot color={`white`} />
          16.B
        </Values>
        <Values>
          <NeutralDot color={`blue`} />
          17.8B
        </Values>
      </ValuesSpan>
      <SliderWrapper>
        <SliderFill percentage="80" />
      </SliderWrapper>
    </TableVolume>
  );
};
