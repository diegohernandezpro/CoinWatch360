import {
  TableVolume,
  SliderWrapper,
  SliderFill,
  ValuesSpan,
  Values,
  Text,
} from "./Slider.styles";
import { NeutralDot } from "@/styles";
import { formatNum } from "@/utils";

export const Slider = (props) => {
  const base = formatNum(props.base);
  const fill = formatNum(props.fill);
  const percentage = (props.fill / props.base) * 100;

  return (
    <TableVolume>
      <ValuesSpan>
        <Values>
          <NeutralDot color={`#2172e5`} />
          <Text color={`#2172e5`}>{fill}</Text>
        </Values>
        <Values>
          <NeutralDot color={`#fff`} />
          <Text color={`#fff`}>{base}</Text>
        </Values>
      </ValuesSpan>
      <SliderWrapper>
        <SliderFill percentage={percentage} />
      </SliderWrapper>
    </TableVolume>
  );
};
