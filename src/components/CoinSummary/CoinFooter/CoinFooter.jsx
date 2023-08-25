import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Wrapper,
  StyledInput,
  StyledLabel,
  GraphWrapper,
} from "./CoinFooter.styles";
import { Chart } from "@/components";
import { getPrice } from "@/store/coinPage/action";

export const CoinFooter = ({ coinName, currency, coinState }) => {
  const dispatch = useDispatch();
  const options = ["1d", "7d", "30d", "90d", "1y", "Max"];

  const handleChange = (e) => {
    const newOption = e.target.value;
    dispatch(getPrice(coinName, currency, newOption));
  };

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
                checked={coinState.option === element}
                onChange={handleChange}
              />
              <StyledLabel htmlFor={element}>{element}</StyledLabel>
            </React.Fragment>
          );
        })}
      </Wrapper>
      <GraphWrapper>
        <Chart
          label={coinState.coinLabels}
          data={coinState.coinPricePoints}
          type="backgroundLine"
        />
      </GraphWrapper>
    </Container>
  );
};
