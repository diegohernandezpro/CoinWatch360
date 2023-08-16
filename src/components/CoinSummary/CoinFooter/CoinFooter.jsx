import React, { useState, useEffect } from "react";
import {
  Container,
  Wrapper,
  StyledInput,
  StyledLabel,
  GraphWrapper,
} from "./CoinFooter.styles";
import { Chart } from "@/components";

export const CoinFooter = ({
  getDuration,
  option,
  coinLabels,
  coinPricePoints,
}) => {
  const [selectedOption, setSelectedOption] = useState();
  const options = ["1d", "7d", "30d", "90d", "1y", "Max"];

  const handleChange = (e) => {
    getDuration(e.target.value);
  };

  useEffect(() => {
    setSelectedOption(option);
  }, []);

  return (
    <Container>
      <Wrapper>
        {options.map((element, i) => {
          return (
            <React.Fragment key={i}>
              <StyledInput
                type="radio"
                id={element}
                value={element}
                checked={selectedOption === element}
                onChange={handleChange}
              />
              <StyledLabel htmlFor={element}>{element}</StyledLabel>
            </React.Fragment>
          );
        })}
      </Wrapper>
      <GraphWrapper>
        <Chart
          label={coinLabels}
          data={coinPricePoints}
          type="backgroundLine"
        />
      </GraphWrapper>
    </Container>
  );
};
