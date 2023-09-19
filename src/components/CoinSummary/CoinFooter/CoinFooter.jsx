import React from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Wrapper,
  StyledInput,
  StyledLabel,
  GraphWrapper,
} from "./CoinFooter.styles";
import { Chart } from "@/components";
import { getPrice } from "@/modernStore/features/coinPage/coinPageSlice";

export const CoinFooter = ({ coinName, coinState }) => {
  const dispatch = useDispatch();
  const RADIO_OPTIONS = ["1d", "7d", "30d", "90d", "1y", "Max"];

  const handleChange = (e) => {
    dispatch(
      getPrice({
        coinName,
        option: e.target.value,
      })
    );
  };

  return (
    <Container>
      <Wrapper>
        {RADIO_OPTIONS.map((element, i) => (
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
        ))}
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
