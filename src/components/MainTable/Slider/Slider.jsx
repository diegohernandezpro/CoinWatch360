import { useEffect, useState } from "react";

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

export const Slider = ({ base, fill, rank, currencySymbol }) => {
  // const baseSlider = formatNum(base, currencySymbol);
  // const baseFiller = formatNum(fill, currencySymbol);
  // const percentage = (fill / base) * 100;

  const [baseSlider, setBaseSlider] = useState(() =>
    formatNum(base, currencySymbol)
  );
  const [baseFiller, setBaseFiller] = useState(() =>
    formatNum(fill, currencySymbol)
  );

  const percentage = (fill / base) * 100;

  const getColor = (rank) => {
    const colorNum = rank % 9;
    const bases = sliderColors.baseColor;
    const fills = sliderColors.fillColor;
    return [bases[colorNum], fills[colorNum]];
  };

  const baseColor = getColor(rank)[0];
  const fillColor = getColor(rank)[1];

  useEffect(() => {
    // console.log("--> UPDATED BASE symbol: ", currencySymbol);
    setBaseSlider(formatNum(base, currencySymbol));
  }, [currencySymbol, base]);

  useEffect(() => {
    // console.log("--> UPDATED FILL symbol: ", currencySymbol);
    setBaseFiller(formatNum(fill, currencySymbol));
  }, [currencySymbol, fill]);

  // useEffect(() => {
  //   console.log("CurrencySymbol Changed --> UPDATED");
  // }, [currencySymbol]);

  return (
    <TableVolume>
      <ValuesSpan>
        <Values>
          <NeutralDot color={fillColor} />
          <Text color={fillColor}>{baseFiller}</Text>
        </Values>
        <Values>
          <NeutralDot color={baseColor} />
          <Text color={baseColor}>{baseSlider}</Text>
        </Values>
      </ValuesSpan>
      <SliderWrapper color={baseColor}>
        <SliderFill percentage={percentage} color={fillColor} />
      </SliderWrapper>
    </TableVolume>
  );
};
