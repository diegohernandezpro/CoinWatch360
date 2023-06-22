import React, { useState } from "react";
import {
  Container,
  Wrapper,
  StyledInput,
  StyledLabel,
  GraphWrapper,
} from "./CoinFooter.styles";
import { Chart } from "@/components";

export const CoinFooter = ({ handleDuration, coinLabels, coinPricePoints }) => {
  const [selectedOption, setSelectedOption] = useState("1d");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    handleDuration(e.target.value);
  };

  const options = {
    "1d": 0,
    "7d": 0,
    "30d": 0,
    "90d": 0,
    "1y": 0,
    Max: 0,
  };

  return (
    <Container>
      <Wrapper>
        {Object.keys(options).map((element, i) => {
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
