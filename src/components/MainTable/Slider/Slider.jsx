import {
  TableVolume,
  SliderWrapper,
  SliderFill,
  ValuesSpan,
  Values,
  Text,
} from "./Slider.styles";
import { NeutralDot, sliderColors } from "@/styles";
import { formatNum } from "@/utils";

export const Slider = (props) => {
  const base = formatNum(props.base);
  const fill = formatNum(props.fill);
  const percentage = (props.fill / props.base) * 100;

  const getColor = (rank) => {
    const colorNum = rank % 9;
    const bases = sliderColors.baseColor;
    const fills = sliderColors.fillColor;
    return [bases[colorNum], fills[colorNum]];
  };
  const baseColor = getColor(props.rank)[0];
  const fillColor = getColor(props.rank)[1];

  return (
    <TableVolume>
      <ValuesSpan>
        <Values>
          <NeutralDot color={fillColor} />
          <Text color={fillColor}>{fill}</Text>
        </Values>
        <Values>
          <NeutralDot color={baseColor} />
          <Text color={baseColor}>{base}</Text>
        </Values>
      </ValuesSpan>
      <SliderWrapper color={baseColor}>
        <SliderFill percentage={percentage} color={fillColor} />
      </SliderWrapper>
    </TableVolume>
  );
};
