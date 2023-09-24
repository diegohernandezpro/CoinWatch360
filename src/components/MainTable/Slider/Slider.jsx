import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  SliderWrapper,
  SliderFill,
  ValuesSpan,
  Values,
  StyledText,
} from "./Slider.styles";
import { TableVolume } from "../NewRow/NewRow.styles";
import { NeutralDot, sliderColors } from "@/styles";
import { formatNum } from "@/utils";
import { getMobileSelector } from "@/modernStore";

export const Slider = ({ base, fill, rank, currencySymbol }) => {
  const { isMobile } = useSelector(getMobileSelector);
  const [baseSlider, setBaseSlider] = useState(() =>
    formatNum(base, currencySymbol)
  );
  const [baseFiller, setBaseFiller] = useState(() =>
    formatNum(fill, currencySymbol)
  );

  const percentage = baseSlider === "∞" ? 0 : (fill / base) * 100;

  const getColor = (rank) => {
    const colorNum = rank % 9;
    const bases = sliderColors.baseColor;
    const fills = sliderColors.fillColor;
    return [bases[colorNum], fills[colorNum]];
  };

  const baseColor = getColor(rank)[0];
  const fillColor = getColor(rank)[1];

  useEffect(() => {
    setBaseSlider(formatNum(base, currencySymbol));
  }, [currencySymbol, base]);

  useEffect(() => {
    setBaseFiller(formatNum(fill, currencySymbol));
  }, [currencySymbol, fill]);

  return (
    <TableVolume>
      <ValuesSpan>
        <Values>
          {!isMobile && <NeutralDot color={fillColor} />}
          <StyledText color={fillColor}>{baseFiller}</StyledText>
        </Values>
        <Values>
          {!isMobile && <NeutralDot color={baseColor} />}
          <StyledText color={baseColor}>{baseSlider}</StyledText>
        </Values>
      </ValuesSpan>
      <SliderWrapper color={baseColor}>
        <SliderFill percentage={percentage} color={fillColor} />
      </SliderWrapper>
    </TableVolume>
  );
};
